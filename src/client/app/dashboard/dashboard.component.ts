import {
  Component,
  OnInit
} from '@angular/core';
import { routerTransition } from './../shared/router.animations';
import { GmtPipe } from './../shared/pipes/gmt.pipe';
import {
  DashboardApiService,
  DashboardInterface,
  DashboardOverviewInterfaceTa,
  DashboardOverviewInterfacePatients,
  DashboardOverviewInterfaceBt
} from './dashboard-api.service';


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

  sortByAsc: string = 'asc';
  sortByDesc: string = 'desc';

  timestamp: any = new Date();

  patients: any;
  treatmentArms: any;
  biopsyTracking: any;

  tableARData: any[];
  tableVRData: any[];
  tablePatientsAwaitingData: any[];
  dataAvailable: boolean = false;
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
    this.getData();
    // this.autoLoadOverviewData();
  }

  getData() {
    let gmt = new GmtPipe();
    this.dashboardApi.getDashboard()
      .subscribe((itemList: DashboardInterface) => {

        this.dataAvailable = true;

        this.tableARData = itemList.tableARData.map(x => {
          x.dateAssigned = gmt.transform(x.dateAssigned);
          return x;
        });

        this.tableVRData = itemList.tableVRData.map(x => {
          x.specimenReceivedDate = gmt.transform(x.specimenReceivedDate);
          x.ngsDateReceived = gmt.transform(x.ngsDateReceived);
          return x;
        });

        this.tablePatientsAwaitingData = itemList.tablePatientsAwaitingData.map(x => {
          x.date_verified = gmt.transform(x.date_verified);
          return x;
        });

      },
      error => this.errorMessage = <any>error
      );
  }

  getOverviewDataTa() {
    this.dashboardApi.getDashboardOverviewTa()
      .subscribe((itemList: DashboardOverviewInterfaceTa) => {
        this.treatmentArms = itemList;
        this.overviewDataAvailableTa = true;
      },
      error => this.errorMessage = <any>error
      );
  }

  getOverviewDataPatients() {
    this.dashboardApi.getDashboardOverviewPatients()
      .subscribe((itemList: DashboardOverviewInterfacePatients) => {
        this.patients = itemList;
        this.overviewDataAvailablePatients = true;
      },
      error => this.errorMessage = <any>error
      );
  }

  getOverviewDataBt() {
    this.dashboardApi.getDashboardOverviewBt()
      .subscribe((itemList: DashboardOverviewInterfaceBt) => {
        this.biopsyTracking = itemList;
        this.overviewDataAvailableBt = true;
      },
      error => this.errorMessage = <any>error
      );
  }

  // autoLoadOverviewData() {
  //   setInterval(() => {

  //     this.dashboardApi.getDashboardOverview()
  //       .subscribe((itemList: DashboardOverviewInterface) => {
  //         this.patients = itemList.patients;
  //         this.treatmentArms = itemList.treatmentArms;
  //         this.biopsyTracking = itemList.biopsyTracking;
  //       },
  //       error => this.errorMessage = <any>error
  //       );

  //     this.timestamp = new Date();

  //   }, 1000 * 30);
  // }

}
