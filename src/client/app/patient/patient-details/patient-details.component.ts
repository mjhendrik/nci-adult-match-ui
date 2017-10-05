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
  roles: any[] = [];
  tabs: Tabs;
  enableFileUpload = false;

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

    if (roles.indexOf('ADMIN') !== -1
      || roles.indexOf('SYSTEM') !== -1
      || roles.indexOf('CLIA_') !== -1) {
      this.enableFileUpload = true;
    }
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

  upload(molecularSequenceNumber: string): void {
    const fileNames = ['Variant', 'DNA', 'cDNA'];
    for (let file of fileNames) {
      this.patientApi.upload(file, molecularSequenceNumber)
        .subscribe((url: string) => {
          let dropzoneUrl = url;
        });
    }
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
