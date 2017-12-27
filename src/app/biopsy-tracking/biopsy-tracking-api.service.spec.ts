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
import { Observable } from 'rxjs/Observable';
import {
  MockBackend,
  MockConnection
} from '@angular/http/testing';
import { PatientApiServiceStub } from '../patient/testing/patient-api-service-stub';
import { HttpClient } from '@angular/common/http';

export function main() {
  describe('BiopsyTrackingApiService (mockBackend)', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [HttpModule],
        providers: [
          BiopsyTrackingApiService,
          // { provide: Window, useClass: WindowStub },
          { provide: XHRBackend, useClass: MockBackend },
        ]
      });
    }));

    it('can instantiate service with "new"', inject([HttpClient], (http: HttpClient) => {
      expect(http).not.toBeNull('http should be provided');
      const service = new BiopsyTrackingApiService(http);
      expect(service instanceof BiopsyTrackingApiService).toBe(true, 'new service should be ok');
    }));

    it('can instantiate service when inject service', inject([BiopsyTrackingApiService], (service: BiopsyTrackingApiService) => {
      expect(service instanceof BiopsyTrackingApiService).toBe(true);
    }));

    describe('when Biopsy tracking data', () => {
      let backend: MockBackend;
      let service: BiopsyTrackingApiService;
      let fakeBios: any[];
      let response: Response;
      let fakeCount: number;

      beforeEach(inject([HttpClient, XHRBackend], (http: HttpClient, be: MockBackend) => {
        backend = be;
        service = new BiopsyTrackingApiService(http);
        fakeBios = PatientApiServiceStub.makeBiopsytrackingData();
        const options = new ResponseOptions({ status: 200, body: fakeBios });
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
        const resp = new Response(new ResponseOptions({ status: 404 }));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

        service.getBiopsyTracking(1, 2, 'sortOrder', 'sortBy', 'filter')
          .do(tracking => {
            fail('should not respond with biopsy tracking data');
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
