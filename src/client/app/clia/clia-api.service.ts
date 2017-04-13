import { Injectable } from '@angular/core';
import {
  Http,
  Response
} from '@angular/http';
import { Observable } from 'rxjs/Observable';


export interface CliaInterface {
  tablePCData: any[];
  tableNTCData: any[];
  tablePACCData: any[];
  ionReportersData: any[];
}

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
  variantReportPC: {};
  lengendPCs: any[];
  tablePCsData: any[];
}

// import 'rxjs/add/operator/do';  // for debugging

/**
 * This class provides the NameList service with methods to read names and add names.
 */
@Injectable()
export class CliaApiService {

  /**
   * Creates a new CliaApiService with the injected Http.
   * @param {Http} http - The injected Http.
   * @constructor
   */
  constructor(private http: Http) { }

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @return {string[]} The Observable for the HTTP request.
   */
  getCliaDetails(type: string): Observable<CliaInterface> {
    return this.http.get('assets/mock-data/clia-' + type + '.json')
      .map((res: Response) => res.json())
      //              .do(data => console.log('server data:', data))  // debug
      .catch(this.handleError);
  }

  getCliaVariantReportsNTC(): Observable<CliaVariantReportsNTCInterface> {
    return this.http.get('assets/mock-data/clia-variant-reports-ntc.json')
      .map((res: Response) => res.json())
      //              .do(data => console.log('server data:', data))  // debug
      .catch(this.handleError);
  }

  getCliaVariantReportsPACC(): Observable<CliaVariantReportsPACCInterface> {
    return this.http.get('assets/mock-data/clia-variant-reports-pacc.json')
      .map((res: Response) => res.json())
      //              .do(data => console.log('server data:', data))  // debug
      .catch(this.handleError);
  }

  getCliaVariantReportsPC(): Observable<CliaVariantReportsPCInterface> {
    return this.http.get('assets/mock-data/clia-variant-reports-pc.json')
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
