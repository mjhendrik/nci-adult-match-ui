import { NgModule, Injectable } from '@angular/core';
import {
  RouterModule,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Resolve
} from '@angular/router';

import { PatientDetailsComponent } from './patient-details.component';
import { AuthGuard } from './../../shared/auth/auth.guard.service';
import { PatientApiService } from "../patient-api.service";
import { PatientData } from "./patient-details.module";
import { Observable } from "rxjs/Observable";
import { ViewDataTransformer } from "../view-data-transformer.service";


@Injectable()
class DataResolver implements Resolve<PatientData> {
  calculateOcpSum(ocpSummary: { [key: string]: any }): any {
    if (!ocpSummary)
      return null;

    let sum: number = 0;
    for (let key of Object.keys(ocpSummary)) {
      sum += Number(ocpSummary[key]);
    }

    return sum;
  }

  constructor(
    private api: PatientApiService,
    private transformer: ViewDataTransformer) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<PatientData> | Promise<PatientData> | PatientData {

    const psn: string = route.params['patientSequenceNumber']
    const analysisId: string = route.params['analysisId']
    const sequence: string = route.params['sequence'] ? route.params['sequence'] : 'psn';

    return this.api.getPatientDetails(psn)
      .map(
        data => {
          const patient = this.transformer.transformPatient(data);
          return {
            psn: psn,
            analysisId: analysisId,
            patient: patient,
            summaryData: {}
          };
        }
      );
  }
}

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'patients/:patientSequenceNumber',
        component: PatientDetailsComponent,
        canActivate: [AuthGuard],
        resolve: { data: DataResolver }
      },
      {
        path: 'patients/:patientSequenceNumber/:sequence',
        component: PatientDetailsComponent,
        canActivate: [AuthGuard],
        resolve: { data: DataResolver }
      }
    ])
  ],
  exports: [RouterModule],
  providers: [DataResolver]
})
export class PatientDetailsRoutingModule { }
