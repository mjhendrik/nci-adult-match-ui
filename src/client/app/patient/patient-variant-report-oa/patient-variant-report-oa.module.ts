import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientVariantReportOutsideAssayComponent } from './patient-variant-report-oa.component';
import { PatientVariantReportOutsideAssayRoutingModule } from './patient-variant-report-oa-routing.module';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from '../../shared/datatables/index';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { DirectivesModule } from '../../shared/directives/directives.module';
import { PatientApiService } from '../patient-api.service';
import { AssignmentReasonTableModule } from './../assignment-reason-table/assignment-reason-table.module';
import { ViewDataTransformer } from './../view-data-transformer.service';
import { VariantReportComparisonTableModule } from '../variant-report-comparison-table/variant-report-comparison-table.module';
import { SharedModule } from '../../shared/shared.module';

export interface VariantReportComparisonData {
  psn: string;
  patient: any;
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
  comparisonReport: {
    singleNucleotideVariantAndIndels: any[];
    copyNumberVariants: any[];
    unifiedGeneFusions: any[];
  };
}

@NgModule({
  imports: [
    CommonModule,
    PatientVariantReportOutsideAssayRoutingModule,
    AssignmentReasonTableModule,
    FormsModule,
    DataTableModule,
    PipesModule,
    DirectivesModule,
    VariantReportComparisonTableModule,
    SharedModule
  ],
  declarations: [PatientVariantReportOutsideAssayComponent],
  exports: [PatientVariantReportOutsideAssayComponent],
  providers: [PatientApiService, ViewDataTransformer]
})
export class PatientVariantReportOutsideAssayModule { }
