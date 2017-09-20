import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AuthHttp } from 'angular2-jwt';

import { Config } from '../shared/config/env.config';
import { ApiService } from '../shared/api/api.service';

export interface CliaVariantReportsNTCInterface {
  molecular_id: {};
  analysis_id: {};
  total_variants: {};
  mapd: {};
  cellularity: {};
  date_variant_received: {};
  torrent_variant_caller_version: {};
  report_status: {};
  copy_number_variants: any[];
  gene_fusions: any[];
  snv_indels: any[];
}

export interface CliaVariantReportsPACCInterface {
  molecular_id: {};
  analysis_id: {};
  total_variants: {};
  mapd: {};
  cellularity: {};
  date_variant_received: {};
  torrent_variant_caller_version: {};
  report_status: {};
  copy_number_variants: any[];
  gene_fusions: any[];
  snv_indels: any[];
}

export interface CliaVariantReportsPCInterface {
  molecular_id: {};
  analysis_id: {};
  total_variants: {};
  mapd: {};
  cellularity: {};
  positive_control_version: {};
  date_molecular_id_created: {};
  date_variant_received: {};
  torrent_variant_caller_version: {};
  report_status: {};
  false_positive_variants: any[];
  positive_variants: any[];
}

export interface CliaVariantReportsQCInterface {
  molecular_id: {};
  analysis_id: {};
  total_variants: {};
  mapd: {};
  cellularity: {};
  torrent_variant_caller_version: {};
  oncomine_control_panel_summary: any[];
  copy_number_variants: any[];
  gene_fusions: any[];
  snv_indels: any[];
}

@Injectable()
export class CliaApiService extends ApiService {

  /**
   * Creates a new CliaApiService with the injected AuthHttp.
   * @param {AuthHttp} http - The injected AuthHttp.
   * @constructor
   */
  constructor(http: AuthHttp) {
    super(http);
  }

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @return {string[]} The Observable for the HTTP request.
   */
  getCliaDetailsNTC(type: string): Observable<any[]> {

    // return this.http.get('assets/mock-data/clia-' + type + '-ntc.json') // works only for mocha

    return this.http.get(Config.API.SAMPLE_CONTROLS + '/sample_controls?site=' + type
      + '&control_type=no_template&projection=molecular_id,date_molecular_id_created,date_variant_received,report_status')
      .map(this.extractData)
      .catch(this.handleError);
  }

  getCliaDetailsPACC(type: string): Observable<any[]> {

    // return this.http.get('assets/mock-data/clia-' + type + '-pacc.json') // works only for mocha

    return this.http.get(Config.API.SAMPLE_CONTROLS + '/sample_controls?site=' + type
      + '&control_type=proficiency_competency&projection=molecular_id,date_molecular_id_created,date_variant_received,report_status')
      .map(this.extractData)
      .catch(this.handleError);
  }

  getCliaDetailsPC(type: string): Observable<any[]> {

    // return this.http.get('assets/mock-data/clia-' + type + '-pc.json') // works only for mocha

    return this.http.get(Config.API.SAMPLE_CONTROLS + '/sample_controls?site=' + type
      + '&control_type=positive&projection=molecular_id,date_molecular_id_created,date_variant_received,report_status')
      .map(this.extractData)
      .catch(this.handleError);
  }

