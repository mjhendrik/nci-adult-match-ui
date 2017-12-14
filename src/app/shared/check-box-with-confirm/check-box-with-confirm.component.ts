import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnDestroy
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

import { ModalDialogWithCommentsComponent } from './../modal-dialogs/modal-dialog-with-comments.component';
import { DialogResults } from '../modal-dialogs/modal-dialog-results';

export interface ConfirmableItem {
  confirmed: boolean;
  id: string;
  comment: string;
}

@Component({
  moduleId: module.id,
  selector: 'app-check-box-with-confirm',
  styleUrls: ['check-box-with-confirm.component.css'],
  templateUrl: 'check-box-with-confirm.component.html'
})
export class CheckBoxWithConfirmComponent implements OnDestroy {
  public modalRef: BsModalRef;
  public dialogSubscription: Subscription;

  @Input() confirmTitle: string;
  @Input() confirmMessage: string;
  @Input() promptOnlyIf?: boolean;
  @Input() isEnabled: boolean;
  @Input() item: ConfirmableItem;

  @Output() onItemUpdated: EventEmitter<ConfirmableItem> = new EventEmitter();

  constructor(private modalService: BsModalService) { }

  ngOnDestroy(): void {
    this.unsubscribe();
  }

  confirm() {
    if (this.promptOnlyIf !== null && this.item.confirmed !== this.promptOnlyIf) {
      this.toggle(null);
      return;
    }

    this.dialogSubscription = this.modalService.onHidden.subscribe((results: string) => {
      const modalResults = DialogResults.fromString(results);
      if (modalResults.success) {
        this.toggle(modalResults.comment);
      }
      this.unsubscribe();
    });

    this.modalRef = this.modalService.show(ModalDialogWithCommentsComponent);
    this.modalRef.content.comment = this.item.comment;
    this.modalRef.content.title = this.confirmTitle;
    this.modalRef.content.message = this.confirmMessage;
    this.modalRef.content.isEnabled = this.isEnabled;
    this.modalRef.content.okButtonText = 'Reject';
    this.modalRef.content.cancelButtonText = 'Don\'t Reject';
  }

  private toggle(comment: string) {
    this.item.confirmed = !this.item.confirmed;
    this.item.comment = comment;
    if (this.onItemUpdated) {
      this.onItemUpdated.emit(this.item);
    }
  }

  private unsubscribe() {
    if (!this.dialogSubscription) {
      return;
    }
    this.dialogSubscription.unsubscribe();
    this.dialogSubscription = null;
  }
}
