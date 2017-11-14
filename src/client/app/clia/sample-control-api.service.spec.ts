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
import { SampleControlApiService } from './sample-control-api.service';

export function main() {
  describe('SampleControlApiService (mockBackend)', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpModule],
        providers: [
          SampleControlApiService,
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
      let service = new SampleControlApiService(http);
      expect(service instanceof SampleControlApiService).toBe(true, 'new service should be ok');
    }));

    it('can instantiate service when inject service', inject([SampleControlApiService], (service: SampleControlApiService) => {
      expect(service instanceof SampleControlApiService).toBe(true);
    }));


    describe('when getCliaDetailsNTC', () => {
      let backend: MockBackend;
      let service: SampleControlApiService;
      let fakeData: any[];
      let response: Response;

      beforeEach(inject([AuthHttp, XHRBackend], (http: AuthHttp, be: MockBackend) => {
        backend = be;
        service = new SampleControlApiService(http);
        fakeData = CliaApiServiceStub.makeCliaDetailsNTCData();
        let options = new ResponseOptions({ status: 200, body: fakeData });
        response = new Response(options);
      }));

      it('should have expected fake items total count (then)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getCliaDetailsNTC('MoCha').toPromise()
          .then(items => {
            expect(items.length).toBe(fakeData.length, 'should have expected no. of items');
          });
      })));

      it('should have expected fake items total count count (Observable.do)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getCliaDetailsNTC('MoCha')
          .do(items => {
            expect(items.length).toBe(fakeData.length, 'should have expected no. of items');
          })
          .toPromise();
      })));

      it('should be OK returning no items', async(inject([], () => {
        let resp = new Response(new ResponseOptions({ status: 200, body: [] }));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

        service.getCliaDetailsNTC('MoCha')
          .do(items => {
            expect(items.length).toBe(0, 'should have no items');
          })
          .toPromise();
      })));

      it('should treat 404 as an Observable error', async(inject([], () => {
        let resp = new Response(new ResponseOptions({ status: 404 }));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

        service.getCliaDetailsNTC('MoCha')
          .do(items => {
            console.log('items');
            console.log(items);
            fail('should not respond with items');
          })
          .catch(err => {
            expect(err).toMatch(/Bad response status/, 'should catch bad response status code');
            return Observable.of(null); // failure is the expected test result
          })
          .toPromise();
      })));
    });


    describe('when getCliaDetailsPACC', () => {
      let backend: MockBackend;
      let service: SampleControlApiService;
      let fakeData: any[];
      let response: Response;

      beforeEach(inject([AuthHttp, XHRBackend], (http: AuthHttp, be: MockBackend) => {
        backend = be;
        service = new SampleControlApiService(http);
        fakeData = CliaApiServiceStub.makeCliaDetailsPACCData();
        let options = new ResponseOptions({ status: 200, body: fakeData });
        response = new Response(options);
      }));

      it('should have expected fake items total count (then)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getCliaDetailsPACC('MoCha').toPromise()
          .then(items => {
            expect(items.length).toBe(fakeData.length, 'should have expected no. of items');
          });
      })));

      it('should have expected fake items total count count (Observable.do)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getCliaDetailsPACC('MoCha')
          .do(items => {
            expect(items.length).toBe(fakeData.length, 'should have expected no. of items');
          })
          .toPromise();
      })));

      it('should be OK returning no items', async(inject([], () => {
        let resp = new Response(new ResponseOptions({ status: 200, body: [] }));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

        service.getCliaDetailsPACC('MoCha')
          .do(items => {
            expect(items.length).toBe(0, 'should have no items');
          })
          .toPromise();
      })));

      it('should treat 404 as an Observable error', async(inject([], () => {
        let resp = new Response(new ResponseOptions({ status: 404 }));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

        service.getCliaDetailsPACC('MoCha')
          .do(items => {
            console.log('items');
            console.log(items);
            fail('should not respond with items');
          })
          .catch(err => {
            expect(err).toMatch(/Bad response status/, 'should catch bad response status code');
            return Observable.of(null); // failure is the expected test result
          })
          .toPromise();
      })));
    });


    describe('when getCliaDetailsPC', () => {
      let backend: MockBackend;
      let service: SampleControlApiService;
      let fakeData: any[];
      let response: Response;

      beforeEach(inject([AuthHttp, XHRBackend], (http: AuthHttp, be: MockBackend) => {
        backend = be;
        service = new SampleControlApiService(http);
        fakeData = CliaApiServiceStub.makeCliaDetailsPCData();
        let options = new ResponseOptions({ status: 200, body: fakeData });
        response = new Response(options);
      }));

      it('should have expected fake items total count (then)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getCliaDetailsPC('MoCha').toPromise()
          .then(items => {
            expect(items.length).toBe(fakeData.length, 'should have expected no. of items');
          });
      })));

      it('should have expected fake items total count count (Observable.do)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getCliaDetailsPC('MoCha')
          .do(items => {
            expect(items.length).toBe(fakeData.length, 'should have expected no. of items');
          })
          .toPromise();
      })));

      it('should be OK returning no items', async(inject([], () => {
        let resp = new Response(new ResponseOptions({ status: 200, body: [] }));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

        service.getCliaDetailsPC('MoCha')
          .do(items => {
            expect(items.length).toBe(0, 'should have no items');
          })
          .toPromise();
      })));

      it('should treat 404 as an Observable error', async(inject([], () => {
        let resp = new Response(new ResponseOptions({ status: 404 }));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

        service.getCliaDetailsPC('MoCha')
          .do(items => {
            console.log('items');
            console.log(items);
            fail('should not respond with items');
          })
          .catch(err => {
            expect(err).toMatch(/Bad response status/, 'should catch bad response status code');
            return Observable.of(null); // failure is the expected test result
          })
          .toPromise();
      })));
    });

    describe('when getCliaVariantReportQC', () => {
      let backend: MockBackend;
      let service: SampleControlApiService;
      let fakeData: any[];
      let response: Response;

      beforeEach(inject([AuthHttp, XHRBackend], (http: AuthHttp, be: MockBackend) => {
        backend = be;
        service = new SampleControlApiService(http);
        fakeData = CliaApiServiceStub.makeCliaDetailsPCData();
        let options = new ResponseOptions({ status: 200, body: fakeData });
        response = new Response(options);
      }));

      it('should have expected fake items total count (then)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getCliaVariantReportQC('Sample_MoCha_1', 'Analyses_MoCha_1').toPromise()
          .then(items => {
            expect(items).toBe(fakeData, 'should have expected no. of items');
          });
      })));

      it('should treat 404 as an Observable error', async(inject([], () => {
        let resp = new Response(new ResponseOptions({ status: 404 }));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

        service.getCliaVariantReportQC('Sample_MoCha_1', 'Analyses_MoCha_1')
          .do(items => {
            console.log('items');
            console.log(items);
            fail('should not respond with items');
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
