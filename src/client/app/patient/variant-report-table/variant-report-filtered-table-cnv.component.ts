import {
  Component,
  Input
} from '@angular/core';

/**
 * This class represents the lazy loaded VariantReportFilteredTableCnvComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-variant-report-filtered-table-cnv',
  templateUrl: 'variant-report-filtered-table-cnv.html'
})
export class VariantReportFilteredTableCnvComponent {
  @Input() items: any[];

  searchTerm: string = '';
  recordsPerPage: number = 25;
  defaultSort: string = 'id';
  errorMessage: string;
}
