import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { FileUploadContentComponent } from './file-upload-content.component';

@Component({
  moduleId: module.id,
  selector: 'sd-file-upload',
  template: `
  <button type="button" class="btn btn-purple-light pull-right" (click)="openUploadDialog()" (uploaded)="onUploaded($event)">Upload</button>
  `
})
export class FileUploadComponent {
  public modalRef: BsModalRef;
  public config = {
    keyboard: false,
    ignoreBackdropClick: true
  };

  @Input() msn: string;
  @Output() uploaded: EventEmitter<boolean> = new EventEmitter();

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
    this.modalRef = this.modalService.show(FileUploadContentComponent, this.config);
    this.modalRef.content.msn = this.msn;
  }

  onUploaded(success: boolean) {
    this.uploaded.emit(success);
  }
}
