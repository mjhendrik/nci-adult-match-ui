import { trigger, state, animate, style, transition } from '@angular/core';

export function routerTransition() {
  return fadeIn();
}

function fadeIn() {
  return trigger('routerTransition', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('0.2s ease-in', style({ opacity: 1 }))
    ])
  ]);
}
