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
import { VariantReportComparisonData } from './patient-variant-report-oa.module';

@Injectable()
class DataResolver implements Resolve<VariantReportComparisonData> {
  constructor(private api: PatientApiService, private transformer: ViewDataTransformer) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<VariantReportComparisonData> | Promise<VariantReportComparisonData> | VariantReportComparisonData {
    const psn: string = route.params.patientSequenceNumber;
    const analysisId: string = route.params.analysisId;

    return Observable.forkJoin(
      this.api.getOutsideAssayComparisonVariantReport(psn),
      this.api.getPatientCopyNumberReport(psn, analysisId),
      this.api.getPatientVariantReportOcp(psn, analysisId)
    ).map(
      data => {
        // getOutsideAssayComparisonVariantReport => data[0]
        // getPatientCopyNumberReport => data[1]
        // getPatientVariantReportOcp => data[2]

        const patient = this.transformer.transformPatient(data[0]) || {};
        const analysis = patient.analyses[route.params.analysisId] || {};

        let tvc_version = data[1].tvc_version;
        let showPools: boolean = tvc_version && tvc_version.startsWith('5.2')

        let outsideData = {
          analysisId: route.params.analysisId,
          analysis: analysis,
          variantReport: analysis.variantReport,
          assignmentReport: analysis.assignmentReport,
          tvc_version: tvc_version,
          pool1: data[2].pool1,
          pool2: data[2].pool2,
          mapd: data[1].mapd,
          cellularity: data[1].cellularity,
          showPools: showPools,
          assays: analysis.assays
        };

        let matchData = {
          analysisId: route.params.analysisId,
          analysis: analysis,
          variantReport: analysis.variantReport,
          assignmentReport: analysis.assignmentReport,
          tvc_version: tvc_version,
          pool1: data[2].pool1,
          pool2: data[2].pool2,
          mapd: data[1].mapd,
          cellularity: data[1].cellularity,
          showPools: showPools,
          assays: analysis.assays
        };

        let comparisonVariantReport = {
          singleNucleotideVariantAndIndels: analysis.variantReport.singleNucleotideVariantAndIndels,
          copyNumberVariants: analysis.variantReport.copyNumberVariants,
          unifiedGeneFusions: analysis.variantReport.unifiedGeneFusions,
        };

        let model = {
          psn: patient.patientSequenceNumber,
          currentPatientStatus: patient.currentPatientStatus,
          currentStepNumber: patient.currentStepNumber,
          concordance: patient.concordance,
          outsideData: outsideData,
          matchData: matchData,
          comparisonVariantReport: comparisonVariantReport
        };

        return model;
      }
    );
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

