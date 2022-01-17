import { Component, OnInit } from '@angular/core';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';
import { Fireworks } from 'fireworks-js';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.css'],
  animations: [
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation()
  ]
})
export class BirthdayComponent implements OnInit {

  constructor() { }
  imageCount = 1;
  timeOut = 5000;
  show = false;
  ngOnInit(): void {
    const container = document.querySelector('.fireworks-container');
    const fireworks = new Fireworks(container, { /* options */ });
    fireworks.start();

    setTimeout(() => {
      this.imageCount = 2;
      setTimeout(() => {
        this.imageCount = 3;
        setTimeout(() => {
          this.show = true;
        }, 2000);
      }, this.timeOut);
    }, this.timeOut);
  }

  getStyle(value: number): any {
    if (value === this.imageCount){
      return {opacity: 1};
    }
    else{
      return {opacity: 0};
    }
  }
}