  getCliaIon(type: string): Observable<any[]> {

    // return this.http.get('assets/mock-data/clia-' + type + '-ion.json')

    return this.http.get(Config.API.ION_REPORTERS + '/ion_reporters/healthcheck?site=' + type)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getCliaVariantReportsNTC(molecular_id: string): Observable<CliaVariantReportsNTCInterface> {

    // getCliaVariantReportsNTC(ntcType: string): Observable<CliaVariantReportsNTCInterface> {
    //   return this.http.get('assets/mock-data/clia-variant-reports-ntc-' + ntcType + '.json') // works only for mocha

    return this.http.get(Config.API.ALIQUOT + '/aliquot/' + molecular_id
      + '?projection=molecular_id,analysis_id,total_variants,mapd,cellularity,date_variant_received,torrent_variant_caller_version,report_status,snv_indels,copy_number_variants,gene_fusions')
      .map(this.extractData)
      .catch(this.handleError);
  }

  getCliaVariantReportsPACC(molecular_id: string): Observable<CliaVariantReportsPACCInterface> {

    // getCliaVariantReportsPACC(paccType: string): Observable<CliaVariantReportsPACCInterface> {
    //   return this.http.get('assets/mock-data/clia-variant-reports-pacc-' + paccType + '.json') // works only for mocha

    return this.http.get(Config.API.ALIQUOT + '/aliquot/' + molecular_id
      + '?projection=molecular_id,analysis_id,total_variants,mapd,cellularity,date_variant_received,torrent_variant_caller_version,report_status,snv_indels,copy_number_variants,gene_fusions')
      .map(this.extractData)
      .catch(this.handleError);
  }

  getCliaVariantReportsPC(molecular_id: string): Observable<CliaVariantReportsPCInterface> {

    // getCliaVariantReportsPC(pcType: string): Observable<CliaVariantReportsPCInterface> {
    //   return this.http.get('assets/mock-data/clia-variant-reports-pc-' + pcType + '.json') // works only for mocha

    return this.http.get(Config.API.ALIQUOT + '/aliquot/' + molecular_id
      + '?projection=molecular_id,analysis_id,total_variants,mapd,cellularity,positive_control_version,date_molecular_id_created,date_variant_received,torrent_variant_caller_version,report_status,positive_variants,false_positive_variants')
      .map(this.extractData)
      .catch(this.handleError);
  }

  getCliaVariantReportQC(molecular_id: string): Observable<CliaVariantReportsQCInterface> {

    // getCliaVariantReportQC(tabType: string, cliaType: string): Observable<CliaVariantReportsQCInterface> {
    //   return this.http.get('assets/mock-data/clia-variant-report-qc-' + tabType + '-' + cliaType + '.json') // works only for mocha

    return this.http.get(Config.API.SAMPLE_CONTROLS + '/sample_controls/quality_control/' + molecular_id
      + '?projection=molecular_id,analysis_id,total_variants,mapd,cellularity,torrent_variant_caller_version,oncomine_control_panel_summary')
      .map(this.extractData)
      .catch(this.handleError);
  }

  downloadCliaDnaBam(molecular_id: string): Observable<any> {
    return this.http.get(Config.API.SAMPLE_CONTROLS + '/sample_controls/files/' + molecular_id + '/dna_bam_name')
      .map(this.extractData)
      .catch(this.handleError);
  }

  downloadCliaDnaBai(molecular_id: string): Observable<any> {
    return this.http.get(Config.API.SAMPLE_CONTROLS + '/sample_controls/files/' + molecular_id + '/dna_bai_name')
      .map(this.extractData)
      .catch(this.handleError);
  }

  downloadCliaRnaBam(molecular_id: string): Observable<any> {
    return this.http.get(Config.API.SAMPLE_CONTROLS + '/sample_controls/files/' + molecular_id + '/cdna_bam_name')
      .map(this.extractData)
      .catch(this.handleError);
  }

  downloadCliaRnaBai(molecular_id: string): Observable<any> {
    return this.http.get(Config.API.SAMPLE_CONTROLS + '/sample_controls/files/' + molecular_id + '/cdna_bai_name')
      .map(this.extractData)
      .catch(this.handleError);
  }

  downloadCliaVcf(molecular_id: string): Observable<any> {
    return this.http.get(Config.API.SAMPLE_CONTROLS + '/sample_controls/files/' + molecular_id + '/vcf_name')
      .map(this.extractData)
      .catch(this.handleError);
  }

  generateMsn(site: string, control_type: string): Observable<any> {
    return this.http.post(Config.API.SAMPLE_CONTROLS + '/sample_controls?site=' + site + '&control_type=' + control_type, '')
      .map(this.extractData)
      .catch(this.handleError);
  }

  getCnvChart(): Observable<any[]> {
    return this.http.get('assets/mock-data/patient.cnv-chart.json')
      .map(this.extractData)
      .catch(this.handleError);
  }

  rejectReport(molecular_id: string): Observable<any> {
    return this.http.post(Config.API.SAMPLE_CONTROLS + '/sample_controls/' + molecular_id, '')
      .map(this.extractData)
      .catch(this.handleError);
  }

  confirmReport(molecular_id: string): Observable<any> {
    return this.http.post(Config.API.SAMPLE_CONTROLS + '/sample_controls/' + molecular_id, '')
      .map(this.extractData)
      .catch(this.handleError);
  }
}
