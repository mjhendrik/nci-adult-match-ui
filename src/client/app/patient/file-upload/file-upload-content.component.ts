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
  selector: 'sd-file-upload-content',
  templateUrl: 'file-upload-content.component.html',
  styleUrls: ['file-upload-content.component.css']
})
export class FileUploadContentComponent implements OnInit {

  public modalRefFileUpload: BsModalRef;

  msn: string;
  analysisId: string = '';
  analysisIdValid: boolean = false;
  analysisIdPrev: string = this.analysisId;
  message: string = 'Enter a valid Analysis ID to add Variant ZIP file, DNA BAM file and cDNA BAM file';
  uploadNotification: any;
  isDisabled: boolean = false;

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
    private changeDetector: ChangeDetectorRef,
    private ngzone: NgZone,
    private appref: ApplicationRef,
    private api: AliquotApiService,
    private modalService: BsModalService,
    private http: HttpClient) { }

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
    this.isDisabled = true;
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
    });

    this.http.request(uploadFile).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        const percentDone = Math.round(100 * event.loaded / event.total);
        console.log(`File is ${percentDone}% uploaded.`);
      } else if (event instanceof HttpResponse) {
        this.isDisabled = false;
        console.log('File is completely uploaded!');
        this.notifyAfterUpload();
      }
    });

  }

  notifyAfterUpload(): void {

    console.log('notify');

    this.uploadNotification = {
      'ion_reporter_id': null,
      'molecular_sequence_number': this.msn,
      'analysis_id': this.analysisId,
      'site': null,
      'zip_name': this.variantZipFile.name,
      'dna_bam_name': this.dnaBamFile.name,
      'cdna_bam_name': this.cdnaBamFile.name
    };

    this.api.notifyAfterUpload(this.msn, this.uploadNotification).subscribe();

  }

  closeUploadDialog() {
    this.modalRefFileUpload.hide();
  }

}
