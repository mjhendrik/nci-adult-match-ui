import {
  Component,
  Input
} from '@angular/core';

/**
 * This class represents the lazy loaded VariantReportFilteredTableSnvComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-variant-report-filtered-table-snv',
  templateUrl: 'variant-report-filtered-table-snv.html'
})
export class VariantReportFilteredTableSnvComponent {
  @Input() items: any[];
  @Input() type: string;

  searchTerm: string = '';
  recordsPerPage: number = 25;
  defaultSort: string = 'id';
  errorMessage: string;
}
