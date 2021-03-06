import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PatientVariantReportComponent } from './patient-variant-report.component';
import { PatientVariantReportRoutingModule } from './patient-variant-report-routing.module';
import { DataTableModule } from '../../shared/datatables/index';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { DirectivesModule } from '../../shared/directives/directives.module';
import { PatientApiService } from '../patient-api.service';
import { AssignmentReasonTableModule } from './../assignment-reason-table/assignment-reason-table.module';
import { ViewDataTransformer } from './../view-data-transformer.service';
import { VariantReportSimpleTableModule } from '../../shared/variant-report-simple-table/variant-report-simple-table.module';
import { SharedModule } from '../../shared/shared.module';
import { ScrollService } from '../../shared/utils/scroll.to.service';
import { DiseaseInfoModule } from '../disease-info/disease-info.module';
import { AssayHistoryTableModule } from '../assay-history-table/assay-history-table.module';
import { PatientHeaderModule } from './../patient-header/patient-header.module';

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
    SharedModule,
    AssayHistoryTableModule,
    DiseaseInfoModule,
    PatientHeaderModule
  ],
  declarations: [PatientVariantReportComponent],
  exports: [PatientVariantReportComponent],
  providers: [PatientApiService, ViewDataTransformer, ScrollService]
})
export class PatientVariantReportModule { }
