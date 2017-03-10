import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsComponent } from './patients.component';
import { PatientsRoutingModule } from './patients-routing.module';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from '../shared/datatables/index';
import { PipesModule } from '../shared/pipes/pipes.module';
import { colorCodePatients } from '../shared/directives/colorcode-patients';

@NgModule({
  imports: [CommonModule, PatientsRoutingModule, FormsModule, DataTableModule, PipesModule],
  declarations: [PatientsComponent, colorCodePatients],
  exports: [PatientsComponent]
})
export class PatientsModule { }
