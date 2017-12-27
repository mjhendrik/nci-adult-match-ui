import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { Config } from '../shared/config/env.config';
import { ApiService } from '../shared/api/api.service';

@Injectable()
export class BiopsyTrackingApiService extends ApiService {
  protected get baseApiUrl(): string { return Config.API.PATIENT; }

  constructor(http: HttpClient) {
    super(http);
  }

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @return {string[]} The Observable for the HTTP request.
   */
  getBiopsyTracking(page: number, size: number, sortOrder: string, sortBy: string, filter: string): Observable<any[]> {
    // return this.http.get('assets/mock-data/biopsy-tracking.json')
    return this.http.get(this.baseApiUrl + '/patients/tracking?view=ui_list&page=' + page + '&size=' + size + '&sort=' + sortBy + ':'
      + sortOrder + '&projfilter=' + filter)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getBiopsyCount(filter: string): Observable<number> {
    return this.http.get(this.baseApiUrl + '/patients/tracking/count?projfilter=' + filter)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getBiopsyTotal(): Observable<number> {
    return this.http.get(this.baseApiUrl + '/patients/tracking/count')
      .map(this.extractData)
      .catch(this.handleError);
  }
}
