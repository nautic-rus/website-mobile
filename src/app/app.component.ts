import { Component } from '@angular/core';
import {TranslationService} from './translation.service';
import {Router, RouterOutlet} from '@angular/router';
import {animate, animateChild, group, query, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    // trigger('routeAnimations', [
    //   transition('* <=> BirthdayComponent', []),
    //   transition('* <=> *', [
    //     query(':enter, :leave', [
    //       style({
    //         position: 'fixed',
    //         top: '76px',
    //         left: 0,
    //         width: '100%',
    //         opacity: 0
    //       })
    //     ], { optional: true } ),
    //     query(':enter', [
    //       animate('.5s',
    //         style({ opacity: 1 })
    //       ),
    //     ], { optional: true } ),
    //   ]),
    // ]),
    // trigger('footer', [
    //   transition('* <=> BirthdayComponent', []),
    //   transition('* <=> *', [
    //     style({
    //       opacity: 0,
    //     }),
    //     animate('.3s .5s',
    //       style({ opacity: 1 })
    //     ),
    //   ]),
    // ]),
    trigger('routeAnimations', [
      transition('* <=> Newyear2022Component', []),
      transition('* <=> *', [
        query(':enter, :leave', [
          style({
            position: 'fixed',
            top: '76px',
            left: 0,
            width: '100%',
            opacity: 0
          })
        ], { optional: true } ),
        query(':enter', [
          animate('.5s',
            style({ opacity: 1 })
          ),
        ], { optional: true } ),
      ]),
    ]),
    trigger('footer', [
      transition('* <=> Newyear2022Component', []),
      transition('* <=> *', [
        style({
          opacity: 0,
        }),
        animate('.3s .5s',
          style({ opacity: 1 })
        ),
      ]),
    ])
  ]
})
export class AppComponent {
  title = 'nautic-website';
  constructor(private t: TranslationService, private router: Router) {
  }
  isHidden(input: string): boolean{
    return this.router.url.includes(input);
  }

  prepareRoute(outlet: RouterOutlet): any {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
