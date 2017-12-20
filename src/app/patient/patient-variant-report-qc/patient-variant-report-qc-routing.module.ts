import { NgModule, Injectable } from '@angular/core';
import {
  RouterModule,
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { PatientVariantReportQcComponent } from './patient-variant-report-qc.component';
import { AuthGuard } from './../../shared/auth/auth.guard';
import { QcVariantReportData } from './patient-variant-report-qc.module';
import { PatientApiService } from '../patient-api.service';
import { ViewDataTransformer } from '../view-data-transformer.service';

@Injectable()
class DataResolver implements Resolve<QcVariantReportData> {
  constructor(private api: PatientApiService, private transformer: ViewDataTransformer) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<QcVariantReportData> | Promise<QcVariantReportData> | QcVariantReportData {

    const psn: string = route.params['patientSequenceNumber'];
    const bsn: string = route.params['biopsySequenceNumber'];
    const analysisId: string = route.params['analysisId'];

    return Observable.forkJoin(
      this.api.getPatientVariantReportQc(psn, analysisId),
      this.api.getPatientVariantReportOcp(psn, analysisId),
      this.api.getPatientCopyNumberReport(psn, analysisId),
      this.api.getPatientVariantReportFileInfo(psn, analysisId)
    ).map(
      data => {
        // getPatientVariantReportQc => data[0]
        // getPatientVariantReportOcp => data[1]
        // getPatientCopyNumberReport => data[2]
        // getPatientVariantReportFileInfo => data[3]

        let snvAndIndels: any[] = data[0].indels || [];
        snvAndIndels = snvAndIndels.concat(data[0].singleNucleotideVariants || []);

        let ocpSummary: {[key:string]: any} = data[1].genes;
        let hasData: boolean;
        let sum: number;
        [hasData, sum] = this.calculateOcpSum(ocpSummary);
        ocpSummary['SUM'] = sum;
        ocpSummary.hasData = hasData;
        let tvc_version = data[1].tvc_version;
        let showPools: boolean = this.transformer.showPools(tvc_version);

        return {
          psn: psn,
          bsn: bsn,
          analysisId: analysisId,
          molecularSequenceNumber: data[0].molecularSequenceNumber,
          dateReceived: data[0].dateReceived,
          copyNumberVariants: data[0].copyNumberVariants || [],
          geneFusions: data[0].geneFusions || [],
          snvAndIndels: snvAndIndels,
          tvc_version: tvc_version,
          pool1: data[1].pool1,
          pool2: data[1].pool2,
          biopsySequenceNumber: data[1].biopsySequenceNumber,
          ocpSummary: ocpSummary,
          mapd: data[2].mapd,
          cellularity: data[2].cellularity,
          parsed_vcf_genes: [data[2].copy_number_variant_genes, data[2].file_name, tvc_version],
          dnaBamFilePath: data[3].dnaBamFilePath,
          rnaBamFilePath: data[3].rnaBamFilePath,
          vcfFilePath: data[3].vcfFilePath,
          showPools: showPools
        };
      }
    );
  }

  private calculateOcpSum(ocpSummary: {[key:string]: any}): [boolean, number] {
    if (!ocpSummary)
      return null;

    let hasData: boolean;
    let sum: number = 0;
    for (let key of Object.keys(ocpSummary)) {
      if (!hasData && ocpSummary[key])
        hasData = true;
      sum += Number(ocpSummary[key]);
    }

    return [hasData, sum];
  }
}

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'patients/:patientSequenceNumber/biopsies/:biopsySequenceNumber/variant_reports/:analysisId/qc',
        component: PatientVariantReportQcComponent, canActivate: [AuthGuard],
        resolve: { data: DataResolver }
      }
    ])
  ],
  exports: [RouterModule],
  providers: [DataResolver]
})
export class PatientVariantReportQcRoutingModule { }
