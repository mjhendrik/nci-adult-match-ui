import {
  Component,
  OnInit,
  AfterViewInit
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

import { routerTransition } from './../../shared/router.animations';
import { PatientApiService } from '../patient-api.service';
import { ViewDataTransformer } from './../view-data-transformer.service';
import { PatientData, Tabs } from './patient-details.module';
import { FileUploadService } from '../file-upload/file-upload.service';

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
  dzConfigDocuments: DropzoneConfigInterface;

  constructor(private route: ActivatedRoute,
    private patientApi: PatientApiService,
    private transformer: ViewDataTransformer,
    private router: Router,
    private fileUploadService: FileUploadService) {

    this.dzConfigDocuments = {
      // Change this to your upload POST address:
      url: 'https://httpbin.org/post',
      // maxFiles: 3,
      // parallelUploads: 3,
      timeout: 0,
      maxFilesize: 50000, // size in MB
      // acceptedFiles: '.zip,.bam',
      addRemoveLinks: true
    };

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

  openUpload(msn: string, zipFilePath: string, dnaFilePath: string, cdnaFilePath: string): void {
    this.fileUploadService.msn = msn;
    this.fileUploadService.paths.zipFile = zipFilePath;
    this.fileUploadService.paths.dnaFile = dnaFilePath;
    this.fileUploadService.paths.cdnaFile = cdnaFilePath;
  }
}
