import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

import { ModalDialogWithCommentsComponent } from './../modal-dialog-with-comments/modal-dialog-with-comments.component';
import { DialogResults } from '../modal-dialog-with-comments/modal-dialog-results';

export interface ConfirmableItem {
  confirmed: boolean;
  id: string;
  comment: string;
}

@Component({
  moduleId: module.id,
  selector: 'sd-check-box-with-confirm',
  styleUrls: ['check-box-with-confirm.component.css'],
  templateUrl: 'check-box-with-confirm.component.html'
})
export class CheckBoxWithConfirmComponent {
  public modalRef: BsModalRef;
  public dialogSubscription: Subscription;

  @Input() confirmTitle: string;
  @Input() confirmMessage: string;
  @Input() promptOnlyIf?: boolean;
  @Input() isEnabled: boolean;
  @Input() item: ConfirmableItem;

  @Output() onItemConfirmed: EventEmitter<ConfirmableItem> = new EventEmitter();

  constructor(private modalService: BsModalService) { }

  toggle(comment: string) {
    this.item.confirmed = !this.item.confirmed;
    this.item.comment = comment;
    if (this.onItemConfirmed) {
      this.onItemConfirmed.emit(this.item);
    }
  }

  confirm() {
    if (this.promptOnlyIf !== null && this.item.confirmed !== this.promptOnlyIf) {
      this.toggle(null);
      return;
    }

    this.dialogSubscription = this.modalService.onHidden.subscribe((results: string) => {
      const modalResults = DialogResults.fromString(results);
      if (modalResults.success) {
        console.log('comments = ' + modalResults.comment);
        this.toggle(modalResults.comment);
      }
      this.unsubscribe();
    });

    this.modalRef = this.modalService.show(ModalDialogWithCommentsComponent);
    this.modalRef.content.comment = this.item.comment;
    this.modalRef.content.title = this.confirmTitle;
    this.modalRef.content.message = this.confirmMessage;
    this.modalRef.content.isEnabled = this.isEnabled;
  }

  private unsubscribe() {
    if (!this.dialogSubscription) {
      return;
    }
    this.dialogSubscription.unsubscribe();
    this.dialogSubscription = null;
  }
}
