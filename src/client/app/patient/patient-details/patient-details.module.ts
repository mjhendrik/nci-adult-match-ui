import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientDetailsComponent } from './patient-details.component';
import { PatientDetailsRoutingModule } from './patient-details-routing.module';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from '../../shared/datatables/index';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { DirectivesModule } from '../../shared/directives/directives.module';

@NgModule({
  imports: [CommonModule, PatientDetailsRoutingModule, FormsModule, DataTableModule, PipesModule, DirectivesModule],
  declarations: [PatientDetailsComponent],
  exports: [PatientDetailsComponent]
})
export class PatientDetailsModule { }