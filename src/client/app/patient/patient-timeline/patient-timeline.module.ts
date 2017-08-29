import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PatientTimelineComponent } from './patient-timeline.component';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { DirectivesModule } from '../../shared/directives/directives.module';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    PipesModule,
    DirectivesModule,
  ],
  declarations: [PatientTimelineComponent],
  exports: [PatientTimelineComponent]
})
export class PatientTimelineModule { }
