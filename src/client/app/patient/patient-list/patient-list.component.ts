import {
  Component,
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
  recordsPerPagePatients: number = 100;
  tablePatientsDefaultSort: string = 'patientSequenceNumber';
  itemList: any[] = [];
  errorMessage: string;

  constructor(private patientApi: PatientApiService) {}

  ngOnInit() {
    //this.getData();
  }

  getData() {
    this.patientApi.getPatientList()
      .subscribe(
        itemList => {
          this.itemList = itemList;
          // let gmt = new GMTFilter();

          // for (let i = 0; i < this.itemList.length; i++) {
          //   this.itemList[i].registrationDate = gmt.transform(this.itemList[i].registrationDate);
          // }

          // for (let i = 0; i < this.itemList.length; i++) {
          //   this.itemList[i].offTrialDate = gmt.transform(this.itemList[i].offTrialDate);
          // }          
        },
        error => this.errorMessage = <any>error
      );
  }
}
