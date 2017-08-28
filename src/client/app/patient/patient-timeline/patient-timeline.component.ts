import {
  Component,
  Input
} from '@angular/core';

/**
 * PatientTimelineComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-patient-timeline',
  templateUrl: 'patient-timeline.component.html'
})
export class PatientTimelineComponent {
  @Input() items: any[];

  getIcon(status: string): string {
    return 'fa-user-o';
  }
}
