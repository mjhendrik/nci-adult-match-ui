import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { routerTransition } from './../../shared/router.animations';
import { PatientApiService } from '../patient-api.service';
import { ViewDataTransformer } from './../view-data-transformer.service';
import { PatientData, Tabs } from './patient-details.module';
import {
  dropzoneConfigVariantZip,
  dropzoneConfigDnaBam,
  dropzoneConfigCdnaBam,
  dropzoneConfigDocuments
} from './dropzone.config';

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
  psn: string = '';
  patient: any = {};
  summaryData: any = {};
  entityId: string = '';
  section: string = '';
  uploadedFiles: any[];
  fileCount: number = 0;
  variantZip: boolean = false;
  dnaBam: boolean = false;
  cdnaBam: boolean = false;
  configVariantZip = dropzoneConfigVariantZip;
  configDnaBam = dropzoneConfigDnaBam;
  configCdnaBam = dropzoneConfigCdnaBam;
  configDocuments = dropzoneConfigDocuments;

  msn: string = '';
  filename: string = '';
  filenames: any[] = [];
  dropzoneUrl: any[] = [];
  dropzoneUrlVariant: string = '';
  dropzoneUrlDna: string = '';
  dropzoneUrlCdna: string = '';

  roles: any[] = [];
  fileUploadBtn: boolean = false;

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

    this.roles = JSON.parse(localStorage.getItem('profile')).roles;

    let roles = this.roles.filter(function (arrayElement) {
      return arrayElement.indexOf('CLIA_') !== -1 || arrayElement === 'SYSTEM' || arrayElement === 'ADMIN';
    });

    if (roles.indexOf('ADMIN') !== -1 || roles.indexOf('SYSTEM') !== -1 || roles.indexOf('CLIA_') !== -1) this.fileUploadBtn = true;

    // console.log(this.patient.biopsies[0].nucleicAcidSendouts[0].analyses[0].analysisId);
    // console.log(this.patient.biopsies[0].nucleicAcidSendouts[0].molecularSequenceNumber);

    this.msn = this.patient.biopsies[0].nucleicAcidSendouts[0].molecularSequenceNumber;

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
    for (let i = 0; i < 3; i++) {
      this.filenames = ['Variant', 'DNA', 'cDNA'];
      this.filename = this.filenames[i];
      this.patientApi.manualUpload(this.filename, this.msn)
        .subscribe((itemList: any) => {
          this.dropzoneUrl[i] = itemList;
          // this.dropzoneUrl[i] = 10 * i;
        });
    }
    // this.dropzoneUrlVariant = this.dropzoneUrl[0];
    // this.dropzoneUrlDna = this.dropzoneUrl[1];
    // this.dropzoneUrlCdna = this.dropzoneUrl[2];
    // console.log('herererererer');
    // console.log(this.dropzoneUrlVariant);
    // console.log(this.dropzoneUrlDna);
    // console.log(this.dropzoneUrlCdna);
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
