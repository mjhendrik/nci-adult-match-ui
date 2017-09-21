import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthHttp } from 'angular2-jwt';

import { Config } from '../shared/config/env.config';
import { ApiService } from '../shared/api/api.service';
import {
  CliaVariantReportsNTCViewData,
  CliaVariantReportsPACCViewData,
  CliaVariantReportsPCViewData
} from './clia-data-interfaces';

@Injectable()
export class AliquotApiService extends ApiService {
  protected get baseApiUrl(): string { return Config.API.ALIQUOT; }

  constructor(http: AuthHttp) {
    super(http);
  }

  getCliaVariantReportsNTC(molecular_id: string): Observable<CliaVariantReportsNTCViewData> {
    return this.http.get(this.url('/aliquot/' + molecular_id
      + '?projection=molecular_id,analysis_id,total_variants,mapd,cellularity,date_variant_received,torrent_variant_caller_version,report_status,snv_indels,copy_number_variants,gene_fusions',
      'assets/mock-data/clia-variant-reports-ntc-WHAT_SHOULD_BE_HERE.json'))
      .map(this.extractData)
      .catch(this.handleError);
  }

  getCliaVariantReportsPACC(molecular_id: string): Observable<CliaVariantReportsPACCViewData> {
    return this.http.get(this.url('/aliquot/' + molecular_id
      + '?projection=molecular_id,analysis_id,total_variants,mapd,cellularity,date_variant_received,torrent_variant_caller_version,report_status,snv_indels,copy_number_variants,gene_fusions',
      'assets/mock-data/clia-variant-reports-pacc-WHAT_SHOULD_BE_HERE.json'))
      .map(this.extractData)
      .catch(this.handleError);
  }

  getCliaVariantReportsPC(molecular_id: string): Observable<CliaVariantReportsPCViewData> {
    return this.http.get(this.url('/aliquot/' + molecular_id
      + '?projection=molecular_id,analysis_id,total_variants,mapd,cellularity,positive_control_version,date_molecular_id_created,date_variant_received,torrent_variant_caller_version,report_status,positive_variants,false_positive_variants',
      'assets/mock-data/clia-variant-reports-pc-WHAT_SHOULD_BE_HERE.json'))
      .map(this.extractData)
      .catch(this.handleError);
  }
}
