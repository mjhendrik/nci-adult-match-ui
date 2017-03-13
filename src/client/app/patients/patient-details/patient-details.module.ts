import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientDetailsComponent } from './patient-details.component';
import { PatientDetailsRoutingModule } from './patient-details-routing.module';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from '../../shared/datatables/index';
import { PipesModule } from '../../shared/pipes/pipes.module';

@NgModule({
  imports: [CommonModule, PatientDetailsRoutingModule, FormsModule, DataTableModule, PipesModule],
  declarations: [PatientDetailsComponent], //, colorCodePatients
  exports: [PatientDetailsComponent]
})
export class PatientDetailsModule { }
