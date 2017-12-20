import {
  Component,
  Input
} from '@angular/core';

/**
 * VariantReportComparisonTableSnvIndelsComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'app-variant-report-comparison-table-snv-indels',
  templateUrl: 'variant-report-comparison-table-snv-indels.html',
  styleUrls: ['variant-report-comparison-table.component.scss']
})
export class VariantReportComparisonTableSnvIndelsComponent {
  @Input() items: any[];
  @Input() title: string;
}
