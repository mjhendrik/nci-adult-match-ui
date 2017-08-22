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
  XHRBackend,
  BaseRequestOptions
} from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';

import { PatientApiService } from './patient-api.service';
import { VariantReportComparisonData } from './patient-variant-report-oa/variant-report-comparison-data';

const makePatientListData = () => [
  { patientSequenceNumber: '1', currentStepNumber: '1.1' },
  { patientSequenceNumber: '2', currentStepNumber: '1.1' },
  { patientSequenceNumber: '3', currentStepNumber: '1.1' },
  { patientSequenceNumber: '4', currentStepNumber: '1.1' }
] as any[];

const makePatientData = () => {
  return {
    patientSequenceNumber: '1',
    currentStepNumber: '1.1'
  } as any;
};

const makeVariantReportData = () => {
  return {
    variantReport: {
      patientSequenceNumber: '11276',
      patientStatus: 'PENDING_CONFIRMATION',
      step: 0,
      concordance: 'YES',
      variantReportStatus: 'CONFIRMED',
      variantReportDate: 'August 26, 2016 3:28 PM GMT',
      user: 'TA commettee',
      biopsySequenceNumber: 'T-16-000762',
      molecularSequenceNumber: 'MSN17772',
      analysisId: 'MSN17772_v1_92ad9833-e79a-4807-b1f3-6be88a0ab824',
      mapd: '0.317',
      cellularity: '1.000000',
      fileReceivedDate: 'August 25, 2016 10:13 PM GMT',
      torrentVariantCallerVersion: '5.0-9'
    }
  } as any;
};

const makeOutsideAssayComparisonVariantReportData = () => {
  return {
    psn: 'value',
    currentPatientStatus: 'value',
    currentStepNumber: 'value',
    concordance: 'value',
    outsideData: {
      analysisId: 'value',
      assays: ['value'],
      variantReport: 'value',
      assignmentReport: 'value',
      tvc_version: 'value',
      pool1: 1,
      pool2: 1,
      mapd: 'value',
      cellularity: 'value',
      showPools: false
    },
    matchData: {
      analysisId: 'value',
      assays: ['value'],
      variantReport: 'value',
      assignmentReport: 'value',
      tvc_version: 'value',
      pool1: 1,
      pool2: 1,
      mapd: 'value',
      cellularity: 'value',
      showPools: false
    },
    comparisonVariantReport: {
      singleNucleotideVariantAndIndels: ['value'],
      copyNumberVariants: ['value'],
      unifiedGeneFusions: ['value']
    },
  } as VariantReportComparisonData;
};

const makeVariantReportQcData = () => {
  return {
    variantReport: {
      patientSequenceNumber: '11276',
      patientStatus: 'PENDING_CONFIRMATION',
      step: 0,
      concordance: 'YES',
      variantReportStatus: 'CONFIRMED',
      variantReportDate: 'August 26, 2016 3:28 PM GMT',
      user: 'TA commettee',
      biopsySequenceNumber: 'T-16-000762',
      molecularSequenceNumber: 'MSN17772',
      analysisId: 'MSN17772_v1_92ad9833-e79a-4807-b1f3-6be88a0ab824',
      mapd: '0.317',
      cellularity: '1.000000',
      fileReceivedDate: 'August 25, 2016 10:13 PM GMT',
      torrentVariantCallerVersion: '5.0-9'
    }
  } as any;
};

