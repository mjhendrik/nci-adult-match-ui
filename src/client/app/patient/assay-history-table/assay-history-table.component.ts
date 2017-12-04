import {
  Component,
  Input
} from '@angular/core';

export class AssayHistoryItem {
  gene: string;
  orderedDate: string;
  reportedDate: string;
  result: string;
  comment: string;
}

/**
 * AssayHistoryTableComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-assay-history-table',
  templateUrl: 'assay-history-table.component.html'
})
export class AssayHistoryTableComponent {
  @Input() items: AssayHistoryItem[] = [];
  @Input() tableCssClasses = 'table-condensed white-header';
}
