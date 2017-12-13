import {
  Component,
  Input
} from '@angular/core';

/**
 * VariantReportFilteredTableCnvComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'app-variant-report-filtered-table-cnv',
  templateUrl: 'variant-report-filtered-table-cnv.html'
})
export class VariantReportFilteredTableCnvComponent {
  @Input() items: any[];
  @Input() type: string;

  searchTerm: string = '';
  recordsPerPage: number = 10;
  defaultSort: string = 'id';
  errorMessage: string;
}

