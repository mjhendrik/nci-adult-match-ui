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
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { CliaApiServiceStub } from './testing/clia-api-service-stub';
import { IonReportersApiService } from './ion-reporters-api.service';

export function main() {
  describe('IonReportersApiService (mockBackend)', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpModule],
        providers: [
          IonReportersApiService,
          { provide: XHRBackend, useClass: MockBackend },
        ]
      });
    });

    it('can provide the mockBackend as XHRBackend', inject([XHRBackend], (backend: MockBackend) => {
      expect(backend).not.toBeNull('backend should be provided');
    }));

    it('can instantiate service with "new"', inject([HttpClient], (http: HttpClient) => {
      expect(http).not.toBeNull('http should be provided');
      const service = new IonReportersApiService(http);
      expect(service instanceof IonReportersApiService).toBe(true, 'new service should be ok');
    }));

    it('can instantiate service when inject service', inject([IonReportersApiService], (service: IonReportersApiService) => {
      expect(service instanceof IonReportersApiService).toBe(true);
    }));


    describe('when getCliaIon', () => {
      let backend: MockBackend;
      let service: IonReportersApiService;
      let fakeData: any[];
      let response: Response;

      beforeEach(inject([HttpClient, XHRBackend], (http: HttpClient, be: MockBackend) => {
        backend = be;
        service = new IonReportersApiService(http);
        fakeData = CliaApiServiceStub.makeCliaIonData();
        const options = new ResponseOptions({ status: 200, body: fakeData });
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
        const resp = new Response(new ResponseOptions({ status: 200, body: [] }));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

        service.getCliaIon('mocha')
          .do(items => {
            expect(items.length).toBe(0, 'should have no items');
          })
          .toPromise();
      })));

      it('should treat 404 as an Observable error', async(inject([], () => {
        const resp = new Response(new ResponseOptions({ status: 404 }));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

        service.getCliaIon('mocha')
          .do(items => {
            // console.log('items');
            // console.log(items);
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
