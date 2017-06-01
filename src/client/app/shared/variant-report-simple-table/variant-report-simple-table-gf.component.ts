import {
  Component,
  Input
} from '@angular/core';

/**
 * VariantReportSimpleTableGeneFusionComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-variant-report-simple-table-gf',
  templateUrl: 'variant-report-simple-table-gf.html'
})
export class VariantReportSimpleTableGeneFusionComponent {
  @Input() items: any[];
  @Input() title: string = 'Gene Fusions';
}