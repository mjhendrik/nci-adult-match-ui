import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { DialogResults } from './modal-dialog-results';

@Component({
  moduleId: module.id,
  selector: 'sd-modal-dialog-confirmation',
  templateUrl: './modal-dialog-confirmation.component.html'
})
export class ModalDialogConfirmationComponent {
  title: string;
  message: string;
  closeOnly: boolean;
  okButtonText = 'OK';
  cancelButtonText = 'Cancel';
  closeButtonText = 'Cancel';

  constructor(
    public bsModalRef: BsModalRef,
    private modalService: BsModalService) { }

  ok() {
    this.modalService.setDismissReason(
      DialogResults.toString({ success: true })
    );
    this.bsModalRef.hide();
  }

  cancel() {
    this.modalService.setDismissReason(
      DialogResults.toString({ success: false })
    );
    this.bsModalRef.hide();
  }
}
