import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DataTableModule } from '../../shared/datatables/index';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { DirectivesModule } from '../../shared/directives/directives.module';
import { PatientApiService } from '../../patient/patient-api.service';
import { VariantReportFilteredTableCnvComponent } from './variant-report-filtered-table-cnv.component';
import { VariantReportFilteredTableGeneFusionComponent } from './variant-report-filtered-table-gf.component';
import { VariantReportFilteredTableSnvIndelsComponent } from './variant-report-filtered-table-snv-indels.component';
import { SharedModule } from '../shared.module';
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
    VariantReportFilteredTableCnvComponent,
    VariantReportFilteredTableGeneFusionComponent,
    VariantReportFilteredTableSnvIndelsComponent
  ],
  exports: [
    VariantReportFilteredTableCnvComponent,
    VariantReportFilteredTableGeneFusionComponent,
    VariantReportFilteredTableSnvIndelsComponent
  ],
  providers: [
    PatientApiService,
    SampleControlApiService
  ]
})
export class VariantReportFilteredTableModule { }
