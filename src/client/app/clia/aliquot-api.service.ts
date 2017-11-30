import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AuthHttp } from 'angular2-jwt';

import { Config } from '../shared/config/env.config';
import { ApiService } from '../shared/api/api.service';
import {
  CliaVariantReportsNTCViewData,
  CliaVariantReportsPACCViewData,
  CliaVariantReportsPCViewData
} from './clia-data-interfaces';

export interface ApiStatusUpdateError {
  kind: 'error';
  code?: number;
  message: string;
}

@Injectable()
export class AliquotApiService extends ApiService {
  // protected get baseApiUrl(): string { return Config.API.ALIQUOT; } // sample control
  protected get baseApiUrl(): string { return Config.API.MESSAGE; } // message

  constructor(http: AuthHttp) {
    super(http);
  }

  getCliaVariantReportsNTC(molecular_id: string): Observable<CliaVariantReportsNTCViewData> {

    // return this.http.get(this.url('/aliquot/' + molecular_id
    // tslint:disable-next-line:max-line-length
    //   + '?projection=molecular_id,analysis_id,total_variants,mapd,cellularity,date_variant_received,torrent_variant_caller_version,report_status,snv_indels,copy_number_variants,gene_fusions', // aliquot

    return this.http.get(this.url('/message/clia/ntc_control/variant_report/' + molecular_id, ''))
      .map(this.extractData)
      .catch(this.handleError);
  }

  getCliaVariantReportsPACC(molecular_id: string): Observable<CliaVariantReportsPACCViewData> {

    // return this.http.get(this.url('/aliquot/' + molecular_id
    // tslint:disable-next-line:max-line-length
    //   + '?projection=molecular_id,analysis_id,total_variants,mapd,cellularity,date_variant_received,torrent_variant_caller_version,report_status,snv_indels,copy_number_variants,gene_fusions', // aliquot

    return this.http.get(this.url('/message/clia/proficiency_competency_control/variant_report/' + molecular_id, ''))
      .map(this.extractData)
      .catch(this.handleError);
  }

  getCliaVariantReportsPC(molecular_id: string): Observable<CliaVariantReportsPCViewData> {

    // return this.http.get(this.url('/aliquot/' + molecular_id
    // tslint:disable-next-line:max-line-length
    //   + '?projection=molecular_id,analysis_id,total_variants,mapd,cellularity,positive_control_version,date_molecular_id_created,date_variant_received,torrent_variant_caller_version,report_status,positive_variants,false_positive_variants', // aliquot

    return this.http.get(this.url('/message/clia/sample_control/variant_report/' + molecular_id, ''))
      .map(this.extractData)
      .catch(this.handleError);

    // MOCK
    // return this.http.get('assets/mock-data/clia-variant-reports-pc-mocha.json')
    //   .map(this.extractData)
    //   // .do(data => console.log('server data:', data))  // debug
    //   .catch(this.handleError);

  }

  validateAnalysisId(msn: string, analysisId: string) {
    return this.http.get(this.url('/message/clia/aliquot/presign_url/IR_WAO85/' + msn + '/' + analysisId, 'assets/mock-data/WHAT_SHOULD_BE_HERE.json'))
      .map(this.extractData)
      .catch(this.handleError);
  }

  getPresignedUrls(msn: string, analysisId: string, zipFile: string, dnaFile: string, cdnaFile: string): Observable<[string, string, string]> {
    return Observable.forkJoin(
      this.http.put(`${this.baseApiUrl}/message/clia/aliquot/presign_url`, { molecularSequenceNumber: msn, analysisId: analysisId, filename: zipFile }),
      this.http.put(`${this.baseApiUrl}/message/clia/aliquot/presign_url`, { molecularSequenceNumber: msn, analysisId: analysisId, filename: dnaFile }),
      this.http.put(`${this.baseApiUrl}/message/clia/aliquot/presign_url`, { molecularSequenceNumber: msn, analysisId: analysisId, filename: cdnaFile })
    ).map(
      data => {
        return [
          this.extractData(data[0]),
          this.extractData(data[1]),
          this.extractData(data[2])
        ] as [string, string, string];
      });
  }

  getDocumentPresignedUrls(msn: string, analysisId: string, documentFile: string): Observable<[string]> {
    return Observable.forkJoin(
      this.http.put(`${this.baseApiUrl}/message/clia/aliquot/presign_url`, { molecularSequenceNumber: msn, analysisId: analysisId, filename: documentFile }),
    ).map(
      data => {
        return [
          this.extractData(data[0])
        ] as [string];
      });
  }

  notifyAfterUpload(msn: string, body: any): Observable<any | ApiStatusUpdateError> {
    return this.http.put(`${this.baseApiUrl}/message/clia/aliquot/` + msn, body)
      .map(this.extractData)
      .catch((err: Response) => {
        const data = err.json();
        return Observable.of({ kind: 'error', message: data.message } as ApiStatusUpdateError);
      });
  }

}
