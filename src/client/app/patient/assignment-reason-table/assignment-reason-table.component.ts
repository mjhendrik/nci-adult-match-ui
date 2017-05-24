import {
  Component,
  Input
} from '@angular/core';

export class AssignmentReasonSection {
  name: string;
  items: any[] = [];
}


/**
 * AssignmentReasonTableComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-assignment-reason-table',
  templateUrl: 'assignment-reason-table.component.html'
})
export class AssignmentReasonTableComponent {
  @Input() reasons: AssignmentReasonSection[];
}
