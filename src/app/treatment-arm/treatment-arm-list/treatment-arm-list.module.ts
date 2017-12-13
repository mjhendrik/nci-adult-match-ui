import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreatmentArmListComponent } from './treatment-arm-list.component';
import { TreatmentArmListRoutingModule } from './treatment-arm-list-routing.module';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from '../../shared/datatables/index';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { DirectivesModule } from '../../shared/directives/directives.module';
import { TreatmentArmApiService } from '../treatment-arm-api.service';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    TreatmentArmListRoutingModule,
    FormsModule,
    DataTableModule,
    PipesModule,
    DirectivesModule,
    SharedModule
  ],
  declarations: [TreatmentArmListComponent],
  exports: [TreatmentArmListComponent],
  providers: [TreatmentArmApiService]
})
export class TreatmentArmListModule { }
