import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from '../../shared/datatables/index';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { DirectivesModule } from '../../shared/directives/directives.module';
import { PatientApiService } from '../../patient/patient-api.service';
import { CliaApiService } from '../../clia/clia-api.service';
import { VariantReportSimpleTableSnvComponent } from './variant-report-simple-table-snv.component';
import { VariantReportSimpleTableIndelsComponent } from './variant-report-simple-table-indels.component';
import { VariantReportSimpleTableCnvComponent } from './variant-report-simple-table-cnv.component';
import { VariantReportSimpleTableGeneFusionComponent } from './variant-report-simple-table-gf.component';
import { VariantReportSimpleTableSnvIndelsComponent } from './variant-report-simple-table-snv-indels.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DataTableModule,
    PipesModule,
    DirectivesModule
  ],
  declarations: [
    VariantReportSimpleTableSnvComponent,
    VariantReportSimpleTableIndelsComponent,
    VariantReportSimpleTableCnvComponent,
    VariantReportSimpleTableGeneFusionComponent,
    VariantReportSimpleTableSnvIndelsComponent
  ],
  exports: [
    VariantReportSimpleTableSnvComponent,
    VariantReportSimpleTableIndelsComponent,
    VariantReportSimpleTableCnvComponent,
    VariantReportSimpleTableGeneFusionComponent,
    VariantReportSimpleTableSnvIndelsComponent
  ],
  providers: [
    PatientApiService,
    CliaApiService
  ]
})
export class VariantReportSimpleTableModule { }
