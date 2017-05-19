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
  variantReport: any;
  assignmentReport: any;
  moiSummary: any;
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
        this.variantReport = this.transformer.transformPatient(response);
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
