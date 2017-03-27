import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientVariantReportComponent } from './patient-variant-report.component';
import { PatientVariantReportRoutingModule } from './patient-variant-report-routing.module';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from '../../shared/datatables/index';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { DirectivesModule } from '../../shared/directives/directives.module';

@NgModule({
  imports: [CommonModule, PatientVariantReportRoutingModule, FormsModule, DataTableModule, PipesModule, DirectivesModule],
  declarations: [PatientVariantReportComponent],
  exports: [PatientVariantReportComponent]
})
export class PatientVariantReportModule { }
