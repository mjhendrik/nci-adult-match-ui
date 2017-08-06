import {
  Component,
  Input
} from '@angular/core';

/**
 * VariantReportComparisonTableCnvComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-variant-report-comparison-table-cnv',
  templateUrl: 'variant-report-comparison-table-cnv.html',
  styleUrls: ['variant-report-comparison-table.component.css']
})
export class VariantReportComparisonTableCnvComponent {
  @Input() items: any[];
  @Input() title: string = 'Copy Number Variants';
}
