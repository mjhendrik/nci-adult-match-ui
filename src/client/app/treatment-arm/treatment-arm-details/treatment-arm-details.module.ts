import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreatmentArmDetailsComponent } from './treatment-arm-details.component';
import { TreatmentArmDetailsRoutingModule } from './treatment-arm-details-routing.module';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from '../../shared/datatables/index';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { DirectivesModule } from '../../shared/directives/directives.module';
import { ChartsModule } from 'ng2-charts/ng2-charts';


@NgModule({
  imports: [CommonModule, TreatmentArmDetailsRoutingModule, FormsModule, DataTableModule, PipesModule, DirectivesModule, ChartsModule],
  declarations: [TreatmentArmDetailsComponent],
  exports: [TreatmentArmDetailsComponent]
})
export class TreatmentArmDetailsModule { }
