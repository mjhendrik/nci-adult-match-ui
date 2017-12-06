import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesModule } from '../../shared/pipes/pipes.module';
import { DiseaseInfoComponent } from './disease-info.component';
import { SharedModule } from '../../shared/shared.module';

export class DiseaseInfo {
  shortName: string;
  ctepCategory: string;
  ctepSubCategory: string;
  ctepTerm: string;
  medDRACode: string;
  isEmpty: boolean;

  static default(): DiseaseInfo {
    return {
      shortName: null,
      ctepCategory: null,
      ctepSubCategory: null,
      ctepTerm: null,
      medDRACode: null,
      isEmpty: true
    };
  }
}

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
