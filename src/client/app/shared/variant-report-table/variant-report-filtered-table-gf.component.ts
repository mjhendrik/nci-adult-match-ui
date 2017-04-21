import {
  Component,
  Input
} from '@angular/core';

/**
 * VariantReportFilteredTableGeneFusionComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-variant-report-filtered-table-gf',
  templateUrl: 'variant-report-filtered-table-gf.html'
})
export class VariantReportFilteredTableGeneFusionComponent {
  @Input() items: any[];
  @Input() type: string;

  searchTerm: string = '';
  recordsPerPage: number = 25;
  defaultSort: string = 'id';
  errorMessage: string;
}
