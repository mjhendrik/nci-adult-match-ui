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
import { MockBackend, MockConnection } from '@angular/http/testing';
import { AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';

import { CliaApiServiceStub } from './testing/clia-api-service-stub';
import { AliquotApiService } from './aliquot-api.service';
import {
  CliaVariantReportsNTCViewData,
  CliaVariantReportsPACCViewData,
  CliaVariantReportsPCViewData
} from './clia-data-interfaces';

export function main() {
  describe('AliquotApiService (mockBackend)', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpModule],
        providers: [
          AliquotApiService,
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
      let service = new AliquotApiService(http);
      expect(service instanceof AliquotApiService).toBe(true, 'new service should be ok');
    }));

    it('can instantiate service when inject service', inject([AliquotApiService], (service: AliquotApiService) => {
      expect(service instanceof AliquotApiService).toBe(true);
    }));


    describe('when getCliaVariantReportsNTC', () => {
      let backend: MockBackend;
      let service: AliquotApiService;
      let fakeData: CliaVariantReportsNTCViewData;
      let response: Response;

      beforeEach(inject([AuthHttp, XHRBackend], (http: AuthHttp, be: MockBackend) => {
        backend = be;
        service = new AliquotApiService(http);
        fakeData = CliaApiServiceStub.makeCliaVariantReportsNTCData();
        let options = new ResponseOptions({ status: 200, body: fakeData });
        response = new Response(options);
      }));

      it('should have expected fake data analysis_id (then)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getCliaVariantReportsNTC('fake_molecular_id').toPromise()
          .then(data => {
            expect(data.analysis_id).toBe(fakeData.analysis_id, 'should have expected analysis_id');
          });
      })));

      it('should have expected fake data analysis_id count (Observable.do)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getCliaVariantReportsNTC('fake_molecular_id')
          .do(data => {
            expect(data.analysis_id).toBe(fakeData.analysis_id, 'should have expected analysis_id');
          })
          .toPromise();
      })));

      it('should be OK returning no data', async(inject([], () => {
        let resp = new Response(new ResponseOptions({ status: 200, body: null }));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

        service.getCliaVariantReportsNTC('fake_molecular_id')
          .do(data => {
            expect(data).toBe(null, 'should have no data');
          })
          .toPromise();
      })));

      it('should treat 404 as an Observable error', async(inject([], () => {
        let resp = new Response(new ResponseOptions({ status: 404 }));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

        service.getCliaVariantReportsNTC('fake_molecular_id')
          .do(data => {
            fail('should not respond with data');
          })
          .catch(err => {
            expect(err).toMatch(/Bad response status/, 'should catch bad response status code');
            return Observable.of(null); // failure is the expected test result
          })
          .toPromise();
      })));
    });


    describe('when getCliaVariantReportsPACC', () => {
      let backend: MockBackend;
      let service: AliquotApiService;
      let fakeData: CliaVariantReportsPACCViewData;
      let response: Response;

      beforeEach(inject([AuthHttp, XHRBackend], (http: AuthHttp, be: MockBackend) => {
        backend = be;
        service = new AliquotApiService(http);
        fakeData = CliaApiServiceStub.makeCliaVariantReportsPACCData();
        let options = new ResponseOptions({ status: 200, body: fakeData });
        response = new Response(options);
      }));

      it('should have expected fake data analysis_id (then)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getCliaVariantReportsPACC('fake_molecular_id').toPromise()
          .then(data => {
            expect(data.analysis_id).toBe(fakeData.analysis_id, 'should have expected analysis_id');
          });
      })));

      it('should have expected fake data analysis_id count (Observable.do)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getCliaVariantReportsPACC('fake_molecular_id')
          .do(data => {
            expect(data.analysis_id).toBe(fakeData.analysis_id, 'should have expected analysis_id');
          })
          .toPromise();
      })));

      it('should be OK returning no data', async(inject([], () => {
        let resp = new Response(new ResponseOptions({ status: 200, body: null }));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

        service.getCliaVariantReportsPACC('fake_molecular_id')
          .do(data => {
            expect(data).toBe(null, 'should have no data');
          })
          .toPromise();
      })));

      it('should treat 404 as an Observable error', async(inject([], () => {
        let resp = new Response(new ResponseOptions({ status: 404 }));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

        service.getCliaVariantReportsPACC('fake_molecular_id')
          .do(data => {
            fail('should not respond with data');
          })
          .catch(err => {
            expect(err).toMatch(/Bad response status/, 'should catch bad response status code');
            return Observable.of(null); // failure is the expected test result
          })
          .toPromise();
      })));
    });

    describe('when getCliaVariantReportsPC', () => {
      let backend: MockBackend;
      let service: AliquotApiService;
      let fakeData: CliaVariantReportsPCViewData;
      let response: Response;

      beforeEach(inject([AuthHttp, XHRBackend], (http: AuthHttp, be: MockBackend) => {
        backend = be;
        service = new AliquotApiService(http);
        fakeData = CliaApiServiceStub.makeCliaVariantReportsPCData();
        let options = new ResponseOptions({ status: 200, body: fakeData });
        response = new Response(options);
      }));

      it('should have expected fake data analysis_id (then)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getCliaVariantReportsPC('fake_molecular_id').toPromise()
          .then(data => {
            expect(data.analysis_id).toBe(fakeData.analysis_id, 'should have expected analysis_id');
          });
      })));

      it('should have expected fake data analysis_id count (Observable.do)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getCliaVariantReportsPC('fake_molecular_id')
          .do(data => {
            expect(data.analysis_id).toBe(fakeData.analysis_id, 'should have expected analysis_id');
          })
          .toPromise();
      })));

      it('should be OK returning no data', async(inject([], () => {
        let resp = new Response(new ResponseOptions({ status: 200, body: null }));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

        service.getCliaVariantReportsPC('fake_molecular_id')
          .do(data => {
            expect(data).toBe(null, 'should have no data');
          })
          .toPromise();
      })));

      it('should treat 404 as an Observable error', async(inject([], () => {
        let resp = new Response(new ResponseOptions({ status: 404 }));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

        service.getCliaVariantReportsPC('fake_molecular_id')
          .do(data => {
            fail('should not respond with data');
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
