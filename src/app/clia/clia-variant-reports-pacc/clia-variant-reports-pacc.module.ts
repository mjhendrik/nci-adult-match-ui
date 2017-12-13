import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CliaVariantReportsPaccComponent } from './clia-variant-reports-pacc.component';
import { CliaVariantReportsPaccRoutingModule } from './clia-variant-reports-pacc-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { DirectivesModule } from '../../shared/directives/directives.module';
import { DataTableModule } from '../../shared/datatables/index';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { SampleControlApiService } from '../sample-control-api.service';

@NgModule({
  imports: [
    CommonModule,
    CliaVariantReportsPaccRoutingModule,
    SharedModule,
    FormsModule,
    DataTableModule,
    PipesModule,
    DirectivesModule
  ],
  declarations: [CliaVariantReportsPaccComponent],
  exports: [CliaVariantReportsPaccComponent],
  providers: [SampleControlApiService]
})
export class CliaVariantReportsPaccModule { }
