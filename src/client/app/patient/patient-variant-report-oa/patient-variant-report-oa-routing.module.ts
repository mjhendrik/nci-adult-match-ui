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

import { PatientVariantReportOutsideAssayComponent } from './patient-variant-report-oa.component';
import { AuthGuard } from './../../shared/auth/auth.guard.service';
import { VariantReportSimpleTableModule } from '../../shared/variant-report-simple-table/variant-report-simple-table.module';

import { PatientApiService } from '../patient-api.service';
import { ViewDataTransformer } from '../view-data-transformer.service';
import { VariantReportComparisonData } from '../variant-report-comparison-data';

@Injectable()
class DataResolver implements Resolve<VariantReportComparisonData> {
  constructor(private api: PatientApiService, private transformer: ViewDataTransformer) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<VariantReportComparisonData> | Promise<VariantReportComparisonData> | VariantReportComparisonData {
    const psn: string = route.params.patientSequenceNumber;

    const reportObservable = this.api.getOutsideAssayComparisonVariantReport(psn);
    const isOutsideAssayReport: boolean = route.queryParamMap.get('isOutsideAssay') === 'true';

    /* Interesting case of Observables.
    / `flatMap` causes sequential "execution" of the observables
    /  `forkJoin` causes parallel "execution" of the observables
    /  What is happening here, in plain English:
    /  First, request the Outside Assay Comparison Report data, then after the request has returned the data,
    /  execute the 4 OCP and CNV requests in parallel.
    /  After all 4 requests have returned data, `map` the resulting 5 elements to process further
    */
    return reportObservable.flatMap(x => Observable.forkJoin(
      Observable.of(x),
      this.api.getPatientCopyNumberReport(psn, x.outsideData.analysisId),
      this.api.getPatientVariantReportOcp(psn, x.outsideData.analysisId),
      this.api.getPatientCopyNumberReport(psn, x.matchData.analysisId),
      this.api.getPatientVariantReportOcp(psn, x.matchData.analysisId)
    )).map(x => {
      let [report, cnvDataOutside, ocpDataOutside, cnvDataMatch, ocpDataMatch] = x;

      const transformedReport = this.transformer.transformOutsidePatientReport(
        report, cnvDataOutside, ocpDataOutside, cnvDataMatch, ocpDataMatch, isOutsideAssayReport, psn);

      return transformedReport;
    });
  }
}

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'patients/:patientSequenceNumber/variant_reports_oa/:analysisId',
        component: PatientVariantReportOutsideAssayComponent, canActivate: [AuthGuard],
        resolve: { data: DataResolver }
      }
    ]),
    VariantReportSimpleTableModule
  ],
  exports: [RouterModule],
  providers: [DataResolver]
})
export class PatientVariantReportOutsideAssayRoutingModule { }

