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
  selector: 'sd-disease-info',
  styleUrls: ['disease-info.component.css'],
  templateUrl: 'disease-info.component.html'
})
export class DiseaseInfoComponent {
  @Input() disease: DiseaseInfo;
  @Input() isOutsideAssayWorkflow: boolean;
}
