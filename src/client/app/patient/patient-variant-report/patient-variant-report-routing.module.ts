import {
  NgModule,
  Injectable
} from '@angular/core';
import {
  RouterModule,
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { PatientVariantReportComponent } from './patient-variant-report.component';
import { AuthGuard } from './../../shared/auth/auth.guard.service';
import { VariantReportSimpleTableModule } from '../../shared/variant-report-simple-table/variant-report-simple-table.module';

import { PatientApiService } from '../patient-api.service';
import { ViewDataTransformer } from '../view-data-transformer.service';
import { VariantReportData } from '../variant-report-data';

@Injectable()
class DataResolver implements Resolve<VariantReportData> {
  constructor(private api: PatientApiService, private transformer: ViewDataTransformer) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<VariantReportData> | Promise<VariantReportData> | VariantReportData {
    const psn: string = route.params.patientSequenceNumber;
    const bsn: string = route.params.biopsySequenceNumber;
    const analysisId: string = route.params.analysisId;

    return Observable.forkJoin(
      this.api.getPatientDetails(psn),
      this.api.getPatientCopyNumberReport(psn, analysisId),
      this.api.getPatientVariantReportOcp(psn, analysisId)
    ).map(
      data => {
        // getPatientDetails => data[0]
        // getPatientCopyNumberReport => data[1]
        // getPatientVariantReportOcp => data[2]

        const patient = this.transformer.transformPatient(data[0]) || {};

        return this.transformer.transformPatientVariantReport(patient, data[1], data[2], bsn, analysisId);
      }
    );
  }
}

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'patients/:patientSequenceNumber/biopsies/:biopsySequenceNumber/variant_reports/:analysisId',
        component: PatientVariantReportComponent, canActivate: [AuthGuard],
        resolve: { data: DataResolver }
      }
    ]),
    VariantReportSimpleTableModule
  ],
  exports: [RouterModule],
  providers: [DataResolver]
})
export class PatientVariantReportRoutingModule { }
