import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { routerTransition } from './../../shared/router.animations';
import {
  PatientApiService
} from '../patient-api.service';

import { VariantReportComparisonData } from './variant-report-comparison-data';
import { ScrollService } from '../../shared/utils/scroll.to.service';
import { ViewDataTransformer } from '../view-data-transformer.service';
import { ConfirmableItem } from '../../shared/check-box-with-confirm/check-box-with-confirm.component';
import { VariantReportData } from "../patient-variant-report/patient-variant-report.module";


/**
 * PatientVariantReportOutsideAssayComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-patient-variant-report-oa',
  templateUrl: 'patient-variant-report-oa.component.html',
  styleUrls: ['patient-variant-report-oa.component.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})
export class PatientVariantReportOutsideAssayComponent implements OnInit, VariantReportComparisonData {
  scrollTo: (id: string) => void;
  showComparison: boolean;
  showOutsideAssay: boolean;
  isOutsideAssayValue: boolean = null;

  psn: string;
  currentPatientStatus: string;
  currentStepNumber: string;
  concordance: string;

  outsideData: VariantReportData;
  matchData: VariantReportData;

  comparisonVariantReport: {
    singleNucleotideVariantAndIndels: any[];
    copyNumberVariants: any[];
    unifiedGeneFusions: any[];
  };

  constructor(
    private route: ActivatedRoute,
    private patientApi: PatientApiService,
    private scrollService: ScrollService,
    private transformer: ViewDataTransformer) {
    this.scrollTo = scrollService.scrollToElement;
  }

  openOutsideAssignmentReason(elementId: string, isOutsideAssay: boolean) {
    this.showOutsideAssay = isOutsideAssay;
    this.scrollTo(elementId);
  }

  ngOnInit() {
    Object.assign(this, this.route.snapshot.data['data']);
  }

  download(file: string) {
    this.patientApi.downloadPatientFile(this.psn, file);
  }

  confirmOutsideReport(): void {
    console.info('Confirming outside variant report: ' + this.outsideData.analysisId);
    this.patientApi.confirmVariantReport(this.psn, this.outsideData.bsn, this.outsideData.analysisId).subscribe(
      (x: any) => { this.transformer.updateVariantReportStatus(this.outsideData, x); }
    );
  }

  rejectOutsideReport(): void {
    console.info('Rejecting outside variant report: ' + this.outsideData.analysisId);
    this.patientApi.rejectVariantReport(this.psn, this.outsideData.bsn, this.outsideData.analysisId).subscribe(
      (x: any) => { this.transformer.updateVariantReportStatus(this.outsideData, x); }
    );
  }

  confirmMatchReport(): void {
    console.info('Confirming MATCH variant report: ' + this.matchData.analysisId);
    this.patientApi.confirmVariantReport(this.psn, this.matchData.bsn, this.matchData.analysisId).subscribe(
      (x: any) => { this.transformer.updateVariantReportStatus(this.matchData, x); }
    );
  }

  rejectMatchReport(): void {
    console.info('Rejecting outside variant report: ' + this.matchData.analysisId);
    this.patientApi.rejectVariantReport(this.psn, this.matchData.bsn, this.matchData.analysisId).subscribe(
      (x: any) => { this.transformer.updateVariantReportStatus(this.matchData, x); }
    );
  }

  onVariantConfirmed(reportData: any, item: ConfirmableItem) {
    console.info('biopsySequenceNumber: ' + reportData.biopsySequenceNumber);
    console.info('analysisId: ' + reportData.analysisId);
    console.info('id: ' + (item as any).metadata._id);
    console.info('comment: ' + item.comment);

    // this.patientApi.confirmVariant(this.psn, biopsySequenceNumber, reportData.analysisId, item.id).subscribe(
    //   (x: any) => { this.transformer.updateVariantStatus(reportData.variantReport, x); }
    // );
  }
}
