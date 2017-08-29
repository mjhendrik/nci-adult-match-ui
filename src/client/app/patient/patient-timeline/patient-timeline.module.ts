import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientTimelineComponent } from './patient-timeline.component';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { DirectivesModule } from '../../shared/directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    DirectivesModule,
  ],
  declarations: [PatientTimelineComponent],
  exports: [PatientTimelineComponent]
})
export class PatientTimelineModule { }
