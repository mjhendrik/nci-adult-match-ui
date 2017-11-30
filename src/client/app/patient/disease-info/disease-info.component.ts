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
  selector: 'sd-disease',
  styleUrls: ['disease.component.css'],
  template: `
  <dl class="dl-horizontal" [ngClass]="{true:'narrow-dt',false:''}[isNarrow]">
    <dt>MATCH Disease</dt>
    <dd>{{disease.name | dashify}}</dd>
    <dt>Short Name</dt>
    <dd>{{disease.shortName | dashify}}</dd>

    <dt class="text-muted f-w-500">More</dt>
    <dd class="text-muted overflow-ellipsis"><sd-inline-pairs [items]="details"></sd-inline-pairs></dd>

    <dt>CTEP Category</dt>
    <dd>{{disease.ctepCategory | dashify}}</dd>
    <dt>CTEP Sub Category</dt>
    <dd>{{disease.ctepSubCategory | dashify}}</dd>
    <dt>CTEP Term</dt>
    <dd>{{disease.ctepTerm | dashify}}</dd>
    <dt>MedDRA Code</dt>
    <dd>{{disease.medDRACode | dashify}}</dd>
  </dl>`
})
export class DiseaseInfoComponent {
  details: Pair[] = [];

  @Input() isNarrow: boolean;

  private diseaseValue: DiseaseInfo = DiseaseInfo.default();
  @Input()
  set disease(value: DiseaseInfo) {
      this.diseaseValue = value;
      this.details = this.extractPairs(value);
  }
  get disease(): DiseaseInfo { return this.diseaseValue; }

  private extractPairs(obj: any) {
    let list: Pair[] = [];

    const extras: StringToStringMap = {
      'ctepCategory': 'CTEP Category',
      'ctepSubCategory': 'CTEP Sub Category',
      'ctepTerm': 'CTEP Term',
      'medDRACode': 'MedDRA Code'
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
