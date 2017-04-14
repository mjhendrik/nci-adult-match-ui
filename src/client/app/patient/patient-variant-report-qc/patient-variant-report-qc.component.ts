import {
  Component,
  OnInit
} from '@angular/core';

import { routerTransition } from './../../shared/router.animations';
import {
  PatientApiService
} from '../patient-api.service';

/**
 * This class represents the lazy loaded PatientVariantReportQcComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-patient-variant-report-qc',
  templateUrl: 'patient-variant-report-qc.component.html',
  styleUrls: ['patient-variant-report-qc.component.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})
export class PatientVariantReportQcComponent implements OnInit {

  variantReport: any;
  assignmentReport: any;
  moiSummary: any;
  assay: any[];
  snv: any[];
  indels: any[];
  assignmentReason: any;
  assignmentHistory: any[];

  dataAvailable: boolean;
  errorMessage: string;

  constructor(private patientApi: PatientApiService) { }

  ngOnInit() {
    this.getData();
    this.dataAvailable = false;
  }

  getData() {
    this.patientApi.getPatientVariantReportQcModule()
      .subscribe((itemList: PatientVariantReportQcModuleInterface) => {
        this.variantReport = itemList.variantReport;
        this.assignmentReport = itemList.assignmentReport;
        this.moiSummary = itemList.moiSummary;
        this.assay = itemList.assay;
        this.snv = itemList.snv;
        this.indels = itemList.indels;
        this.assignmentReason = itemList.assignmentReason;
        this.assignmentHistory = itemList.assignmentHistory;
        this.dataAvailable = true;
      },
      error => this.errorMessage = <any>error
      );
  }

  scrollToAssignmentDetails(): void {
    setTimeout(() => window.scrollTo('assignment-details'), 1);
  }

}
