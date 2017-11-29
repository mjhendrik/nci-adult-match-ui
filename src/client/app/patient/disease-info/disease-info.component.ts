import {
  Component,
  Input
} from '@angular/core';

export class AssignmentReasonSection {
  name: string;
  items: any[] = [];
}


/**
 * DiseaseInfoComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-disease-info',
  styleUrls: ['disease-info.component.css'],
  templateUrl: 'disease-info.component.html'
})
export class DiseaseInfoComponent {
  @Input() reasons: AssignmentReasonSection[];
}
