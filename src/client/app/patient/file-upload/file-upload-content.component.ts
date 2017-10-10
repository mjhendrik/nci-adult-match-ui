import {
  Component,
  ChangeDetectorRef,
  Input
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
  @Input() msn: string;
  analysisId: string;

  dzConfigVariantZip: DropzoneConfigInterface;
  dzConfigDnaBam: DropzoneConfigInterface;
  dzConfigCdnaBam: DropzoneConfigInterface;

  uploadedFiles: any[];
  fileCount: number = 0;

  hasVariantZipFile: boolean = false;
  hasDnaBamFile: boolean = false;
  hasCdnaBamFile: boolean = false;

  variantZipFile: any;
  dnaBamFile: any;
  cdnaBamFile: any;

  constructor(
    public modalRef: BsModalRef,
    private changeDetector: ChangeDetectorRef,
    private api: AliquotApiService) {

    const createDzConfig = (acceptedFiles: string): DropzoneConfigInterface => {
      const dummyUrl = 'https://fakeurl.org/fakepost';

      const dzInit = function () {
        var submitButton = document.querySelector('#upload-files');
        let dz = this; // closure
        submitButton.addEventListener('click', function () {
          dz.processQueue(); // Tell Dropzone to process all queued files.
        });
      };

      return {
        url: dummyUrl,
        maxFiles: 1,
        timeout: 0,
        maxFilesize: 50000, // size in MB
        acceptedFiles: acceptedFiles,
        addRemoveLinks: true,
        autoProcessQueue: false,
        autoQueue: false,
        init: dzInit
      };
    };

    this.dzConfigVariantZip = createDzConfig('.zip');
    this.dzConfigDnaBam = createDzConfig(null);
    this.dzConfigCdnaBam = createDzConfig(null);
  }

  upload(): void {
    this.api.getPresignedUrls(
      this.msn,
      this.variantZipFile.name,
      this.dnaBamFile.name,
      this.cdnaBamFile.name
    ).subscribe(
      (data: [string, string, string]) => {
        this.dzConfigVariantZip.url = data[0];
        this.dzConfigDnaBam.url = data[1];
        this.dzConfigCdnaBam.url = data[2];
      }
      );
  }

  addedFileVariantZip(evt: any): void {
    this.variantZipFile = evt;
    this.hasVariantZipFile = true;
    this.changeDetector.detectChanges();
  }

  removedFileVariantZip(): void {
    this.variantZipFile = null;
    this.hasVariantZipFile = false;
    this.changeDetector.detectChanges();
  }

  addedFileDnaBam(evt: any): void {
    this.dnaBamFile = evt;
    this.hasDnaBamFile = true;
    this.changeDetector.detectChanges();
  }

  removedFileDnaBam(): void {
    this.dnaBamFile = null;
    this.hasDnaBamFile = false;
    this.changeDetector.detectChanges();
  }

  addedFileCdnaBam(evt: any): void {
    this.cdnaBamFile = evt;
    this.hasCdnaBamFile = true;
    this.changeDetector.detectChanges();
  }

  removedFileCdnaBam(): void {
    this.cdnaBamFile = null;
    this.hasCdnaBamFile = false;
    this.changeDetector.detectChanges();
  }

  onUploadSuccess(evt: any): void {
    console.info(evt);
  }

  onUploadError(evt: any): void {
    console.error(evt);
  }
}
