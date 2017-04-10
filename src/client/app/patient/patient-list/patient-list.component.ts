import {
  Component,
  trigger,
  state,
  style,
  transition,
  animate,
  OnInit
} from '@angular/core';

import { routerTransition } from './../../shared/router.animations';
import { GMTFilter } from './../../shared/pipes/gmt';
import { PatientApiService } from '../patient-api.service';

/**
 * This class represents the lazy loaded PatientListComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-patients',
  templateUrl: 'patient-list.component.html',
  styleUrls: ['patient-list.component.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' },
  providers: [GMTFilter]
})
export class PatientListComponent implements OnInit {

  searchTerm: string = '';
  recordsPerPagePatients: number;
  tablePatientsDefaultSort: string;
  items: any[] = [];
  errorMessage: string;

  constructor(private patientApi: PatientApiService) {}

  ngOnInit() {
    this.getData();

    this.recordsPerPagePatients = 100;
    this.tablePatientsDefaultSort = 'patientSequenceNumber';

    let gmt = new GMTFilter();

    for (let i = 0; i < this.items.length; i++) {
      this.items[i].registrationDate = gmt.transform(this.items[i].registrationDate);
    }

    for (let i = 0; i < this.items.length; i++) {
      this.items[i].offTrialDate = gmt.transform(this.items[i].offTrialDate);
    }
  }

  getData() {
    this.patientApi.getPatientList()
      .subscribe(
        items => this.items = items,
        error => this.errorMessage = <any>error
      );
  }
}
