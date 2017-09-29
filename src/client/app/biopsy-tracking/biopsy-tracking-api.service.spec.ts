import { Component } from '@angular/core';
import {
  async,
  TestBed,
  inject
} from '@angular/core/testing';
import { BiopsyTrackingApiService } from './biopsy-tracking-api.service';
import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend,
  BaseRequestOptions
} from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { PatientApiServiceStub } from '../patient/testing/patient-api-service-stub';

// import { WindowStub } from './testing/window-stub';

export function main() {
    describe('BiopsyTrackingApiService (mockBackend)', () => {
      beforeEach(async(() => {
        TestBed.configureTestingModule({
          imports: [HttpModule],
          providers: [
            BiopsyTrackingApiService,
            // { provide: Window, useClass: WindowStub },
            { provide: XHRBackend, useClass: MockBackend },
            { provide: AuthHttp, useExisting: Http },
          ]
        });
      }));

    it('can instantiate service with "new"', inject([AuthHttp], (http: AuthHttp) => {
      expect(http).not.toBeNull('http should be provided');
      let service = new BiopsyTrackingApiService(http);
      expect(service instanceof BiopsyTrackingApiService).toBe(true, 'new service should be ok');
    }));

    it('can instantiate service when inject service', inject([BiopsyTrackingApiService], (service: BiopsyTrackingApiService) => {
      expect(service instanceof BiopsyTrackingApiService).toBe(true);
    }));

      describe('when getPatientList', () => {
        let backend: MockBackend;
        let service: BiopsyTrackingApiService;
        let fakeBios: any[];
        let response: Response;
        let fakeCount: number;

        beforeEach(inject([AuthHttp, XHRBackend], (http: AuthHttp, be: MockBackend) => {
          backend = be;
          service = new BiopsyTrackingApiService(http);
          fakeBios = PatientApiServiceStub.makeBiopsytrackingData();
          let options = new ResponseOptions({ status: 200, body: fakeBios });
          response = new Response(options);
          fakeCount = 10;
        }));

        it('should have expected tracking count (then)', async(inject([], () => {
          backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

          service.getBiopsyTracking(1, 2, 'sortOrder', 'sortBy', 'filter').toPromise()
            .then(tracking => {
              expect(tracking.length).toEqual(fakeBios.length);
            });
        })));

        it('should have expected fake bios count (then)', async(inject([], () => {
          backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

          service.getBiopsyCount('fake-search-terms').toPromise()
            .then(count => {
              expect(count).toBe(fakeBios);
            });
        })));

        it('should have expected fake Total bios count (then)', async(inject([], () => {
          backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

          service.getBiopsyTotal().toPromise()
            .then(count => {
              expect(count).toBe(fakeBios);
            });
        })));

        xit('should treat 404 as an Observable error', async(inject([], () => {
          let resp = new Response(new ResponseOptions({ status: 404 }));
          backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

          service.getBiopsyTracking(1, 2, 'sortOrder', 'sortBy', 'filter')
            .do(tracking => {
              fail('should not respond with patients');
            })
            .catch(err => {
              expect(err).toMatch(/Bad response status/, 'should catch bad response status code');
              return Observable.of(null); // failure is the expected test result
            })
            .toPromise();
        })));

      });
  });
}
