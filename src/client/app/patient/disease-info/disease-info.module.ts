import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiseaseInfoComponent } from './disease-info.component';
import { PipesModule } from '../../shared/pipes/pipes.module';

export class DiseaseInfo {
  name: string;
  shortName: string;
  ctepCategory: string;
  ctepSubCategory: string;
  ctepTerm: string;
  medDRACode: string;

  outsideData?: DiseaseInfo;
  matchData?: DiseaseInfo;
}

@NgModule({
  imports: [
    CommonModule,
    PipesModule,
  ],
  declarations: [DiseaseInfoComponent],
  exports: [DiseaseInfoComponent]
})
export class DiseaseInfoModule { }
