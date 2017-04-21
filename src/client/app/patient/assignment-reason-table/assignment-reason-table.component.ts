import {
  Component,
  Input
} from '@angular/core';

/**
 * This class represents the lazy loaded AssignmentReasonTableComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-assignment-reason-table',
  templateUrl: 'assignment-reason-table.component.html'
})
export class AssignmentReasonTableComponent {
  @Input() assignmentReason: any;
}
