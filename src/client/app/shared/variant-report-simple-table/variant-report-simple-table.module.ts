import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from '../../shared/datatables/index';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { DirectivesModule } from '../../shared/directives/directives.module';
import { PatientApiService } from '../../patient/patient-api.service';
import { CliaApiService } from '../../clia/clia-api.service';
import { VariantReportSimpleTableCnvComponent } from './variant-report-simple-table-cnv.component';
import { VariantReportSimpleTableGeneFusionComponent } from './variant-report-simple-table-gf.component';
import { VariantReportSimpleTableSnvIndelsComponent } from './variant-report-simple-table-snv-indels.component';
import { SharedModule } from '../shared.module';

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
    VariantReportSimpleTableCnvComponent,
    VariantReportSimpleTableGeneFusionComponent,
    VariantReportSimpleTableSnvIndelsComponent
  ],
  exports: [
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
