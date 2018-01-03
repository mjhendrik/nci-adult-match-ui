import {
  Component,
  Input
} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-patient-header',
  templateUrl: 'patient-header.component.html'
})

export class PatientHeaderComponent {
  @Input() items: any;
}
