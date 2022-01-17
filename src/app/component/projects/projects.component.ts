import { Component, OnInit } from '@angular/core';
import {Options} from '@angular-slider/ngx-slider';
import { defineCustomElements as defineImgComponentSlider } from 'img-comparison-slider/loader';
import {ShipManagerService} from '../ship-manager.service';
import {TranslationService} from '../../translation.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
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
export class ProjectsComponent implements OnInit {
  value = 50;
  projects = this.s.projects;
  playing = -1;
  options: Options = {
    floor: 0,
    ceil: 100,
    step: 0.1,
    showTicks: false,
    hideLimitLabels: true,
    hidePointerLabels: true
  };
  fullScreen = false;
  constructor(private s: ShipManagerService, public t: TranslationService) { }

  ngOnInit(): void {
  }
  openFull(video: HTMLVideoElement, event: MouseEvent, srcSmall: string, srcFull: string): void {
    this.fullScreen = true;
    video.src = srcFull;
    video.autoplay = true;
    video.play();
    event.stopPropagation();
    setTimeout(() => {
      video.onfullscreenchange = (ev) => {
        if (document.fullscreenElement !== video){
          this.fullScreen = false;
          video.src = srcSmall;
          video.autoplay = true;
          video.play();
        }
      };
      video.requestFullscreen();
    }, 500);
  }
  exitFullScreen(): void {
    this.fullScreen = false;
  }
  playVideo(value: number, video: any = null): void {
    this.playing = value;
    video.muted = true;
    video.play();
  }
  stopVideo(value: number): void{
    this.playing = -1;
  }

  isHidden(value: number): boolean {
    return this.playing !== value;
  }
  getVideoStyle(value: number): object {
    if (this.isHidden(value)){
      return {
        opacity: 0
      };
    }
    else{
      return {
        opacity: 1
      };
    }
  }
  getImageWrapStyle(): object {
    return {
      width: this.value + '%',
      transition: '0.2s'
    };
  }
}
