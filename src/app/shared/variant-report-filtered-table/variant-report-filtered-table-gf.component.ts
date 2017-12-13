import {
  Component,
  Input
} from '@angular/core';

/**
 * VariantReportFilteredTableGeneFusionComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'app-variant-report-filtered-table-gf',
  templateUrl: 'variant-report-filtered-table-gf.html'
})
export class VariantReportFilteredTableGeneFusionComponent {
  @Input() items: any[];
  @Input() type: string;

  searchTerm: string = '';
  recordsPerPage: number = 10;
  defaultSort: string = 'id';
  errorMessage: string;
}
