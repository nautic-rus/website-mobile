import { Component, OnInit } from '@angular/core';
import {TranslationService} from '../../translation.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        left: '0',
        opacity: 1
      })),
      state('closed', style({
        left: '-50%',
        opacity: 0.8
      })),
      transition('open => closed', [
        animate('0.3s')
      ]),
      transition('closed => open', [
        animate('0.3s')
      ]),
    ]),
  ],
})
export class NaviComponent implements OnInit {
  faBars = faBars;
  faTimes = faTimes;
  isOpen = false;

  constructor(public t: TranslationService) { }

  ngOnInit(): void {
  }
  switchLang(): void{
    this.t.setLang(this.t.lang === 'RU' ? 'EN' : 'RU');
  }

  toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }
}
