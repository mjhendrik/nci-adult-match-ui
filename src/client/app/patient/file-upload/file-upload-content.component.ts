import {
  Component,
  ChangeDetectorRef,
  ViewChild,
  NgZone,
  OnInit,
  ElementRef,
  ApplicationRef
} from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AliquotApiService } from '../../clia/aliquot-api.service';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/observable/fromEvent';

@Component({
  moduleId: module.id,
  selector: 'sd-file-upload-content',
  templateUrl: 'file-upload-content.component.html',
  styleUrls: ['file-upload-content.component.css']
})
export class FileUploadContentComponent implements OnInit {
  msn: string;
  analysisId: string = '';
  analysisIdValid: boolean = false;
  analysisIdPrev: string = this.analysisId;
  message: string = 'Enter a valid Analysis ID to add Variant ZIP file, DNA BAM file and cDNA BAM file';
  uploadNotification: any;

  hasVariantZipFile: boolean = false;
  hasDnaBamFile: boolean = false;
  hasCdnaBamFile: boolean = false;

  variantZipFile: any;
  dnaBamFile: any;
  cdnaBamFile: any;

  variantZipFileUrl: any;
  dnaBamFileUrl: any;
  cdnaBamFileUrl: any;

  @ViewChild('input') inputElRef: ElementRef;

  constructor(
    private changeDetector: ChangeDetectorRef,
    private ngzone: NgZone,
    private appref: ApplicationRef,
    private api: AliquotApiService) { }

  ngOnInit() {
    this.onInputChanged('');
  }

  validateAnalysisId(): void {
    this.api.validateAnalysisId(this.msn, this.analysisId)
      .subscribe(itemList => {
        this.analysisIdValid = !itemList;
        if (!this.analysisIdValid) {
          delete this.message;
          this.message = 'Analysis ID entered already exists';
        }
      });
  }

  onInputChanged(val: any) {
    Observable.fromEvent(this.inputElRef.nativeElement, 'input')
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe((val: any) => {

        this.changeDetector.detectChanges();

        if (this.analysisIdPrev !== val.target.value && this.analysisId !== '' && !this.analysisId.startsWith(' ')) {
          this.analysisIdPrev = val.target.value;
          this.validateAnalysisId();
        }

        this.analysisIdPrev = val.target.value;

        if (this.analysisId === '') {
          delete this.message;
          this.analysisIdValid = false;
          this.message = 'Enter a valid Analysis ID to add Variant ZIP file, DNA BAM file and cDNA BAM file';
        }

        if (this.analysisId.startsWith(' ')) {
          delete this.message;
          this.analysisIdValid = false;
          this.message = 'Analysis ID entered starts with a space';
        }

      });
  }

  fileSelectedVariantZip(file: any): void {
    this.hasVariantZipFile = false;
    if (file !== undefined) {
      this.hasVariantZipFile = true;
      this.variantZipFile = file;
    }
  }

  fileSelectedDnaBam(file: any): void {
    this.hasDnaBamFile = false;
    if (file !== undefined) {
      this.hasDnaBamFile = true;
      this.dnaBamFile = file;
    }
  }

  fileSelectedCdnaBam(file: any): void {
    this.hasCdnaBamFile = false;
    if (file !== undefined) {
      this.hasCdnaBamFile = true;
      this.cdnaBamFile = file;
    }
  }

  upload(): void {
    this.api.getPresignedUrls(
      this.msn,
      this.analysisId,
      this.variantZipFile.name,
      this.dnaBamFile.name,
      this.cdnaBamFile.name
    ).subscribe(
      (data: [string, string, string]) => {
        this.variantZipFileUrl = data[0];
        this.dnaBamFileUrl = data[1];
        this.cdnaBamFileUrl = data[2];
        // input type file code
      });
  }

  // downloadDnaBam(): void {
  //   this.cliaApi.downloadCliaDnaBam(this.molecular_id)
  //     .subscribe((itemList: any) => {
  //       let link = document.createElement('a');
  //       // link.download = name;
  //       link.href = itemList.s3_download_file_url;
  //       document.body.appendChild(link);
  //       link.click();
  //       document.body.removeChild(link);
  //     });
  // };

  notifyAfterUpload(uploaded: boolean): void {

    this.uploadNotification = {
      'molecularSequenceNumber': this.msn,
      'analysisId': this.analysisId,
      // 'filename': this.variantZipFile.name,
      'uploaded': uploaded
    };

    this.api.notifyAfterUpload(this.uploadNotification);

  }

  onUploadSuccess(evt: any): void {
    console.log('success');
    this.notifyAfterUpload(true);
  }

  onUploadError(evt: any): void {
    console.log('failure');
    this.notifyAfterUpload(false);
  }
}
