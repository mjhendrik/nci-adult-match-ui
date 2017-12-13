import { trigger, state, animate, style, transition } from '@angular/core';

export function routerTransition() {
  return fadeIn();
}

function fadeIn() {
  return trigger('routerTransition', [
    state('void', style({ position: 'fixed', width: '100%' })),
    state('*', style({ position: 'inherit', width: '100%' })),
    transition(':enter', [
      style({ opacity: 0 }),
      animate('0.2s ease-in', style({ opacity: 1 }))
    ]),
    transition(':leave', [
      style({ opacity: 1 }),
      animate('0.2s ease-out', style({ opacity: 0 }))
    ])
  ]);
}
