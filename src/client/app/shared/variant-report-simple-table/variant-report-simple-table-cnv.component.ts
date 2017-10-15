import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { ConfirmableItem } from '../check-box-with-confirm/check-box-with-confirm.component';

/**
 * VariantReportSimpleTableCnvComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-variant-report-simple-table-cnv',
  templateUrl: 'variant-report-simple-table-cnv.html'
})
export class VariantReportSimpleTableCnvComponent {
  @Input() items: any[];
  @Input() title: string = 'Copy Number Variants';
  @Input() isEditable: boolean;

  @Output() onVariantConfirmed: EventEmitter<ConfirmableItem> = new EventEmitter();

  onItemConfirmed(item: ConfirmableItem) {
    if (this.onVariantConfirmed) {
      this.onVariantConfirmed.emit(item);
    }
  }
}
