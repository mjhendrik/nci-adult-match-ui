import {
  Component,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

import { routerTransition } from './../shared/router.animations';

/**
 * This class represents the lazy loaded PatientsComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-patients',
  templateUrl: 'patients.component.html',
  styleUrls: ['patients.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class PatientsComponent {}
