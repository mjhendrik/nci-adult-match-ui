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

  searchTerm: string = '';
  recordsPerPage: number = 100;
  defaultSort: string = 'patientSequenceNumber';
  errorMessage: string;
}
