import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientVariantReportComponent } from './patient-variant-report.component';
import { PatientVariantReportRoutingModule } from './patient-variant-report-routing.module';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from '../../shared/datatables/index';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { DirectivesModule } from '../../shared/directives/directives.module';
import { PatientApiService } from '../patient-api.service';
import { AssignmentReasonTableModule } from './../assignment-reason-table/assignment-reason-table.module';
import { ViewDataTransformer } from './../view-data-transformer.service';
import { VariantReportSimpleTableModule } from '../../shared/variant-report-simple-table/variant-report-simple-table.module';
import { SharedModule } from '../../shared/shared.module';
import { ScrollService } from '../../shared/utils/scroll.to.service';

export interface VariantReportData {
  psn: string;
  analysisId: string;
  patient: any;
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
}

@NgModule({
  imports: [
    CommonModule,
    PatientVariantReportRoutingModule,
    AssignmentReasonTableModule,
    FormsModule,
    DataTableModule,
    PipesModule,
    DirectivesModule,
    VariantReportSimpleTableModule,
    SharedModule
  ],
  declarations: [PatientVariantReportComponent],
  exports: [PatientVariantReportComponent],
  providers: [PatientApiService, ViewDataTransformer, ScrollService]
})
export class PatientVariantReportModule { }
