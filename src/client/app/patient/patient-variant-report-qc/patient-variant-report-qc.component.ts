import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { routerTransition } from './../../shared/router.animations';
import {
  PatientApiService,
  PatientVariantReportInterface
} from '../patient-api.service';

/**
 * PatientVariantReportQcComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-patient-variant-report-qc',
  templateUrl: 'patient-variant-report-qc.component.html',
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
  ocpSummary: any;

  dataAvailable: boolean;
  errorMessage: string;

  constructor(
    private route: ActivatedRoute,
    private patientApi: PatientApiService) { }

  ngOnInit() {
    let psn = this.route.snapshot.params['patientSequenceNumber'];
    let analysisId = this.route.snapshot.params['analysisId'];
    this.getData(psn, analysisId);
  }

  getData(psn: string, analysisId: string) {
    this.patientApi.getPatientVariantReportQc(psn, analysisId)
      .subscribe((response: any) => {
        this.variantReport = response.variantReport;
        this.assignmentReport = response.assignmentReport;
        this.moiSummary = response.moiSummary;
        this.assay = response.assay;
        this.snv = response.snv || [];
        this.indels = response.indels || [];
        this.assignmentReason = response.assignmentReason;
        this.assignmentHistory = response.assignmentHistory;
        this.ocpSummary = response.ocpSummary;
        this.dataAvailable = true;
      },
      error => this.errorMessage = <any>error
      );
  }
}
