import { Component } from '@angular/core';
import {
  async,
  TestBed,
  inject
} from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { TreatmentArmApiService } from './treatment-arm-api.service';
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
  describe('treatment arm api service test', () => {
    let backend: MockBackend;
    let service: TreatmentArmApiService;
    let response: Response;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [HttpModule],
        providers: [
          TreatmentArmApiService,
          { provide: XHRBackend, useClass: MockBackend },
          { provide: AuthHttp, useExisting: Http },
        ]
      });
    }));

    it('can instantiate service with "new"', inject([AuthHttp], (http: AuthHttp) => {
      expect(http).not.toBeNull('http should be provided');
      let service = new TreatmentArmApiService(http);
      expect(service instanceof TreatmentArmApiService).toBe(true, 'new service should be ok');
    }));

    it('can instantiate service when inject service', inject([TreatmentArmApiService], (service: TreatmentArmApiService) => {
      expect(service instanceof TreatmentArmApiService).toBe(true);
    }));

    describe('when Biopsy arms data', () => {
      let backend: MockBackend;
      let service: TreatmentArmApiService;
      let fakeTreatmenArms: any[];
      let response: Response;
      let fakeCount: number;
      let arms:any;

      beforeEach(inject([AuthHttp, XHRBackend], (http: AuthHttp, be: MockBackend) => {
        backend = be;
        service = new TreatmentArmApiService(http);
        fakeTreatmenArms = PatientApiServiceStub.treatmentArmData();
        let options = new ResponseOptions({ status: 200, body: fakeTreatmenArms });
        response = new Response(options);
        fakeCount = 10;
      }));

      it('should have expected TA details count (then)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getTreatmentArmDetails('EAY131-Q').toPromise()
          .then(arms => {
            expect(arms).toEqual(fakeTreatmenArms);
          });
      })));

      it('should have expected fake Tratment arms details (then)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getPreviousTreatmentArmDetails('EAY131-Q').toPromise()
          .then(arms => {
            expect(arms).toBe(fakeTreatmenArms);
          });
      })));

      it('should have expected fake Treatment Arm version (then)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getTreatmentArmVersions('EAY131-Q').toPromise()
          .then(arms => {
            expect(arms[0].version).toBe("2016-05-31");
          });
      })));

      it('should have expected fake Treatment Arm list (then)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getTreatmentArmList().toPromise()
          .then(arms => {
            expect(arms).toBe(fakeTreatmenArms);
          });
      })));

      // fit('should treat 404 as an Observable error', async(inject([], () => {
      //   let resp = new Response(new ResponseOptions({ status: 404 }));
      //   backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));
      //
      //   service.getTreatmentArmDetails('EAY131-Q')
      //     .do(arms => {
      //       fail('should not respond with biopsy arms data');
      //     })
      //     .catch(err => {
      //       expect(err).toMatch(/Bad response status/, 'should catch bad response status code');
      //       return Observable.of(null); // failure is the expected test result
      //     })
      //     .toPromise();
      // })));

    });
  });
}
