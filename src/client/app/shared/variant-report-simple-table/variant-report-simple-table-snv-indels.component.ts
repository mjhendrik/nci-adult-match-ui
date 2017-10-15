import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { ConfirmableItem } from '../check-box-with-confirm/check-box-with-confirm.component';

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
  @Input() title: string;
  @Input() isEditable: boolean;

  @Output() onVariantConfirmed: EventEmitter<ConfirmableItem> = new EventEmitter();

  onItemConfirmed(item: ConfirmableItem) {
    if (this.onVariantConfirmed) {
      this.onVariantConfirmed.emit(item);
    }
  }
}
