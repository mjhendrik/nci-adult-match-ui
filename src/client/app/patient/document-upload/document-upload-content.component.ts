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
  HttpRequest
} from '@angular/common/http';
import {
  BsModalRef,
  BsModalService
} from 'ngx-bootstrap';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/observable/fromEvent';

import { PatientApiService, ApiError, ApiSuccess } from '../patient-api.service';
import { ToastrService } from '../../shared/error-handling/toastr.service';

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
    private toastrService: ToastrService,
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
    .subscribe((resp: ApiError | ApiSuccess) => {
      switch (resp.kind) {
        case 'error':
          this.showToast(resp.message, true);
          break;
        case 'success':
          this.uploadFile(resp.data);
          break;
      }
    });
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

  notifyAfterUpload(fileName: string): void {
    this.api.notifyAfterUpload(this.psn, fileName)
      .subscribe((resp: ApiError | ApiSuccess) => {
        switch (resp.kind) {
          case 'error':
            this.showToast(resp.message, true);
            break;
          case 'success':
            break;
        }
      });
  }

  private showToast(message: string, isError: boolean): void {
    if (this.toastrService && this.toastrService.toastr) {
      if (isError) {
        console.error(message);
        this.toastrService.toastr.error(message);
      } else {
        console.info(message);
        this.toastrService.toastr.info(message);
      }
    }
  }
}
