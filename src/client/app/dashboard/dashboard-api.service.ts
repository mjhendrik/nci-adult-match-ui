import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AuthHttp } from 'angular2-jwt';

// import 'rxjs/add/operator/do';  // for debugging

export interface DashboardInterface {
  tableARData: any[];
  tableVRData: any[];
  tablePatientsAwaitingData: any[];
}

export interface DashboardOverviewInterface {
  patients: {};
  treatmentArms: {};
  biopsyTracking: {};
}

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
  getDashboard(): Observable<DashboardInterface> {
    return this.http.get('assets/mock-data/dashboard.json')
      .map((res: Response) => res.json())
      //              .do(data => console.log('server data:', data))  // debug
      .catch(this.handleError);
  }

  getDashboardOverview(): Observable<DashboardOverviewInterface> {
    return this.http.get('assets/mock-data/dashboard-overview.json')
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
