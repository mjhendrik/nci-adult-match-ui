import {
  Component,
  ChangeDetectorRef,
  Input
} from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { FileUploadContentComponent } from './file-upload-conent.component';

@Component({
  moduleId: module.id,
  selector: 'sd-file-upload',
  template: `
  <button type="button" class="btn btn-purple-light pull-right" (click)="openUploadDialog()">Upload</button>
  `
})
export class FileUploadComponent {
  public modalRef: BsModalRef;

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
    this.modalRef = this.modalService.show(FileUploadContentComponent);
    this.modalRef.content.msn = this.msn;
  }
}
