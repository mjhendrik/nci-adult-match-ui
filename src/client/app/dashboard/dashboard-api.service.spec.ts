import { Component } from '@angular/core';
import {
  async,
  TestBed,
  inject
} from '@angular/core/testing';
import { DashboardApiService } from './dashboard-api.service';
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
import { PatientApiServiceStub } from '../patient/testing/patient-api-service-stub';

export function main() {

    describe('Dashboard api service test', () => {
      let backend: MockBackend;
      let service: DashboardApiService;
      let response: Response;

      beforeEach(async(() => {
        TestBed.configureTestingModule({
          imports: [HttpModule],
          providers: [
            DashboardApiService,
            { provide: XHRBackend, useClass: MockBackend },
            { provide: AuthHttp, useExisting: Http },
          ]
        });
      }));

      it('can instantiate service with "new"', inject([AuthHttp], (http: AuthHttp) => {
        expect(http).not.toBeNull('http should be provided');
        let service = new DashboardApiService(http);
        expect(service instanceof DashboardApiService).toBe(true, 'new service should be ok');
      }));

      it('can instantiate service when inject service', inject([DashboardApiService], (
        service: DashboardApiService) => {
          expect(service instanceof DashboardApiService).toBe(true);
      }));

      describe('when Dashboard AR / VR dash data', () => {
        let backend:MockBackend;
        let service:DashboardApiService;
        let fakeDashBoard:any[];
        let response:Response;
        let fakeCount:number;
        let dash:any;

        beforeEach(inject([AuthHttp, XHRBackend], (http:AuthHttp, be:MockBackend) => {
          backend = be;
          service = new DashboardApiService(http);
          fakeDashBoard = PatientApiServiceStub.makeDashboardData();
          let options = new ResponseOptions({status: 200, body: fakeDashBoard});
          response = new Response(options);
          fakeCount = 10;
        }));

        it('should have expected Dashboard AR details (then)', async(inject([], () => {
          backend.connections.subscribe((c:MockConnection) => c.mockRespond(response));

          service.getDashboardAR().toPromise()
            .then(dash => {
              expect(dash).toEqual(fakeDashBoard);
            });
        })));

        it('should have expected Dashboard VR details (then)', async(inject([], () => {
          backend.connections.subscribe((c:MockConnection) => c.mockRespond(response));

          service.getDashboardVR().toPromise()
            .then(dash => {
              expect(dash).toEqual(fakeDashBoard);
            });
        })));
      });

      describe('when Dashboard patient Awaiting dash data', () => {
        let backend: MockBackend;
        let service: DashboardApiService;
        let fakeDashBoard: any[];
        let response: Response;
        let fakeCount: number;
        let dash:any;

        beforeEach(inject([AuthHttp, XHRBackend], (http: AuthHttp, be: MockBackend) => {
          backend = be;
          service = new DashboardApiService(http);
          fakeDashBoard = PatientApiServiceStub.makeDashboardPatientAwaitingData();
          let options = new ResponseOptions({ status: 200, body: fakeDashBoard });
          response = new Response(options);
          fakeCount = 10;
        }));

        it('should have expected Dashboard Patients Awaiting details (then)', async(inject([], () => {
          backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

          service.getDashboardPatientsAwaiting().toPromise()
            .then(dash => {
              expect(dash).toEqual(fakeDashBoard);
            });
        })));

      });
  });
}
