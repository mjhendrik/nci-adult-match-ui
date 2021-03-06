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

import { WindowStub } from './testing/window-stub';
import { PatientApiServiceStub } from './testing/patient-api-service-stub';
import { VariantReportComparisonData } from './variant-report-comparison-data';
import {
  PatientApiService,
  ApiStatusUpdateSuccess,
  ApiStatusUpdateError,
  ApiSuccess,
  ApiError
} from './patient-api.service';

export function main() {
  describe('PatientApiService (mockBackend)', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [HttpModule],
        providers: [
          PatientApiService,
          { provide: Window, useClass: WindowStub },
          { provide: XHRBackend, useClass: MockBackend },
          { provide: AuthHttp, useExisting: Http },
        ]
      });
    }));

    it('can provide the mockBackend as XHRBackend',
      inject([XHRBackend], (backend: MockBackend) => {
        expect(backend).not.toBeNull('backend should be provided');
      }));

    it('can instantiate service with "new"', inject([AuthHttp], (http: AuthHttp) => {
      expect(http).not.toBeNull('http should be provided');
      let service = new PatientApiService(http);
      expect(service instanceof PatientApiService).toBe(true, 'new service should be ok');
    }));

    it('can instantiate service when inject service', inject([PatientApiService], (service: PatientApiService) => {
      expect(service instanceof PatientApiService).toBe(true);
    }));


    describe('when getPatientList', () => {
      let backend: MockBackend;
      let service: PatientApiService;
      let fakePatients: any[];
      let response: Response;

      beforeEach(inject([AuthHttp, XHRBackend], (http: AuthHttp, be: MockBackend) => {
        backend = be;
        service = new PatientApiService(http);
        fakePatients = PatientApiServiceStub.makePatientListData();
        let options = new ResponseOptions({ status: 200, body: fakePatients });
        console.log(options);
        response = new Response(options);
      }));

      it('should have expected fake patients total count (then)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getPatientList(1, 2, 'sortOrder', 'sortBy', 'filter').toPromise()
          .then(patients => {
            expect(patients.length).toBe(fakePatients.length, 'should have expected no. of patients');
          });
      })));

      it('should have expected fake patients total count count (Observable.do)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getPatientList(1, 2, 'sortOrder', 'sortBy', 'filter')
          .do(patients => {
            expect(patients.length).toBe(fakePatients.length, 'should have expected no. of patients');
          })
          .toPromise();
      })));

      it('should be OK returning no patients', async(inject([], () => {
        let resp = new Response(new ResponseOptions({ status: 200, body: [] }));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

        service.getPatientList(1, 2, 'sortOrder', 'sortBy', 'filter')
          .do(patients => {
            expect(patients.length).toBe(0, 'should have no patients');
          })
          .toPromise();
      })));

      it('should treat 404 as an Observable error', async(inject([], () => {
        let resp = new Response(new ResponseOptions({ status: 404 }));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

        service.getPatientList(1, 2, 'sortOrder', 'sortBy', 'filter')
          .do(patients => {
            fail('should not respond with patients');
          })
          .catch(err => {
            expect(err).toMatch(/Bad response status/, 'should catch bad response status code');
            return Observable.of(null); // failure is the expected test result
          })
          .toPromise();
      })));

    });


    describe('when getPatientCount', () => {
      let backend: MockBackend;
      let service: PatientApiService;
      let fakeCount: number;
      let response: Response;

      beforeEach(inject([AuthHttp, XHRBackend], (http: AuthHttp, be: MockBackend) => {
        backend = be;
        service = new PatientApiService(http);
        fakeCount = 4;
        let options = new ResponseOptions({ status: 200, body: fakeCount });
        response = new Response(options);
      }));

      it('should have expected fake patients total count count (then)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getPatientCount('fake-search-terms').toPromise()
          .then(count => {
            expect(count).toBe(fakeCount);
          });
      })));

      it('should have expected fake patients total count count (Observable.do)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getPatientCount('fake-search-terms')
          .do(count => {
            expect(count).toBe(fakeCount);
          })
          .toPromise();
      })));

      it('should be OK returning 0 patient count', async(inject([], () => {
        let resp = new Response(new ResponseOptions({ status: 200, body: 0 }));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

        service.getPatientCount('fake-search-terms')
          .do(count => {
            expect(count).toBe(0, 'should have patient count 0');
          })
          .toPromise();
      })));

      it('should treat 404 as an Observable error', async(inject([], () => {
        let resp = new Response(new ResponseOptions({ status: 404 }));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

        service.getPatientCount('fake-search-terms')
          .do(count => {
            fail('should not respond with patients');
          })
          .catch(err => {
            expect(err).toMatch(/Bad response status/, 'should catch bad response status code');
            return Observable.of(null); // failure is the expected test result
          })
          .toPromise();
      })));

    });


    describe('when getPatientTotal', () => {
      let backend: MockBackend;
      let service: PatientApiService;
      let fakeCount: number;
      let response: Response;

      beforeEach(inject([AuthHttp, XHRBackend], (http: AuthHttp, be: MockBackend) => {
        backend = be;
        service = new PatientApiService(http);
        fakeCount = 4;
        let options = new ResponseOptions({ status: 200, body: fakeCount });
        response = new Response(options);
      }));

      it('should have expected fake patients total count (then)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getPatientTotal().toPromise()
          .then(count => {
            expect(count).toBe(fakeCount);
          });
      })));

      it('should have expected fake patients total count count (Observable.do)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getPatientTotal()
          .do(count => {
            expect(count).toBe(fakeCount);
          })
          .toPromise();
      })));

      it('should be OK returning 0 patient total count', async(inject([], () => {
        let resp = new Response(new ResponseOptions({ status: 200, body: 0 }));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

        service.getPatientTotal()
          .do(count => {
            expect(count).toBe(0, 'should have no patients');
          })
          .toPromise();
      })));

      it('should treat 404 as an Observable error', async(inject([], () => {
        let resp = new Response(new ResponseOptions({ status: 404 }));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

        service.getPatientTotal()
          .do(count => {
            fail('should not respond with patients');
          })
          .catch(err => {
            expect(err).toMatch(/Bad response status/, 'should catch bad response status code');
            return Observable.of(null); // failure is the expected test result
          })
          .toPromise();
      })));

    });


    describe('when getPatientDetails', () => {
      let backend: MockBackend;
      let service: PatientApiService;
      let fakePatient: any;
      let response: Response;

      beforeEach(inject([AuthHttp, XHRBackend], (http: AuthHttp, be: MockBackend) => {
        backend = be;
        service = new PatientApiService(http);
        fakePatient = PatientApiServiceStub.makePatientData();
        let options = new ResponseOptions({ status: 200, body: fakePatient });
        response = new Response(options);
      }));

      it('should have expected fake patient details (then)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getPatientDetails('fake-psn').toPromise()
          .then(patient => {
            expect(patient).toBe(fakePatient);
          });
      })));

      it('should have expected fake patient details (Observable.do)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getPatientDetails('fake-psn')
          .do(patient => {
            expect(patient).toBe(fakePatient, 'should have expected patient details');
          })
          .toPromise();
      })));

      it('should be OK returning no patient details', async(inject([], () => {
        let resp = new Response(new ResponseOptions({ status: 200, body: {} }));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

        service.getPatientDetails('fake-psn')
          .do(patient => {
            expect(patient).toEqual({}, 'should have no patient details');
          })
          .toPromise();
      })));

      it('should treat 404 as an Observable error', async(inject([], () => {
        let resp = new Response(new ResponseOptions({ status: 404 }));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

        service.getPatientDetails('fake-psn')
          .do(patient => {
            fail('should not respond with patient details');
          })
          .catch(err => {
            expect(err).toMatch(/Bad response status/, 'should catch bad response status code');
            return Observable.of(null); // failure is the expected test result
          })
          .toPromise();
      })));

    });


    describe('when getOutsideAssayComparisonVariantReport', () => {
      let backend: MockBackend;
      let service: PatientApiService;
      let fakeData: VariantReportComparisonData;
      let response: Response;

      beforeEach(inject([AuthHttp, XHRBackend], (http: AuthHttp, be: MockBackend) => {
        backend = be;
        service = new PatientApiService(http);
        fakeData = PatientApiServiceStub.makeOutsideAssayComparisonVariantReportData();
        let options = new ResponseOptions({ status: 200, body: fakeData });
        response = new Response(options);
      }));

      it('should have expected outside assay comparison report (then)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getOutsideAssayComparisonVariantReport('fake-psn').toPromise()
          .then(patient => {
            expect(patient).toBe(fakeData);
          });
      })));

      it('should have expected outside assay comparison report (Observable.do)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getOutsideAssayComparisonVariantReport('fake-psn')
          .do(patient => {
            expect(patient).toBe(fakeData, 'should have expected outside assay comparison report');
          })
          .toPromise();
      })));

      it('should be OK returning no fake outside assay comparison report', async(inject([], () => {
        let resp = new Response(new ResponseOptions({ status: 200, body: {} }));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

        service.getOutsideAssayComparisonVariantReport('fake-psn')
          .do(patient => {
            expect(patient).toEqual({}, 'should have no outside assay comparison report');
          })
          .toPromise();
      })));

      it('should treat 404 as an Observable error', async(inject([], () => {
        let resp = new Response(new ResponseOptions({ status: 404 }));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

        service.getOutsideAssayComparisonVariantReport('fake-psn')
          .do(patient => {
            fail('should not respond with fake outside assay comparison report');
          })
          .catch(err => {
            expect(err).toMatch(/Bad response status/, 'should catch bad response status code');
            return Observable.of(null); // failure is the expected test result
          })
          .toPromise();
      })));

    });


    describe('when getPatientVariantReportQc', () => {
      let backend: MockBackend;
      let service: PatientApiService;
      let fakeData: any;
      let response: Response;

      beforeEach(inject([AuthHttp, XHRBackend], (http: AuthHttp, be: MockBackend) => {
        backend = be;
        service = new PatientApiService(http);
        fakeData = PatientApiServiceStub.makeVariantReportQcData();
        let options = new ResponseOptions({ status: 200, body: fakeData });
        response = new Response(options);
      }));

      it('should have expected fake QC variant report (then)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getPatientVariantReportQc('fake-psn', 'fake-analysis-id').toPromise()
          .then(patient => {
            expect(patient).toBe(fakeData);
          });
      })));

      it('should have expected fake QC variant report (Observable.do)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getPatientVariantReportQc('fake-psn', 'fake-analysis-id')
          .do(patient => {
            expect(patient).toBe(fakeData, 'should have expected QC variant report');
          })
          .toPromise();
      })));

      it('should be OK returning no QC variant report', async(inject([], () => {
        let resp = new Response(new ResponseOptions({ status: 200, body: {} }));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

        service.getPatientVariantReportQc('fake-psn', 'fake-analysis-id')
          .do(patient => {
            expect(patient).toEqual({}, 'should have no QC variant report');
          })
          .toPromise();
      })));

      it('should treat 404 as an Observable error', async(inject([], () => {
        let resp = new Response(new ResponseOptions({ status: 404 }));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

        service.getPatientVariantReportQc('fake-psn', 'fake-analysis-id')
          .do(patient => {
            fail('should not respond with QC variant report');
          })
          .catch(err => {
            expect(err).toMatch(/Bad response status/, 'should catch bad response status code');
            return Observable.of(null); // failure is the expected test result
          })
          .toPromise();
      })));

    });


    describe('when getPatientVariantReportOcp', () => {
      let backend: MockBackend;
      let service: PatientApiService;
      let fakeData: any;
      let response: Response;

      beforeEach(inject([AuthHttp, XHRBackend], (http: AuthHttp, be: MockBackend) => {
        backend = be;
        service = new PatientApiService(http);
        fakeData = PatientApiServiceStub.makePatientVariantReportOcpData();
        let options = new ResponseOptions({ status: 200, body: fakeData });
        response = new Response(options);
      }));

      it('should have expected fake OCP data (then)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getPatientVariantReportOcp('fake-psn', 'fake-analysis-id').toPromise()
          .then(patient => {
            expect(patient).toBe(fakeData);
          });
      })));

      it('should have expected fake OCP data (Observable.do)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getPatientVariantReportOcp('fake-psn', 'fake-analysis-id')
          .do(patient => {
            expect(patient).toBe(fakeData, 'should have expected OCP data');
          })
          .toPromise();
      })));

      it('should be OK returning no OCP data', async(inject([], () => {
        let resp = new Response(new ResponseOptions({ status: 200, body: {} }));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

        service.getPatientVariantReportOcp('fake-psn', 'fake-analysis-id')
          .do(patient => {
            expect(patient).toEqual({}, 'should have no OCP data');
          })
          .toPromise();
      })));

      it('should NOT treat 404 as an Observable error', async(inject([], () => {
        let resp = new Response(new ResponseOptions({ status: 404 }));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

        service.getPatientVariantReportOcp('fake-psn', 'fake-analysis-id')
          .do(patientWitError => {
            expect(patientWitError).toEqual({ hasError: true, error: new Error('Bad response status: 404') }, 'should have hasError=true');
          })
          .catch(err => {
            fail('should not respond with OCP data');
            return Observable.of(null); // failure is the expected test result
          })
          .toPromise();
      })));

    });


    describe('when getPatientCopyNumberReport', () => {
      let backend: MockBackend;
      let service: PatientApiService;
      let fakeData: any;
      let response: Response;

      beforeEach(inject([AuthHttp, XHRBackend], (http: AuthHttp, be: MockBackend) => {
        backend = be;
        service = new PatientApiService(http);
        fakeData = PatientApiServiceStub.makePatientCopyNumberReportData();
        let options = new ResponseOptions({ status: 200, body: fakeData });
        response = new Response(options);
      }));

      it('should have expected fake CNV data (then)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getPatientCopyNumberReport('fake-psn', 'fake-analysis-id').toPromise()
          .then(patient => {
            expect(patient).toBe(fakeData);
          });
      })));

      it('should have expected fake CNV data (Observable.do)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getPatientCopyNumberReport('fake-psn', 'fake-analysis-id')
          .do(patient => {
            expect(patient).toBe(fakeData, 'should have expected CNV data');
          })
          .toPromise();
      })));

      it('should be OK returning no CNV data', async(inject([], () => {
        let resp = new Response(new ResponseOptions({ status: 200, body: {} }));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

        service.getPatientCopyNumberReport('fake-psn', 'fake-analysis-id')
          .do(patient => {
            expect(patient).toEqual({}, 'should have no CNV data');
          })
          .toPromise();
      })));

      it('should NOT treat 404 as an Observable error', async(inject([], () => {
        let resp = new Response(new ResponseOptions({ status: 404 }));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

        service.getPatientCopyNumberReport('fake-psn', 'fake-analysis-id')
          .do(patientWitError => {
            expect(patientWitError).toEqual(
              { hasError: true, error: new Error('Bad response status: 404'), parsed_vcf_genes: {} }, 'should have hasError=true'
            );
          })
          .catch(err => {
            fail('should not respond with CNV data');
            return Observable.of(null); // failure is the expected test result
          })
          .toPromise();
      })));

    });


    describe('when getPatientVariantReportFileInfo', () => {
      let backend: MockBackend;
      let service: PatientApiService;
      let fakeData: any;
      let response: Response;

      beforeEach(inject([AuthHttp, XHRBackend], (http: AuthHttp, be: MockBackend) => {
        backend = be;
        service = new PatientApiService(http);
        fakeData = PatientApiServiceStub.makePatientVariantReportFileInfoData();
        let options = new ResponseOptions({ status: 200, body: fakeData });
        response = new Response(options);
      }));

      it('should have expected fake file info data (then)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getPatientVariantReportFileInfo('fake-psn', 'fake-analysis-id').toPromise()
          .then(patient => {
            expect(patient).toBe(fakeData);
          });
      })));

      it('should have expected fake file info data (Observable.do)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getPatientVariantReportFileInfo('fake-psn', 'fake-analysis-id')
          .do(patient => {
            expect(patient).toBe(fakeData, 'should have expected file info data');
          })
          .toPromise();
      })));

      it('should be OK returning no file info data', async(inject([], () => {
        let resp = new Response(new ResponseOptions({ status: 200, body: {} }));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

        service.getPatientVariantReportFileInfo('fake-psn', 'fake-analysis-id')
          .do(patient => {
            expect(patient).toEqual({}, 'should have no file info data');
          })
          .toPromise();
      })));

      it('should treat 404 as an Observable error', async(inject([], () => {
        let resp = new Response(new ResponseOptions({ status: 404 }));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

        service.getPatientVariantReportFileInfo('fake-psn', 'fake-analysis-id')
          .do(patient => {
            fail('should not respond with file info data');
          })
          .catch(err => {
            expect(err).toMatch(/Bad response status/, 'should catch bad response status code');
            return Observable.of(null); // failure is the expected test result
          })
          .toPromise();
      })));

    });


    describe('when downloadPatientFile', () => {
      let backend: MockBackend;
      let service: PatientApiService;
      let fakeData: any;
      let fakeErrorData: any;
      let response: Response;

      beforeEach(inject([AuthHttp, XHRBackend], (http: AuthHttp, be: MockBackend) => {
        backend = be;
        service = new PatientApiService(http);
        fakeData = {
          download_url: 'fake-url',
        };
        fakeErrorData = {
          message: 'fake-error',
        };
        let options = new ResponseOptions({ status: 200, body: fakeData });
        response = new Response(options);
      }));

      it('should have expected fake response (then)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => { c.mockRespond(response); });

        service.downloadPatientFile('fake-psn', 'fake-url').toPromise()
          .then(resp => {
            expect(resp).toBeDefined();
            switch (resp.kind) {
              case 'error':
                expect(resp.kind).toBe('error');
                let errorRes = resp as ApiError;
                expect(errorRes.message).toBe(fakeErrorData.message);
                break;
              case 'success':
                expect(resp.kind).toBe('success');
                let successRes = resp as ApiSuccess;
                expect(successRes.data.download_url).toBe(fakeData.download_url);
                break;
            }
          });
      })));

      it('should have expected fake response (Observable.do)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.downloadPatientFile('fake-psn', 'fake-url')
          .do(resp => {
            expect(resp.kind).toBe('success');
            let successRes = resp as ApiSuccess;
            expect(successRes.data.download_url).toBe(fakeData.download_url);
          })
          .toPromise();
      })));

      it('should have expected fake error (Observable.do)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockError(new Error('fake-error')));

        service.downloadPatientFile('fake-psn', 'fake-url')
          .do(resp => {
            expect(resp.kind).toBe('error');
            let errorRes = resp as ApiError;
            console.log(errorRes);
            expect(errorRes.message).toEqual(fakeErrorData.message);
          })
          .toPromise();
      })));

    });


    describe('when updateVariantReportStatus', () => {
      let backend: MockBackend;
      let service: PatientApiService;
      let fakeData: any;
      let fakeErrorData: any;
      let response: Response;

      beforeEach(inject([AuthHttp, XHRBackend], (http: AuthHttp, be: MockBackend) => {
        backend = be;
        service = new PatientApiService(http);
        fakeData = {
          commenter: 'fake-commenter',
          status: 'fake-status',
          dateTime: 'fake-dateTime',
        };
        fakeErrorData = {
          message: 'fake-error',
        };
        let options = new ResponseOptions({ status: 200, body: fakeData });
        response = new Response(options);
      }));

      it('should have expected fake response (then)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => { c.mockRespond(response); });

        service.updateVariantReportStatus('fake-psn', 'fake-bsn', 'fake-analysis-id', true).toPromise()
          .then(resp => {
            expect(resp).toBeDefined();
            switch (resp.kind) {
              case 'error':
                expect(resp.kind).toBe('error');
                let errorRes = resp as ApiStatusUpdateError;
                expect(errorRes.message).toBe(fakeErrorData.message);
                break;
              case 'success':
                expect(resp.kind).toBe('success');
                let successRes = resp as ApiStatusUpdateSuccess;
                expect(successRes.commenter).toBe(fakeData.commenter);
                break;
            }
          });
      })));

      it('should have expected fake response (Observable.do)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.updateVariantReportStatus('fake-psn', 'fake-bsn', 'fake-analysis-id', true)
          .do(resp => {
            expect(resp.kind).toBe('success');
            let successRes = resp as ApiStatusUpdateSuccess;
            expect(successRes.commenter).toBe(fakeData.commenter);
          })
          .toPromise();
      })));

      it('should have expected fake error (Observable.do)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockError(new Error('fake-error')));

        service.updateVariantReportStatus('fake-psn', 'fake-bsn', 'fake-analysis-id', true)
          .do(resp => {
            expect(resp.kind).toBe('error');
            let errorRes = resp as ApiStatusUpdateError;
            expect(errorRes.message).toEqual(fakeErrorData.message);
          })
          .toPromise();
      })));

    });


    describe('when updateVariant', () => {
      let backend: MockBackend;
      let service: PatientApiService;
      let fakeData: any;
      let fakeErrorData: any;
      let response: Response;

      beforeEach(inject([AuthHttp, XHRBackend], (http: AuthHttp, be: MockBackend) => {
        backend = be;
        service = new PatientApiService(http);
        fakeData = {
          commenter: 'fake-commenter',
          status: 'fake-status',
          dateTime: 'fake-dateTime',
        };
        fakeErrorData = {
          message: 'fake-error',
        };
        let options = new ResponseOptions({ status: 200, body: fakeData });
        response = new Response(options);
      }));

      it('should have expected fake response (then)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => { c.mockRespond(response); });

        service.updateVariant('fake-psn', 'fake-bsn', 'fake-analysis-id', 'fake-variant-id', true, 'fake-comment').toPromise()
          .then(resp => {
            expect(resp).toBeDefined();
            switch (resp.kind) {
              case 'error':
                expect(resp.kind).toBe('error');
                let errorRes = resp as ApiStatusUpdateError;
                expect(errorRes.message).toBe(fakeErrorData.message);
                break;
              case 'success':
                expect(resp.kind).toBe('success');
                let successRes = resp as ApiStatusUpdateSuccess;
                expect(successRes.commenter).toBe(fakeData.commenter);
                break;
            }
          });
      })));

      it('should have expected fake response (Observable.do)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.updateVariant('fake-psn', 'fake-bsn', 'fake-analysis-id', 'fake-variant-id', true, 'fake-comment')
          .do(resp => {
            expect(resp.kind).toBe('success');
            let successRes = resp as ApiStatusUpdateSuccess;
            expect(successRes.commenter).toBe(fakeData.commenter);
          })
          .toPromise();
      })));

      it('should have expected fake error (Observable.do)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockError(new Error('fake-error')));

        service.updateVariant('fake-psn', 'fake-bsn', 'fake-analysis-id', 'fake-variant-id', true, 'fake-comment')
          .do(resp => {
            expect(resp.kind).toBe('error');
            let errorRes = resp as ApiStatusUpdateError;
            expect(errorRes.message).toEqual(fakeErrorData.message);
          })
          .toPromise();
      })));

    });


    describe('when updateAssignmentReport', () => {
      let backend: MockBackend;
      let service: PatientApiService;
      let fakeData: any;
      let fakeErrorData: any;
      let response: Response;

      beforeEach(inject([AuthHttp, XHRBackend], (http: AuthHttp, be: MockBackend) => {
        backend = be;
        service = new PatientApiService(http);
        fakeData = {
          commenter: 'fake-commenter',
          status: 'fake-status',
          dateTime: 'fake-dateTime',
        };
        fakeErrorData = {
          message: 'fake-error',
        };
        let options = new ResponseOptions({ status: 200, body: fakeData });
        response = new Response(options);
      }));

      it('should have expected fake response (then)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => { c.mockRespond(response); });

        service.updateAssignmentReport('fake-psn', true).toPromise()
          .then(resp => {
            expect(resp).toBeDefined();
            switch (resp.kind) {
              case 'error':
                expect(resp.kind).toBe('error');
                let errorRes = resp as ApiStatusUpdateError;
                expect(errorRes.message).toBe(fakeErrorData.message);
                break;
              case 'success':
                expect(resp.kind).toBe('success');
                let successRes = resp as ApiStatusUpdateSuccess;
                expect(successRes.commenter).toBe(fakeData.commenter);
                break;
            }
          });
      })));

      it('should have expected fake response (Observable.do)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.updateAssignmentReport('fake-psn', true)
          .do(resp => {
            expect(resp.kind).toBe('success');
            let successRes = resp as ApiStatusUpdateSuccess;
            expect(successRes.commenter).toBe(fakeData.commenter);
          })
          .toPromise();
      })));

      it('should have expected fake error (Observable.do)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockError(new Error('fake-error')));

        service.updateAssignmentReport('fake-psn', true)
          .do(resp => {
            expect(resp.kind).toBe('error');
            let errorRes = resp as ApiStatusUpdateError;
            expect(errorRes.message).toEqual(fakeErrorData.message);
          })
          .toPromise();
      })));

    });


    describe('when getPendingAssignmentReports', () => {
      let backend: MockBackend;
      let service: PatientApiService;
      let fakePatient: any;
      let response: Response;

      beforeEach(inject([AuthHttp, XHRBackend], (http: AuthHttp, be: MockBackend) => {
        backend = be;
        service = new PatientApiService(http);
        fakePatient = PatientApiServiceStub.makePendingAssignmentReports();
        let options = new ResponseOptions({ status: 200, body: fakePatient });
        response = new Response(options);
      }));

      it('should have expected fake patient details (then)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getPendingAssignmentReports().toPromise()
          .then(patient => {
            expect(patient).toBe(fakePatient);
          });
      })));

      it('should have expected fake patient details (Observable.do)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getPendingAssignmentReports()
          .do(patient => {
            expect(patient).toBe(fakePatient, 'should have expected patient details');
          })
          .toPromise();
      })));

      it('should be OK returning no patient details', async(inject([], () => {
        let resp = new Response(new ResponseOptions({ status: 200, body: {} }));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

        service.getPendingAssignmentReports()
          .do(patient => {
            expect(patient).toEqual({}, 'should have no patient details');
          })
          .toPromise();
      })));

      it('should treat 404 as an Observable error', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockError(new Error('fake-error')));

        service.getPendingAssignmentReports()
          .do(patient => {
            fail('should not respond with patient details');
          })
          .catch(err => {
            expect(err).toMatch('fake-error', 'should catch bad response status code');
            return Observable.of(null); // failure is the expected test result
          })
          .toPromise();
      })));

    });


    describe('when getPendingVariantReports', () => {
      let backend: MockBackend;
      let service: PatientApiService;
      let fakePatient: any;
      let response: Response;

      beforeEach(inject([AuthHttp, XHRBackend], (http: AuthHttp, be: MockBackend) => {
        backend = be;
        service = new PatientApiService(http);
        fakePatient = PatientApiServiceStub.makePendingVariantReports();
        let options = new ResponseOptions({ status: 200, body: fakePatient });
        response = new Response(options);
      }));

      it('should have expected fake patient details (then)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getPendingVariantReports().toPromise()
          .then(patient => {
            expect(patient).toBe(fakePatient);
          });
      })));

      it('should have expected fake patient details (Observable.do)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getPendingVariantReports()
          .do(patient => {
            expect(patient).toBe(fakePatient, 'should have expected patient details');
          })
          .toPromise();
      })));

      it('should be OK returning no patient details', async(inject([], () => {
        let resp = new Response(new ResponseOptions({ status: 200, body: {} }));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

        service.getPendingVariantReports()
          .do(patient => {
            expect(patient).toEqual({}, 'should have no patient details');
          })
          .toPromise();
      })));

      it('should treat 404 as an Observable error', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockError(new Error('fake-error')));

        service.getPendingVariantReports()
          .do(patient => {
            fail('should not respond with patient details');
          })
          .catch(err => {
            expect(err).toMatch('fake-error', 'should catch bad response status code');
            return Observable.of(null); // failure is the expected test result
          })
          .toPromise();
      })));

    });


    describe('when getPatientsAwaiting', () => {
      let backend: MockBackend;
      let service: PatientApiService;
      let fakePatient: any;
      let response: Response;

      beforeEach(inject([AuthHttp, XHRBackend], (http: AuthHttp, be: MockBackend) => {
        backend = be;
        service = new PatientApiService(http);
        fakePatient = PatientApiServiceStub.makePatientsAwaiting();
        let options = new ResponseOptions({ status: 200, body: fakePatient });
        response = new Response(options);
      }));

      it('should have expected fake patient details (then)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getPatientsAwaiting().toPromise()
          .then(patient => {
            expect(patient).toBe(fakePatient);
          });
      })));

      it('should have expected fake patient details (Observable.do)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getPatientsAwaiting()
          .do(patient => {
            expect(patient).toBe(fakePatient, 'should have expected patient details');
          })
          .toPromise();
      })));

      it('should be OK returning no patient details', async(inject([], () => {
        let resp = new Response(new ResponseOptions({ status: 200, body: {} }));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

        service.getPatientsAwaiting()
          .do(patient => {
            expect(patient).toEqual({}, 'should have no patient details');
          })
          .toPromise();
      })));

      it('should treat 404 as an Observable error', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockError(new Error('fake-error')));

        service.getPatientsAwaiting()
          .do(patient => {
            fail('should not respond with patient details');
          })
          .catch(err => {
            expect(err).toMatch('fake-error', 'should catch bad response status code');
            return Observable.of(null); // failure is the expected test result
          })
          .toPromise();
      })));

    });


    describe('when getOverviewPatients', () => {
      let backend: MockBackend;
      let service: PatientApiService;
      let fakePatient: any;
      let response: Response;

      beforeEach(inject([AuthHttp, XHRBackend], (http: AuthHttp, be: MockBackend) => {
        backend = be;
        service = new PatientApiService(http);
        fakePatient = PatientApiServiceStub.makeOverviewPatients();
        let options = new ResponseOptions({ status: 200, body: fakePatient });
        response = new Response(options);
      }));

      it('should have expected fake patient details (then)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getOverviewPatients().toPromise()
          .then(patient => {
            expect(patient).toBe(fakePatient);
          });
      })));

      it('should have expected fake patient details (Observable.do)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getOverviewPatients()
          .do(patient => {
            expect(patient).toBe(fakePatient, 'should have expected patient details');
          })
          .toPromise();
      })));

      it('should be OK returning no patient details', async(inject([], () => {
        let resp = new Response(new ResponseOptions({ status: 200, body: {} }));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

        service.getOverviewPatients()
          .do(patient => {
            expect(patient).toEqual({}, 'should have no patient details');
          })
          .toPromise();
      })));

      it('should treat 404 as an Observable error', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockError(new Error('fake-error')));

        service.getOverviewPatients()
          .do(patient => {
            fail('should not respond with patient details');
          })
          .catch(err => {
            expect(err).toMatch('fake-error', 'should catch bad response status code');
            return Observable.of(null); // failure is the expected test result
          })
          .toPromise();
      })));

    });


    describe('when getOverviewBt', () => {
      let backend: MockBackend;
      let service: PatientApiService;
      let fakePatient: any;
      let response: Response;

      beforeEach(inject([AuthHttp, XHRBackend], (http: AuthHttp, be: MockBackend) => {
        backend = be;
        service = new PatientApiService(http);
        fakePatient = PatientApiServiceStub.makeOverviewBt();
        let options = new ResponseOptions({ status: 200, body: fakePatient });
        response = new Response(options);
      }));

      it('should have expected fake patient details (then)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getOverviewBt().toPromise()
          .then(patient => {
            expect(patient).toBe(fakePatient);
          });
      })));

      it('should have expected fake patient details (Observable.do)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getOverviewBt()
          .do(patient => {
            expect(patient).toBe(fakePatient, 'should have expected patient details');
          })
          .toPromise();
      })));

      it('should be OK returning no patient details', async(inject([], () => {
        let resp = new Response(new ResponseOptions({ status: 200, body: {} }));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

        service.getOverviewBt()
          .do(patient => {
            expect(patient).toEqual({}, 'should have no patient details');
          })
          .toPromise();
      })));

      it('should treat 404 as an Observable error', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockError(new Error('fake-error')));

        service.getOverviewBt()
          .do(patient => {
            fail('should not respond with patient details');
          })
          .catch(err => {
            expect(err).toMatch('fake-error', 'should catch bad response status code');
            return Observable.of(null); // failure is the expected test result
          })
          .toPromise();
      })));

    });

  });
}
