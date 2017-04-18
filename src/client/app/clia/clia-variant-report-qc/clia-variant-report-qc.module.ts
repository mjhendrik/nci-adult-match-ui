import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CliaVariantReportQcComponent } from './clia-variant-report-qc.component';
import { CliaVariantReportQcRoutingModule } from './clia-variant-report-qc-routing.module';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from '../../shared/datatables/index';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { DirectivesModule } from '../../shared/directives/directives.module';
import { CliaApiService } from '../clia-api.service';
import { VariantReportFilteredTableModule } from './../variant-report-table/variant-report-filtered-table.module';

@NgModule({
  imports: [
    CommonModule,
    CliaVariantReportQcRoutingModule,
    FormsModule,
    DataTableModule,
    PipesModule,
    DirectivesModule,
    VariantReportFilteredTableModule,
    // AssignmentReportModule
  ],
  declarations: [CliaVariantReportQcComponent],
  exports: [CliaVariantReportQcComponent],
  providers: [CliaApiService]
})
export class CliaVariantReportQcModule { }
