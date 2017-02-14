import { Component } from '@angular/core';

import { routerTransition } from './../shared/router.animations';

/**
 * This class represents the lazy loaded BTComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-bt',
  templateUrl: 'bt.component.html',
  styleUrls: ['bt.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class BtComponent { }
