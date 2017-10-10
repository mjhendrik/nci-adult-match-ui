import {
  Component,
  ChangeDetectorRef
} from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

import { AliquotApiService } from '../../clia/aliquot-api.service';

@Component({
  moduleId: module.id,
  selector: 'sd-file-upload-content',
  templateUrl: 'file-upload-content.component.html'
})
export class FileUploadContentComponent {
  msn: string;

  dzConfigVariantZip: DropzoneConfigInterface;
  dzConfigDnaBam: DropzoneConfigInterface;
  dzConfigCdnaBam: DropzoneConfigInterface;

  uploadedFiles: any[];
  fileCount: number = 0;

  hasVariantZipFile: boolean = false;
  hasDnaBamFile: boolean = false;
  hasCdnaBamFile: boolean = false;

  variantZipFile: string;
  dnaBamFile: string;
  cdnaBamFile: string;

  analysisId: string;

  constructor(
    public modalRef: BsModalRef,
    private changeDetector: ChangeDetectorRef,
    private api: AliquotApiService) {

    const dummyUrl = 'https://fakeurl.org/fakepost';

    this.dzConfigVariantZip = {
      url: dummyUrl,
      maxFiles: 1,
      timeout: 0,
      maxFilesize: 50000, // size in MB
      acceptedFiles: '.zip',
      addRemoveLinks: true,
      autoProcessQueue: false,
      init: function () {
        var submitButton = document.querySelector('#upload-files');
        let dz = this; // closure
        submitButton.addEventListener('click', function () {
          dz.processQueue(); // Tell Dropzone to process all queued files.
        });
      }
    };

    this.dzConfigDnaBam = {
      url: dummyUrl,
      maxFiles: 1,
      timeout: 0,
      maxFilesize: 50000, // size in MB
      // acceptedFiles: '.bam',
      addRemoveLinks: true,
      autoProcessQueue: false,
      init: function () {
        var submitButton = document.querySelector('#upload-files');
        let dz = this; // closure
        submitButton.addEventListener('click', function () {
          dz.processQueue(); // Tell Dropzone to process all queued files.
        });
      }
    };

    this.dzConfigCdnaBam = {
      url: dummyUrl,
      maxFiles: 1,
      timeout: 0,
      maxFilesize: 50000, // size in MB
      // acceptedFiles: '.bam',
      addRemoveLinks: true,
      autoProcessQueue: false,
      init: function () {
        var submitButton = document.querySelector('#upload-files');
        let dz = this; // closure
        submitButton.addEventListener('click', function () {
          dz.processQueue(); // Tell Dropzone to process all queued files.
        });
      }
    };
  }

  upload(): void {
    this.api.getPresignedUrls(
      this.msn,
      this.variantZipFile,
      this.dnaBamFile,
      this.cdnaBamFile
    ).subscribe(
      (data: [string, string, string]) => {
        this.dzConfigVariantZip.url = data[0];
        this.dzConfigDnaBam.url = data[1];
        this.dzConfigCdnaBam.url = data[2];
      }
    );
  }

  addedFileVariantZip(evt: any): void {
    this.hasVariantZipFile = true;
    this.changeDetector.detectChanges();
  }

  removedFileVariantZip(): void {
    this.hasVariantZipFile = false;
    this.changeDetector.detectChanges();
  }

  addedFileDnaBam(evt: any): void {
    this.hasDnaBamFile = true;
    this.changeDetector.detectChanges();
  }

  removedFileDnaBam(): void {
    this.hasDnaBamFile = false;
    this.changeDetector.detectChanges();
  }

  addedFileCdnaBam(evt: any): void {
    this.hasCdnaBamFile = true;
    this.changeDetector.detectChanges();
  }

  removedFileCdnaBam(): void {
    this.hasCdnaBamFile = false;
    this.changeDetector.detectChanges();
  }

  onUploadSuccess(evt: any): void {
    // console.log(evt);
  }

  onUploadError(evt: any): void {
    // console.log(evt);
  }
}