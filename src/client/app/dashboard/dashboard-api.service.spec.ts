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
  XHRBackend,
} from '@angular/http';
import {
  MockBackend,
  MockConnection
} from '@angular/http/testing';
import { AuthHttp } from 'angular2-jwt';

import { DashboardApiService } from './dashboard-api.service';
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
      let backend: MockBackend;
      let service: DashboardApiService;
      let fakeDashBoard: any[];
      let response: Response;
      let fakeCount: number;
      let dash: any;

      beforeEach(inject([AuthHttp, XHRBackend], (http: AuthHttp, be: MockBackend) => {
        backend = be;
        service = new DashboardApiService(http);
        fakeDashBoard = PatientApiServiceStub.makeDashboardData();
        let options = new ResponseOptions({ status: 200, body: fakeDashBoard });
        response = new Response(options);
        fakeCount = 10;
      }));

      it('should have expected Dashboard AR details (then)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getPendingAssignmentReports().toPromise()
          .then(dash => {
            expect(dash).toEqual(fakeDashBoard);
          });
      })));

      it('should have expected Dashboard VR details (then)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getPendingVariantReports().toPromise()
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
      let dash: any;

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

        service.getPatientsAwaiting().toPromise()
          .then(dash => {
            expect(dash).toEqual(fakeDashBoard);
          });
      })));

    });

    describe('when Dashboard patient TA dash data', () => {
      let backend: MockBackend;
      let service: DashboardApiService;
      let fakeDashBoard: any[];
      let response: Response;
      let fakeCount: number;
      let dash: any;

      beforeEach(inject([AuthHttp, XHRBackend], (http: AuthHttp, be: MockBackend) => {
        backend = be;
        service = new DashboardApiService(http);
        fakeDashBoard = PatientApiServiceStub.makeDashboardTAData();
        let options = new ResponseOptions({ status: 200, body: fakeDashBoard });
        response = new Response(options);
        fakeCount = 10;
      }));

      it('should have expected Dashboard Patients Awaiting details (then)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getOverviewTa().toPromise()
          .then(dash => {
            expect(dash).toEqual(fakeDashBoard);
          });
      })));

    });

    describe('when Dashboard Overview patients dash data', () => {
      let backend: MockBackend;
      let service: DashboardApiService;
      let fakeDashBoard: any[];
      let response: Response;
      let fakeCount: number;
      let dash: any;

      beforeEach(inject([AuthHttp, XHRBackend], (http: AuthHttp, be: MockBackend) => {
        backend = be;
        service = new DashboardApiService(http);
        fakeDashBoard = PatientApiServiceStub.makeDashboardOverviewPatientsData();
        let options = new ResponseOptions({ status: 200, body: fakeDashBoard });
        response = new Response(options);
        fakeCount = 10;
      }));

      it('should have expected Dashboard Patients Awaiting details (then)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getOverviewPatients().toPromise()
          .then(dash => {
            expect(dash).toEqual(fakeDashBoard);
          });
      })));

    });

    describe('when Dashboard Overview Bt dash data', () => {
      let backend: MockBackend;
      let service: DashboardApiService;
      let fakeDashBoard: any[];
      let response: Response;
      let fakeCount: number;
      let dash: any;

      beforeEach(inject([AuthHttp, XHRBackend], (http: AuthHttp, be: MockBackend) => {
        backend = be;
        service = new DashboardApiService(http);
        fakeDashBoard = PatientApiServiceStub.makeDashboardOverviewBtData();
        let options = new ResponseOptions({ status: 200, body: fakeDashBoard });
        response = new Response(options);
        fakeCount = 10;
      }));

      it('should have expected Dashboard Bt Awaiting details (then)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getOverviewBt().toPromise()
          .then(dash => {
            expect(dash).toEqual(fakeDashBoard);
          });
      })));

    });

  });

}
