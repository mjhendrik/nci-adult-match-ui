import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthHttp } from 'angular2-jwt';

import { Config } from '../shared/config/env.config';
import { ApiService } from '../shared/api/api.service';
import { CliaVariantReportsQCViewData } from './clia-data-interfaces';

@Injectable()
export class SampleControlApiService extends ApiService {
  // protected get baseApiUrl(): string { return Config.API.SAMPLE_CONTROLS; } // sample control
  protected get baseApiUrl(): string { return Config.API.MESSAGE; } // message

  constructor(http: AuthHttp) {
    super(http);
  }

  // http://localhost:8282/api/v1/message/clia/sample_control

  getCliaDetailsNTC(type: string): Observable<any[]> {

    // return this.http.get(this.url('/sample_controls?site=' + type
    //   + '&control_type=no_template&projection=molecular_id,date_molecular_id_created,date_variant_received,report_status', // sample control

    return this.http.get(this.url('/message/clia/ntc_control?site=' + type
      + '&projection=molecular_id,date_molecular_id_created,date_variant_received,report_status', // message
      'assets/mock-data/clia-' + type + '-ntc.json'))
      .map(this.extractData)
      .catch(this.handleError);
  }

  getCliaDetailsPACC(type: string): Observable<any[]> {

    // return this.http.get(this.url('/sample_controls?site=' + type
    //   + '&control_type=proficiency_competency&projection=molecular_id,date_molecular_id_created,date_variant_received,report_status', // sample control

    return this.http.get(this.url('/message/clia/proficiency_competency_control?site=' + type
      + '', // message
      ''))
      .map(this.extractData)
      .catch(this.handleError);
  }

  getCliaDetailsPC(type: string): Observable<any[]> {

    // return this.http.get(this.url('/sample_controls?site=' + type
    //   + '&control_type=positive&projection=molecular_id,date_molecular_id_created,date_variant_received,report_status', // sample control

    return this.http.get(this.url('/message/clia/sample_control?site=' + type
      + '', // message
      ''))
      .map(this.extractData)
      .catch(this.handleError);
  }

  getCliaVariantReportQC(molecular_id: string, analysisId: string): Observable<CliaVariantReportsQCViewData> {

    // getCliaVariantReportQC(molecular_id: string): Observable<CliaVariantReportsQCViewData> {
    // return this.http.get(this.url('/sample_controls/quality_control/' + molecular_id
    // tslint:disable-next-line:max-line-length
    //   + '?projection=molecular_id,analysis_id,total_variants,mapd,cellularity,torrent_variant_caller_version,oncomine_control_panel_summary', // sample control

    return this.http.get(this.url('/message/ecog/patient/' + molecular_id + '/variant_reports/' + analysisId + '/qc_report'
      // analysisId might not be readily available
      + '?projection=molecular_id,analysis_id,total_variants,mapd,cellularity,torrent_variant_caller_version,oncomine_control_panel_summary', // message
      'assets/mock-data/clia-variant-report-qc-WHAT_SHOULD_BE_HERE.json'))
      .map(this.extractData)
      .catch(this.handleError);
  }

  getCliaVariantReportVCF(molecular_id: string, analysisId: string): Observable<CliaVariantReportsQCViewData> {
    return this.http.get(this.url('/message/ecog/patient/' + molecular_id + '/variant_reports/' + analysisId + '/vcf_graph', // message
      // analysisId might not be readily available
      'assets/mock-data/clia-variant-report-qc-WHAT_SHOULD_BE_HERE_FOR_GRAPH.json'))
      .map(this.extractData)
      .catch(this.handleError);
  }

  downloadCliaDnaBam(molecular_id: string): Observable<any> {

    //   return this.http.get(Config.API.SAMPLE_CONTROLS + '/sample_controls/files/' + molecular_id + '/dna_bam_name') // sample control

    return this.http.get(Config.API.MESSAGE + '/message/clia/aliquot/sample_control/files/' + molecular_id + '/dna_bam') // message
      .map(this.extractData)
      .catch(this.handleError);
  }

  downloadCliaDnaBai(molecular_id: string): Observable<any> {

    //   return this.http.get(Config.API.SAMPLE_CONTROLS + '/sample_controls/files/' + molecular_id + '/dna_bai_name') // sample control

    return this.http.get(Config.API.MESSAGE + '/message/clia/aliquot/sample_control/files/' + molecular_id + '/dna_bai') // message
      .map(this.extractData)
      .catch(this.handleError);
  }

  downloadCliaRnaBam(molecular_id: string): Observable<any> {

    //   return this.http.get(Config.API.SAMPLE_CONTROLS + '/sample_controls/files/' + molecular_id + '/cdna_bam_name') // sample control

    return this.http.get(Config.API.MESSAGE + '/message/clia/aliquot/sample_control/files/' + molecular_id + '/rna_bam') // message
      .map(this.extractData)
      .catch(this.handleError);
  }

  downloadCliaRnaBai(molecular_id: string): Observable<any> {

    //   return this.http.get(Config.API.SAMPLE_CONTROLS + '/sample_controls/files/' + molecular_id + '/cdna_bai_name') // sample control

    return this.http.get(Config.API.MESSAGE + '/message/clia/aliquot/sample_control/files/' + molecular_id + '/rna_bai') // message
      .map(this.extractData)
      .catch(this.handleError);
  }

  downloadCliaVcf(molecular_id: string): Observable<any> {

    //   return this.http.get(Config.API.SAMPLE_CONTROLS + '/sample_controls/files/' + molecular_id + '/vcf_name') // sample control

    return this.http.get(Config.API.MESSAGE + '/message/clia/aliquot/sample_control/files/' + molecular_id + '/vcf') // message
      .map(this.extractData)
      .catch(this.handleError);
  }

  generateMsn(site: string, control_type: string): Observable<any> {

    // return this.http.post(Config.API.SAMPLE_CONTROLS + '/sample_controls?site=' + site + '&control_type=' + control_type, '') // sample control

    if (control_type === 'positive') control_type = 'sample_control';
    if (control_type === 'no_template') control_type = 'ntc_control';
    if (control_type === 'proficiency_competency') control_type = 'proficiency_competency_control';

    return this.http.post(Config.API.MESSAGE + '/message/clia/' + control_type + '/generateMolecularId/' + site, '') // message
      .catch(this.handleError);
  }

  rejectReport(molecular_id: string, type: string): Observable<any> {
    return this.http.post(Config.API.MESSAGE + '/message/clia/' + type + '/status',
      {
        'molecularSequenceNumber': molecular_id,
        'confirmation': false,
        'comment': null
      })
      .map(this.extractData)
      .catch(this.handleError);
  }

  confirmReport(molecular_id: string, type: string): Observable<any> {
    return this.http.post(Config.API.MESSAGE + '/message/clia/' + type + '/status',
      {
        'molecularSequenceNumber': molecular_id,
        'confirmation': true,
        'comment': null
      })
      .map(this.extractData)
      .catch(this.handleError);
  }
}
