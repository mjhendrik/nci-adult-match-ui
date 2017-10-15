import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { ConfirmableItem } from '../check-box-with-confirm/check-box-with-confirm.component';

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

  @Output() onVariantConfirmed: EventEmitter<ConfirmableItem> = new EventEmitter();

  onItemConfirmed(item: ConfirmableItem) {
    if (this.onVariantConfirmed) {
      this.onVariantConfirmed.emit(item);
    }
  }
}
