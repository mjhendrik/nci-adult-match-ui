import {
  Component,
  Input
} from '@angular/core';

/**
 * VariantReportSimpleTableIndelsComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-variant-report-simple-table-indels',
  templateUrl: 'variant-report-simple-table-indels.html'
})
export class VariantReportSimpleTableIndelsComponent {
  @Input() items: any[];
  @Input() type: string;

  searchTerm: string = '';
  recordsPerPage: number = 25;
  defaultSort: string = 'id';
  errorMessage: string;
}
