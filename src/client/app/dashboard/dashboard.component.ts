import {
  Component,
  OnInit
} from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { routerTransition } from './../shared/router.animations';
import { GmtPipe } from './../shared/pipes/gmt.pipe';
import { PatientApiService } from '../patient/patient-api.service';
import { TreatmentArmApiService } from '../treatment-arm/treatment-arm-api.service';

export interface LoadableData<T> {
  isLoaded: boolean;
  data: T;
}

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

  patientSummary: any = {};
  treatmentArmSummary: any = {};
  biopsyTrackingSummary: any = {};

  isLoadedPatientSummary: boolean = false;
  isLoadedtreatmentArmSummary: boolean = false;
  isLoadedbiopsyTrackingSummary: boolean = false;

  pendingAssignmentReports: LoadableData<any[]> = { isLoaded: false, data: [] };
  pendingVariantReports: LoadableData<any[]> = { isLoaded: false, data: [] };
  patientsAwaiting: LoadableData<any[]> = { isLoaded: false, data: [] };

  showRow: any = {};

  tablePendingAssignmentReportsDataInitial: number = 0;
  tablePendingVariantReportsDataInitial: number = 0;
  tablePatientsAwaitingDataInitial: number = 0;

  private isOutsideAssayValue?: boolean = null;

  set isOutsideAssayWorkflow(value: boolean) {
    this.isOutsideAssayValue = value;
    this.getPatientsAwaitingData();
  }

  get isOutsideAssayWorkflow(): boolean {
    return this.isOutsideAssayValue;
  }

  constructor(
    private patientApi: PatientApiService,
    private treatmentArmApi: TreatmentArmApiService) { }

  ngOnInit() {
    this.getPatientSummaryData();
    this.getTreatmentArmSummaryData();
    this.getBiopsyTrackingSummaryData();

    this.getPendingAssignmentReportsData();
    this.getPendingVariantReportsData();
    this.getPatientsAwaitingData();

    this.autoLoadOverviewData();
    this.tablePatientsAwaitingDataInitial = this.patientsAwaiting.data.length;
  }

  getPendingAssignmentReportsData() {
    let gmt = new GmtPipe();
    this.patientApi.getPendingAssignmentReports()
      .subscribe(itemList => {
        this.pendingAssignmentReports.data = itemList.map(x => {
          x.dateAssigned = gmt.transform(x.dateAssigned);
          return x;
        });
        this.tablePendingAssignmentReportsDataInitial = this.pendingAssignmentReports.data.length;
        this.pendingAssignmentReports.isLoaded = true;
      });
  }

  getPendingVariantReportsData() {
    let gmt = new GmtPipe();
    this.patientApi.getPendingVariantReports()
      .subscribe(itemList => {
        this.pendingVariantReports.data = itemList.map(x => {
          x.specimenReceivedDate = gmt.transform(x.specimenReceivedDate);
          x.dateVariantReportReceived = gmt.transform(x.dateVariantReportReceived);
          return x;
        });
        this.tablePendingVariantReportsDataInitial = this.pendingVariantReports.data.length;
        this.pendingVariantReports.isLoaded = true;
      });
  }

  getPatientsAwaitingData() {

    this.patientsAwaiting.data = [];
    this.patientsAwaiting.isLoaded = false;

    const convertMessages: (x: any) => any = (x => {
      if (x.confirmationBiopsy && x.outsideBiopsy) {
        return x.confirmationBiopsy.messages.concat(x.outsideBiopsy.messages);
      } else if (x.confirmationBiopsy) {
        return x.confirmationBiopsy.messages;
      } else if (x.outsideBiopsy) {
        return x.outsideBiopsy.messages;
      }
    });

    const convertOutsideBiopsy: (x: any) => void = (x => {
      x.diseases = x.outsideBiopsy.diseases;
      x.MLH1 = x.outsideBiopsy.MLH1;
      x.MSH2 = x.outsideBiopsy.MSH2;
      x.PTEN = x.outsideBiopsy.PTEN;
      x.RB = x.outsideBiopsy.RB;
      x.amoi = x.outsideBiopsy.amoi;
      x.variantReportConfirmedDate = x.outsideBiopsy.variantReportConfirmedDate;
      x.biopsySequenceNumber = x.outsideBiopsy.biopsySequenceNumber;
      x.dateSpecimenCollected = x.outsideBiopsy.dateSpecimenCollected;
      x.molecularSequenceNumber = x.outsideBiopsy.molecularSequenceNumber;
      x.lab = x.outsideBiopsy.lab;
      x.analysisId = x.outsideBiopsy.analysisId;
      x.dateMsnShipped = x.outsideBiopsy.dateMsnShipped;
    });

    const convertAnyItem: (x: any) => any = (x => {
      if (x.diseases) {
        x.diseases.shortName = x.diseases.length ? x.diseases.map((y: any) => y.shortName).join(', ') : '';
      }

      if (x.isOutsideAssay) {
        x.daysWaiting = x.outsideBiopsy ? x.outsideBiopsy.daysWaiting : x.confirmationBiopsy.daysWaiting;
        x.messages = convertMessages(x);

        if (x.outsideBiopsy) {
          convertOutsideBiopsy(x);
        }
      }

      return x;
    });

    const convertOaItem: (x: any) => any = (x => {
      x.daysWaiting = x.outsideBiopsy ? x.outsideBiopsy.daysWaiting : x.confirmationBiopsy.daysWaiting;
      x.messages = convertMessages(x);

      if (x.outsideBiopsy) {
        convertOutsideBiopsy(x);
      }

      return x;
    });

    const convertRegularItem: (x: any) => any = (x => {
      if (x.diseases) {
        x.diseases.shortName = x.diseases.length ? x.diseases.map((y: any) => y.shortName).join(', ') : '';
      }
      return x;
    });

    this.patientApi.getPatientsAwaiting()
      .subscribe(itemList => {

        if (this.isOutsideAssayValue === null) {
          this.patientsAwaiting.data = itemList.map(convertAnyItem);
        }

        if (this.isOutsideAssayValue === true) {
          this.patientsAwaiting.data = itemList
            .filter((x: any) => x.isOutsideAssay)
            .map(convertOaItem);
        }

        if (this.isOutsideAssayValue === false) {
          this.patientsAwaiting.data = itemList
            .filter((x: any) => !x.isOutsideAssay)
            .map(convertRegularItem);
        }

        this.patientsAwaiting.isLoaded = true;
      });

  }

  getTreatmentArmSummaryData() {
    this.treatmentArmApi.getOverviewTa()
      .subscribe(data => {
        this.treatmentArmSummary = data;
        this.isLoadedPatientSummary = true;
      });
  }

  getPatientSummaryData() {
    this.patientApi.getOverviewPatients()
      .subscribe(data => {
        this.patientSummary = data;
        this.isLoadedtreatmentArmSummary = true;
      });
  }

  getBiopsyTrackingSummaryData() {
    this.patientApi.getOverviewBt()
      .subscribe(data => {
        this.biopsyTrackingSummary = data;
        this.isLoadedbiopsyTrackingSummary = true;
      });
  }

  autoLoadOverviewData() {
    Observable.interval(1000 * 30).subscribe(x => {
      this.getTreatmentArmSummaryData();
      this.getPatientSummaryData();
      this.getBiopsyTrackingSummaryData();
      this.timestamp = new Date();
    });
  }

}
