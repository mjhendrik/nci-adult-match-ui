import { Component, Input } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { DocumentUploadContentComponent } from './document-upload-content.component';

@Component({
  moduleId: module.id,
  selector: 'sd-document-upload',
  template: `
  <button type="button" class="btn btn-purple-light pull-right" (click)="openUploadDialog()">Upload ##</button>
  `
})
export class DocumentUploadComponent {
  public modalRef: BsModalRef;
  public config = {
    keyboard: false,
    ignoreBackdropClick: true
  };

  @Input() msn: string;

  uploadedFiles: any[];
  fileCount: number = 0;

  variantZip: boolean = false;
  dnaBam: boolean = false;
  cdnaBam: boolean = false;

  molecularSequenceNumber: string;

  constructor(
    private modalService: BsModalService) {
  }

  openUploadDialog() {
    this.modalRef = this.modalService.show(DocumentUploadContentComponent, this.config);
    this.modalRef.content.msn = this.msn;
  }

}
