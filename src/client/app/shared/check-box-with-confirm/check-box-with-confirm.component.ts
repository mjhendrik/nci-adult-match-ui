import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { BsModalRef, BsModalService } from 'ngx-bootstrap';

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
    if (typeof this.promptOnlyIf !== null && this.item.confirmed !== this.promptOnlyIf) {
      this.toggle(null);
      return;
    }

    // const modalInstance = this.uibModal.open({
    //   templateUrl: 'views/templates/modal_dialog_with_comment.html',
    //   controller: 'ModalDialogWithCommentController',
    //   resolve: {
    //     comment: () => this.item.comment,
    //     title: () => this.confirmTitle,
    //     message: () => this.confirmMessage,
    //     enabled: () => this.isEnabled
    //   }
    // });

    // modalInstance.result.then(function (comment: string) {
    //   this.toggle(comment);
    // });
  }
}

