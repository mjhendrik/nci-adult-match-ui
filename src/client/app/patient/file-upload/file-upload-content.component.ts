import {
  Component,
  ChangeDetectorRef,
  ViewChild,
  NgZone,
  OnInit,
  ElementRef,
  ApplicationRef,
  TemplateRef
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
  HttpEventType,
  HttpResponse,
  HttpClient,
  HttpRequest
} from '@angular/common/http';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/observable/fromEvent';
import {
  BsModalRef,
  BsModalService
} from 'ngx-bootstrap';

import { AliquotApiService } from '../../clia/aliquot-api.service';
import { FileUploadNotificationService } from './../file-upload-notification.service';

@Component({
  moduleId: module.id,
  selector: 'sd-file-upload-content',
  templateUrl: 'file-upload-content.component.html',
  styleUrls: ['file-upload-content.component.css']
})
export class FileUploadContentComponent implements OnInit {

  public modalRef2: BsModalRef;
  public config = {
    keyboard: false,
    ignoreBackdropClick: true
  };

  msn: string;
  analysisId: string = '';
  analysisIdValid: boolean = false;
  analysisIdPrev: string = this.analysisId;
  message: string = 'Enter Analysis ID to add Variant ZIP file, DNA BAM file and cDNA BAM file';
  isUploading: boolean = false;
  fileCount: number = 0;
  notifyMessage: string = '';
  isUploaded: boolean = false;
  isSuccessful: boolean;

  percentDoneVariantZipFile: number = 0;
  percentDoneDnaBamFile: number = 0;
  percentDoneCdnaBamFile: number = 0;

  hasVariantZipFile: boolean = false;
  hasDnaBamFile: boolean = false;
  hasCdnaBamFile: boolean = false;

  variantZipFile: any;
  dnaBamFile: any;
  cdnaBamFile: any;

  variantZipFileUrl: string;
  dnaBamFileUrl: string;
  cdnaBamFileUrl: string;

  @ViewChild('input') inputElRef: ElementRef;

  constructor(
    public bsModalRef: BsModalRef,
    private changeDetector: ChangeDetectorRef,
    private ngzone: NgZone,
    private appref: ApplicationRef,
    private api: AliquotApiService,
    private modalService: BsModalService,
    private http: HttpClient,
    private uploadNotifications: FileUploadNotificationService) { }

  ngOnInit() {
    setTimeout(() => {
      this.onInputChanged('');
    }, 1);
  }

  validateAnalysisId(): void {

    this.analysisId = this.analysisId.replace(/^\s+|\s+$/g, '');

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
    if (this.inputElRef) {
      Observable.fromEvent(this.inputElRef.nativeElement, 'input')
        .debounceTime(400)
        .distinctUntilChanged()
        .subscribe((val: any) => {

          val.target.value = val.target.value.replace(/^\s+|\s+$/g, '');

          this.changeDetector.detectChanges();

          if (this.analysisIdPrev !== val.target.value && this.analysisId !== '') {
            this.analysisIdPrev = val.target.value;
            this.validateAnalysisId();
          }

          this.analysisIdPrev = val.target.value;

          if (this.analysisId === '') {
            delete this.message;
            this.analysisIdValid = false;
            this.message = 'Enter Analysis ID to add Variant ZIP file, DNA BAM file and cDNA BAM file';
          }

        });
    }
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
    this.isUploading = true;
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
        this.uploadFile(this.variantZipFileUrl, this.variantZipFile);
        this.uploadFile(this.dnaBamFileUrl, this.dnaBamFile);
        this.uploadFile(this.cdnaBamFileUrl, this.cdnaBamFile);
      });
  }

  uploadFile(url: string, file: any): void {

    const uploadFile = new HttpRequest('PUT', url, file, {
      reportProgress: true,
      responseType: 'text'
    });

    this.http.request(uploadFile).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        const percentDone = Math.round(100 * event.loaded / event.total);
        if (file === this.variantZipFile) this.percentDoneVariantZipFile = percentDone;
        if (file === this.dnaBamFile) this.percentDoneDnaBamFile = percentDone;
        if (file === this.cdnaBamFile) this.percentDoneCdnaBamFile = percentDone;
      } else if (event instanceof HttpResponse) {
        this.fileCount++;
        if (this.fileCount === 3) {
          this.notifyAfterUpload();
        }
      }
    });
  }

  notifyAfterUpload(): void {
    const uploadNotification = {
      'molecular_sequence_number': this.msn,
      'analysis_id': this.analysisId,
      'zip_name': this.variantZipFile.name,
      'dna_bam_name': this.dnaBamFile.name,
      'cdna_bam_name': this.cdnaBamFile.name
    };

    this.api.notifyAfterUpload(this.msn, uploadNotification).subscribe(resp => {
      this.notifyMessage = resp.message;
      this.isUploaded = true;
      this.isUploading = false;
      this.isSuccessful = resp.status === 'SUCCESS';
      this.uploadNotifications.done({ success: this.isSuccessful, fileType: 'vrFile' });
    });
  }

  closeUploadDialog(nested: boolean, template: TemplateRef<any>) {
    if (nested === false) this.bsModalRef.hide();
    if (nested === true) this.modalRef2 = this.modalService.show(template, this.config);
  }

  closeWarningDialog(cancel: boolean) {
    this.modalRef2.hide();
    if (cancel === true) this.bsModalRef.hide();
  }
}
