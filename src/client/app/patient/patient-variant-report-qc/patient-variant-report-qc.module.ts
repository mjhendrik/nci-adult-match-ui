import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientVariantReportQcComponent } from './patient-variant-report-qc.component';
import { PatientVariantReportQcRoutingModule } from './patient-variant-report-qc-routing.module';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from '../../shared/datatables/index';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { DirectivesModule } from '../../shared/directives/directives.module';
import { PatientApiService } from '../patient-api.service';
import { VariantReportFilteredTableModule } from '../../shared/variant-report-table/variant-report-filtered-table.module';

@NgModule({
  imports: [
    CommonModule,
    PatientVariantReportQcRoutingModule,
    FormsModule,
    DataTableModule,
    PipesModule,
    DirectivesModule,
    VariantReportFilteredTableModule,
    // AssignmentReportModule
  ],
  declarations: [PatientVariantReportQcComponent],
  exports: [PatientVariantReportQcComponent],
  providers: [PatientApiService]
})
export class PatientVariantReportQcModule { }
