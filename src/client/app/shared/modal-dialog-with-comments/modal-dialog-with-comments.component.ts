import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { DialogResults } from './modal-dialog-results';

@Component({
  moduleId: module.id,
  selector: 'sd-modal-dialog-with-comments',
  templateUrl: './modal-dialog-with-comments.component.html'
})
export class ModalDialogWithCommentsComponent {
  title: string;
  message: string;
  isEnabled: boolean;
  comment: string;

  constructor(public bsModalRef: BsModalRef, private modalService: BsModalService) { }

  ok() {
    this.modalService.setDismissReason(
      DialogResults.toString({ success: true, comment: this.comment })
    );
    this.bsModalRef.hide();
  }

  cancel() {
    this.modalService.setDismissReason(
      DialogResults.toString({ success: false, comment: null })
    );
    this.bsModalRef.hide();
  }
}
