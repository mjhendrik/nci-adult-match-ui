import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AuthHttp } from 'angular2-jwt';

// import 'rxjs/add/operator/do';  // for debugging

import { Config } from '../shared/config/env.config';

/**
 * This class provides the NameList service with methods to read names and add names.
 */
@Injectable()
export class DashboardApiService {

  /**
   * Creates a new DashboardApiService with the injected AuthHttp.
   * @param {AuthHttp} http - The injected AuthHttp.
   * @constructor
   */
  constructor(private http: AuthHttp) { }

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @return {string[]} The Observable for the HTTP request.
   */
  getDashboardAR(): Observable<any[]> {

    // return this.http.get('assets/mock-data/dashboard-ar.json')

    return this.http.get(Config.API.PATIENT + '/patients/dashboard/assignment_reports')
      .map((res: Response) => res.json())
      //              .do(data => console.log('server data:', data))  // debug
      .catch(this.handleError);
  }

  getDashboardVR(): Observable<any[]> {

    // return this.http.get('assets/mock-data/dashboard-vr.json')

    return this.http.get(Config.API.PATIENT + '/patients/dashboard/variant_reports')
      .map((res: Response) => res.json())
      //              .do(data => console.log('server data:', data))  // debug
      .catch(this.handleError);
  }

  getDashboardPatientsAwaiting(): Observable<any[]> {
    return this.http.get('assets/mock-data/dashboard-pa.json')
      .map((res: Response) => res.json())
      //              .do(data => console.log('server data:', data))  // debug
      .catch(this.handleError);
  }

  getDashboardOverviewTa(): Observable<any> {

    // return this.http.get('assets/mock-data/dashboard-overview.json')

    return this.http.get(Config.API.TREATMENT_ARM + '/treatment_arms/dashboard/overview')
      .map((res: Response) => res.json())
      //              .do(data => console.log('server data:', data))  // debug
      .catch(this.handleError);
  }

  getDashboardOverviewPatients(): Observable<any> {

    // return this.http.get('assets/mock-data/dashboard-overview.json')

    return this.http.get(Config.API.PATIENT + '/patients/dashboard/overview')
      .map((res: Response) => res.json())
      //              .do(data => console.log('server data:', data))  // debug
      .catch(this.handleError);
  }

  getDashboardOverviewBt(): Observable<any> {
    return this.http.get(Config.API.PATIENT + '/patients/tracking/dashboard/overview')
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
