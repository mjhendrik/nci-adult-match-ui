import { NgModule, Injectable } from '@angular/core';
import {
  RouterModule,
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from "rxjs/Observable";

import { PatientVariantReportComponent } from './patient-variant-report.component';
import { AuthGuard } from './../../shared/auth/auth.guard.service';
import { VariantReportSimpleTableModule } from '../../shared/variant-report-simple-table/variant-report-simple-table.module';

import { PatientApiService } from "../patient-api.service";
import { ViewDataTransformer } from "../view-data-transformer.service";
import { VariantReportData } from "./patient-variant-report.module";

@Injectable()
class DataResolver implements Resolve<VariantReportData> {
  constructor(private api: PatientApiService, private transformer: ViewDataTransformer) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<VariantReportData> | Promise<VariantReportData> | VariantReportData {
    return Observable.forkJoin(
      this.api.getPatientDetails(route.params.patientSequenceNumber),
      this.api.getPatientCopyNumberReport(route.params.patientSequenceNumber, route.params.analysisId)
    ).map(
      data => {
        const patient = this.transformer.transformPatient(data[0]) || {};
        const analysis = patient.analyses[route.params.analysisId] || {};
        return {
          psn: route.params.patientSequenceNumber,
          analysisId: route.params.analysisId,
          patient: patient,
          analysis: analysis,
          variantReport: analysis.variantReport,
          assignmentReport: analysis.assignmentReport,
          assignmentHistory: patient.patientAssignments,
          parsed_vcf_genes: data[1].parsed_vcf_genes
        }
      }
    );
  }
}

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'patients/:patientSequenceNumber/variant_reports/:analysisId',
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
