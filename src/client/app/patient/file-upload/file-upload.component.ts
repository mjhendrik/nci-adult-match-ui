import { Component, Input } from '@angular/core';

import {
  dropzoneConfigVariantZip,
  dropzoneConfigDnaBam,
  dropzoneConfigCdnaBam,
  dropzoneConfigDocuments
} from './dropzone.config';

@Component({
  moduleId: module.id,
  selector: 'sd-file-upload',
  templateUrl: 'file-upload.component.html'
})
export class FileUploadComponent {
  configVariantZip = dropzoneConfigVariantZip;
  configDnaBam = dropzoneConfigDnaBam;
  configCdnaBam = dropzoneConfigCdnaBam;
  configDocuments = dropzoneConfigDocuments;

  uploadedFiles: any[];
  fileCount: number = 0;
  variantZip: boolean = false;
  dnaBam: boolean = false;
  cdnaBam: boolean = false;
  fileUploadBtn: boolean = false;

  @Input() items: any;

  getIcon(status: string): string {
    return 'fa-user-o';
  }
}
