import {
  animate,
  query,
  style,
  transition,
  trigger,
  group,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

const baseStyles = style({
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeAnim', [
      transition(':increment', [
        style({
          position: 'relative',
          overflow: 'hidden',
        }),
        query(':enter, :leave', [baseStyles], { optional: true }),
        group([
          query(
            ':leave',
            [
              animate(
                '250ms 120ms ease-out',
                style({
                  opacity: '0',
                  transform: 'translateX(-80px)',
                })
              ),
            ],
            { optional: true }
          ),
          query(
            ':enter',
            [
              style({
                opacity: '0',
                transform: 'translateX(80px)',
              }),
              animate(
                '250ms 120ms ease-out',
                style({
                  opacity: '1',
                  transform: 'translateX(0px)',
                })
              ),
            ],
            { optional: true }
          ),
        ]),
      ]),
      transition(':decrement', [
        style({
          position: 'relative',
          overflow: 'hidden',
        }),
        query(':enter, :leave', [baseStyles], { optional: true }),
        group([
          query(
            ':leave',
            [
              animate(
                '250ms 120ms ease-out',
                style({
                  opacity: '0',
                  transform: 'translateX(80px)',
                })
              ),
            ],
            { optional: true }
          ),
          query(
            ':enter',
            [
              style({
                opacity: '0',
                transform: 'translateX(-80px)',
              }),
              animate(
                '250ms 120ms ease-out',
                style({
                  opacity: '1',
                  transform: 'translateX(0px)',
                })
              ),
            ],
            { optional: true }
          ),
        ]),
      ]),
      transition('* => secondary', [
        style({
          position: 'relative',
        }),
        query(':enter, :leave', [baseStyles], { optional: true }),
        group([
          query(
            ':leave',
            [
              animate(
                '250ms 120ms ease-out',
                style({
                  opacity: '0',
                  transform: 'scale(0.8)',
                })
              ),
            ],
            { optional: true }
          ),
          query(
            ':enter',
            [
              style({
                opacity: '0',
                transform: 'scale(1.2)',
              }),
              animate(
                '250ms 120ms ease-out',
                style({
                  opacity: '1',
                  transform: 'scale(1)',
                })
              ),
            ],
            { optional: true }
          ),
        ]),
      ]),
      transition('secondary => *', [
        style({
          position: 'relative',
        }),
        query(':enter, :leave', [baseStyles], { optional: true }),
        group([
          query(
            ':leave',
            [
              animate(
                '250ms 120ms ease-out',
                style({
                  opacity: '0',
                  transform: 'scale(1.2)',
                })
              ),
            ],
            { optional: true }
          ),
          query(
            ':enter',
            [
              style({
                opacity: '0',
                transform: 'scale(0.8)',
              }),
              animate(
                '250ms 120ms ease-out',
                style({
                  opacity: '1',
                  transform: 'scale(1)',
                })
              ),
            ],
            { optional: true }
          ),
        ]),
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  dateTime!: Observable<Date>;

  ngOnInit() {
    this.dateTime = timer(0, 1000).pipe(
      map(() => {
        return new Date();
      })
    );
  }

  prepareRoute(outlet: RouterOutlet) {
    if (outlet.isActivated) {
      const tab = outlet.activatedRouteData['tab'];
      if (!tab) return 'secondary';
      return tab;
    } else {
      return;
    }
  }
}
