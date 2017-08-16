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
    const analysisId: string = route.params.analysisId;

    const reportObservable = this.api.getOutsideAssayComparisonVariantReport(psn);

    const supplementalObservable = Observable.forkJoin(
      this.api.getPatientCopyNumberReport(psn, analysisId),
      this.api.getPatientVariantReportOcp(psn, analysisId)
    );

    return Observable.concat(reportObservable, supplementalObservable)
      .map(x => {
        console.log(x);
        return {} as VariantReportComparisonData;
      });
  }

  // resolveOld(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): Observable<VariantReportComparisonData> | Promise<VariantReportComparisonData> | VariantReportComparisonData {
  //   const psn: string = route.params.patientSequenceNumber;
  //   const analysisId: string = route.params.analysisId;

  //   return Observable.forkJoin(
  //     this.api.getOutsideAssayComparisonVariantReport(psn),
  //     this.api.getPatientCopyNumberReport(psn, analysisId),
  //     this.api.getPatientVariantReportOcp(psn, analysisId)
  //   ).map(
  //     data => {
  //       // getOutsideAssayComparisonVariantReport => data[0]
  //       // getPatientCopyNumberReport => data[1]
  //       // getPatientVariantReportOcp => data[2]

  //       const report = this.transformer.transformOutsidePatientReport(data[0]) || {};

  //       let tvc_version = data[1].tvc_version;

  //       let outsideData = report.outsideData;
  //       outsideData.showPools = this.transformer.showPools(tvc_version);

  //       let matchData = report.matchData;
  //       matchData.showPools = this.transformer.showPools(tvc_version);

  //       // let matchData = {
  //       //   analysisId: route.params.analysisId,
  //       //   analysis: analysis,
  //       //   variantReport: analysis.variantReport,
  //       //   assignmentReport: analysis.assignmentReport,
  //       //   tvc_version: tvc_version,
  //       //   pool1: data[2].pool1,
  //       //   pool2: data[2].pool2,
  //       //   mapd: data[1].mapd,
  //       //   cellularity: data[1].cellularity,
  //       //   showPools: showPools,
  //       //   assays: analysis.assays
  //       // };

  //       let comparisonVariantReport = {
  //         singleNucleotideVariantAndIndels: analysis.variantReport.singleNucleotideVariantAndIndels,
  //         copyNumberVariants: analysis.variantReport.copyNumberVariants,
  //         unifiedGeneFusions: analysis.variantReport.unifiedGeneFusions,
  //       };

  //       let model = {
  //         psn: report.patientSequenceNumber,
  //         currentPatientStatus: report.currentPatientStatus,
  //         currentStepNumber: report.currentStepNumber,
  //         concordance: report.concordance,
  //         outsideData: outsideData,
  //         matchData: matchData,
  //         comparisonVariantReport: comparisonVariantReport
  //       };

  //       return model;
  //     }
  //     );
  // }
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

