import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreatmentArmListComponent } from './treatment-arm-list.component';
import { TreatmentArmListRoutingModule } from './treatment-arm-list-routing.module';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from '../../shared/datatables/index';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { DirectivesModule } from '../../shared/directives/directives.module';


@NgModule({
  imports: [CommonModule, TreatmentArmListRoutingModule, FormsModule, DataTableModule, PipesModule, DirectivesModule],
  declarations: [TreatmentArmListComponent],
  exports: [TreatmentArmListComponent]
})
export class TreatmentArmListModule { }
