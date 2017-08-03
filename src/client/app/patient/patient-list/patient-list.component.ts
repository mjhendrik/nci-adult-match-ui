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
  recordsPerPagePatients: number = 10;
  tablePatientsDefaultSort: string = 'patientSequenceNumber';
  tablePatientsData: any[] = [];
  errorMessage: string;
  activePage: number = 1;
  patientCount: number;
  patientTotal: number;
  previous: any;
  page: number = this.activePage;
  size: number = this.recordsPerPagePatients;
  sortOrder: string = 'asc';
  sortBy: string = this.tablePatientsDefaultSort;

  private isOutsideAssayValue?: boolean = null;
  set isOutsideAssay(value: boolean) {
    this.isOutsideAssayValue = value;
    this.refreshData();
  }
  get isOutsideAssay(): boolean {
    return this.isOutsideAssayValue;
  }

  constructor(private patientApi: PatientApiService) { }

  ngOnInit() {
    this.refreshData();
  }

  getData() {
    let gmt = new GmtPipe();
    this.patientApi.getPatientList(this.page, this.size, this.sortOrder, this.sortBy, this.searchTermPatients, this.isOutsideAssay)
      .subscribe(itemList => {
        this.tablePatientsData = itemList.map(x => {
          x.registrationDate = gmt.transform(x.registrationDate);
          x.offTrialDate = gmt.transform(x.offTrialDate);
          x.diseases.shortName = x.diseases && x.diseases.length ? x.diseases.map((y: any) => y.shortName).join(', ') : '';
          x.patientAssignments.treatmentArm = x.patientAssignments && x.patientAssignments.length ? x.patientAssignments[0].treatmentArm : null;
          return x;
        });
      },
      error => this.errorMessage = <any>error
      );
  }

  refreshData() {
    this.patientApi.getPatientCount(this.searchTermPatients, this.isOutsideAssay)
      .subscribe(itemList => {
        this.patientCount = itemList;
        // this.tablePatientsData = []; // add animation
        this.getData();
        this.getPatientTotal();
      },
      error => this.errorMessage = <any>error
      );
  }

  getPatientTotal() {
    this.patientApi.getPatientTotal()
      .subscribe(itemList => {
        this.patientTotal = itemList;
      },
      error => this.errorMessage = <any>error
      );
  }

  onSearchChanged(val: any) {
    if (this.searchTermPatients !== val) {
      this.searchTermPatients = val;
      this.previous = this.page + ',' + this.size + ',' + this.sortOrder + ',' + this.sortBy + ',' + this.searchTermPatients;
      this.refreshData();
    }
    this.searchTermPatients = val;
  }

  currentPageActive(evt: any): void {
    evt += ',' + this.searchTermPatients;
    let params = evt.split(',');
    this.page = parseInt(params[0]);
    this.size = parseInt(params[1]);
    this.sortOrder = params[2];
    this.sortBy = params[3];
    if (this.previous !== evt && this.previous !== undefined)
      this.refreshData();
    this.previous = evt;
  }

  SortStatus(evt: any): void {
    evt += ',' + this.searchTermPatients;
    let params = evt.split(',');
    this.page = parseInt(params[0]);
    this.size = parseInt(params[1]);
    this.sortOrder = params[2];
    this.sortBy = params[3];
    if (this.previous !== evt) {
      this.refreshData();
    }
    this.previous = evt;
  }

}
