import {
  Component,
  OnInit,
  AfterViewInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { routerTransition } from './../../shared/router.animations';
import {
  PatientApiService
} from '../patient-api.service';

import { VariantReportComparisonData } from './variant-report-comparison-data';
import { ScrollService } from '../../shared/utils/scroll.to.service';
import { ViewDataTransformer } from '../view-data-transformer.service';

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
export class PatientVariantReportOutsideAssayComponent implements OnInit, AfterViewInit, VariantReportComparisonData {
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

  openOutsideAssignmentReason() {
    this.showOutsideAssay = true;
    this.scrollTo('assignment-details');
  }

  ngOnInit() {
    Object.assign(this, this.route.snapshot.data['data']);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      console.log('Attempting to refresh tabs...');
      this.isOutsideAssayValue = this.showOutsideAssay;
    }, 300);
  }

  download(file: string) {
    this.patientApi.downloadPatientFile(this.psn, file);
  }

  confirmOutsideReport(): void {
    console.log('confirmOutsideReport');
    this.outsideData.variantReport.variantReportStatus = 'CONFIRMED';
    this.transformer.updateOutsidePatientReport(this);
  }

  rejectOutsideReport(): void {
    console.log('rejectOutsideReport');
    this.outsideData.variantReport.variantReportStatus = 'REJECTED';
    this.transformer.updateOutsidePatientReport(this);
  }

  confirmMatchReport(): void {
    console.log('confirmMatchReport');
    this.matchData.variantReport.variantReportStatus = 'CONFIRMED';
    this.transformer.updateOutsidePatientReport(this);
  }

  rejectMatchReport(): void {
    console.log('rejectMatchReport');
    this.matchData.variantReport.variantReportStatus = 'REJECTED';
    this.transformer.updateOutsidePatientReport(this);
  }
}
