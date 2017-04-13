import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CliaVariantReportsPaccComponent } from './clia-variant-reports-pacc.component';
import { CliaVariantReportsPaccRoutingModule } from './clia-variant-reports-pacc-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { DirectivesModule } from '../../shared/directives/directives.module';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from '../../shared/datatables/index';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { CliaApiService } from './../clia-api.service';

@NgModule({
  imports: [CommonModule, CliaVariantReportsPaccRoutingModule, SharedModule, FormsModule, DataTableModule, PipesModule, DirectivesModule],
  declarations: [CliaVariantReportsPaccComponent],
  exports: [CliaVariantReportsPaccComponent],
  providers: [CliaApiService]
})
export class CliaVariantReportsPaccModule { }
