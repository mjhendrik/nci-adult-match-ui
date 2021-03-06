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
import { TreatmentArmApiService } from '../../treatment-arm/treatment-arm-api.service';

@Injectable()
class DataResolver implements Resolve<VariantReportComparisonData> {
  constructor(
    private patientApi: PatientApiService,
    private treatmentArmApi: TreatmentArmApiService,
    private transformer: ViewDataTransformer) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<VariantReportComparisonData> | Promise<VariantReportComparisonData> | VariantReportComparisonData {
    const psn: string = route.params.patientSequenceNumber;

    const reportObservable = this.patientApi
      .getOutsideAssayComparisonVariantReport(psn)
      .map(comparisonData => {
        // Get AMOIs for Outside Data
        if (comparisonData.outsideData && comparisonData.outsideData.analysisId && comparisonData.outsideData.variantReport) {
          let outsideVariantReport = comparisonData.outsideData.variantReport;
          delete outsideVariantReport.singleNucleotideVariantAndIndels;
          this.treatmentArmApi
            .getAmois(outsideVariantReport)
            .map(updatedVariantReport => {
              this.transformer.replaceVariantReportTables(outsideVariantReport, updatedVariantReport);
              return comparisonData;
            }).subscribe(x => x);
          return comparisonData;
        } else {
          return comparisonData;
        }
      })
      .map((comparisonData) => {
        // Get AMOIs for MATCH Data
        if (comparisonData.matchData && comparisonData.matchData.analysisId && comparisonData.matchData.variantReport) {
          let matchReport = comparisonData.matchData.variantReport;
          delete matchReport.singleNucleotideVariantAndIndels;
          this.treatmentArmApi
            .getAmois(matchReport)
            .map(updatedVariantReport => {
              this.transformer.replaceVariantReportTables(matchReport, updatedVariantReport);
              return comparisonData;
            }).subscribe(x => x);
          return comparisonData;
        } else {
          return comparisonData;
        }
      });

    const isOutsideAssayReport: boolean = route.queryParamMap.get('isOutsideAssay') === 'true';

    /* Interesting case of Observables.
    / `flatMap` causes sequential "execution" of the observables
    /  `forkJoin` causes parallel "execution" of the observables
    /  What is happening here, in plain English:
    /  First, request the Outside Assay Comparison Report data, then after the request has returned the data,
    /  execute the 2 OCP and CNV requests in parallel.
    /  After all 2 requests have returned data, `map` the resulting 3 elements to process further
    */
    return reportObservable.flatMap((comparisonData: VariantReportComparisonData) => Observable.forkJoin(
      Observable.of(comparisonData),
      this.patientApi.getPatientCopyNumberReport(psn, comparisonData.matchData.analysisId),
      this.patientApi.getPatientVariantReportOcp(psn, comparisonData.matchData.analysisId),
      this.patientApi.getPatientDetails(psn)
    )).map(x => {
      let patient = this.transformer.transformPatient(x);
      let [report, cnvDataMatch, ocpDataMatch] = x;

      const transformedReport = this.transformer.transformOutsidePatientReport(
        report, cnvDataMatch, ocpDataMatch, isOutsideAssayReport, psn, patient);

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

