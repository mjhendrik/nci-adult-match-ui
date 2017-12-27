import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { Config } from '../shared/config/env.config';
import { ApiService } from '../shared/api/api.service';
import {
  CliaVariantReportsNTCViewData,
  CliaVariantReportsPACCViewData,
  CliaVariantReportsPCViewData,
  CliaVariantReportsQCViewData
} from './clia-data-interfaces';

export interface ApiUpdateError {
  kind: 'error';
  code?: number;
  message: string;
}

@Injectable()
export class AliquotApiService extends ApiService {
  // protected get baseApiUrl(): string { return Config.API.ALIQUOT; } // sample control
  protected get baseApiUrl(): string { return Config.API.MESSAGE; } // message

  constructor(http: HttpClient) {
    super(http);
  }

  getCliaVariantReportsNTC(molecular_id: string): Observable<CliaVariantReportsNTCViewData> {
    return this.http.get(this.url('/message/clia/ntc_control/variant_report/' + molecular_id, ''))
      .map(this.extractData)
      .catch(this.handleError);
  }

  getCliaVariantReportsPACC(molecular_id: string): Observable<CliaVariantReportsPACCViewData> {
    return this.http.get(this.url('/message/clia/proficiency_competency_control?molecularSequenceNumber=' + molecular_id, ''))
      .map(this.extractData)
      .catch(this.handleError);
  }

  getCliaVariantReportsPC(molecular_id: string): Observable<CliaVariantReportsPCViewData> {
    return this.http.get(this.url('/message/clia/sample_control/variant_report/' + molecular_id, ''))
      .map(this.extractData)
      .catch(this.handleError);
  }

  getCliaVariantReportVCF(molecular_id: string, analysisId: string): Observable<CliaVariantReportsQCViewData> {
    return this.http.get(this.url('/message/ecog/patient/' + molecular_id + '/variant_reports/' + analysisId + '/vcf_graph', ''))
      .map(this.extractData)
      .catch(this.handleError);
  }

  validateAnalysisId(msn: string, analysisId: string) {
    return this.http.get(this.url(`/message/clia/aliquot/presign_url/IR_WAO85/${msn}/${analysisId}`,
      'assets/mock-data/WHAT_SHOULD_BE_HERE?.json'))
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

  notifyAfterUpload(msn: string, body: any): Observable<any | ApiUpdateError> {
    return this.http.put(`${this.baseApiUrl}/message/clia/aliquot/files/` + msn, body)
      .map(this.extractData)
      .catch((err: Response) => {
        const data = err.json();
        return Observable.of({ kind: 'error', message: data.message } as ApiUpdateError);
      });
  }

}
