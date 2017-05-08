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
 * PatientVariantReportComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-patient-variant-report',
  templateUrl: 'patient-variant-report.component.html',
  styleUrls: ['patient-variant-report.component.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})
export class PatientVariantReportComponent implements OnInit {

  variantReport: any;
  assignmentReport: any;
  moiSummary: any;
  assay: any[];
  snv: any[];
  indels: any[];
  assignmentReason: any;
  assignmentHistory: any[];

  dataAvailable: boolean = false;
  errorMessage: string;

  constructor(private route: ActivatedRoute, private patientApi: PatientApiService) { }

  ngOnInit() {
    let psn = this.route.snapshot.params['patientSequenceNumber'];
    let analysisId = this.route.snapshot.params['analysisId'];
    this.getData(psn, analysisId);
  }

  getData(psn: string, analysisId: string) {
    this.patientApi.getPatientVariantReport()
      .subscribe((itemList: PatientVariantReportInterface) => {
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
