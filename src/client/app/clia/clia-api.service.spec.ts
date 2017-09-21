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

import { CliaApiService } from './clia-api.service';
import { CliaApiServiceStub } from './testing/clia-api-service-stub';

export function main() {
  describe('CliaApiService (mockBackend)', () => {
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


    describe('when getCliaDetailsNTC', () => {
      let backend: MockBackend;
      let service: CliaApiService;
      let fakeData: any[];
      let response: Response;

      beforeEach(inject([AuthHttp, XHRBackend], (http: AuthHttp, be: MockBackend) => {
        backend = be;
        service = new CliaApiService(http);
        fakeData = CliaApiServiceStub.makeCliaDetailsNTCData();
        let options = new ResponseOptions({ status: 200, body: fakeData });
        response = new Response(options);
      }));

      it('should have expected fake items total count (then)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getCliaDetailsNTC('mocha').toPromise()
          .then(items => {
            expect(items.length).toBe(fakeData.length, 'should have expected no. of items');
          });
      })));

      it('should have expected fake items total count count (Observable.do)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getCliaDetailsNTC('mocha')
          .do(items => {
            expect(items.length).toBe(fakeData.length, 'should have expected no. of items');
          })
          .toPromise();
      })));

      it('should be OK returning no items', async(inject([], () => {
        let resp = new Response(new ResponseOptions({ status: 200, body: [] }));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

        service.getCliaDetailsNTC('mocha')
          .do(items => {
            expect(items.length).toBe(0, 'should have no items');
          })
          .toPromise();
      })));

      it('should treat 404 as an Observable error', async(inject([], () => {
        let resp = new Response(new ResponseOptions({ status: 404 }));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

        service.getCliaDetailsNTC('mocha')
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
      let service: CliaApiService;
      let fakeData: any[];
      let response: Response;

      beforeEach(inject([AuthHttp, XHRBackend], (http: AuthHttp, be: MockBackend) => {
        backend = be;
        service = new CliaApiService(http);
        fakeData = CliaApiServiceStub.makeCliaDetailsPACCData();
        let options = new ResponseOptions({ status: 200, body: fakeData });
        response = new Response(options);
      }));

      it('should have expected fake items total count (then)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getCliaDetailsPACC('mocha').toPromise()
          .then(items => {
            expect(items.length).toBe(fakeData.length, 'should have expected no. of items');
          });
      })));

      it('should have expected fake items total count count (Observable.do)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getCliaDetailsPACC('mocha')
          .do(items => {
            expect(items.length).toBe(fakeData.length, 'should have expected no. of items');
          })
          .toPromise();
      })));

      it('should be OK returning no items', async(inject([], () => {
        let resp = new Response(new ResponseOptions({ status: 200, body: [] }));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

        service.getCliaDetailsPACC('mocha')
          .do(items => {
            expect(items.length).toBe(0, 'should have no items');
          })
          .toPromise();
      })));

      it('should treat 404 as an Observable error', async(inject([], () => {
        let resp = new Response(new ResponseOptions({ status: 404 }));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

        service.getCliaDetailsPACC('mocha')
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
      let service: CliaApiService;
      let fakeData: any[];
      let response: Response;

      beforeEach(inject([AuthHttp, XHRBackend], (http: AuthHttp, be: MockBackend) => {
        backend = be;
        service = new CliaApiService(http);
        fakeData = CliaApiServiceStub.makeCliaDetailsPCData();
        let options = new ResponseOptions({ status: 200, body: fakeData });
        response = new Response(options);
      }));

      it('should have expected fake items total count (then)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getCliaDetailsPC('mocha').toPromise()
          .then(items => {
            expect(items.length).toBe(fakeData.length, 'should have expected no. of items');
          });
      })));

      it('should have expected fake items total count count (Observable.do)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getCliaDetailsPC('mocha')
          .do(items => {
            expect(items.length).toBe(fakeData.length, 'should have expected no. of items');
          })
          .toPromise();
      })));

      it('should be OK returning no items', async(inject([], () => {
        let resp = new Response(new ResponseOptions({ status: 200, body: [] }));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

        service.getCliaDetailsPC('mocha')
          .do(items => {
            expect(items.length).toBe(0, 'should have no items');
          })
          .toPromise();
      })));

      it('should treat 404 as an Observable error', async(inject([], () => {
        let resp = new Response(new ResponseOptions({ status: 404 }));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

        service.getCliaDetailsPC('mocha')
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


    describe('when getCliaIon', () => {
      let backend: MockBackend;
      let service: CliaApiService;
      let fakeData: any[];
      let response: Response;

      beforeEach(inject([AuthHttp, XHRBackend], (http: AuthHttp, be: MockBackend) => {
        backend = be;
        service = new CliaApiService(http);
        fakeData = CliaApiServiceStub.makeCliaIonData();
        let options = new ResponseOptions({ status: 200, body: fakeData });
        response = new Response(options);
      }));

      it('should have expected fake items total count (then)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getCliaIon('mocha').toPromise()
          .then(items => {
            expect(items.length).toBe(fakeData.length, 'should have expected no. of items');
          });
      })));

      it('should have expected fake items total count count (Observable.do)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getCliaIon('mocha')
          .do(items => {
            expect(items.length).toBe(fakeData.length, 'should have expected no. of items');
          })
          .toPromise();
      })));

      it('should be OK returning no items', async(inject([], () => {
        let resp = new Response(new ResponseOptions({ status: 200, body: [] }));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

        service.getCliaIon('mocha')
          .do(items => {
            expect(items.length).toBe(0, 'should have no items');
          })
          .toPromise();
      })));

      it('should treat 404 as an Observable error', async(inject([], () => {
        let resp = new Response(new ResponseOptions({ status: 404 }));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

        service.getCliaIon('mocha')
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
