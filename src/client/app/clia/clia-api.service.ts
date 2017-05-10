import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Config } from '../shared/config/env.config';
import { AuthHttp } from 'angular2-jwt';

export interface CliaVariantReportsNTCInterface {
  variantReportNTC: {};
  snv: any[];
  indels: any[];
}

export interface CliaVariantReportsPACCInterface {
  variantReportPACC: {};
  snv: any[];
  indels: any[];
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
  variantReport: {};
  assignmentReport: {};
  moiSummary: {};
  assay: any[];
  snv: any[];
  cnv: any[];
  geneFusions: any[];
  indels: any[];
  assignmentReason: {};
  assignmentHistory: any[];
  ocpSummary: any;
}

// import 'rxjs/add/operator/do';  // for debugging

/**
 * This class provides the NameList service with methods to read names and add names.
 */
@Injectable()
export class CliaApiService {

  /**
   * Creates a new CliaApiService with the injected AuthHttp.
   * @param {AuthHttp} http - The injected AuthHttp.
   * @constructor
   */
  constructor(private http: AuthHttp) { }

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @return {string[]} The Observable for the HTTP request.
   */
  getCliaDetailsNTC(type: string): Observable<any[]> {

    // return this.http.get('assets/mock-data/clia-' + type + '-ntc.json') // works only for mocha

    return this.http.get(Config.API.ION_REPORTER + '/sample_controls?site=' + type + '&control_type=no_template')
      .map((res: Response) => res.json())
      //              .do(data => console.log('server data:', data))  // debug
      .catch(this.handleError);
  }

  getCliaDetailsPACC(type: string): Observable<any[]> {

    // return this.http.get('assets/mock-data/clia-' + type + '-pacc.json') // works only for mocha

    return this.http.get(Config.API.ION_REPORTER + '/sample_controls?site=' + type + '&control_type=proficiency_competency')
      .map((res: Response) => res.json())
      //              .do(data => console.log('server data:', data))  // debug
      .catch(this.handleError);
  }

  getCliaDetailsPC(type: string): Observable<any[]> {

    // return this.http.get('assets/mock-data/clia-' + type + '-pc.json') // works only for mocha

    return this.http.get(Config.API.ION_REPORTER + '/sample_controls?site=' + type + '&control_type=positive')
      .map((res: Response) => res.json())
      //              .do(data => console.log('server data:', data))  // debug
      .catch(this.handleError);
  }

  getCliaIon(type: string): Observable<any[]> {

    // return this.http.get('assets/mock-data/clia-' + type + '-ion.json')

    return this.http.get(Config.API.ION_REPORTER + '/ion_reporters/healthcheck?site=' + type)
      .map((res: Response) => res.json())
      //              .do(data => console.log('server data:', data))  // debug
      .catch(this.handleError);
  }

  getCliaVariantReportsNTC(ntcType: string): Observable<CliaVariantReportsNTCInterface> {
    return this.http.get('assets/mock-data/clia-variant-reports-ntc-' + ntcType + '.json')
      .map((res: Response) => res.json())
      //              .do(data => console.log('server data:', data))  // debug
      .catch(this.handleError);
  }

  getCliaVariantReportsPACC(paccType: string): Observable<CliaVariantReportsPACCInterface> {
    return this.http.get('assets/mock-data/clia-variant-reports-pacc-' + paccType + '.json')
      .map((res: Response) => res.json())
      //              .do(data => console.log('server data:', data))  // debug
      .catch(this.handleError);
  }

  getCliaVariantReportsPC(pcType: string): Observable<CliaVariantReportsPCInterface> {

    return this.http.get('assets/mock-data/clia-variant-reports-pc-' + pcType + '.json') // works only for mocha

      // molecular_id --> SC_MOCHA_A2PD6

      // return this.http.get(Config.API.ION_REPORTER + '/aliquot/' + molecular_id)
      .map((res: Response) => res.json())
      //              .do(data => console.log('server data:', data))  // debug
      .catch(this.handleError);
  }

  getCliaVariantReportQC(tabType: string, cliaType: string): Observable<CliaVariantReportsQCInterface> {
    return this.http.get('assets/mock-data/clia-variant-report-qc-' + tabType + '-' + cliaType + '.json')
      .map((res: Response) => res.json())
      //              .do(data => console.log('server data:', data))  // debug
      .catch(this.handleError);
  }

  /**
    * Handle HTTP error
    */
  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
