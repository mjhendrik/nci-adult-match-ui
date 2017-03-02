import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsDetailsComponent } from './patients-details.component';
import { PatientsDetailsRoutingModule } from './patients-details-routing.module';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from '../../shared/datatables/index';
import { PipesModule } from '../../shared/pipes/pipes.module';
// import { colorCodePatients } from '../../shared/directives/colorcode-patients';

@NgModule({
  imports: [CommonModule, PatientsDetailsRoutingModule, FormsModule, DataTableModule, PipesModule],
  declarations: [PatientsDetailsComponent], //, colorCodePatients
  exports: [PatientsDetailsComponent]
})
export class PatientsDetailsModule { }
