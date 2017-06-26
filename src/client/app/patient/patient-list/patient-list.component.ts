import {
  Component,
  OnInit
} from '@angular/core';

import { routerTransition } from './../../shared/router.animations';
import { GmtPipe } from './../../shared/pipes/gmt.pipe';
import { PatientApiService } from '../patient-api.service';

/**
 * Lazy loaded PatientListComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-patients',
  templateUrl: 'patient-list.component.html',
  styleUrls: ['patient-list.component.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})
export class PatientListComponent implements OnInit {

  searchTermPatients: string = '';
  recordsPerPagePatients: number = 100;
  tablePatientsDefaultSort: string = 'patientSequenceNumber';
  tablePatientsData: any[];
  errorMessage: string;
  dataAvailable: boolean = false;
  activePage: number = 1;
  patientCount: any;
  page: number = this.activePage;
  size: number = this.recordsPerPagePatients;
  sortOrder: string = 'asc';
  sortBy: string = this.tablePatientsDefaultSort;

  constructor(private patientApi: PatientApiService) { }

  ngOnInit() {
    this.getPatientCount();
  }

  getData() {
    let gmt = new GmtPipe();
    this.patientApi.getPatientList(this.page, this.size, this.sortOrder, this.sortBy)
      .subscribe(itemList => {
        this.tablePatientsData = itemList.map(x => {
          x.registrationDate = gmt.transform(x.registrationDate);
          x.offTrialDate = gmt.transform(x.offTrialDate);
          x.diseaseList = x.diseases && x.diseases.length ? x.diseases.map((y: any) => y.shortName).join(', ') : '';
          x.currentTreatmentArm = x.patientAssignments && x.patientAssignments.length ? x.patientAssignments[0].treatmentArm : null;
          return x;
        });
        this.dataAvailable = true;
      },
      error => this.errorMessage = <any>error
      );
  }

  getPatientCount() {
    this.patientApi.getPatientCount()
      .subscribe(itemList => {
        this.patientCount = itemList;
        this.patientCount = this.patientCount['Total Patients Count'];
        this.getData();
      },
      error => this.errorMessage = <any>error
      );
  }

  currentPageActive(evt: any): void {
    console.log(evt);
    let params = evt.split(',');
    this.page = params[0];
    this.size = params[1];
    this.sortOrder = params[2];
    this.sortBy = params[3];
    // console.log(this.page);
    // console.log(this.size);
    // console.log(this.sortOrder);
    // console.log(this.sortBy);
    console.log(this.searchTermPatients);
  }

}
