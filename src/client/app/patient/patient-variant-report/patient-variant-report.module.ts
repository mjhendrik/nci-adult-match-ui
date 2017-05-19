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

@NgModule({
  imports: [
    CommonModule,
    PatientVariantReportRoutingModule,
    AssignmentReasonTableModule,
    FormsModule,
    DataTableModule,
    PipesModule,
    DirectivesModule
  ],
  declarations: [PatientVariantReportComponent],
  exports: [PatientVariantReportComponent],
  providers: [PatientApiService, ViewDataTransformer]
})
export class PatientVariantReportModule { }
