import { NgModule, Injectable } from '@angular/core';
import {
  RouterModule,
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from "rxjs/Observable";

import { PatientVariantReportQcComponent } from './patient-variant-report-qc.component';
import { AuthGuard } from './../../shared/auth/auth.guard.service';
import { QcVariantReportData } from "./patient-variant-report-qc.module";
import { PatientApiService } from "../patient-api.service";
import { ViewDataTransformer } from "../view-data-transformer.service";

@Injectable()
class DataResolver implements Resolve<QcVariantReportData> {
  calculateOcpSum(ocpSummary: {[key:string]: any}): any {
    if (!ocpSummary)
      return null;
    
    let sum: number = 0;
    for (let key of Object.keys(ocpSummary)) {
      sum += Number(ocpSummary[key]);
    }

    return sum;
  }

  constructor(private api: PatientApiService, private transformer: ViewDataTransformer) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<QcVariantReportData> | Promise<QcVariantReportData> | QcVariantReportData {

    const psn: string = route.params['patientSequenceNumber']
    const analysisId: string = route.params['analysisId']

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
        snvAndIndels = snvAndIndels.concat(data[0].single_nucleotide_variants || [])
        let ocpSummary: {[key:string]: any} = data[1].genes;
        ocpSummary['SUM'] = this.calculateOcpSum(ocpSummary);
        let tvc_version = data[1].tvc_version;
        let showPools: boolean = tvc_version && tvc_version.startsWith("5.2")            
        return {
          psn: psn,
          analysisId: analysisId,
          molecularSequenceNumber: data[0].molecularSequenceNumber,
          dateReceived: data[0].dateReceived,
          cnv: data[0].copy_number_variants || [],
          geneFusions: data[0].gene_fusions || [],
          snvAndIndels: snvAndIndels,
          tvc_version: tvc_version,
          pool1: data[1].pool1,
          pool2: data[1].pool2,
          biopsySequenceNumber: data[1].biopsySequenceNumber,
          ocpSummary: ocpSummary,
          mapd: data[2].mapd,
          cellularity: data[2].cellularity,
          parsed_vcf_genes: data[2].parsed_vcf_genes,
          dnaBamFilePath: data[3].dnaBamFilePath,
          rnaBamFilePath: data[3].rnaBamFilePath,
          vcfFilePath: data[3].vcfFilePath,
          showPools: showPools
        };
      }
    );
  }
}

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'patients/:patientSequenceNumber/variant_reports/:analysisId/qc',
        component: PatientVariantReportQcComponent, canActivate: [AuthGuard],
        resolve: { data: DataResolver }
      }
    ])
  ],
  exports: [RouterModule],
  providers: [DataResolver]
})
export class PatientVariantReportQcRoutingModule { }
