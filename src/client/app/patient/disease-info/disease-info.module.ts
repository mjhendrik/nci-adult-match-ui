import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesModule } from '../../shared/pipes/pipes.module';
import { DiseaseInfoComponent } from './disease-info.component';

export class DiseaseInfo {
  name: string;
  shortName: string;
  ctepCategory: string;
  ctepSubCategory: string;
  ctepTerm: string;
  medDRACode: string;

  static default(): DiseaseInfo {
    return {
      name: null,
      shortName: null,
      ctepCategory: null,
      ctepSubCategory: null,
      ctepTerm: null,
      medDRACode: null
    };
  }
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
