import {
  Component,
  Input
} from '@angular/core';

/**
 * VariantReportComparisonTableSnvIndelsComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-variant-report-comparison-table-snv-indels',
  templateUrl: 'variant-report-comparison-table-snv-indels.html'
})
export class VariantReportComparisonTableSnvIndelsComponent {
  @Input() items: any[];
  @Input() title: string;
}
