import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { routerTransition } from './../../shared/router.animations';
import {
  PatientApiService
} from '../patient-api.service';

import { ViewDataTransformer } from './../view-data-transformer.service';
import { scrollToElement } from '../../shared/utils/utils';
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
  psn: string;
  analysisId: string;

  errorMessage: string;

  constructor(
    private route: ActivatedRoute, 
    private patientApi: PatientApiService, 
    private transformer: ViewDataTransformer) { }

  ngOnInit() {
    this.psn = this.route.snapshot.params['patientSequenceNumber'];
    this.analysisId = this.route.snapshot.params['analysisId'];
    this.getData(this.psn, this.analysisId);
  }

  download(file: string) {
    this.patientApi.downloadPatientFile(this.psn, file);
  }

  getData(psn: string, analysisId: string) {
    this.patientApi.getPatientDetails(psn)
      .subscribe((response: any) => {
        this.patient = this.transformer.transformPatient(response);
        let analysis = this.patient.analyses[analysisId];
        this.variantReport = analysis.variantReport;
        this.assignmentReport = analysis.assignmentReport;
        this.assignmentHistory = this.patient.patientAssignments;
        this.isLoaded = true;
      },
      (error) => {
        this.errorMessage = <any>error;
        console.error(error);
      }
      );
  }

  scrollTo = scrollToElement;
}
