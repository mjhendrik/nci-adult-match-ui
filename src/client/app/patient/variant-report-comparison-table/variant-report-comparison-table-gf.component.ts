import {
  Component,
  Input
} from '@angular/core';

/**
 * VariantReportComparisonTableGeneFusionComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-variant-report-comparison-table-gf',
  templateUrl: 'variant-report-comparison-table-gf.html',
  styleUrls: ['variant-report-comparison-table.component.css']
})
export class VariantReportComparisonTableGeneFusionComponent {
  @Input() items: any[];
  @Input() title: string = 'Gene Fusions';
}
