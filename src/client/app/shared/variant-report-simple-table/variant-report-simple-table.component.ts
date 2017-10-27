import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnDestroy
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

import { ConfirmableItem } from '../check-box-with-confirm/check-box-with-confirm.component';
import { DialogResults } from '../modal-dialogs/modal-dialog-results';
import { ModalDialogWithCommentsComponent } from '../modal-dialogs/modal-dialog-with-comments.component';

/**
 * VariantReportSimpleTableCnvComponent.
 */
@Component({
  moduleId: module.id
})
export abstract class VariantReportSimpleTableComponent implements OnDestroy {
  public modalRef: BsModalRef;
  public dialogSubscription: Subscription;

  @Input() confirmTitle = 'Edit Variant Comment';
  @Input() confirmMessage = 'Please enter a reason:';

  @Input() items: any[];
  @Input() title: string = 'Copy Number Variants';
  @Input() isEditable: boolean;

  @Output() onVariantUpdated: EventEmitter<ConfirmableItem> = new EventEmitter();

  constructor(private modalService: BsModalService) {
  }

  ngOnDestroy(): void {
    this.unsubscribe();
  }

  onItemUpdated(item: ConfirmableItem) {
    if (this.onVariantUpdated) {
      this.onVariantUpdated.emit(item);
    }
  }

  editComment(item: ConfirmableItem) {
    this.dialogSubscription = this.modalService.onHidden.subscribe((results: string) => {
      const modalResults = DialogResults.fromString(results);
      if (modalResults.success) {
        item.comment = modalResults.comment;
        this.onItemUpdated(item);
      }
      this.unsubscribe();
    });

    this.modalRef = this.modalService.show(ModalDialogWithCommentsComponent);
    this.modalRef.content.comment = item.comment;
    this.modalRef.content.title = this.confirmTitle;
    this.modalRef.content.message = this.confirmMessage;
    this.modalRef.content.isEnabled = this.isEditable;
  }

  private unsubscribe() {
    if (!this.dialogSubscription) {
      return;
    }
    this.dialogSubscription.unsubscribe();
    this.dialogSubscription = null;
  }
}
