import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from '../../shared/datatables/index';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { DirectivesModule } from '../../shared/directives/directives.module';
import { PatientApiService } from '../patient-api.service';
import { VariantReportFilteredTableSnvComponent } from './variant-report-filtered-table-snv.component';
import { VariantReportFilteredTableIndelsComponent } from './variant-report-filtered-table-indels.component';

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
    VariantReportFilteredTableIndelsComponent
  ],
  exports: [
    VariantReportFilteredTableSnvComponent,
    VariantReportFilteredTableIndelsComponent
  ],
  providers: [PatientApiService]
})
export class VariantReportFilteredTableModule { }
