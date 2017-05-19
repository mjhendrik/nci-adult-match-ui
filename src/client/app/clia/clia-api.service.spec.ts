import { Component } from '@angular/core';
import {
    async,
    TestBed,
    inject
} from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { CliaApiService } from './clia-api.service';
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
    describe('clia api service test', () => {
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
                    CliaApiService
                ]
            });
        });

        it('should return observable',
            inject([CliaApiService, XHRBackend],
                (CliaApiService: CliaApiService, mockBackend: MockBackend) => {

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

                    CliaApiService.downloadCliaDnaBai('1234').subscribe((response: any) => { });
                    CliaApiService.downloadCliaDnaBam('1111');
                    CliaApiService.downloadCliaRnaBai('1111');
                    CliaApiService.downloadCliaRnaBam('1111');
                    CliaApiService.downloadCliaVcf('1111');
                    CliaApiService.generateMsn('test', 'test');
                    CliaApiService.getCliaDetailsNTC('test');
                    CliaApiService.getCliaDetailsPACC('test');
                    CliaApiService.getCliaDetailsPC('test');
                    CliaApiService.getCliaIon('test');
                    CliaApiService.getCliaVariantReportQC('1111');
                    CliaApiService.getCliaVariantReportsNTC('1111');
                    CliaApiService.getCliaVariantReportsPACC('1111');
                    CliaApiService.getCliaVariantReportsPC('1111');
                })
        );

    });
}
