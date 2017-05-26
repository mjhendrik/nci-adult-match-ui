import {
  Component,
  Input
} from '@angular/core';

/**
 * VariantReportSimpleTableSnvIndelsComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-variant-report-simple-table-snv-indels',
  templateUrl: 'variant-report-simple-table-snv-indels.html'
})
export class VariantReportSimpleTableSnvIndelsComponent {
  @Input() items: any[];
}
