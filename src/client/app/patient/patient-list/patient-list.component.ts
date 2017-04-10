import { Component, OnInit } from '@angular/core';

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
  host: { '[@routerTransition]': '' },
  providers: [GmtPipe]
})
export class PatientListComponent implements OnInit {

  searchTerm: string = '';
  recordsPerPagePatients: number = 100;
  tablePatientsDefaultSort: string = 'patientSequenceNumber';
  tablePatientsData: any[];
  errorMessage: string;

  constructor(private patientApi: PatientApiService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    let gmt = new GmtPipe();
    this.patientApi.getPatientList()
      .subscribe(itemList => {
          this.tablePatientsData = itemList.map(x => {
            x.registrationDate = gmt.transform(x.registrationDate);
            x.offTrialDate = gmt.transform(x.offTrialDate);
            return x;
          });
        },
        error => this.errorMessage = <any>error
      );
  }
}
