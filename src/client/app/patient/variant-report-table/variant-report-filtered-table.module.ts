import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from '../../shared/datatables/index';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { DirectivesModule } from '../../shared/directives/directives.module';
import { PatientApiService } from '../patient-api.service';
import { VariantReportFilteredTableSnvComponent } from './variant-report-filtered-table-snv.component';
import { VariantReportFilteredTableIndelsComponent } from './variant-report-filtered-table-indels.component';
import { VariantReportFilteredTableCnvComponent } from './variant-report-filtered-table-cnv.component';
import { VariantReportFilteredTableGeneFusionComponent } from './variant-report-filtered-table-gf.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DataTableModule,
    PipesModule,
    DirectivesModule
  ],
  declarations: [
    VariantReportFilteredTableSnvComponent,
    VariantReportFilteredTableIndelsComponent,
    VariantReportFilteredTableCnvComponent,
    VariantReportFilteredTableGeneFusionComponent
  ],
  exports: [
    VariantReportFilteredTableSnvComponent,
    VariantReportFilteredTableIndelsComponent,
    VariantReportFilteredTableCnvComponent,
    VariantReportFilteredTableGeneFusionComponent
  ],
  providers: [PatientApiService]
})
export class VariantReportFilteredTableModule { }
