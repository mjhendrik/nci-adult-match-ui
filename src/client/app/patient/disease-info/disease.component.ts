import {
  Component,
  Input
} from '@angular/core';

import { DiseaseInfo } from './disease-info.module';

/**
 * DiseaseInfoComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-disease',
  styleUrls: ['disease.component.css'],
  template: `
  <dl class="dl-horizontal" [ngClass]="{true:'narrow-dt',false:''}[isOutsideAssayWorkflow]">
    <dt>MATCH Disease</dt>
    <dd>{{disease.matchData.name | dashify}}</dd>
    <dt>Short Name</dt>
    <dd>{{disease.matchData.shortName | dashify}}</dd>
    <dt>CTEP Category</dt>
    <dd>{{disease.matchData.ctepCategory | dashify}}</dd>
    <dt>CTEP Sub Category</dt>
    <dd>{{disease.matchData.ctepSubCategory | dashify}}</dd>
    <dt>CTEP Term</dt>
    <dd>{{disease.matchData.ctepTerm | dashify}}</dd>
    <dt>MedDRA Code</dt>
    <dd>{{disease.matchData.medDRACode | dashify}}</dd>
  </dl>`
})
export class DiseaseInfoComponent {
  @Input() disease: DiseaseInfo;
  @Input() isOutsideAssayWorkflow: boolean;
}
