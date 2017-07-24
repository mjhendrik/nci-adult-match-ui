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
    const section: string = route.params['section'] ? route.params['section'] : 'summary';
    const entityId: string = route.params['entityId'];

    return this.api.getPatientDetails(psn)
      .map(
        data => {
          const patient = this.transformer.transformPatient(data);
          return {
            psn: psn,
            patient: patient,
            summaryData: {},
            section: section,
            entityId
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
        path: 'patients/:patientSequenceNumber/:section',
        component: PatientDetailsComponent,
        canActivate: [AuthGuard],
        resolve: { data: DataResolver }
      },
      {
        path: 'patients/:patientSequenceNumber/:section/:entityId',
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
