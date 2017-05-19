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

  constructor(private patientApi: PatientApiService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.patientApi.getPatientList()
      .subscribe(itemList => {
        this.tablePatientsData = itemList.map(x => {
          x.diseaseList = x.diseases && x.diseases.length ? x.diseases.map((y: any) => y.shortName).join(', ') : '';
          x.currentTreatmentArm = x.patientAssignments && x.patientAssignments.length ? x.patientAssignments[0].treatmentArm : null;
          return x;
        });
      },
      error => this.errorMessage = <any>error
      );
  }
}
