import {
  Component,
  Input
} from '@angular/core';

/**
 * VariantReportSimpleTableCnvComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-variant-report-comparison-table-cnv',
  templateUrl: 'variant-report-comparison-table-cnv.html'
})
export class VariantReportSimpleTableCnvComponent {
  @Input() items: any[];
  @Input() title: string = 'Copy Number Variants';
}
