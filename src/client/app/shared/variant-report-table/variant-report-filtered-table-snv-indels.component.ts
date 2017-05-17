import {
  Component,
  Input
} from '@angular/core';

/**
 * VariantReportFilteredTableSnvIndelsComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-variant-report-filtered-table-snv-indels',
  templateUrl: 'variant-report-filtered-table-snv-indels.html'
})
export class VariantReportFilteredTableSnvIndelsComponent {
  @Input() items: any[];
  @Input() type: string;

  searchTerm: string = '';
  recordsPerPage: number = 25;
  defaultSort: string = 'id';
  errorMessage: string;
}