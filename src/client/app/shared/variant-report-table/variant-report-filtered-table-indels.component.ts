import {
  Component,
  Input
} from '@angular/core';

/**
 * This class represents the lazy loaded VariantReportFilteredTableIndelsComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-variant-report-filtered-table-indels',
  templateUrl: 'variant-report-filtered-table-indels.html'
})
export class VariantReportFilteredTableIndelsComponent {
  @Input() items: any[];
  @Input() type: string;

  searchTerm: string = '';
  recordsPerPage: number = 25;
  defaultSort: string = 'id';
  errorMessage: string;
}
