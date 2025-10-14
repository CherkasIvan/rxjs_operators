import { trigger, transition, style, query, animate, group, AnimationTriggerMetadata } from '@angular/animations';

export const ROUTE_ANIMATIONS: AnimationTriggerMetadata[] = [
  trigger('routeAnimations', [
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        })
      ], { optional: true }),
      query(':enter', [
        style({ opacity: 0, transform: 'translateX(100px)' })
      ], { optional: true }),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ opacity: 0, transform: 'translateX(-100px)' }))
        ], { optional: true }),
        query(':enter', [
          animate('300ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
        ], { optional: true })
      ])
    ])
  ])
];