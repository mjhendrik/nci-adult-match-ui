import {
  Component,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

import { routerTransition } from './../../shared/router.animations';
import { PatientApiService } from '../patient-api.service';
import { ViewDataTransformer } from './view-data-transformer.service';

@Component({
  moduleId: module.id,
  selector: 'sd-patient-details',
  templateUrl: 'patient-details.component.html',
  styleUrls: ['patient-details.component.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})
export class PatientDetailsComponent implements OnInit {

  summaryData: any = {};
  biopsyData: any = {};
  disease: any = {};

  patient: any;
  isLoaded: boolean;
  errorMessage: string;

  analysisId: string = '';

  uploadedFiles: any[];
  fileCount: number = 0;

  variantZip: boolean = false;
  dnaBam: boolean = false;;
  cdnaBam: boolean = false;;

  changeDetector: ChangeDetectorRef;
  configVariantZip: DropzoneConfigInterface;
  configDnaBam: DropzoneConfigInterface;
  configCdnaBam: DropzoneConfigInterface;
  configDocuments: DropzoneConfigInterface;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private patientApi: PatientApiService,
    private ref: ChangeDetectorRef
    private viewDataTransformer: ViewDataTransformer) { }

  ngOnInit() {
    let psn = this.route.snapshot.params['patientSequenceNumber'];

    this.getData(psn);

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

  getData(psn: string) {
    this.patientApi.getPatientDetails(psn)
      .subscribe((response: any) => {
        this.transformData(response);
        this.isLoaded = true;
      },
      (error) => {
        this.errorMessage = <any>error;
        console.error(error);
      }
      );
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

  private transformData(response: any): void {
    this.patient = response;
    this.disease = response.diseases && response.diseases.length ? response.diseases[0] : null;
    if (this.patient.biopsies && this.patient.biopsies.length) {
      this.patient.biopsies = this.patient.biopsies.reverse().map(x => this.transformBiopsy(x));
    }
    if (this.patient.races && this.patient.races.length) {
      this.patient.raceList = this.patient.races.join(', ');
    }
  }

  private transformBiopsy(source: any): any {
    let transformed = source;

    // transformed.

    return transformed;
  }
}
