import {
  Component,
  ChangeDetectorRef,
  ViewChild,
  NgZone,
  ElementRef,
  ApplicationRef,
  TemplateRef
} from '@angular/core';
import {
  HttpEventType,
  HttpResponse,
  HttpClient,
  HttpRequest,
  HttpHeaders

} from '@angular/common/http';
import {
  BsModalRef,
  BsModalService
} from 'ngx-bootstrap';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/observable/fromEvent';

import { PatientApiService } from '../patient-api.service';

@Component({
  moduleId: module.id,
  selector: 'sd-document-upload-content',
  templateUrl: 'document-upload-content.component.html',
  styleUrls: ['document-upload-content.component.css']
})
export class DocumentUploadContentComponent {

  public modalRef2: BsModalRef;
  public config = {
    keyboard: false,
    ignoreBackdropClick: true
  };

  psn: string;
  fileBody: any;
  message: string = 'Enter Document Name to add Document file';
  uploadNotification: any;
  isUploading: boolean = false;
  fileCount: number = 0;
  notifyMessage: string = '';
  isUploaded: boolean = false;
  isSuccessful: boolean;
  percentDone: number = 0;
  hasFile: boolean = false;
  documentFile: any;

  @ViewChild('input') inputElRef: ElementRef;

  constructor(
    public bsModalRef: BsModalRef,
    private changeDetector: ChangeDetectorRef,
    private ngzone: NgZone,
    private appref: ApplicationRef,
    private api: PatientApiService,
    private modalService: BsModalService,
    private http: HttpClient) { }

  fileSelected(file: any): void {
    this.hasFile = false;
    if (file !== undefined) {
      this.hasFile = true;
      this.documentFile = file;
    }
  }

  upload(): void {
    this.isUploading = true;
    this.api.getDocumentPresignedUrls(this.psn, this.documentFile.name)
      .subscribe((url) => this.uploadFile(url));
  }

  uploadFile(url: string): void {

    const uploadFile = new HttpRequest('PUT', url, this.documentFile, {
      reportProgress: true,
      responseType: 'text'
    });

    this.http.request(uploadFile).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.percentDone = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        this.fileCount++;
        if (this.fileCount === 1) {
          this.isUploading = false;
        }
      }
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
