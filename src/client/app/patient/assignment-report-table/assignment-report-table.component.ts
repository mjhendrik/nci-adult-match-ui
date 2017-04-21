import {
  Component,
  Input
} from '@angular/core';

/**
 * This class represents the lazy loaded AssignmentReportTableComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-assignment-report-table',
  templateUrl: 'assignment-report-table.component.html'
})
export class AssignmentReportTableComponent {
  @Input() assignmentReport: any;
}
