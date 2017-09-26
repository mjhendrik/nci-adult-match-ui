import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthHttp } from 'angular2-jwt';

import { Config } from '../shared/config/env.config';
import { ApiService } from '../shared/api/api.service';

@Injectable()
export class IonReportersApiService extends ApiService {
  protected get baseApiUrl(): string { return Config.API.ION_REPORTERS; }

  constructor(http: AuthHttp) {
    super(http);
  }

  getCliaIon(type: string): Observable<any[]> {
    return this.http.get(this.url('/ion_reporters/healthcheck?site=' + type,
      'assets/mock-data/clia-' + type + '-ion.json'))
      .map(this.extractData)
      .catch(this.handleError);
  }
}
