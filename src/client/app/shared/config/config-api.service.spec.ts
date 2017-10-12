import { Component } from '@angular/core';
import {
  async,
  TestBed,
  inject
} from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { ConfigApiService } from './config-api.service';
import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend,
  BaseRequestOptions
} from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { AuthHttp } from 'angular2-jwt';
import { PatientApiServiceStub } from './../../patient/testing/patient-api-service-stub';

export function main() {
  describe('Config api service test', () => {
    let backend: MockBackend;
    let service: ConfigApiService;
    let response: Response;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [HttpModule],
        providers: [
          ConfigApiService,
          { provide: XHRBackend, useClass: MockBackend },
          { provide: AuthHttp, useExisting: Http },
        ]
      });
    }));

    it('can instantiate service with "new"', inject([Http], (http: Http) => {
      expect(http).not.toBeNull('http should be provided');
      let service = new ConfigApiService(http);
      expect(service instanceof ConfigApiService).toBe(true, 'new service should be ok');
    }));

    it('can instantiate service when inject service', inject([ConfigApiService], (service: ConfigApiService) => {
      expect(service instanceof ConfigApiService).toBe(true);
    }));

    describe('when Biopsy info data', () => {
      let backend: MockBackend;
      let service: ConfigApiService;
      let fakeConfig: any[];
      let response: Response;
      let fakeCount: number;
      let info:any;

      beforeEach(inject([Http, XHRBackend], (http: Http, be: MockBackend) => {
        backend = be;
        service = new ConfigApiService(http);
        fakeConfig = PatientApiServiceStub.makeConfigApiData();
        let options = new ResponseOptions({ status: 200, body: fakeConfig });
        response = new Response(options);
        fakeCount = 10;
      }));

      it('should have Config Api build info (then)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getBuildInfo().toPromise()
          .then(info => {
            expect(info).toEqual(fakeConfig);
          });
      })));

      it('should have Config Api Cnv Chart info (then)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getCnvChart().toPromise()
          .then(info => {
            expect(info).toEqual(fakeConfig);
          });
      })));

    });
  });
}
