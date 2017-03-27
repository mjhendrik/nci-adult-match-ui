import {
  Component
} from '@angular/core';

import { routerTransition } from './../../shared/router.animations';

/**
 * This class represents the lazy loaded PatientDetailsComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-patient-details',
  templateUrl: 'patient-details.component.html',
  styleUrls: ['patient-details.component.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})
export class PatientDetailsComponent {
}
