import { Component, ChangeDetectorRef } from '@angular/core';

import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { FileUploadService } from './file-upload.service';

@Component({
  moduleId: module.id,
  selector: 'sd-file-upload',
  templateUrl: 'file-upload.component.html'
})
export class FileUploadComponent {
  dzConfigVariantZip: DropzoneConfigInterface;
  dzConfigDnaBam: DropzoneConfigInterface;
  dzConfigCdnaBam: DropzoneConfigInterface;

  uploadedFiles: any[];
  fileCount: number = 0;

  variantZip: boolean = false;
  dnaBam: boolean = false;
  cdnaBam: boolean = false;

  molecularSequenceNumber: string;

  constructor(
    private changeDetector: ChangeDetectorRef) {

    // this.fileUploadService.getPresignUrls().subscribe(
    //   urls => {
    //     this.dzConfigVariantZip = {
    //       url: urls.zipFile,
    //       maxFiles: 1,
    //       timeout: 0,
    //       maxFilesize: 50000, // size in MB
    //       acceptedFiles: '.zip',
    //       addRemoveLinks: true,
    //       autoProcessQueue: false,
    //       init: function () {
    //         var submitButton = document.querySelector('#upload-files');
    //         let myDropzone = this; // closure
    //         submitButton.addEventListener('click', function () {
    //           myDropzone.processQueue(); // Tell Dropzone to process all queued files.
    //         });
    //       }
    //     };

    //     this.dzConfigDnaBam = {
    //       url: urls.dnaFile,
    //       maxFiles: 1,
    //       timeout: 0,
    //       maxFilesize: 50000, // size in MB
    //       // acceptedFiles: '.bam',
    //       addRemoveLinks: true,
    //       autoProcessQueue: false,
    //       init: function () {
    //         var submitButton = document.querySelector('#upload-files');
    //         let myDropzone = this; // closure
    //         submitButton.addEventListener('click', function () {
    //           myDropzone.processQueue(); // Tell Dropzone to process all queued files.
    //         });
    //       }
    //     };

    //     this.dzConfigCdnaBam = {
    //       url: urls.cdnaFile,
    //       maxFiles: 1,
    //       timeout: 0,
    //       maxFilesize: 50000, // size in MB
    //       // acceptedFiles: '.bam',
    //       addRemoveLinks: true,
    //       autoProcessQueue: false,
    //       init: function () {
    //         var submitButton = document.querySelector('#upload-files');
    //         let myDropzone = this; // closure
    //         submitButton.addEventListener('click', function () {
    //           myDropzone.processQueue(); // Tell Dropzone to process all queued files.
    //         });
    //       }
    //     };
    //   }
    // );
  }

  upload(): void {
    const fileNames = ['Variant', 'DNA', 'cDNA'];
    for (let file of fileNames) {
    }
  }

  addedFileVariantZip(evt: any): void {
    this.variantZip = true;
    this.changeDetector.detectChanges();
  }

  removedFileVariantZip(): void {
    this.variantZip = false;
    this.changeDetector.detectChanges();
  }

  addedFileDnaBam(evt: any): void {
    this.dnaBam = true;
    this.changeDetector.detectChanges();
  }

  removedFileDnaBam(): void {
    this.dnaBam = false;
    this.changeDetector.detectChanges();
  }

  addedFileCdnaBam(evt: any): void {
    this.cdnaBam = true;
    this.changeDetector.detectChanges();
  }

  removedFileCdnaBam(): void {
    this.cdnaBam = false;
    this.changeDetector.detectChanges();
  }

  onUploadSuccess(evt: any): void {
    // console.log(evt);
  }

  onUploadError(evt: any): void {
    // console.log(evt);
  }
}
