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

  constructor(private api: PatientApiService, private transformer: ViewDataTransformer) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<PatientData> | Promise<PatientData> | PatientData {

    const psn: string = route.params['patientSequenceNumber']
    const analysisId: string = route.params['analysisId']
    const sequence = route.params['sequence'] ? this.route.snapshot.params['sequence'] : 'psn';

    return this.api.getPatientDetails(psn)
      .map(
      data => {
        const patient = this.transformer.transformPatient(response);
        return {
          psn: psn,
          analysisId: analysisId,
          patient: patient,
          summaryData: null
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
        canActivate: [AuthGuard]
      },
      {
        path: 'patients/:patientSequenceNumber/:sequence',
        component: PatientDetailsComponent,
        canActivate: [AuthGuard]
      }
    ])
  ],
  exports: [RouterModule],
  providers: [DataResolver]
})
export class PatientDetailsRoutingModule { }
