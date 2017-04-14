import { Injectable } from '@angular/core';
import {
  Http,
  Response
} from '@angular/http';
import { Observable } from 'rxjs/Observable';

// import 'rxjs/add/operator/do';  // for debugging

export interface TreatmentArmDetailsInterface {
  versionData: any[];
  tableRulesData: {};
  tablePatientData: any[];
}

/**
 * This class provides the NameList service with methods to read names and add names.
 */
@Injectable()
export class TreatmentArmApiService {

  /**
   * Creates a new TreatmentArmApiService with the injected Http.
   * @param {Http} http - The injected Http.
   * @constructor
   */
  constructor(private http: Http) { }

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @return {string[]} The Observable for the HTTP request.
   */
  getTreatmentArmDetails(): Observable<TreatmentArmDetailsInterface> {
    return this.http.get('assets/mock-data/treatment-arm-details.json')
      .map((res: Response) => res.json())
      //              .do(data => console.log('server data:', data))  // debug
      .catch(this.handleError);
  }

  getTreatmentArmList(): Observable<any[]> {
    return this.http.get('assets/mock-data/treatment-arm-list.json')
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
