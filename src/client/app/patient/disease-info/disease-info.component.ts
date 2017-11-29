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
  @Input() disease: DiseaseInfo[];
}
