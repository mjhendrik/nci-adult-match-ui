import {
  Component,
  Input
} from '@angular/core';

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

/**
 * DiseaseInfoComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-disease-info',
  styleUrls: ['disease-info.component.css'],
  templateUrl: 'disease-info.component.html'
})
export class DiseaseInfoComponent {
  @Input() disease: DiseaseInfo;
  @Input() isOutsideAssayWorkflow: boolean;
}
