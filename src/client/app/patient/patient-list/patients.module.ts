import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientListComponent } from './patients.component';
import { PatientListRoutingModule } from './patients-routing.module';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from '../../shared/datatables/index';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { DirectivesModule } from '../../shared/directives/directives.module';

@NgModule({
  imports: [CommonModule, PatientListRoutingModule, FormsModule, DataTableModule, PipesModule, DirectivesModule],
  declarations: [PatientListComponent],
  exports: [PatientListComponent]
})
export class PatientListModule { }
