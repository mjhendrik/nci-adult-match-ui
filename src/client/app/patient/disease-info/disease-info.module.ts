import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DiseaseInfoComponent, DiseaseInfo } from './disease-info.component';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { DirectivesModule } from '../../shared/directives/directives.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    PipesModule,
    DirectivesModule,
    SharedModule
  ],
  declarations: [DiseaseInfoComponent],
  exports: [DiseaseInfoComponent, DiseaseInfo]
})
export class DiseaseInfoModule { }
