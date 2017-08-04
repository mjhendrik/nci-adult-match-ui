import {
  Component,
  Input
} from '@angular/core';

/**
 * VariantReportSimpleTableSnvIndelsComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-variant-report-comparison-table-snv-indels',
  templateUrl: 'variant-report-comparison-table-snv-indels.html'
})
export class VariantReportSimpleTableSnvIndelsComponent {
  @Input() items: any[];
  @Input() title: string;
}
