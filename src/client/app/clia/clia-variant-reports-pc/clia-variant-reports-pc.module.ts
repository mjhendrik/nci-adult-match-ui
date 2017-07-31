import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CliaVariantReportsPcComponent } from './clia-variant-reports-pc.component';
import { CliaVariantReportsPcRoutingModule } from './clia-variant-reports-pc-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { DirectivesModule } from '../../shared/directives/directives.module';
import { DataTableModule } from '../../shared/datatables/index';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { CliaApiService } from './../clia-api.service';

@NgModule({
  imports: [
    CommonModule,
    CliaVariantReportsPcRoutingModule,
    SharedModule,
    FormsModule,
    DataTableModule,
    PipesModule,
    DirectivesModule
  ],
  declarations: [CliaVariantReportsPcComponent],
  exports: [CliaVariantReportsPcComponent],
  providers: [CliaApiService]
})
export class CliaVariantReportsPcModule { }
