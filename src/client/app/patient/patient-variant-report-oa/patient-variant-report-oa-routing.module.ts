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
      this.api.getPatientDetails(psn),
      this.api.getPatientCopyNumberReport(psn, analysisId),
      this.api.getPatientVariantReportOcp(psn, analysisId)
    ).map(
      data => {
        // getPatientDetails => data[0]
        // getPatientCopyNumberReport => data[1]
        // getPatientVariantReportOcp => data[2]

        const patient = this.transformer.transformPatient(data[0]) || {};
        const analysis = patient.analyses[route.params.analysisId] || {};

        let tvc_version = data[1].tvc_version;
        let showPools: boolean = tvc_version && tvc_version.startsWith('5.2')

        return {
          psn: psn,
          analysisId: route.params.analysisId,
          patient: patient,
          analysis: analysis,
          variantReport: analysis.variantReport,
          assignmentReport: analysis.assignmentReport,
          assignmentHistory: patient.patientAssignments,
          parsed_vcf_genes: [data[1].parsed_vcf_genes,data[1].file_name],
          tvc_version: tvc_version,
          pool1: data[2].pool1,
          pool2: data[2].pool2,
          mapd: data[1].mapd,
          cellularity: data[1].cellularity,
          showPools: showPools,
          assays: analysis.assays
        };
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

