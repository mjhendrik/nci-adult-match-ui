import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientHeaderComponent } from './patient-header.component';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { DirectivesModule } from '../../shared/directives/directives.module';
import { DiseaseInfoModule } from '../disease-info/disease-info.module';


@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    DirectivesModule,
    DiseaseInfoModule
  ],
  declarations: [PatientHeaderComponent],
  exports: [PatientHeaderComponent]
})
export class PatientHeaderModule { }
