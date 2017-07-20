import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { routerTransition } from './../../shared/router.animations';
import {
  PatientApiService
} from '../patient-api.service';

import { ViewDataTransformer } from './../view-data-transformer.service';
import { scrollToElement } from '../../shared/utils/utils';
import { Observable } from "rxjs/Observable";
import { VariantReportData } from "./patient-variant-report.module";

/**
 * PatientVariantReportComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-patient-variant-report',
  templateUrl: 'patient-variant-report.component.html',
  styleUrls: ['patient-variant-report.component.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})
export class PatientVariantReportComponent implements OnInit {

  data: VariantReportData;

  scrollTo = scrollToElement;

  constructor(
    private route: ActivatedRoute,
    private patientApi: PatientApiService,
    private transformer: ViewDataTransformer) { }

  ngOnInit() {
    this.data = this.route.snapshot.data['data'];
  }

  download(file: string) {
    this.patientApi.downloadPatientFile(this.data.psn, file);
  }
}
