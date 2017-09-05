import { Component } from '@angular/core';
import {
  async,
  TestBed,
  inject
} from '@angular/core/testing';
import { DashboardApiService } from './dashboard-api.service';
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
  describe('dashboard api service test', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpModule],
        providers: [
          MockBackend,
          BaseRequestOptions,
          { provide: XHRBackend, useClass: MockBackend },
          { provide: AuthHttp, useExisting: Http },
          DashboardApiService
        ]
      });
    });

    xit('should return observable',
      inject([DashboardApiService, XHRBackend],
        (DashboardApiService: DashboardApiService, mockBackend: MockBackend) => {

          const mockResponse = {
            data: [
              { id: 0, name: 'Data 0' },
              { id: 1, name: 'Data 1' },
              { id: 2, name: 'Data 2' },
              { id: 3, name: 'Data 3' },
              { id: 4, name: 'Data 4' },
              { id: 5, name: 'Data 5' },
            ]
          };

          mockBackend.connections.subscribe((connection: any) => {
            connection.mockRespond(new Response(new ResponseOptions({
              body: mockResponse
            })));
          });

          DashboardApiService.getDashboardAR();
          DashboardApiService.getDashboardVR();
          DashboardApiService.getDashboardPatientsAwaiting();
          DashboardApiService.getDashboardOverviewTa();
          DashboardApiService.getDashboardOverviewPatients();
          DashboardApiService.getDashboardOverviewBt();
        })
    );

  });
}
