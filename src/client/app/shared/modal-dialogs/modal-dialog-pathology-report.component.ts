import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  moduleId: module.id,
  selector: 'sd-modal-dialog-pathology-report',
  templateUrl: './modal-dialog-pathology-report.component.html'
})
export class ModalDialogPathologyReportComponent {
  biopsySequenceNumber: string;
  receivedDate: string;
  signedOutDate: string;
  message: string;

  constructor(public bsModalRef: BsModalRef) { }

  close() {
    this.bsModalRef.hide();
  }
}
