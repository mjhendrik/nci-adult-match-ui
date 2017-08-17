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
import { VariantReportComparisonData } from './variant-report-comparison-data';

@Injectable()
class DataResolver implements Resolve<VariantReportComparisonData> {
  constructor(private api: PatientApiService, private transformer: ViewDataTransformer) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<VariantReportComparisonData> | Promise<VariantReportComparisonData> | VariantReportComparisonData {
    const psn: string = route.params.patientSequenceNumber;

    const reportObservable = this.api.getOutsideAssayComparisonVariantReport(psn);

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

      report.matchData.pool1 = ocpDataMatch.pool1;
      report.matchData.pool2 = ocpDataMatch.pool2;
      report.matchData.mapd = cnvDataMatch.mapd;
      report.matchData.cellularity = cnvDataMatch.cellularity;
      report.matchData.showPools = this.transformer.showPools(cnvDataMatch.tvc_version);
      report.matchData.variantReport = report.matchData.variantReport || {};
      report.matchData.variantReport.moiSummary = report.matchData.variantReport.moiSummary || {};

      report.outsideData.pool1 = ocpDataOutside.pool1;
      report.outsideData.pool2 = ocpDataOutside.pool2;
      report.outsideData.mapd = cnvDataOutside.mapd;
      report.outsideData.cellularity = cnvDataOutside.cellularity;
      report.outsideData.showPools = this.transformer.showPools(cnvDataOutside.tvc_version);
      report.outsideData.variantReport = report.outsideData.variantReport || {};
      report.outsideData.variantReport.moiSummary = report.outsideData.variantReport.moiSummary || {};

      return report;
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

