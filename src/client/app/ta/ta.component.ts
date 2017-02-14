import { Component } from '@angular/core';

import { routerTransition } from './../shared/router.animations';

/**
 * This class represents the lazy loaded TAComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-ta',
  templateUrl: 'ta.component.html',
  styleUrls: ['ta.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class TaComponent { }
