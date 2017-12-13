import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DataTableModule } from '../../shared/datatables/index';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { DirectivesModule } from '../../shared/directives/directives.module';
import { PatientApiService } from '../../patient/patient-api.service';
import { VariantReportComparisonTableCnvComponent } from './variant-report-comparison-table-cnv.component';
import { VariantReportComparisonTableGeneFusionComponent } from './variant-report-comparison-table-gf.component';
import { VariantReportComparisonTableSnvIndelsComponent } from './variant-report-comparison-table-snv-indels.component';
import { SharedModule } from '../../shared/shared.module';
import { SampleControlApiService } from '../../clia/sample-control-api.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DataTableModule,
    PipesModule,
    DirectivesModule,
    SharedModule
  ],
  declarations: [
    VariantReportComparisonTableCnvComponent,
    VariantReportComparisonTableGeneFusionComponent,
    VariantReportComparisonTableSnvIndelsComponent
  ],
  exports: [
    VariantReportComparisonTableCnvComponent,
    VariantReportComparisonTableGeneFusionComponent,
    VariantReportComparisonTableSnvIndelsComponent
  ],
  providers: [
    PatientApiService,
    SampleControlApiService
  ]
})
export class VariantReportComparisonTableModule { }
