import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Config } from '../shared/config/env.config';
import { AuthHttp } from 'angular2-jwt';

// import 'rxjs/add/operator/do';  // for debugging

/**
 * This class provides the NameList service with methods to read names and add names.
 */
@Injectable()
export class BiopsyTrackingApiService {

  /**
   * Creates a new BiopsyTrackingApiService with the injected AuthHttp.
   * @param {AuthHttp} http - The injected AuthHttp.
   * @constructor
   */
  constructor(private http: AuthHttp) { }

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @return {string[]} The Observable for the HTTP request.
   */
  getBiopsyTracking(page: number, size: number, sortOrder: string, sortBy: string, filter: string): Observable<any[]> {
    // return this.http.get('assets/mock-data/biopsy-tracking.json')
    return this.http.get(Config.API.PATIENT + '/patients/tracking?view=ui_list&page=' + page + '&size=' + size + '&sort=' + sortBy + ':'
      + sortOrder + '&projfilter=' + filter)
      .map((res: Response) => res.json())
      //              .do(data => console.log('server data:', data))  // debug
      .catch(this.handleError);
  }

  getBiopsyCount(filter: string): Observable<number> {
    return this.http.get(Config.API.PATIENT + '/patients/tracking/count?projfilter=' + filter)
      .map((res: Response) => res.json())
      //              .do(data => console.log('server data:', data))  // debug
      .catch(this.handleError);
  }

  getBiopsyTotal(): Observable<number> {
    return this.http.get(Config.API.PATIENT + '/patients/tracking/count')
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
