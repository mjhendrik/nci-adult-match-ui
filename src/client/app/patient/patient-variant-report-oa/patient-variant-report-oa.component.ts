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

  outsideData: {
    analysisId: string;
    assays: any[];
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
    isEditable: boolean;
  };

  matchData: {
    analysisId: string;
    assays: any[];
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
    isEditable: boolean;
  };

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
    // this.patientApi.confirmVariantReport().subscribe((x: any) => { this.transformer.updateOutsidePatientReport(this, x); });
  }

  rejectOutsideReport(): void {
    console.info('Rejecting outside variant report: ' + this.outsideData.analysisId);
    // this.patientApi.rejectVariantReport().subscribe((x: any) => { this.transformer.updateOutsidePatientReport(this, x); });
  }

  confirmMatchReport(): void {
    console.info('Confirming MATCH variant report: ' + this.outsideData.analysisId);
    // this.patientApi.confirmVariantReport().subscribe((x: any) => { this.transformer.updateOutsidePatientReport(this, x); });
  }

  rejectMatchReport(): void {
    console.info('Rejecting outside variant report: ' + this.outsideData.analysisId);
    // this.patientApi.rejectVariantReport().subscribe((x: any) => { this.transformer.updateOutsidePatientReport(this, x); });
  }

  onVariantConfirmed(item: ConfirmableItem) {
    console.info('Confirming variant: ' + JSON.stringify(item));
    // this.patientApi.confirmVariant().subscribe((x: any) => { this.transformer.updateVariant(item, x); });
  }
}
