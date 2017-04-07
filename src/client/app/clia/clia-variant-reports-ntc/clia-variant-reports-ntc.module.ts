import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CliaVariantReportsNtcComponent } from './clia-variant-reports-ntc.component';
import { CliaVariantReportsNtcRoutingModule } from './clia-variant-reports-ntc-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { DirectivesModule } from '../../shared/directives/directives.module';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from '../../shared/datatables/index';
import { PipesModule } from '../../shared/pipes/pipes.module';

@NgModule({
  imports: [CommonModule, CliaVariantReportsNtcRoutingModule, SharedModule, FormsModule, DataTableModule, PipesModule, DirectivesModule],
  declarations: [CliaVariantReportsNtcComponent],
  exports: [CliaVariantReportsNtcComponent]
})
export class CliaVariantReportsNtcModule { }
