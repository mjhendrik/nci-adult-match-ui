import {
  Component,
  OnInit
} from '@angular/core';
import { routerTransition } from './../shared/router.animations';
import { GmtPipe } from './../shared/pipes/gmt.pipe';
import { DashboardApiService } from './dashboard-api.service';

/**
 * DashboardComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})
export class DashboardComponent implements OnInit {

  searchtermVR: string = '';
  searchtermAR: string = '';
  searchtermPatientsAwaiting: string = '';

  recordsPerPageVR: number = 10;
  recordsPerPageAR: number = 10;
  recordsPerPagePatientsAwaiting: number = 10;

  tableVRDefaultSort: string = 'daysPending';
  tableARDefaultSort: string = 'hoursPending';
  tablePatientsAwaitingDefaultSort: string = 'daysWaiting';

  sortByDescVR: string = 'desc';
  sortByDescAR: string = 'desc';
  sortByDescPatientsAwaiting: string = 'desc';
  
  timestamp: any = new Date();

  patients: any;
  treatmentArms: any;
  biopsyTracking: any;

  tableARData: any[];
  tableVRData: any[];
  tablePatientsAwaitingData: any[];
  dataAvailableAR: boolean = false;
  dataAvailableVR: boolean = false;
  dataAvailablePA: boolean = false;
  overviewDataAvailableTa: boolean = false;
  overviewDataAvailablePatients: boolean = false;
  overviewDataAvailableBt: boolean = false;

  errorMessage: string;

  constructor(private dashboardApi: DashboardApiService) {

  }

  ngOnInit() {
    this.getOverviewDataTa();
    this.getOverviewDataPatients();
    this.getOverviewDataBt();
    this.getDataAR();
    this.getDataVR();
    this.getDataPatientsAwaiting();
    // this.autoLoadOverviewData();
  }

  getDataAR() {
    let gmt = new GmtPipe();
    this.dashboardApi.getDashboardAR()
      .subscribe((itemList: any[]) => {

        this.dataAvailableAR = true;

        this.tableARData = itemList.map(x => {
          x.dateAssigned = gmt.transform(x.dateAssigned);
          return x;
        });

      },
      error => this.errorMessage = <any>error
      );
  }

  getDataVR() {
    let gmt = new GmtPipe();
    this.dashboardApi.getDashboardVR()
      .subscribe((itemList: any[]) => {

        this.dataAvailableVR = true;

        this.tableVRData = itemList.map(x => {
          x.specimenReceivedDate = gmt.transform(x.specimenReceivedDate);
          x.dateVariantReportReceived = gmt.transform(x.dateVariantReportReceived);
          return x;
        });

      },
      error => this.errorMessage = <any>error
      );
  }

  getDataPatientsAwaiting() {
    let gmt = new GmtPipe();
    this.dashboardApi.getDashboardPatientsAwaiting()
      .subscribe((itemList: any[]) => {

        this.dataAvailablePA = true;

        this.tablePatientsAwaitingData = itemList.map(x => {
          x.date_verified = gmt.transform(x.date_verified);
          return x;
        });

      },
      error => this.errorMessage = <any>error
      );
  }

  getOverviewDataTa() {
    this.dashboardApi.getDashboardOverviewTa()
      .subscribe((itemList: any) => {
        this.treatmentArms = itemList;
        this.overviewDataAvailableTa = true;
      },
      error => this.errorMessage = <any>error
      );
  }

  getOverviewDataPatients() {
    this.dashboardApi.getDashboardOverviewPatients()
      .subscribe((itemList: any) => {
        this.patients = itemList;
        this.overviewDataAvailablePatients = true;
      },
      error => this.errorMessage = <any>error
      );
  }

  getOverviewDataBt() {
    this.dashboardApi.getDashboardOverviewBt()
      .subscribe((itemList: any) => {
        this.biopsyTracking = itemList;
        this.overviewDataAvailableBt = true;
      },
      error => this.errorMessage = <any>error
      );
  }

  // autoLoadOverviewData() {
  //   setInterval(() => {
  //     this.getOverviewDataTa();
  //     this.getOverviewDataPatients();
  //     this.getOverviewDataBt();
  //     this.timestamp = new Date();
  //   }, 1000 * 30);
  // }

}
