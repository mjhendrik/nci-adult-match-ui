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
  BaseRequestOptions
} from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';

import { PatientApiService } from './patient-api.service';

const makeHeroData = () => [
  { patientSequenceNumber: '1', currentStepNumber: '1.1' },
  { patientSequenceNumber: '2', currentStepNumber: '1.1' },
  { patientSequenceNumber: '3', currentStepNumber: '1.1' },
  { patientSequenceNumber: '4', currentStepNumber: '1.1' }
] as any[];

export function main() {
  describe('PatientApiService (mockBackend)', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [HttpModule],
        providers: [
          PatientApiService,
          { provide: XHRBackend, useClass: MockBackend },
          { provide: AuthHttp, useExisting: Http },
        ]
      })
      .compileComponents();
    }));

    it('can provide the mockBackend as XHRBackend', inject([XHRBackend], (backend: MockBackend) => {
      expect(backend).not.toBeNull('backend should be provided');
    }));

    it('can instantiate service with "new"', inject([AuthHttp], (http: AuthHttp) => {
      expect(http).not.toBeNull('http should be provided');
      let service = new PatientApiService(http);
      expect(service instanceof PatientApiService).toBe(true, 'new service should be ok');
    }));

    it('can instantiate service when inject service', inject([PatientApiService], (service: PatientApiService) => {
      expect(service instanceof PatientApiService).toBe(true);
    }));


    describe('when getPatientList', () => {
      let backend: MockBackend;
      let service: PatientApiService;
      let fakePatients: any[];
      let response: Response;

      beforeEach(inject([AuthHttp, XHRBackend], (http: AuthHttp, be: MockBackend) => {
        backend = be;
        service = new PatientApiService(http);
        fakePatients = makeHeroData();
        let options = new ResponseOptions({ status: 200, body: fakePatients });
        response = new Response(options);
      }));

      it('should have expected fake patients (then)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getPatientList(1, 2, 'sortOrder', 'sortBy', 'filter').toPromise()
          .then(patients => {
            expect(patients.length).toBe(fakePatients.length, 'should have expected no. of patients');
          });
      })));

      it('should have expected fake patients (Observable.do)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getPatientList(1, 2, 'sortOrder', 'sortBy', 'filter')
          .do(patients => {
            expect(patients.length).toBe(fakePatients.length, 'should have expected no. of patients');
          })
          .toPromise();
      })));

      it('should be OK returning no patients', async(inject([], () => {
        let resp = new Response(new ResponseOptions({ status: 200, body: [] }));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

        service.getPatientList(1, 2, 'sortOrder', 'sortBy', 'filter')
          .do(patients => {
            expect(patients.length).toBe(0, 'should have no patients');
          })
          .toPromise();
      })));

      it('should treat 404 as an Observable error', async(inject([], () => {
        let resp = new Response(new ResponseOptions({ status: 404 }));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

        service.getPatientList(1, 2, 'sortOrder', 'sortBy', 'filter')
          .do(patients => {
            console.log('patients');
            console.log(patients);
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