export function main() {
  describe('PatientApiService (mockBackend)', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [HttpModule],
        providers: [
          PatientApiService,
          { provide: XHRBackend, useClass: MockBackend },
          { provide: AuthHttp, useExisting: Http },
        ]
      })
        .compileComponents();
    }));

    it('can provide the mockBackend as XHRBackend', inject([XHRBackend], (backend: MockBackend) => {
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
        fakePatients = makePatientListData();
        let options = new ResponseOptions({ status: 200, body: fakePatients });
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
        fakePatient = makePatientData();
        let options = new ResponseOptions({ status: 200, body: fakePatient });
        response = new Response(options);
      }));

      it('should have expected fake patients (then)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getPatientDetails('fake-psn').toPromise()
          .then(patient => {
            expect(patient).toBe(fakePatient);
          });
      })));

      it('should have expected fake patients (Observable.do)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getPatientDetails('fake-psn')
          .do(patient => {
            expect(patient).toBe(fakePatient, 'should have expected no. of patients');
          })
          .toPromise();
      })));

      it('should be OK returning no patients', async(inject([], () => {
        let resp = new Response(new ResponseOptions({ status: 200, body: {} }));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

        service.getPatientDetails('fake-psn')
          .do(patient => {
            expect(patient).toEqual({}, 'should have no patients');
          })
          .toPromise();
      })));

      it('should treat 404 as an Observable error', async(inject([], () => {
        let resp = new Response(new ResponseOptions({ status: 404 }));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

        service.getPatientDetails('fake-psn')
          .do(patient => {
            fail('should not respond with patients');
          })
          .catch(err => {
            expect(err).toMatch(/Bad response status/, 'should catch bad response status code');
            return Observable.of(null); // failure is the expected test result
          })
          .toPromise();
      })));

    });


    describe('when getPatientVariantReport', () => {
      let backend: MockBackend;
      let service: PatientApiService;
      let fakeData: any;
      let response: Response;

      beforeEach(inject([AuthHttp, XHRBackend], (http: AuthHttp, be: MockBackend) => {
        backend = be;
        service = new PatientApiService(http);
        fakeData = makeVariantReportData();
        let options = new ResponseOptions({ status: 200, body: fakeData });
        response = new Response(options);
      }));

      it('should have expected fake patients (then)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getPatientVariantReport('fake-psn').toPromise()
          .then(patient => {
            expect(patient).toBe(fakeData);
          });
      })));

      it('should have expected fake patients (Observable.do)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getPatientVariantReport('fake-psn')
          .do(patient => {
            expect(patient).toBe(fakeData, 'should have expected no. of patients');
          })
          .toPromise();
      })));

      it('should be OK returning no patients', async(inject([], () => {
        let resp = new Response(new ResponseOptions({ status: 200, body: {} }));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

        service.getPatientVariantReport('fake-psn')
          .do(patient => {
            expect(patient).toEqual({}, 'should have no patients');
          })
          .toPromise();
      })));

      it('should treat 404 as an Observable error', async(inject([], () => {
        let resp = new Response(new ResponseOptions({ status: 404 }));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

        service.getPatientVariantReport('fake-psn')
          .do(patient => {
            fail('should not respond with patients');
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
        fakeData = makeOutsideAssayComparisonVariantReportData();
        let options = new ResponseOptions({ status: 200, body: fakeData });
        response = new Response(options);
      }));

      it('should have expected fake patients (then)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getOutsideAssayComparisonVariantReport('fake-psn').toPromise()
          .then(patient => {
            expect(patient).toBe(fakeData);
          });
      })));

      it('should have expected fake patients (Observable.do)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getOutsideAssayComparisonVariantReport('fake-psn')
          .do(patient => {
            expect(patient).toBe(fakeData, 'should have expected no. of patients');
          })
          .toPromise();
      })));

      it('should be OK returning no patients', async(inject([], () => {
        let resp = new Response(new ResponseOptions({ status: 200, body: {} }));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

        service.getOutsideAssayComparisonVariantReport('fake-psn')
          .do(patient => {
            expect(patient).toEqual({}, 'should have no patients');
          })
          .toPromise();
      })));

      it('should treat 404 as an Observable error', async(inject([], () => {
        let resp = new Response(new ResponseOptions({ status: 404 }));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

        service.getOutsideAssayComparisonVariantReport('fake-psn')
          .do(patient => {
            fail('should not respond with patients');
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
        fakeData = makeVariantReportQcData();
        let options = new ResponseOptions({ status: 200, body: fakeData });
        response = new Response(options);
      }));

      it('should have expected fake patients (then)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getPatientVariantReportQc('fake-psn', 'faka-analysis-id').toPromise()
          .then(patient => {
            expect(patient).toBe(fakeData);
          });
      })));

      it('should have expected fake patients (Observable.do)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getPatientVariantReportQc('fake-psn', 'faka-analysis-id')
          .do(patient => {
            expect(patient).toBe(fakeData, 'should have expected no. of patients');
          })
          .toPromise();
      })));

      it('should be OK returning no patients', async(inject([], () => {
        let resp = new Response(new ResponseOptions({ status: 200, body: {} }));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

        service.getPatientVariantReportQc('fake-psn', 'faka-analysis-id')
          .do(patient => {
            expect(patient).toEqual({}, 'should have no patients');
          })
          .toPromise();
      })));

      it('should treat 404 as an Observable error', async(inject([], () => {
        let resp = new Response(new ResponseOptions({ status: 404 }));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

        service.getPatientVariantReportQc('fake-psn', 'faka-analysis-id')
          .do(patient => {
            fail('should not respond with patients');
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
        fakeData = makeVariantReportQcData();
        let options = new ResponseOptions({ status: 200, body: fakeData });
        response = new Response(options);
      }));

      it('should have expected fake patients (then)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getPatientVariantReportOcp('fake-psn', 'faka-analysis-id').toPromise()
          .then(patient => {
            expect(patient).toBe(fakeData);
          });
      })));

      it('should have expected fake patients (Observable.do)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getPatientVariantReportOcp('fake-psn', 'faka-analysis-id')
          .do(patient => {
            expect(patient).toBe(fakeData, 'should have expected no. of patients');
          })
          .toPromise();
      })));

      it('should be OK returning no patients', async(inject([], () => {
        let resp = new Response(new ResponseOptions({ status: 200, body: {} }));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

        service.getPatientVariantReportOcp('fake-psn', 'faka-analysis-id')
          .do(patient => {
            expect(patient).toEqual({}, 'should have no patients');
          })
          .toPromise();
      })));

      it('should NOT treat 404 as an Observable error', async(inject([], () => {
        let resp = new Response(new ResponseOptions({ status: 404 }));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

        service.getPatientVariantReportOcp('fake-psn', 'faka-analysis-id')
          .do(patientWitError => {
            expect(patientWitError).toEqual({ hasError: true, error: new Error('Bad response status: 404') }, 'should have hasError=true');
          })
          .catch(err => {
            fail('should not respond with patients');
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
        fakeData = makeVariantReportQcData();
        let options = new ResponseOptions({ status: 200, body: fakeData });
        response = new Response(options);
      }));

      it('should have expected fake patients (then)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getPatientCopyNumberReport('fake-psn', 'faka-analysis-id').toPromise()
          .then(patient => {
            expect(patient).toBe(fakeData);
          });
      })));

      it('should have expected fake patients (Observable.do)', async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

        service.getPatientCopyNumberReport('fake-psn', 'faka-analysis-id')
          .do(patient => {
            expect(patient).toBe(fakeData, 'should have expected no. of patients');
          })
          .toPromise();
      })));

      it('should be OK returning no patients', async(inject([], () => {
        let resp = new Response(new ResponseOptions({ status: 200, body: {} }));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

        service.getPatientCopyNumberReport('fake-psn', 'faka-analysis-id')
          .do(patient => {
            expect(patient).toEqual({}, 'should have no patients');
          })
          .toPromise();
      })));

      it('should NOT treat 404 as an Observable error', async(inject([], () => {
        let resp = new Response(new ResponseOptions({ status: 404 }));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

        service.getPatientCopyNumberReport('fake-psn', 'faka-analysis-id')
          .do(patientWitError => {
            expect(patientWitError).toEqual(
              { hasError: true, error: new Error('Bad response status: 404'), parsed_vcf_genes: {} }, 'should have hasError=true'
            );
          })
          .catch(err => {
            fail('should not respond with patients');
            return Observable.of(null); // failure is the expected test result
          })
          .toPromise();
      })));

    });

  });
}
