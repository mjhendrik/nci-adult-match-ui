import {
  Component,
  OnInit
} from '@angular/core';

import { routerTransition } from './../../shared/router.animations';
import {
  PatientApiService,
  PatientDetailsInterface
} from '../patient-api.service';

/**
 * This class represents the lazy loaded PatientDetailsComponent.
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

  constructor(private patientApi: PatientApiService) { }

  ngOnInit() {
    this.getData();
    this.dataAvailable = false;
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

}
