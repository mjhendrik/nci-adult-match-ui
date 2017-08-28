import { NgModule, Injectable } from '@angular/core';
import { RouterModule, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AssignmentReportComponent } from './assignment-report.component';
import { AuthGuard } from './../../shared/auth/auth.guard.service';
import { AssignmentReportData } from './assignment-report.module';
import { PatientApiService } from '../patient-api.service';
import { ViewDataTransformer } from '../view-data-transformer.service';

@Injectable()
class DataResolver implements Resolve<AssignmentReportData> {
  constructor(private api: PatientApiService, private transformer: ViewDataTransformer) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<AssignmentReportData> | Promise<AssignmentReportData> | AssignmentReportData {
    const dateAssigned: string = route.params.dateAssigned;
    const psn: string = route.params.patientSequenceNumber;

    return this.api.getPatientDetails(psn)
      .map(patient => this.transformer.transformPatientAssignment(patient, dateAssigned));
  }
}

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'patients/:patientSequenceNumber/variant_reports/:analysisId/assignment/:dateAssigned',
        component: AssignmentReportComponent, canActivate: [AuthGuard],
        resolve: { data: DataResolver }
      }
    ])
  ],
  exports: [RouterModule]
})
export class AssignmentReportRoutingModule { }
