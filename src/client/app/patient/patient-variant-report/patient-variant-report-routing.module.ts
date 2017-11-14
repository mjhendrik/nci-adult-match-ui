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
import { TreatmentArmApiService } from '../../treatment-arm/treatment-arm-api.service';

@Injectable()
class DataResolver implements Resolve<VariantReportData> {
  constructor(private patientApi: PatientApiService, private treatmentArmApi: TreatmentArmApiService, private transformer: ViewDataTransformer) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<VariantReportData> | Promise<VariantReportData> | VariantReportData {
    const psn: string = route.params.patientSequenceNumber;
    const bsn: string = route.params.biopsySequenceNumber;
    const analysisId: string = route.params.analysisId;

    return Observable.forkJoin(
      this.patientApi.getPatientDetails(psn).flatMap(patientData => {
        let patient = this.transformer.transformPatient(patientData) || {};
        let variantReport = this.transformer.findVariantReport(patient, analysisId);
        let rawVariantReport = variantReport.variantReport;
        delete rawVariantReport.singleNucleotideVariantAndIndels;
        return this.treatmentArmApi
          .getAmois(variantReport.variantReport)
          .map(updatedVariantReport => {
            this.transformer.replaceVariantReportTables(rawVariantReport, updatedVariantReport);
            return patient;
          });
      }),
      this.patientApi.getPatientCopyNumberReport(psn, analysisId),
      this.patientApi.getPatientVariantReportOcp(psn, analysisId)
    ).map(
      data => {
        // getPatientDetails => data[0]
        // getPatientCopyNumberReport => data[1]
        // getPatientVariantReportOcp => data[2]

        const patient = data[0];

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
