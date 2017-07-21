import {
  Component,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { routerTransition } from './../../shared/router.animations';
import { PatientApiService } from '../patient-api.service';
import { ViewDataTransformer } from './../view-data-transformer.service';

@Component({
  moduleId: module.id,
  selector: 'sd-patient-details',
  templateUrl: 'patient-details.component.html',
  styleUrls: ['patient-details.component.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})
export class PatientDetailsComponent implements OnInit {

  isLoaded: boolean;
  summaryData: any = {};
  biopsyData: any = {};
  disease: any = {};

  psn: string;
  patient: any;
  errorMessage: string;

  analysisId: string = '';
  uploadedFiles: any[];
  fileCount: number = 0;

  variantZip: boolean = false;
  dnaBam: boolean = false;;
  cdnaBam: boolean = false;;
  sequence: any;
  changeDetector: ChangeDetectorRef;
  configVariantZip: DropzoneConfigInterface;
  configDnaBam: DropzoneConfigInterface;
  configCdnaBam: DropzoneConfigInterface;
  configDocuments: DropzoneConfigInterface;

  constructor(private route: ActivatedRoute,
    private patientApi: PatientApiService,
    private changeDetector: ChangeDetectorRef,
    private transformer: ViewDataTransformer,
    private router: Router) {
    this.sequence = '';
  }

  download(file: string) {
    this.patientApi.downloadPatientFile(this.psn, file);
  }

  ngOnInit() {
    this.psn = this.route.snapshot.params['patientSequenceNumber'];
    this.sequence = this.route.snapshot.params['sequence'] ? this.route.snapshot.params['sequence'] : 'psn';
    this.getData(this.psn);

    this.changeDetector = this.changeDetector;

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
        this.patient = this.transformer.transformPatient(response);
        this.isLoaded = true;
        setTimeout(() => {
          document.getElementById(this.sequence).scrollIntoView();
        }, 190);
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
    this.changeDetector.detectChanges();
    // console.log(evt);
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

  detectChanges(): void {
    this.changeDetector.detectChanges();
  }
}
