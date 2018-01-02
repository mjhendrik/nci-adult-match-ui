import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientHeaderComponent } from './patient-header.component';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { DirectivesModule } from '../../shared/directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    DirectivesModule,
  ],
  declarations: [PatientHeaderComponent],
  exports: [PatientHeaderComponent]
})
export class PatientHeaderModule { }
