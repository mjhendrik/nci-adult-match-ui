import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { routerTransition } from './../../shared/router.animations';
import {
  PatientApiService,
  ApiError,
  ApiSuccess
} from '../patient-api.service';
import { QcVariantReportData } from './patient-variant-report-qc.module';
import { DownloadService } from '../../shared/utils/download.service';
import { ToastrService } from '../../shared/error-handling/toastr.service';
import { ViewDataTransformer } from './../view-data-transformer.service';

/**
 * PatientVariantReportQcComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'app-patient-variant-report-qc',
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
  patient: any = {};

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
    public transformer: ViewDataTransformer,
    private route: ActivatedRoute,
    private patientApi: PatientApiService,
    private toastrService: ToastrService,
    private downloadApi: DownloadService) { }

  ngOnInit() {
    Object.assign(this, this.route.snapshot.data['data']);

    this.patient.raceList = this.patient.races.join(', ');
    if (this.patient.diseases && this.patient.diseases.length) {
      if (this.patient.isOutsideAssayWorkflow) {
        this.patient.disease.outsideData = this.patient.diseases.length > 0 ? this.patient.diseases[0] : {};
        this.patient.disease.matchData = this.patient.diseases.length > 1 ? this.patient.diseases[1] : {};
      } else {
        this.patient.disease = this.patient.diseases && this.patient.diseases.length ? this.patient.diseases[0] : {};
      }
    }
    this.patient.concordance = this.transformConcordance(this.patient);
  }

  download(file: string) {
    this.patientApi
      .downloadPatientFile(this.psn, file)
      .subscribe((resp: ApiError | ApiSuccess) => {
        switch (resp.kind) {
          case 'error':
            this.showToast(resp.message, true);
            break;
          case 'success':
            let url = resp.data ? resp.data.download_url : null;
            if (url) {
              this.downloadApi.downloadFile(url);
            } else {
              this.showToast('Unable to read the file URL', true);
            }
            break;
        }
      });
  }

  getVariantReportLink(report: any): string {
    if (report.patientType === 'OUTSIDE_ASSAY') {
      return `/patients/${this.psn}/variant_reports_oa/${report.analysisId}`;
    } else {
      return `/patients/${this.psn}/biopsies/${report.biopsySequenceNumber}/variant_reports/${report.analysisId}`;
    }
  }

  getVariantReportQueryParams(report: any): any {
    if (report.patientType === 'OUTSIDE_ASSAY') {
      return { isOutsideAssay: report.isOutsideAssay };
    } else {
      return null;
    }
  }

  private transformConcordance(patient: any): string {
    if (!patient || !patient.concordance) {
      return 'UNKNOWN';
    }

    switch (patient.concordance) {
      case 'Y': return 'YES';
      case 'N': return 'NO';
      case 'U': return 'UNKNOWN';
      default: return patient.concordance;
    }
  }

  private showToast(message: string, isError: boolean): void {
    if (this.toastrService && this.toastrService.toastr) {
      if (isError) {
        console.error(message);
        this.toastrService.toastr.error(message);
      } else {
        console.info(message);
        this.toastrService.toastr.info(message);
      }
    }
  }
}
