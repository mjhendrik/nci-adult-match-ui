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
import { RequestOptions,Headers } from '@angular/http';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/observable/fromEvent';

import { PatientApiService } from '../patient-api.service';

@Component({
  moduleId: module.id,
  selector: 'app-document-upload-content',
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
  msn: string;
  fileBody: any
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
  fileUrl: string;

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
      this.api.getDocumentPresignedUrls( 
      this.msn, 
      this.documentFile.name
    ).subscribe( 
      (data: any) => {
        this.fileUrl = data[0].url; 
        this.fileBody = data[0].fields;
        this.uploadFile(this.fileUrl, this.documentFile, this.fileBody); 
      }); 
  }

  uploadFile(url: string, file: any, body: any): void {

    let headers:any = new HttpHeaders( { 'Content-Type': 'application/json'});

    console.log("body")
    console.log(body)
    console.log(headers)

    const uploadFile = new HttpRequest('POST', url, body, {
      headers: headers,
      reportProgress: true,
      responseType: 'text'
    });
    console.log("uploadFile ")
    console.log(this.uploadFile)

    this.http.request(uploadFile).subscribe(event => {

      if (event.type === HttpEventType.UploadProgress) {
        const percentDone = Math.round(100 * event.loaded / event.total);
        if (file === this.documentFile) this.percentDone = percentDone;
      } else if (event instanceof HttpResponse) {
        this.fileCount++;
        if (this.fileCount === 1) {
          this.isUploading = false;
          // this.notifyAfterUpload(); //TODO: update the list
        }
      }
    });
  }

  // notifyAfterUpload(): void {

  //   this.uploadNotification = {
  //     'molecular_sequence_number': this.psn,
  //     'analysis_id': this.analysisId,
  //     'zip_name': this.documentFile
  //   };

  //   this.api.notifyAfterUpload(this.psn, this.uploadNotification).subscribe(itemList => {
  //     this.notifyMessage = itemList.message;
  //     this.isUploaded = true;
  //     if (itemList.status === 'SUCCESS') this.isSuccessful = true;
  //     if (itemList.status === 'FAILURE') this.isSuccessful = false;
  //   });

  // }

  closeUploadDialog(nested: boolean, template: TemplateRef<any>) {
    if (nested === false) this.bsModalRef.hide();
    if (nested === true) this.modalRef2 = this.modalService.show(template, this.config);
  }

  closeWarningDialog(cancel: boolean) {
    this.modalRef2.hide();
    if (cancel === true) this.bsModalRef.hide();
  }

}
