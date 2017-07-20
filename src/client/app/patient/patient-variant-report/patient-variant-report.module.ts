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
import { Resolve } from "@angular/router/router";

export interface VariantReportData {
  psn: string,
  analysisId: string,
  patient: any,
  variantReport: any,
  assignmentReport: any,
  assignmentHistory: any,
  parsed_vcf_genes: any
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
    VariantReportSimpleTableModule
  ],
  declarations: [PatientVariantReportComponent],
  exports: [PatientVariantReportComponent],
  providers: [PatientApiService, ViewDataTransformer]
})
export class PatientVariantReportModule { }
