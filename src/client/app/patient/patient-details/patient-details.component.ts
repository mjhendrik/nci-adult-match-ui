import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { routerTransition } from './../../shared/router.animations';
import { PatientApiService } from '../patient-api.service';
import { ViewDataTransformer } from './../view-data-transformer.service';
import { PatientData, Tabs } from './patient-details.module';

const dropzoneConfigCdnaBam: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  server: 'https://httpbin.org/post',
  maxFiles: 1,
  maxFilesize: 50000, // size in MB
  // acceptedFiles: '.bam',
  addRemoveLinks: true,
  autoProcessQueue: false,
  init: function () {
    // console.log('HERE!!!');
    this.on('removedfile', function (file: any) {
      // console.log('HERE 22222!!!');
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

const dropzoneConfigDnaBam: DropzoneConfigInterface = {

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

const dropzoneConfigVariantZip: DropzoneConfigInterface = {

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

const dropzoneConfigDocuments: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  server: 'https://httpbin.org/post',
  // maxFiles: 3,
  maxFilesize: 50000, // size in MB
  // acceptedFiles: '.zip,.bam',
  addRemoveLinks: true
};

@Component({
  moduleId: module.id,
  selector: 'sd-patient-details',
  templateUrl: 'patient-details.component.html',
  styleUrls: ['patient-details.component.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})
export class PatientDetailsComponent implements OnInit, AfterViewInit, PatientData {
  needToScroll: boolean;
  psn: string;
  patient: any;
  summaryData: any = {};

  entityId: string;
  section: string;

  uploadedFiles: any[];
  fileCount: number = 0;
  variantZip: boolean = false;
  dnaBam: boolean = false;;
  cdnaBam: boolean = false;;
  configVariantZip = dropzoneConfigVariantZip;
  configDnaBam = dropzoneConfigDnaBam;
  configCdnaBam = dropzoneConfigCdnaBam;
  configDocuments = dropzoneConfigDocuments;

  tabs: Tabs;

  constructor(public changeDetector: ChangeDetectorRef,
    private route: ActivatedRoute,
    private patientApi: PatientApiService,
    private transformer: ViewDataTransformer,
    private router: Router) {
  }

  download(file: string) {
    this.patientApi.downloadPatientFile(this.psn, file);
  }

  ngOnInit() {
    Object.assign(this, this.route.snapshot.data['data']);
  }

  ngAfterViewInit() {
    if (this.needToScroll && !!this.entityId) {
      setTimeout(() => {
        const element = document.getElementById(this.entityId);
        if (element) {
          console.info(`scrolling to ID ${this.entityId}`);
          element.scrollIntoView();
        }
      }, 226);
    }
  }

  onUploadSuccess(evt: any): void {
    // console.log(evt);
  }

  onUploadError(evt: any): void {
    // console.log(evt);
  }

  uploadFiles(): void {
    this.configVariantZip.autoProcessQueue = true;
    this.configDnaBam.autoProcessQueue = true;
    this.configCdnaBam.autoProcessQueue = true;
  }

  addedFileVariantZip(evt: any): void {
    this.variantZip = true;
    this.changeDetector.detectChanges();
  }

  removedFileVariantZip(): void {
    this.variantZip = false;
    this.changeDetector.detectChanges();
  }

  addedFileDnaBam(evt: any): void {
    this.dnaBam = true;
    this.changeDetector.detectChanges();
  }

  removedFileDnaBam(): void {
    this.dnaBam = false;
    this.changeDetector.detectChanges();
  }

  addedFileCdnaBam(evt: any): void {
    this.cdnaBam = true;
    this.changeDetector.detectChanges();
  }

  removedFileCdnaBam(): void {
    this.cdnaBam = false;
    this.changeDetector.detectChanges();
  }
}
