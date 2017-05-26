import {
  Component,
  Input
} from '@angular/core';

/**
 * VariantReportSimpleTableSnvComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-variant-report-simple-table-snv',
  templateUrl: 'variant-report-simple-table-snv.html'
})
export class VariantReportSimpleTableSnvComponent {
  @Input() items: any[];
  @Input() type: string;

  searchTerm: string = '';
  recordsPerPage: number = 25;
  defaultSort: string = 'id';
  errorMessage: string;
}
