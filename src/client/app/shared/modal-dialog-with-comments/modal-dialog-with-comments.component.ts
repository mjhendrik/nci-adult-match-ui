import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { DialogResults } from './modal-dialog-with-comments.module';

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
    this.modalService.setDismissReason(this.constructResults(true, this.comment));
    this.bsModalRef.hide();
  }

  cancel() {
    this.modalService.setDismissReason(this.constructResults(false));
    this.bsModalRef.hide();
  }

  private constructResults(ok: boolean, comment?: string): string {
    return DialogResults.toString({ success: ok, comment: comment });
  }
}
