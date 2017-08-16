import { Component } from '@angular/core';
import {
  async,
  TestBed,
  inject
} from '@angular/core/testing';
import { BiopsyTrackingApiService } from './biopsy-tracking-api.service';
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
  describe('biopsy tracking api service test', () => {
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
          BiopsyTrackingApiService
        ]
      });
    });

    xit('should return observable',
      inject([BiopsyTrackingApiService, XHRBackend],
        (BiopsyTrackingApiService: BiopsyTrackingApiService, mockBackend: MockBackend) => {

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

          BiopsyTrackingApiService.getBiopsyTracking(1, 10, 'asc', 'test', 'test');
          BiopsyTrackingApiService.getBiopsyCount('test');
          BiopsyTrackingApiService.getBiopsyTotal();
        })
    );

  });
}
