import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TranslationService} from '../../translation.service';
import {ShipManagerService} from '../ship-manager.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  projects = this.s.projects;
  playing = -1;

  constructor(public t: TranslationService, private s: ShipManagerService, private router: Router) { }

  ngOnInit(): void {
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

  openProject(ship: string): void {
    this.router.navigate(['project-details'], { queryParams: {ship}});
  }

}
