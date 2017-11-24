import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { routerTransition } from './../../shared/router.animations';
import {
  PatientApiService
} from '../patient-api.service';
import { QcVariantReportData } from './patient-variant-report-qc.module';

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
export class PatientVariantReportQcComponent implements OnInit, QcVariantReportData {
  psn: string;
  analysisId: string;
  molecularSequenceNumber: string;
  dateReceived: any;
  biopsySequenceNumber: string;
  mapd: string;
  tvc_version: string;
  pool1: number;
  pool2: number;
  cellularity: string;

  variantReport: any;
  assignmentReport: any;
  moiSummary: any;
  copyNumberVariants: any[];
  snvAndIndels: any[];
  geneFusions: any[];
  ocpSummary: any;
  showPools: boolean;

  parsed_vcf_genes: any;

  dnaBamFilePath: string;
  rnaBamFilePath: string;
  vcfFilePath: string;

  constructor(
    private route: ActivatedRoute,
    private patientApi: PatientApiService) { }

  ngOnInit() {
    Object.assign(this, this.route.snapshot.data['data']);
  }

  download(file: string) {
    this.patientApi.downloadPatientFile(this.psn, file);
  }

  getVariantReportLink(report: any): string {
    if (report.isOutsideAssayWorkflow) {
      return `/patients/${this.psn}/variant_reports_oa/${report.analysisId}`;
    } else {
      return `/patients/${this.psn}/biopsies/${report.biopsySequenceNumber}/variant_reports/${report.analysisId}`;
    }
  }

  getVariantReportQueryParams(report: any): any {
    if (report.isOutsideAssayWorkflow) {
      return { isOutsideAssay: report.isOutsideAssay };
    } else {
      return null;
    }
  }
}
