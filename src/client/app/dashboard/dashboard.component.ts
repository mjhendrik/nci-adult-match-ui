import {
  Component,
  OnInit
} from '@angular/core';
import { routerTransition } from './../shared/router.animations';
import { GmtPipe } from './../shared/pipes/gmt.pipe';
import { DashboardApiService } from './dashboard-api.service';
import { ActivatedRoute } from '@angular/router';

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

  errorMessage: string;

  showRow: any = {};

  constructor(private dashboardApi: DashboardApiService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.getDataAR(this.route.snapshot.data['data'].AR);
    this.getDataVR(this.route.snapshot.data['data'].VR);
    this.getDataPatientsAwaiting(this.route.snapshot.data['data'].PatientsAwaiting);
    this.getOverviewDataTa(this.route.snapshot.data['data'].OverviewTa);
    this.getOverviewDataPatients(this.route.snapshot.data['data'].OverviewPatients);
    this.getOverviewDataBt(this.route.snapshot.data['data'].OverviewBt);
    // this.autoLoadOverviewData();
  }

  getDataAR(itemList: any[]) {
    let gmt = new GmtPipe();
    this.tableARData = itemList.map(x => {
      x.dateAssigned = gmt.transform(x.dateAssigned);
      return x;
    });
  }

  getDataVR(itemList: any[]) {
    let gmt = new GmtPipe();
    this.tableVRData = itemList.map(x => {
      x.specimenReceivedDate = gmt.transform(x.specimenReceivedDate);
      x.dateVariantReportReceived = gmt.transform(x.dateVariantReportReceived);
      return x;
    });

  }

  getDataPatientsAwaiting(itemList: any[]) {
    this.tablePatientsAwaitingData = itemList.filter((x: any) => !x.isOutsideAssay).map(x => {
      if (x.diseases) x.diseases.shortName = x.diseases && x.diseases.length ? x.diseases.map((y: any) => y.shortName).join(', ') : '';
      if (!x.daysWaiting) x.daysWaiting = x.outsideBiopsy.daysWaiting;
      if (!x.messages) x.messages = x.confirmationBiopsy.messages.concat(x.outsideBiopsy.messages);
      return x;
    });
  }

  getOverviewDataTa(itemList: any) {
    this.treatmentArms = itemList;
  }

  getOverviewDataPatients(itemList: any) {
    this.patients = itemList;
  }

  getOverviewDataBt(itemList: any) {
    this.biopsyTracking = itemList;
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
