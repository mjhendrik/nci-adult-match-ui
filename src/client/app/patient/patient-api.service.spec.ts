import { BaseRequestOptions, ConnectionBackend, Http, Response, ResponseOptions } from '@angular/http';
import { TestBed, async } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';

import { Observable } from 'rxjs/Observable';

import { PatientApiService } from './patient-api.service';

export function main() {
  describe('PatientApiService', () => {
    let PatientApiService: PatientApiService;
    // let mockBackend: MockBackend;

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          PatientApiService,
          MockBackend,
          BaseRequestOptions,
          {
            provide: Http,
            useFactory: (backend: ConnectionBackend, options: BaseRequestOptions) => new Http(backend, options),
            deps: [MockBackend, BaseRequestOptions]
          }
        ]
      });
    });

    it('should return an Observable when get called', async(() => {
      expect(TestBed.get(PatientApiService).getPatientList()).toEqual(jasmine.any(Observable));
    }));

    it('should resolve to list of patients when get called', async(() => {
      let patientApiService = TestBed.get(PatientApiService);
      let mockBackend = TestBed.get(MockBackend);

      mockBackend.connections.subscribe((c: any) => {
        c.mockRespond(new Response(new ResponseOptions({ body: '[{"patientSequenceNumber": "10586"}]' })));
      });

      patientApiService.getPatientList().subscribe((data: any) => {
        expect(data).toEqual(['patientSequenceNumber', '10586']);
      });
    }));
  });
}
