import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CliaVariantReportQcComponent } from './clia-variant-report-qc.component';
import { CliaVariantReportQcRoutingModule } from './clia-variant-report-qc-routing.module';
import { DataTableModule } from '../../shared/datatables/index';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { DirectivesModule } from '../../shared/directives/directives.module';
import { VariantReportFilteredTableModule } from '../../shared/variant-report-filtered-table/variant-report-filtered-table.module';
import { SharedModule } from '../../shared/shared.module';
import { SampleControlApiService } from '../sample-control-api.service';

@NgModule({
  imports: [
    CommonModule,
    CliaVariantReportQcRoutingModule,
    FormsModule,
    DataTableModule,
    PipesModule,
    DirectivesModule,
    VariantReportFilteredTableModule,
    SharedModule
  ],
  declarations: [CliaVariantReportQcComponent],
  exports: [CliaVariantReportQcComponent],
  providers: [SampleControlApiService]
})
export class CliaVariantReportQcModule { }
