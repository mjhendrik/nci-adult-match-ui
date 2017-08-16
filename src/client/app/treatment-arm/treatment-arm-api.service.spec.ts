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
import { MockBackend } from '@angular/http/testing';
import { AuthHttp } from 'angular2-jwt';

export function main() {
  describe('treatment arm api service test', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpModule],
        providers: [
          MockBackend,
          BaseRequestOptions,
          { provide: XHRBackend, useClass: MockBackend },
          {
            provide: Http,
            useFactory: (backend: MockBackend, options: BaseRequestOptions) => new Http(backend, options),
            deps: [MockBackend, BaseRequestOptions]
          },
          { provide: AuthHttp, useExisting: Http },
          TreatmentArmApiService
        ]
      });
    });

    xit('should return observable',
      inject([TreatmentArmApiService, XHRBackend],
        (TreatmentArmApiService: TreatmentArmApiService, mockBackend: MockBackend) => {

          const mockResponse = {
            data: [
              { id: 0, name: 'Data 0' },
              { id: 1, name: 'Data 1' },
              { id: 2, name: 'Data 2' },
              { id: 3, name: 'Data 3' },
            ]
          };

          mockBackend.connections.subscribe((connection: any) => {
            connection.mockRespond(new Response(new ResponseOptions({
              body: mockResponse
            })));
          });

          TreatmentArmApiService.getTreatmentArmDetails('1234').subscribe((response: any) => { });
          TreatmentArmApiService.getPreviousTreatmentArmDetails('1111');
          TreatmentArmApiService.getTreatmentArmVersions('1111');
          TreatmentArmApiService.getTreatmentArmList();
        })
    );

  });
}
