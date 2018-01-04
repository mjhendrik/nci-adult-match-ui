import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { Config } from '../shared/config/env.config';
import { ApiService } from '../shared/api/api.service';

@Injectable()
export class IonReportersApiService extends ApiService {
  protected get baseApiUrl(): string { return Config.API.ION_REPORTERS; }

  constructor(http: HttpClient) {
    super(http);
  }

  getCliaIon(type: string): Observable<any[]> {
    return this.http.get(this.url('/message/clia/ion_reporters/health_check?site=' + type, // message
      'assets/mock-data/clia-' + type + '-ion.json'))
      .map(this.extractData)
      .catch(this.handleError);
  }
}