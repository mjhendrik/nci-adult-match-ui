import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientListComponent } from './patient-list.component';
import { PatientListRoutingModule } from './patient-list-routing.module';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from '../../shared/datatables/index';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { DirectivesModule } from '../../shared/directives/directives.module';
import { PatientApiService } from '../patient-api.service';
import { LoadingIndicatorModule } from "../../shared/loading-indicator/loading-indicator.module";

@NgModule({
  imports: [
    CommonModule,
    PatientListRoutingModule,
    FormsModule,
    DataTableModule,
    PipesModule,
    DirectivesModule,
    LoadingIndicatorModule
  ],
  declarations: [PatientListComponent],
  exports: [PatientListComponent],
  providers: [PatientApiService]
})
export class PatientListModule { }
