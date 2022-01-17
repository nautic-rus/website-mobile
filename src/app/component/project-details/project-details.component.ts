import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Project} from '../projects/project';
import {ShipManagerService} from '../ship-manager.service';
import {Image} from '../../image';
import {Lightbox} from 'ngx-lightbox';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {ActivatedRoute} from '@angular/router';
import {TranslationService} from '../../translation.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        opacity: 1,
        transform: 'scale(1)',
        'pointer-events': 'auto'
      })),
      state('closed', style({
        opacity: 0,
        width: '1080px',
        height: '606px',
        transform: 'scale(0.1)',
        'pointer-events': 'none'
      })),
      transition('open => closed', [
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
    trigger('openCloseBackdrop', [
      state('open', style({
        opacity: 1,
        'pointer-events': 'auto'
      })),
      state('closed', style({
        opacity: 0,
        'pointer-events': 'none'
      })),
      transition('open => closed', [
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
})
export class ProjectDetailsComponent implements OnInit, AfterViewInit {
  ship: Project = this.s.projects[0];
  shipIndex = '';
  fullScreen = false;
  @ViewChild('video') video: ElementRef;
  constructor(private s: ShipManagerService, private lb: Lightbox, private route: ActivatedRoute, public t: TranslationService) { }

  ngAfterViewInit(): void {
    // @ts-ignore
    this.video?.nativeElement?.muted = true;
    this.video?.nativeElement?.play();
  }
  ngOnInit(): void {
    this.s.event.subscribe(event => {
      if (event === 'updated'){
        const findShip = this.s.projects.find(x => x.indexPath === this.shipIndex);
        this.ship = findShip != null ? findShip : this.s.projects[0];
      }
    });
    this.route.queryParams.subscribe(params => {
      this.shipIndex = params.ship != null ? params.ship : 0;
      const findShip = this.s.projects.find(x => x.indexPath === this.shipIndex);
      this.ship = findShip != null ? findShip : this.s.projects[0];
    });
  }
  openFull(video: HTMLVideoElement, event: MouseEvent): void {
    this.fullScreen = true;
    event.stopPropagation();
    setTimeout(() => {
      video.onfullscreenchange = (ev) => {
        if (document.fullscreenElement !== video){
          this.fullScreen = false;
        }
      };
      video.requestFullscreen();
    }, 500);
  }
  openImage(images: Image[], ind: number): void {
    this.lb.open(images, ind);
  }
  exitFullScreen(): void {
    this.fullScreen = false;
  }


}
