import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesModule } from '../../shared/pipes/pipes.module';
import { DiseaseInfoComponent } from './disease-info.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    SharedModule,
  ],
  declarations: [DiseaseInfoComponent],
  exports: [DiseaseInfoComponent]
})
export class DiseaseInfoModule { }
