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

import { ViewDataTransformer } from './../view-data-transformer.service';

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

  isLoaded: boolean;
  patient: any;
  variantReport: any;
  assignmentReport: any;
  assay: any[];
  snv: any[];
  indels: any[];
  assignmentReason: any;
  assignmentHistory: any[];

  errorMessage: string;

  constructor(
    private route: ActivatedRoute, 
    private patientApi: PatientApiService, 
    private transformer: ViewDataTransformer) { }

  ngOnInit() {
    let psn = this.route.snapshot.params['patientSequenceNumber'];
    let analysisId = this.route.snapshot.params['analysisId'];
    this.getData(psn, analysisId);
  }

  getData(psn: string, analysisId: string) {
    this.patientApi.getPatientDetails(psn)
      .subscribe((response: any) => {
        this.patient = this.transformer.transformPatient(response);
        this.variantReport = this.patient.variantReports[analysisId];
        this.assignmentReport = null;
        this.isLoaded = true;
      },
      (error) => {
        this.errorMessage = <any>error;
        console.error(error);
      }
      );
  }

  scrollToAssignmentDetails(): void {
    setTimeout(() => window.scrollTo('assignment-details'), 1);
  }

}
