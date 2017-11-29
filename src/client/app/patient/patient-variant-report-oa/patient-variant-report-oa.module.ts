import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { PatientVariantReportOutsideAssayComponent } from './patient-variant-report-oa.component';
import { PatientVariantReportOutsideAssayRoutingModule } from './patient-variant-report-oa-routing.module';
import { DataTableModule } from '../../shared/datatables/index';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { DirectivesModule } from '../../shared/directives/directives.module';
import { PatientApiService } from '../patient-api.service';
import { AssignmentReasonTableModule } from './../assignment-reason-table/assignment-reason-table.module';
import { ViewDataTransformer } from './../view-data-transformer.service';
import { VariantReportSimpleTableModule } from '../../shared/variant-report-simple-table/variant-report-simple-table.module';
import { VariantReportComparisonTableModule } from '../variant-report-comparison-table/variant-report-comparison-table.module';
import { SharedModule } from '../../shared/shared.module';
import { DiseaseInfoModule } from '../disease-info/disease-info.module';

@NgModule({
  imports: [
    CommonModule,
    PatientVariantReportOutsideAssayRoutingModule,
    AssignmentReasonTableModule,
    FormsModule,
    DataTableModule,
    PipesModule,
    DirectivesModule,
    VariantReportSimpleTableModule,
    VariantReportComparisonTableModule,
    SharedModule,
    DiseaseInfoModule,
    TabsModule.forRoot()
  ],
  declarations: [PatientVariantReportOutsideAssayComponent],
  exports: [PatientVariantReportOutsideAssayComponent],
  providers: [PatientApiService, ViewDataTransformer]
})
export class PatientVariantReportOutsideAssayModule { }
