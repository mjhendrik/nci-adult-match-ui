import {
  async,
  TestBed,
  inject
} from '@angular/core/testing';
import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';

import { CliaApiService } from './clia-api.service';

export function main() {
  fdescribe('CliaApiService (mockBackend)', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpModule],
        providers: [
          CliaApiService,
          { provide: XHRBackend, useClass: MockBackend },
          { provide: AuthHttp, useExisting: Http },
        ]
      });
    });

    it('can provide the mockBackend as XHRBackend', inject([XHRBackend], (backend: MockBackend) => {
      expect(backend).not.toBeNull('backend should be provided');
    }));

    it('can instantiate service with "new"', inject([AuthHttp], (http: AuthHttp) => {
      expect(http).not.toBeNull('http should be provided');
      let service = new CliaApiService(http);
      expect(service instanceof CliaApiService).toBe(true, 'new service should be ok');
    }));

    it('can instantiate service when inject service', inject([CliaApiService], (service: CliaApiService) => {
      expect(service instanceof CliaApiService).toBe(true);
    }));
  });
}
