import {
  Component,
  OnInit
} from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { routerTransition } from './../../shared/router.animations';
import {
  PatientApiService
} from '../patient-api.service';

/**
 * AssignmentReportComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-assignment-report',
  templateUrl: 'assignment-report.component.html',
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})
export class AssignmentReportComponent implements OnInit {

  psn: string;
  variantReport: any;
  assignmentReport: any;
  moiSummary: any;
  assay: any[];
  snv: any[];
  indels: any[];
  assignmentReason: any;
  assignmentHistory: any[];
  ocpSummary: any;

  dataAvailable: boolean;
  errorMessage: string;

  constructor(private route: ActivatedRoute, private patientApi: PatientApiService) { }

  ngOnInit() {
    this.psn = this.route.snapshot.params['patientSequenceNumber'];
    this.getData(this.psn);
  }

  getData(psn: string) {
    this.patientApi.getPatientVariantReport(psn)
      .subscribe((itemList: any) => {
        this.variantReport = itemList.variantReport;
        this.assignmentReport = itemList.assignmentReport;
        this.moiSummary = itemList.moiSummary;
        this.assay = itemList.assay;
        this.snv = itemList.snv;
        this.indels = itemList.indels;
        this.assignmentReason = itemList.assignmentReason;
        this.assignmentHistory = itemList.assignmentHistory;
        this.ocpSummary = itemList.ocpSummary;
        this.dataAvailable = true;
      },
      error => this.errorMessage = <any>error
      );
  }
}
