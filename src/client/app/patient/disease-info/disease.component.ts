import {
  Component,
  Input
} from '@angular/core';

import { DiseaseInfo } from './disease-info.module';

/**
 * DiseaseComponent.
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
export class DiseaseComponent {
  @Input() disease: DiseaseInfo = DiseaseInfo.default();
  @Input() isNarrow: boolean;
}
