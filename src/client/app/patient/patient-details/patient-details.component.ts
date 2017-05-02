import {
  Component,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

import { routerTransition } from './../../shared/router.animations';
import {
  PatientApiService,
  PatientDetailsInterface
} from '../patient-api.service';

/**
 * PatientDetailsComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-patient-details',
  templateUrl: 'patient-details.component.html',
  styleUrls: ['patient-details.component.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})
export class PatientDetailsComponent implements OnInit {

  patientData: any;
  summaryData: any;
  biopsyData: any;
  dataAvailable: boolean;
  errorMessage: string;

  analysisId: string = '';

  uploadedFiles: any[];
  filecount: number = 0;

  variantZip: boolean = false;
  dnaBam: boolean = false;;
  cdnaBam: boolean = false;;

  changeDetector: ChangeDetectorRef;
  configVariantZip: DropzoneConfigInterface;
  configDnaBam: DropzoneConfigInterface;
  configCdnaBam: DropzoneConfigInterface;
  configDocuments: DropzoneConfigInterface;

  constructor(private patientApi: PatientApiService, private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.getData();

    this.changeDetector = this.ref;

    const DROPZONE_CONFIG_VARIANT_ZIP: DropzoneConfigInterface = {

      // Change this to your upload POST address:
      server: 'https://httpbin.org/post',
      maxFiles: 1,
      maxFilesize: 50000, // size in MB
      acceptedFiles: '.zip',
      addRemoveLinks: true,
      autoProcessQueue: false,
      init: function () {
        this.on('removedfile', function (file: any) {
          // delete from our dict removed file
          //delete addedFilesHash[file];
        });
      },
      accept: function (file: any, done: any) {
        // console.log(file);
        // console.log(done);
        // var _id = count++;
        // file._id = _id;
        // addedFilesHash[_id] = done;
      }

    };

    this.configVariantZip = DROPZONE_CONFIG_VARIANT_ZIP;

    const DROPZONE_CONFIG_DNA_BAM: DropzoneConfigInterface = {

      // Change this to your upload POST address:
      server: 'https://httpbin.org/post',
      maxFiles: 1,
      maxFilesize: 50000, // size in MB
      // acceptedFiles: '.bam',
      addRemoveLinks: true,
      autoProcessQueue: false,
      init: function () {
        this.on('removedfile', function (file: any) {
          // delete from our dict removed file
          //delete addedFilesHash[file];
        });
      },
      accept: function (file: any, done: any) {
        // var _id = count++;
        // file._id = _id;
        // addedFilesHash[_id] = done;
      }

    };

    this.configDnaBam = DROPZONE_CONFIG_DNA_BAM;

    const DROPZONE_CONFIG_CDNA_BAM: DropzoneConfigInterface = {

      // Change this to your upload POST address:
      server: 'https://httpbin.org/post',
      maxFiles: 1,
      maxFilesize: 50000, // size in MB
      // acceptedFiles: '.bam',
      addRemoveLinks: true,
      autoProcessQueue: false,
      init: function () {
        this.on('removedfile', function (file: any) {
          // delete from our dict removed file
          //delete addedFilesHash[file];
        });
      },
      accept: function (file: any, done: any) {
        // var _id = count++;
        // file._id = _id;
        // addedFilesHash[_id] = done;
      }

    };

    this.configCdnaBam = DROPZONE_CONFIG_CDNA_BAM;

    const DROPZONE_CONFIG_DOCUMENTS: DropzoneConfigInterface = {
      // Change this to your upload POST address:
      server: 'https://httpbin.org/post',
      // maxFiles: 3,
      maxFilesize: 50000, // size in MB
      // acceptedFiles: '.zip,.bam',
      addRemoveLinks: true
    };

    this.configDocuments = DROPZONE_CONFIG_DOCUMENTS;

  }

  getData() {
    this.patientApi.getPatientDetails()
      .subscribe((itemList: PatientDetailsInterface) => {
        this.patientData = itemList.patientData;
        this.summaryData = itemList.summaryData;
        this.biopsyData = itemList.biopsyData;
        this.dataAvailable = true;
      },
      error => this.errorMessage = <any>error
      );
  }

  onUploadSuccess(evt: any): void {
    // console.log(evt);
  }

  onUploadError(evt: any): void {
    // console.log(evt);
  }

  uploadfiles(): void {
    this.configVariantZip.autoProcessQueue = true;
    this.configDnaBam.autoProcessQueue = true;
    this.configCdnaBam.autoProcessQueue = true;
  }

  addedFileVariantZip(evt: any): void {
    this.variantZip = true;
    this.ref.detectChanges();
    // console.log(evt);
  }

  removedFileVariantZip(): void {
    this.variantZip = false;
    this.ref.detectChanges();
  }

  addedFileDnaBam(evt: any): void {
    this.dnaBam = true;
    this.ref.detectChanges();
  }

  removedFileDnaBam(): void {
    this.dnaBam = false;
    this.ref.detectChanges();
  }

  addedFileCdnaBam(evt: any): void {
    this.cdnaBam = true;
    this.ref.detectChanges();
  }

  removedFileCdnaBam(): void {
    this.cdnaBam = false;
    this.ref.detectChanges();
  }

  detectChanges(): void {
    this.ref.detectChanges();
  }

}
