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
import { Observable } from "rxjs/Observable";
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
  parsed_vcf_genes: any;

  errorMessage: string;

  scrollTo = scrollToElement;

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
    Observable.forkJoin(
      this.patientApi.getPatientDetails(psn),
      this.patientApi.getPatientCopyNumberReport(psn, analysisId)
    ).subscribe(
      data => {
        this.patient = this.transformer.transformPatient(data[0]);
        let analysis = this.patient.analyses[analysisId];
        this.variantReport = analysis.variantReport;
        this.assignmentReport = analysis.assignmentReport;
        this.assignmentHistory = this.patient.patientAssignments;

        this.parsed_vcf_genes = data[1].parsed_vcf_genes;

        this.isLoaded = true;
      },
      err => console.error(err)
      );
  }

}
