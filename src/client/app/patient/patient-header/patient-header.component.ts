import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sd-patient-header',
  templateUrl: 'patient-header.component.html'
})
export class PatientHeaderComponent {
  @Input() items: any;

  getIcon(status: string): string {
    return 'fa-user-o';
  }
}
