import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { routerTransition } from './../../shared/router.animations';
import {
  PatientApiService
} from '../patient-api.service';

import { scrollToElement } from '../../shared/utils/utils';
import { VariantReportComparisonData } from './variant-report-comparison-data';

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

  scrollTo = scrollToElement;

  constructor(
    private route: ActivatedRoute,
    private patientApi: PatientApiService) { }

  ngOnInit() {
    Object.assign(this, this.route.snapshot.data['data']);
  }

  download(file: string) {
    this.patientApi.downloadPatientFile(this.psn, file);
  }
}
