import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { routerTransition } from './../../shared/router.animations';
import {
  PatientApiService
} from '../patient-api.service';

import { VariantReportData } from './patient-variant-report.module';
import { ScrollService } from '../../shared/utils/scroll.to.service';
import { ConfirmableItem } from '../../shared/check-box-with-confirm/check-box-with-confirm.component';
import { ViewDataTransformer } from '../view-data-transformer.service';

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
export class PatientVariantReportComponent implements OnInit, VariantReportData {
  scrollTo: (id: string) => void;

  psn: string;
  bsn: string;
  analysisId: string;
  patient: any;
  variantReport: any;
  assignmentReport: any;
  assignmentHistory: any;
  parsed_vcf_genes: any;
  tvc_version: string;
  pool1: number;
  pool2: number;
  mapd: string;
  cellularity: any;
  showPools: boolean;
  assays: any[] = [];
  isEditable: boolean;

  constructor(
    private route: ActivatedRoute,
    private patientApi: PatientApiService,
    private scrollService: ScrollService,
    private transformer: ViewDataTransformer) {
      this.scrollTo = scrollService.scrollToElement;
    }

  ngOnInit() {
    Object.assign(this, this.route.snapshot.data['data']);
  }

  download(file: string) {
    this.patientApi.downloadPatientFile(this.psn, file);
  }

  confirmReport(): void {
    console.info('Confirming variant report: ' + this.analysisId);
    this.patientApi.updateVariantReport(this.psn, this.bsn, this.analysisId, true, null).subscribe(
      (x: any) => { this.transformer.updateVariantReportStatus(this, x); }
    );
  }

  rejectReport(): void {
    console.info('Rejecting variant report: ' + this.analysisId);
    this.patientApi.updateVariantReport(this.psn, this.bsn, this.analysisId, false, null).subscribe(
      (x: any) => { this.transformer.updateVariantReportStatus(this, x); }
    );
  }

  onVariantConfirmed(item: ConfirmableItem) {
    console.info('Confirming variant: ' + JSON.stringify(item));

    this.patientApi.updateVariant(
      this.psn,
      this.bsn,
      this.analysisId,
      (item as any).metadata._id,
      item.confirmed,
      item.comment
    ).subscribe(
      (x: any) => { this.transformer.updateVariantStatus(this, x); }
    );
  }
}
