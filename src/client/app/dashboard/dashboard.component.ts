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

  tableARData: any[] = [];
  tableVRData: any[] = [];
  tablePatientsAwaitingData: any[] = [];

  showRow: any = {};

  dataAvailableAR: boolean = false; // use emit
  dataAvailableVR: boolean = false; // use emit
  dataAvailablePA: boolean = false; // use emit
  dataAvailableOverviewTa: boolean = false; // use emit
  dataAvailableOverviewPatients: boolean = false; // use emit
  dataAvailableOverviewBt: boolean = false; // use emit

  tablePatientsAwaitingDataInitial: number = 0;

  private isOutsideAssayValue?: boolean = null;

  set isOutsideAssayWorkflow(value: boolean) {
    this.isOutsideAssayValue = value;
    this.getDataPatientsAwaiting();
  }

  get isOutsideAssayWorkflow(): boolean {
    return this.isOutsideAssayValue;
  }

  constructor(private dashboardApi: DashboardApiService) {

  }

  ngOnInit() {
    this.getDataAR();
    this.getDataVR();
    this.getDataPatientsAwaiting();
    this.getOverviewDataTa();
    this.getOverviewDataPatients();
    this.getOverviewDataBt();
    // this.autoLoadOverviewData();
    this.tablePatientsAwaitingDataInitial = this.tablePatientsAwaitingData.length;
  }

  getDataAR() {
    let gmt = new GmtPipe();
    this.dashboardApi.getDashboardAR()
      .subscribe(itemList => {
        this.tableARData = itemList.map(x => {
          x.dateAssigned = gmt.transform(x.dateAssigned);
          return x;
        });
        this.dataAvailableAR = true; // use emit
      });
  }

  getDataVR() {
    let gmt = new GmtPipe();
    this.dashboardApi.getDashboardVR()
      .subscribe(itemList => {
        this.tableVRData = itemList.map(x => {
          x.specimenReceivedDate = gmt.transform(x.specimenReceivedDate);
          x.dateVariantReportReceived = gmt.transform(x.dateVariantReportReceived);
          return x;
        });
        this.dataAvailableVR = true; // use emit
      });
  }

  getDataPatientsAwaiting() {

    this.dashboardApi.getDashboardPatientsAwaiting()
      .subscribe(itemList => {

        if (this.isOutsideAssayValue === null) {
          this.tablePatientsAwaitingData = itemList.map(x => {

            if (x.diseases) x.diseases.shortName = x.diseases.length ? x.diseases.map((y: any) => y.shortName).join(', ') : '';

            if (x.isOutsideAssay) {

              x.daysWaiting = x.outsideBiopsy ? x.outsideBiopsy.daysWaiting : x.confirmationBiopsy.daysWaiting;

              if (x.confirmationBiopsy && x.outsideBiopsy) x.messages = x.confirmationBiopsy.messages.concat(x.outsideBiopsy.messages);
              else if (x.confirmationBiopsy) x.messages = x.confirmationBiopsy.messages;
              else if (x.outsideBiopsy) x.messages = x.outsideBiopsy.messages;

              if (x.outsideBiopsy) {

                x.diseases = x.outsideBiopsy.diseases;
                x.MLH1 = x.outsideBiopsy.MLH1;
                x.MSH2 = x.outsideBiopsy.MLH1;
                x.PTEN = x.outsideBiopsy.MLH1;
                x.RB = x.outsideBiopsy.MLH1;
                x.amoi = x.outsideBiopsy.amoi;
                x.variantReportConfirmedDate = x.outsideBiopsy.variantReportConfirmedDate;
                x.biopsySequenceNumber = x.outsideBiopsy.biopsySequenceNumber;
                x.dateSpecimenCollected = x.outsideBiopsy.dateSpecimenCollected;
                x.molecularSequenceNumber = x.outsideBiopsy.molecularSequenceNumber;
                x.lab = x.outsideBiopsy.lab;
                x.analysisId = x.outsideBiopsy.analysisId;
                x.dateMsnShipped = x.outsideBiopsy.dateMsnShipped;

              }

            }

            return x;

          });
        }

        if (this.isOutsideAssayValue === true) {
          this.tablePatientsAwaitingData = itemList.filter((x: any) => x.isOutsideAssay).map(x => {

            x.daysWaiting = x.outsideBiopsy ? x.outsideBiopsy.daysWaiting : x.confirmationBiopsy.daysWaiting;

            if (x.confirmationBiopsy && x.outsideBiopsy) x.messages = x.confirmationBiopsy.messages.concat(x.outsideBiopsy.messages);
            else if (x.confirmationBiopsy) x.messages = x.confirmationBiopsy.messages;
            else if (x.outsideBiopsy) x.messages = x.outsideBiopsy.messages;

            if (x.outsideBiopsy) {

              x.diseases = x.outsideBiopsy.diseases;
              x.MLH1 = x.outsideBiopsy.MLH1;
              x.MSH2 = x.outsideBiopsy.MLH1;
              x.PTEN = x.outsideBiopsy.MLH1;
              x.RB = x.outsideBiopsy.MLH1;
              x.amoi = x.outsideBiopsy.amoi;
              x.variantReportConfirmedDate = x.outsideBiopsy.variantReportConfirmedDate;
              x.biopsySequenceNumber = x.outsideBiopsy.biopsySequenceNumber;
              x.dateSpecimenCollected = x.outsideBiopsy.dateSpecimenCollected;
              x.molecularSequenceNumber = x.outsideBiopsy.molecularSequenceNumber;
              x.lab = x.outsideBiopsy.lab;
              x.analysisId = x.outsideBiopsy.analysisId;
              x.dateMsnShipped = x.outsideBiopsy.dateMsnShipped;

            }

            return x;

          });
        }

        if (this.isOutsideAssayValue === false) {
          this.tablePatientsAwaitingData = itemList.filter((x: any) => !x.isOutsideAssay).map(x => {
            if (x.diseases) x.diseases.shortName = x.diseases.length ? x.diseases.map((y: any) => y.shortName).join(', ') : '';
            return x;
          });
        }

        this.dataAvailablePA = true; // use emit
      });

  }

  getOverviewDataTa() {
    this.dashboardApi.getDashboardOverviewTa()
      .subscribe(itemList => {
        this.treatmentArms = itemList;
        this.dataAvailableOverviewTa = true; // use emit
      });
  }

  getOverviewDataPatients() {
    this.dashboardApi.getDashboardOverviewPatients()
      .subscribe(itemList => {
        this.patients = itemList;
        this.dataAvailableOverviewPatients = true; // use emit
      });
  }

  getOverviewDataBt() {
    this.dashboardApi.getDashboardOverviewBt()
      .subscribe(itemList => {
        this.biopsyTracking = itemList;
        this.dataAvailableOverviewBt = true; // use emit
      });
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
