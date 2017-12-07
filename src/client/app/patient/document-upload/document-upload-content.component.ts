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
import {
  BsModalRef,
  BsModalService
} from 'ngx-bootstrap';

import { AliquotApiService } from '../../clia/aliquot-api.service';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/observable/fromEvent';

@Component({
  moduleId: module.id,
  selector: 'sd-document-upload-content',
  templateUrl: 'document-upload-content.component.html',
  styleUrls: ['document-upload-content.component.css']
})
export class DocumentUploadContentComponent implements OnInit {

  public modalRef2: BsModalRef;
  public config = {
    keyboard: false,
    ignoreBackdropClick: true
  };

  msn: string;
  // file_url: string;
  analysisId: string = '';
  analysisIdValid: boolean = false;
  analysisIdPrev: string = this.analysisId;
  message: string = 'Enter Document Name to add Document file';
  uploadNotification: any;
  isUploading: boolean = false;
  fileCount: number = 0;
  notifyMessage: string = '';
  isUploaded: boolean = false;
  isSuccessful: boolean;

  percentDoneVariantZipFile: number = 0;
  percentDoneDnaBamFile: number = 0;
  percentDoneCdnaBamFile: number = 0;

  hasVariantZipFile: boolean = false;
  // hasDnaBamFile: boolean = false;
  // hasCdnaBamFile: boolean = false;

  documentFile: any;
  // dnaBamFile: any;
  // cdnaBamFile: any;

  fileUrl: string;
  // dnaBamFileUrl: string;
  // cdnaBamFileUrl: string;

  @ViewChild('input') inputElRef: ElementRef;

  constructor(
    public bsModalRef: BsModalRef,
    private changeDetector: ChangeDetectorRef,
    private ngzone: NgZone,
    private appref: ApplicationRef,
    private api: AliquotApiService,
    private modalService: BsModalService,
    private http: HttpClient) { }

  ngOnInit() {
    this.onInputChanged('');
  }

  onInputChanged(val: any) {

    if (this.inputElRef) {
      Observable.fromEvent(this.inputElRef.nativeElement, 'input')
        .debounceTime(400)
        .distinctUntilChanged()
        .subscribe((val: any) => {
          val.target.value = val.target.value.replace(/^\s+|\s+$/g, '');
          this.changeDetector.detectChanges();
          this.analysisIdPrev = val.target.value;
        });
    }
  }

  fileSelectedVariantZip(file: any): void {

    this.hasVariantZipFile = false;
    if (file !== undefined) {
      this.hasVariantZipFile = true;
      this.documentFile = file;
    }
  }

  upload(): void {
    this.isUploading = true;
    this.api.getDocumentPresignedUrls(
      this.msn,
      // this.file_url,
      this.analysisId,
      this.documentFile
      // this.dnaBamFile.name,
      // this.cdnaBamFile.name
    ).subscribe(
      (data: any) => {
        this.fileUrl = data[0].url;
        this.uploadFile(this.fileUrl, this.documentFile);
      });
  }

  uploadFile(url: string, file: any): void {

    const uploadFile = new HttpRequest('POST', url, file, {
      reportProgress: true,
      responseType: 'text'
    });

    this.http.request(uploadFile).subscribe(event => {

      if (event.type === HttpEventType.UploadProgress) {
        const percentDone = Math.round(100 * event.loaded / event.total);
        if (file === this.documentFile) this.percentDoneVariantZipFile = percentDone;
      } else if (event instanceof HttpResponse) {
        this.fileCount++;
        if (this.fileCount === 1) {
          this.isUploading = false;
          this.notifyAfterUpload();
        }
      }
    });

  }

  notifyAfterUpload(): void {

    this.uploadNotification = {
      'molecular_sequence_number': this.msn,
      'analysis_id': this.analysisId,
      'zip_name': this.documentFile
    };

    this.api.notifyAfterUpload(this.msn, this.uploadNotification).subscribe(itemList => {
      this.notifyMessage = itemList.message;
      this.isUploaded = true;
      if (itemList.status === 'SUCCESS') this.isSuccessful = true;
      if (itemList.status === 'FAILURE') this.isSuccessful = false;
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
