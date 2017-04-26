import {
  Component,
  OnInit
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

  config1: DropzoneConfigInterface;
  config2: DropzoneConfigInterface;

  constructor(private patientApi: PatientApiService) { }

  ngOnInit() {
    this.getData();

    const DROPZONE_CONFIG1: DropzoneConfigInterface = {
      // Change this to your upload POST address:
      server: 'https://httpbin.org/post',
      maxFiles: 3,
      maxFilesize: 20000, // size in MB
      acceptedFiles: '.zip,.bam',
      addRemoveLinks: true
    };

    this.config1 = DROPZONE_CONFIG1;

    const DROPZONE_CONFIG2: DropzoneConfigInterface = {
      // Change this to your upload POST address:
      server: 'https://httpbin.org/post',
      maxFilesize: 20000, // size in MB
      // acceptedFiles: '.zip,.bam',
      addRemoveLinks: true
    };

    this.config2 = DROPZONE_CONFIG2;

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
    console.log(evt);
  }

  onUploadError(evt: any): void {
    console.log(evt);
  }


}
