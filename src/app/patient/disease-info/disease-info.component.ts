import {
  Component,
  Input
} from '@angular/core';

import { DiseaseInfo } from './disease-info.module';
import { Pair } from '../../shared/inline-pairs/inline-pairs.component';

interface StringToStringMap {
  [key: string]: string;
}

/**
 * DiseaseInfoComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'app-disease',
  template: `
  <dl class="dl-horizontal" [ngClass]="{true:'narrow-dt',false:''}[isNarrow]">
    <dt *ngIf="hasOutsideTitle && !hasData" class="text-muted f-w-400"> No Disease data</dt>
    <dd *ngIf="hasOutsideTitle && !hasData"></dd>

    <dt *ngIf="!hasOutsideTitle">{{diseasePrefix}} Disease</dt>
    <dd *ngIf="!hasOutsideTitle">{{disease.shortName | dashify}}</dd>
    <dt *ngIf="details.length" class="text-muted f-w-500">More</dt>
    <dd *ngIf="details.length" class="text-muted text-ellipsis" [ngClass]="{true:'width-100',false:'width-150'}[isNarrow]">
      <app-inline-pairs [items]="details"></app-inline-pairs>
    </dd>
  </dl>`
})
export class DiseaseInfoComponent {
  details: Pair[] = [];
  hasData: boolean;

  @Input() isNarrow: boolean;
  @Input() hasOutsideTitle: boolean;
  @Input() diseasePrefix: string;

  private diseaseValue: DiseaseInfo = DiseaseInfo.default();
  @Input()
  set disease(value: DiseaseInfo) {
      this.hasData = !!value && Object.keys(value).length > 0;
      this.diseaseValue = value || DiseaseInfo.default();
      this.details = this.extractPairs(value);
  }
  get disease(): DiseaseInfo { return this.diseaseValue; }

  private extractPairs(obj: any) {
    let list: Pair[] = [];
    if (!obj)
      return list;

    const extras: StringToStringMap = {
      'ctepCategory': 'CTEP Category',
      'ctepSubCategory': 'CTEP Sub Category',
      'ctepTerm': 'CTEP Term',
      '_id': 'MedDRA Code'
    };

    Object.keys(extras).forEach(
      (name: string) => {
        if (name in obj) {
          list.push({label: extras[name], data: obj[name]});
        }
      });

    return list;
  }
}