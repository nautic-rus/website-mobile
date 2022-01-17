import {Component, ElementRef, NgZone, OnDestroy, OnInit, ViewChild} from '@angular/core';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit, OnDestroy {
  @ViewChild('rendererCanvas', {static: true})
  public rendererCanvas: ElementRef<HTMLCanvasElement>;
  private canvas: HTMLCanvasElement;
  private renderer: THREE.WebGLRenderer;
  private camera: THREE.PerspectiveCamera;
  private scene: THREE.Scene;
  private light: THREE.AmbientLight;

  private model: any;
  private texture: any;

  private frameId: number = null;
  mouseDown = false;
  mouseX = 0;
  mouseY = 0;
  public constructor(private ngZone: NgZone) {
  }

  ngOnInit(): void {
    this.createScene(this.rendererCanvas);
    this.animate();
  }

  public ngOnDestroy(): void {
    if (this.frameId != null) {
      cancelAnimationFrame(this.frameId);
    }
  }


  onMouseMove(evt): void {
    if (!this.mouseDown) {
      return;
    }
    evt.preventDefault();
    const deltaX = evt.clientX - this.mouseX;
    const deltaY = evt.clientY - this.mouseY;
    this.mouseX = evt.clientX;
    this.mouseY = evt.clientY;
    this.rotateScene(deltaX, deltaY);
  }

  onMouseDown(evt): void {
    evt.preventDefault();
    this.mouseDown = true;
    this.mouseX = evt.clientX;
    this.mouseY = evt.clientY;
  }

  onMouseUp(evt): void {
    evt.preventDefault();
    this.mouseDown = false;
  }
  onMouseWheel(event): void {
    event.preventDefault();
    this.camera.position.z += event.deltaY / 1000;
    // prevent scrolling beyond a min/max value
    this.camera.position.clampScalar(0, 10);
  }
  addMouseHandler(canvas): void {
    canvas.addEventListener('mousemove', (e) => {
      this.onMouseMove(e);
    }, false);
    canvas.addEventListener('mousedown', (e) => {
      this.onMouseDown(e);
    }, false);
    canvas.addEventListener('mouseup', (e) => {
      this.onMouseUp(e);
    }, false);
    canvas.addEventListener('wheel', (e) => {
      this.onMouseWheel(e);
    }, false);
  }
  rotateScene(deltaX, deltaY): void {
    this.model.rotation.y += deltaX / 100;
    this.model.rotation.x += deltaY / 100;
  }
  fitCameraToObject( camera, object, offset = 1.25): void {
    const boundingBox = new THREE.Box3();
    boundingBox.setFromObject( object );
    const center = boundingBox.getCenter( new THREE.Vector3() );
    const size = boundingBox.getSize( new THREE.Vector3() );
    const startDistance = center.distanceTo(camera.position);
    const endDistance = camera.aspect > 1 ?
      ((size.y / 2) + offset) / Math.abs(Math.tan(camera.fov / 2)) :
      ((size.y / 2) + offset) / Math.abs(Math.tan(camera.fov / 2)) / camera.aspect ;
    camera.position.set(
      camera.position.x * endDistance / startDistance,
      camera.position.y * endDistance / startDistance,
      camera.position.z * endDistance / startDistance,
    );
    camera.lookAt(center);
  }
  public createScene(canvas: ElementRef<HTMLCanvasElement>): void {
    const objLoader = new OBJLoader();
    const mtlLoader = new MTLLoader();
    // The first step is to get the reference of the canvas element from our HTML document
    this.canvas = canvas.nativeElement;
    this.addMouseHandler(this.canvas);
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,    // transparent background
      antialias: true // smooth edges
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    // create the scene
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      50, window.innerWidth / window.innerHeight, 0.01, 1000
    );
    this.camera.position.z = 1;
    this.scene.add(this.camera);

    // soft white light
    this.light = new THREE.AmbientLight(0x404040);
    this.light.intensity = 3;
    this.scene.add(this.light);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    this.scene.add( directionalLight );

    mtlLoader.load('assets/OBJ-TEST + MTL.mtl', (materials) => {
      materials.preload();
      objLoader.setMaterials(materials);
      objLoader.load('assets/OBJ-TEST + MTL.obj', (object) => {
        this.model = object;
        this.scene.add(this.model);
        //this.fitCameraToObject(this.camera, this.model, 1);
      }, (xhr ) => {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      }, (error) => {
        console.log(error);
      });
    }, (xhr ) => {
      console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    }, (error) => {
      console.log(error);
    });

  }

  public animate(): void {
    // We have to run this outside angular zones,
    // because it could trigger heavy changeDetection cycles.
    this.ngZone.runOutsideAngular(() => {
      if (document.readyState !== 'loading') {
        this.render();
      } else {
        window.addEventListener('DOMContentLoaded', () => {
          this.render();
        });
      }

      window.addEventListener('resize', () => {
        this.resize();
      });
    });
  }

  public render(): void {
    this.frameId = requestAnimationFrame(() => {
      this.render();
    });
    // this.model.rotation.x += 0.01;
    // this.model.rotation.y += 0.01;
    this.renderer.render(this.scene, this.camera);
  }

  public resize(): void {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
  }
}
