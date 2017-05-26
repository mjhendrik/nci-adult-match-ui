import {
  Component,
  Input
} from '@angular/core';

/**
 * VariantReportSimpleTableCnvComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-variant-report-simple-table-cnv',
  templateUrl: 'variant-report-simple-table-cnv.html'
})
export class VariantReportSimpleTableCnvComponent {
  @Input() items: any[];
  @Input() type: string;

  searchTerm: string = '';
  recordsPerPage: number = 25;
  defaultSort: string = 'id';
  errorMessage: string;
}
