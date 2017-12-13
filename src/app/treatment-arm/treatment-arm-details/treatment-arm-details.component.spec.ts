// import { Component } from '@angular/core';
import {
  async,
  TestBed,
  tick,
  fakeAsync,
  inject
} from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { FormsModule } from '@angular/forms';
import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend,
  BaseRequestOptions
} from '@angular/http';
import {
  MockBackend,
  MockConnection
} from '@angular/http/testing';
import { ActivatedRoute } from '@angular/router';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { PatientApiServiceStub, PatientApiServiceMock } from '../../patient/testing/patient-api-service-stub';

import { DataTableModule } from '../../shared/datatables/index';
import { TreatmentArmDetailsComponent } from './treatment-arm-details.component';
import { TreatmentArmApiService } from './../treatment-arm-api.service';
import { RouterTestingModule } from '@angular/router/testing';
import { PipesModule } from './../../shared/pipes/pipes.module';
import { DirectivesModule } from './../../shared/directives/directives.module';
import { SharedModule } from '../../shared/shared.module';
import { TabsModule } from 'ngx-bootstrap/tabs';

let ta_resolved_data = {

  versionData: [
    {
      'dateArchived': null,
      'version': '2016-05-31'
    },
    {
      'dateArchived': {
        '$date': 1456246261666
      },
      'version': '2015-08-06'
    },
    {
      'dateArchived': {
        '$date': 1465225012773
      },
      'version': '2016-01-20'
    }
  ],
  details: [{
    '_class': 'gov.match.model.TreatmentArm',
    '_id': {
      '$oid': '5925b1e751fa87a5c729d017'
    },
    'assayResults': ['test'],
    'dateArchived': 'test',
    'dateCreated': {
      '$date': 1465225012704
    },
    'description': 'TDM1 in HER2 amplification',
    'exclusionDiseases': [{
      '_id': '10021980',
      'ctepCategory': 'Breast Cancer - Invasive',
      'shortName': 'Inflammatory breast carcinoma'
    },
    {
      '_id': '10006190',
      'ctepCategory': 'Breast Cancer - Invasive',
      'shortName': 'Invasive breast carcinoma'
    },
    {
      '_id': '10066354',
      'ctepCategory': 'Gastroesophageal Cancer',
      'shortName': 'Adenocarcinoma - GEJ'
    },
    {
      '_id': '10053130',
      'ctepCategory': 'Breast Cancer - Invasive',
      'shortName': 'Cystosarcoma phylloides - breast'
    },
    {
      '_id': '10006285',
      'ctepCategory': 'Breast Neoplasm - Misc',
      'shortName': 'Breast cancer, NOS'
    },
    {
      '_id': '10001150',
      'ctepCategory': 'Gastroesophageal Cancer',
      'shortName': 'Adenocarcinoma - stomach'
    }
    ],
    'exclusionDrugs': [{
      'drugs': [{
        'drugId': '780263',
        'name': 'TDM1 (Ado-trastuzumab emtansine)'
      }]
    },
    {
      'drugs': [{
        'drugId': '',
        'name': 'Trastuzumab'
      }]
    },
    {
      'drugs': [{
        'drugId': '',
        'name': 'Pertuzumab'
      }]
    },
    {
      'drugs': [{
        'drugId': '',
        'name': 'Margetuximab'
      }]
    },
    {
      'drugs': [{
        'drugId': '',
        'name': 'PF-05280014 (Pfizer, Trastuzumab Biosimilar)'
      }]
    },
    {
      'drugs': [{
        'drugId': '',
        'name': 'CT-P6 (Celltrion, Trastuzumab Biosimilar)'
      }]
    },
    {
      'drugs': [{
        'drugId': '',
        'name': 'ABP-980 (Amgen, Trastuzumab Biosimilar)'
      }]
    }
    ],
    'gene': 'HER2',
    'maxPatientsAllowed': 35,
    'name': 'TDM1 in HER2 Amplification',
    'numPatientsAssigned': 35,
    'stateToken': {
      '$uuid': 'a52329ec664a4d1e98341f19aefd120c'
    },
    'statusLog': [
      {
        'date': '1488461537494',
        'status': 'PENDING'
      },
      {
        'date': '1488461581',
        'status': 'OPEN'
      },
      {
        'date': '1488461581910',
        'status': 'READY'
      }
    ],
    'summaryReport': {
      'numCurrentPatientOnArm': 1,
      'numFormerPatients': 0,
      'numPendingArmApproval': 0,
      'numNotEnrolledPatient': 0,
      'assignmentRecords': [{
        'patientSequenceNumber': '12340',
        'treatmentArmVersion': '2017-03-12',
        'assignmentStatusOutcome': 'ON_TREATMENT_ARM',
        'analysisId': 'MSN25049_v2_91f2766b-dd32-471d-9e83-8eefbce3719d',
        'assignmentReportId': 0,
        'dateSelected': '2017-06-12 18:54:48.608332',
        'dateOnArm': '2017-07-12 18:54:48.608332',
        'dateOffArm': 'test',
        'timeOnArm': 314235,
        'stepNumber': '1',
        'diseases': [{
          'meddraCode': '90600236',
          'ctepCategory': 'Reproductive System Neoplasm, Male',
          'ctepSubCategory': 'Penile Cancer',
          'ctepTerm': 'Penile adenocarcinoma',
          'shortName': 'Penile adenocarcinoma'
        }],
        'assignmentReason': 'The patient was selected for this because it matched identifier COSM12345.'
      },
      {
        'patientSequenceNumber': '12340',
        'treatmentArmVersion': '2017-03-12',
        'assignmentStatusOutcome': 'OFF_TRIAL_NOT_CONSENTED',
        'analysisId': 'MSN25049_v2_91f2766b-dd32-471d-9e83-8eefbce3719d',
        'assignmentReportId': 0,
        'dateSelected': '2017-06-12 18:54:48.608332',
        'dateOnArm': '2017-07-12 18:54:48.608332',
        'dateOffArm': null,
        'timeOnArm': 314235,
        'stepNumber': '1',
        'diseases': [{
          'meddraCode': '90600236',
          'ctepCategory': 'Reproductive System Neoplasm, Male',
          'ctepSubCategory': 'Penile Cancer',
          'ctepTerm': 'Penile adenocarcinoma',
          'shortName': 'Penile adenocarcinoma'
        }],
        'assignmentReason': 'The patient was selected for this because it matched identifier COSM12345.'
      },
      {
        'patientSequenceNumber': '12340',
        'treatmentArmVersion': '2017-03-12',
        'assignmentStatusOutcome': 'FORMERLY_ON_ARM_OFF_TRIAL',
        'analysisId': 'MSN25049_v2_91f2766b-dd32-471d-9e83-8eefbce3719d',
        'assignmentReportId': 0,
        'dateSelected': '2017-06-12 18:54:48.608332',
        'dateOnArm': '2017-07-12 18:54:48.608332',
        'dateOffArm': null,
        'timeOnArm': 314235,
        'stepNumber': '1',
        'diseases': [{
          'meddraCode': '90600236',
          'ctepCategory': 'Reproductive System Neoplasm, Male',
          'ctepSubCategory': 'Penile Cancer',
          'ctepTerm': 'Penile adenocarcinoma',
          'shortName': 'Neuroendocrine cancer, NOS'
        }],
        'assignmentReason': 'The patient was selected for this because it matched identifier COSM12345.'
      },
      {
        'patientSequenceNumber': '12340',
        'treatmentArmVersion': '2017-03-12',
        'assignmentStatusOutcome': 'FORMERLY_ON_ARM_OFF_TRIAL',
        'analysisId': 'MSN25049_v2_91f2766b-dd32-471d-9e83-8eefbce3719d',
        'assignmentReportId': 0,
        'dateSelected': '2017-06-12 18:54:48.608332',
        'dateOnArm': '2017-07-12 18:54:48.608332',
        'dateOffArm': null,
        'timeOnArm': 314235,
        'stepNumber': '1',
        'diseases': [{
          'meddraCode': '90600236',
          'ctepCategory': 'Reproductive System Neoplasm, Male',
          'ctepSubCategory': 'Penile Cancer',
          'ctepTerm': 'Penile adenocarcinoma',
          'shortName': 'Neuroendocrine cancer, NOS'
        }],
        'assignmentReason': 'The patient was selected for this because it matched identifier COSM12345.'
      },
      {
        'patientSequenceNumber': '12340',
        'treatmentArmVersion': '2017-03-12',
        'assignmentStatusOutcome': 'ON_TREATMENT_ARM',
        'analysisId': 'MSN25049_v2_91f2766b-dd32-471d-9e83-8eefbce3719d',
        'assignmentReportId': 0,
        'dateSelected': '2017-06-12 18:54:48.608332',
        'dateOnArm': '2017-07-12 18:54:48.608332',
        'dateOffArm': null,
        'timeOnArm': 314235,
        'stepNumber': '1',
        'diseases': [{
          'meddraCode': '90600236',
          'ctepCategory': 'Reproductive System Neoplasm, Male',
          'ctepSubCategory': 'Penile Cancer',
          'ctepTerm': 'Penile adenocarcinoma',
          'shortName': 'Lung adenocarcinoma'
        }],
        'assignmentReason': 'The patient was selected for this because it matched identifier COSM12345.'
      },
      {
        'patientSequenceNumber': '12340',
        'treatmentArmVersion': '2017-03-12',
        'assignmentStatusOutcome': 'ON_TREATMENT_ARM',
        'analysisId': 'MSN25049_v2_91f2766b-dd32-471d-9e83-8eefbce3719d',
        'assignmentReportId': 0,
        'dateSelected': '2017-06-12 18:54:48.608332',
        'dateOnArm': '2017-07-12 18:54:48.608332',
        'dateOffArm': null,
        'timeOnArm': 314235,
        'stepNumber': '1',
        'diseases': [{
          'meddraCode': '90600236',
          'ctepCategory': 'Reproductive System Neoplasm, Male',
          'ctepSubCategory': 'Penile Cancer',
          'ctepTerm': 'Penile adenocarcinoma',
          'shortName': 'Neuroendocrine cancer, NOS'
        }],
        'assignmentReason': 'The patient was selected for this because it matched identifier COSM12345.'
      },
      {
        'patientSequenceNumber': '12340',
        'treatmentArmVersion': '2017-03-12',
        'assignmentStatusOutcome': 'PENDING_APPROVAL',
        'analysisId': 'MSN25049_v2_91f2766b-dd32-471d-9e83-8eefbce3719d',
        'assignmentReportId': 0,
        'dateSelected': '2017-06-12 18:54:48.608332',
        'dateOnArm': '2017-07-12 18:54:48.608332',
        'dateOffArm': null,
        'timeOnArm': 314235,
        'stepNumber': '1',
        'diseases': [{
          'meddraCode': '90600236',
          'ctepCategory': 'Reproductive System Neoplasm, Male',
          'ctepSubCategory': 'Penile Cancer',
          'ctepTerm': 'Penile adenocarcinoma',
          'shortName': 'Penile adenocarcinoma'
        }],
        'assignmentReason': 'The patient was selected for this because it matched identifier COSM12345.'
      }]
    },
    'targetId': '#REF!',
    'targetName': 'Ado-trastuzumab Emtansine',
    'treatmentArmDrugs': [{
      'drugId': '780263',
      'name': 'Ado-trastuzumab Emtansine',
      'pathway': 'HER2'
    }],
    'treatmentArmStatus': 'CLOSED',
    'treatmentArmId': 'EAY131-Q',
    'variantReport': {
      'copyNumberVariants': [{
        'armSpecific': false,
        'chromosome': 'chr17',
        'confidenceInterval5percent': 0,
        'confidenceInterval95percent': 0,
        'confirmed': false,
        'copyNumber': 0,
        'description': 'ERBB2 Amplification',
        'geneName': 'ERBB2',
        'identifier': 'ERBB2',
        'inclusion': true,
        'levelOfEvidence': 1,
        'position': '37856492',
        'publicMedIds': [
          '3798106'
        ],
        'rare': false,
        'rawCopyNumber': 0,
        'refCopyNumber': 0
      }],
      'geneFusions': [{ 'identifier': 'identifier-test', inclusion: true }, { 'identifier': 'identifier-test', inclusion: false }],
      'indels': ['test'],
      'nonHotspotRules': ['test'],
      'singleNucleotideVariants': ['test'],
      'unifiedGeneFusions': ['test']
    },
    'version': '2016-05-31'
  }]
}
// versionData: data[0],
// details: data[1]

export function main() {
  describe('treatment arms details component', () => {


    let config: any[] = [
      { path: 'treatments/details/:id/:version', component: TreatmentArmDetailsComponent },
      { path: 'treatmentsdetails/:id/:version', component: TreatmentArmDetailsComponent }
    ];
    // inject([MockBackend], (mockBackend: MockBackend)
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule.withRoutes(config),
          DirectivesModule,
          PipesModule,
          FormsModule,
          DataTableModule,
          ChartsModule,
          SharedModule,
          TabsModule.forRoot()
        ],
        declarations: [TreatmentArmDetailsComponent],
        providers: [
          { provide: TreatmentArmApiService, useClass: MockTADApiService },
          {
            provide: ActivatedRoute, useValue: {
              snapshot: {
                params: {
                  id: 'EAY131-F',
                  version: '2016-05-31'
                },
                data: {
                  data: ta_resolved_data
                }
              }
            }
          },
        ]
      });

      spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify({ 'roles': ['MOCHA_VARIANT_REPORT_REVIEWER'] }));
    });

    it('should work by calling ngOnInit',
      async((done: any) => {
        let id: string = 'EAY131-F';
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(TreatmentArmDetailsComponent);
            fixture.componentInstance.ngOnInit();
            expect(fixture.componentInstance).toBeDefined();
            fixture.componentInstance.getVersionsData(id);
            expect(fixture.componentInstance.versionData).toBe('EAY131-F');

          });
      }));

    it('should test setVersionIndex',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(TreatmentArmDetailsComponent);
            fixture.componentInstance.setVersionIndex(0);
            expect(fixture.componentInstance).toBeDefined();
            expect(fixture.componentInstance.versionIndex).toBe(0);
          });
      }));

    it('should test getDetailData',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(TreatmentArmDetailsComponent);

            let temp: any = PatientApiServiceStub.treatmentArmData();
            fixture.componentInstance.getDetailsData(temp);
            expect(fixture.componentInstance).toBeDefined();
            expect(fixture.componentInstance.tableData).toBeDefined();
            expect(fixture.componentInstance.tableData[0].description).toBe('TDM1 in HER2 amplification')
          });
      }));
  });
}

class MockTADApiServiceError {
  getPreviousTreatmentArmDetails(): Observable<any> {
    return Observable.throw('error');
  }
  getTreatmentArmDetails(): Observable<any> {
    return Observable.throw('error');
  }
  getTreatmentArmVersions(): Observable<any> {
    return Observable.throw('error');
  }
  getTreatmentArmList(): Observable<any> {
    return Observable.throw('error');
  }
}

class MockTADApiService {
  getPreviousTreatmentArmDetails(): Observable<any> {
    let testdata = [{
      '_class': 'gov.match.model.TreatmentArm',
      '_id': {
        '$oid': '5925b1e751fa87a5c729d017'
      },
      'assayResults': ['test'],
      'dateArchived': {
        'test': 'test'
      },
      'dateCreated': {
        '$date': 1465225012704
      },
      'description': 'TDM1 in HER2 amplification',
      'exclusionDiseases': [{
        '_id': '10021980',
        'ctepCategory': 'Breast Cancer - Invasive',
        'shortName': 'Inflammatory breast carcinoma'
      },
      {
        '_id': '10006190',
        'ctepCategory': 'Breast Cancer - Invasive',
        'shortName': 'Invasive breast carcinoma'
      },
      {
        '_id': '10066354',
        'ctepCategory': 'Gastroesophageal Cancer',
        'shortName': 'Adenocarcinoma - GEJ'
      },
      {
        '_id': '10053130',
        'ctepCategory': 'Breast Cancer - Invasive',
        'shortName': 'Cystosarcoma phylloides - breast'
      },
      {
        '_id': '10006285',
        'ctepCategory': 'Breast Neoplasm - Misc',
        'shortName': 'Breast cancer, NOS'
      },
      {
        '_id': '10001150',
        'ctepCategory': 'Gastroesophageal Cancer',
        'shortName': 'Adenocarcinoma - stomach'
      }
      ],
      'exclusionDrugs': [{
        'drugs': [{
          'drugId': '780263',
          'name': 'TDM1 (Ado-trastuzumab emtansine)'
        }]
      },
      {
        'drugs': [{
          'drugId': '',
          'name': 'Trastuzumab'
        }]
      },
      {
        'drugs': [{
          'drugId': '',
          'name': 'Pertuzumab'
        }]
      },
      {
        'drugs': [{
          'drugId': '',
          'name': 'Margetuximab'
        }]
      },
      {
        'drugs': [{
          'drugId': '',
          'name': 'PF-05280014 (Pfizer, Trastuzumab Biosimilar)'
        }]
      },
      {
        'drugs': [{
          'drugId': '',
          'name': 'CT-P6 (Celltrion, Trastuzumab Biosimilar)'
        }]
      },
      {
        'drugs': [{
          'drugId': '',
          'name': 'ABP-980 (Amgen, Trastuzumab Biosimilar)'
        }]
      }
      ],
      'gene': 'HER2',
      'maxPatientsAllowed': 35,
      'name': 'TDM1 in HER2 Amplification',
      'numPatientsAssigned': 35,
      'stateToken': {
        '$uuid': 'a52329ec664a4d1e98341f19aefd120c'
      },
      'statusLog': [
        {
          'date': '1488461537494',
          'status': 'PENDING'
        },
        {
          'date': '1488461581',
          'status': 'OPEN'
        },
        {
          'date': '1488461581910',
          'status': 'READY'
        }
      ],
      'summaryReport': {
        'numCurrentPatientOnArm': 1,
        'numFormerPatients': 0,
        'numPendingArmApproval': 0,
        'numNotEnrolledPatient': 0,
        'assignmentRecords': [{
          'patientSequenceNumber': '12340',
          'treatmentArmVersion': '2017-03-12',
          'assignmentStatusOutcome': 'ON_TREATMENT_ARM',
          'analysisId': 'MSN25049_v2_91f2766b-dd32-471d-9e83-8eefbce3719d',
          'assignmentReportId': 0,
          'dateSelected': '2017-06-12 18:54:48.608332',
          'dateOnArm': '2017-07-12 18:54:48.608332',
          'dateOffArm': 'test',
          'timeOnArm': 314235,
          'stepNumber': '1',
          'diseases': [{
            'meddraCode': '90600236',
            'ctepCategory': 'Reproductive System Neoplasm, Male',
            'ctepSubCategory': 'Penile Cancer',
            'ctepTerm': 'Penile adenocarcinoma',
            'shortName': 'Penile adenocarcinoma'
          }],
          'assignmentReason': 'The patient was selected for this because it matched identifier COSM12345.'
        },
        {
          'patientSequenceNumber': '12340',
          'treatmentArmVersion': '2017-03-12',
          'assignmentStatusOutcome': 'OFF_TRIAL_NOT_CONSENTED',
          'analysisId': 'MSN25049_v2_91f2766b-dd32-471d-9e83-8eefbce3719d',
          'assignmentReportId': 0,
          'dateSelected': '2017-06-12 18:54:48.608332',
          'dateOnArm': '2017-07-12 18:54:48.608332',
          'dateOffArm': null,
          'timeOnArm': 314235,
          'stepNumber': '1',
          'diseases': [{
            'meddraCode': '90600236',
            'ctepCategory': 'Reproductive System Neoplasm, Male',
            'ctepSubCategory': 'Penile Cancer',
            'ctepTerm': 'Penile adenocarcinoma',
            'shortName': 'Penile adenocarcinoma'
          }],
          'assignmentReason': 'The patient was selected for this because it matched identifier COSM12345.'
        },
        {
          'patientSequenceNumber': '12340',
          'treatmentArmVersion': '2017-03-12',
          'assignmentStatusOutcome': 'FORMERLY_ON_ARM_OFF_TRIAL',
          'analysisId': 'MSN25049_v2_91f2766b-dd32-471d-9e83-8eefbce3719d',
          'assignmentReportId': 0,
          'dateSelected': '2017-06-12 18:54:48.608332',
          'dateOnArm': '2017-07-12 18:54:48.608332',
          'dateOffArm': null,
          'timeOnArm': 314235,
          'stepNumber': '1',
          'diseases': [{
            'meddraCode': '90600236',
            'ctepCategory': 'Reproductive System Neoplasm, Male',
            'ctepSubCategory': 'Penile Cancer',
            'ctepTerm': 'Penile adenocarcinoma',
            'shortName': 'Neuroendocrine cancer, NOS'
          }],
          'assignmentReason': 'The patient was selected for this because it matched identifier COSM12345.'
        },
        {
          'patientSequenceNumber': '12340',
          'treatmentArmVersion': '2017-03-12',
          'assignmentStatusOutcome': 'FORMERLY_ON_ARM_OFF_TRIAL',
          'analysisId': 'MSN25049_v2_91f2766b-dd32-471d-9e83-8eefbce3719d',
          'assignmentReportId': 0,
          'dateSelected': '2017-06-12 18:54:48.608332',
          'dateOnArm': '2017-07-12 18:54:48.608332',
          'dateOffArm': null,
          'timeOnArm': 314235,
          'stepNumber': '1',
          'diseases': [{
            'meddraCode': '90600236',
            'ctepCategory': 'Reproductive System Neoplasm, Male',
            'ctepSubCategory': 'Penile Cancer',
            'ctepTerm': 'Penile adenocarcinoma',
            'shortName': 'Neuroendocrine cancer, NOS'
          }],
          'assignmentReason': 'The patient was selected for this because it matched identifier COSM12345.'
        },
        {
          'patientSequenceNumber': '12340',
          'treatmentArmVersion': '2017-03-12',
          'assignmentStatusOutcome': 'ON_TREATMENT_ARM',
          'analysisId': 'MSN25049_v2_91f2766b-dd32-471d-9e83-8eefbce3719d',
          'assignmentReportId': 0,
          'dateSelected': '2017-06-12 18:54:48.608332',
          'dateOnArm': '2017-07-12 18:54:48.608332',
          'dateOffArm': null,
          'timeOnArm': 314235,
          'stepNumber': '1',
          'diseases': [{
            'meddraCode': '90600236',
            'ctepCategory': 'Reproductive System Neoplasm, Male',
            'ctepSubCategory': 'Penile Cancer',
            'ctepTerm': 'Penile adenocarcinoma',
            'shortName': 'Lung adenocarcinoma'
          }],
          'assignmentReason': 'The patient was selected for this because it matched identifier COSM12345.'
        },
        {
          'patientSequenceNumber': '12340',
          'treatmentArmVersion': '2017-03-12',
          'assignmentStatusOutcome': 'ON_TREATMENT_ARM',
          'analysisId': 'MSN25049_v2_91f2766b-dd32-471d-9e83-8eefbce3719d',
          'assignmentReportId': 0,
          'dateSelected': '2017-06-12 18:54:48.608332',
          'dateOnArm': '2017-07-12 18:54:48.608332',
          'dateOffArm': null,
          'timeOnArm': 314235,
          'stepNumber': '1',
          'diseases': [{
            'meddraCode': '90600236',
            'ctepCategory': 'Reproductive System Neoplasm, Male',
            'ctepSubCategory': 'Penile Cancer',
            'ctepTerm': 'Penile adenocarcinoma',
            'shortName': 'Neuroendocrine cancer, NOS'
          }],
          'assignmentReason': 'The patient was selected for this because it matched identifier COSM12345.'
        },
        {
          'patientSequenceNumber': '12340',
          'treatmentArmVersion': '2017-03-12',
          'assignmentStatusOutcome': 'PENDING_APPROVAL',
          'analysisId': 'MSN25049_v2_91f2766b-dd32-471d-9e83-8eefbce3719d',
          'assignmentReportId': 0,
          'dateSelected': '2017-06-12 18:54:48.608332',
          'dateOnArm': '2017-07-12 18:54:48.608332',
          'dateOffArm': null,
          'timeOnArm': 314235,
          'stepNumber': '1',
          'diseases': [{
            'meddraCode': '90600236',
            'ctepCategory': 'Reproductive System Neoplasm, Male',
            'ctepSubCategory': 'Penile Cancer',
            'ctepTerm': 'Penile adenocarcinoma',
            'shortName': 'Penile adenocarcinoma'
          }],
          'assignmentReason': 'The patient was selected for this because it matched identifier COSM12345.'
        }]
      },
      'targetId': '#REF!',
      'targetName': 'Ado-trastuzumab Emtansine',
      'treatmentArmDrugs': [{
        'drugId': '780263',
        'name': 'Ado-trastuzumab Emtansine',
        'pathway': 'HER2'
      }],
      'treatmentArmStatus': 'CLOSED',
      'treatmentArmId': 'EAY131-Q',
      'variantReport': {
        'copyNumberVariants': [{
          'armSpecific': false,
          'chromosome': 'chr17',
          'confidenceInterval5percent': 0,
          'confidenceInterval95percent': 0,
          'confirmed': false,
          'copyNumber': 0,
          'description': 'ERBB2 Amplification',
          'geneName': 'ERBB2',
          'identifier': 'ERBB2',
          'inclusion': true,
          'levelOfEvidence': 1,
          'position': '37856492',
          'publicMedIds': [
            '3798106'
          ],
          'rare': false,
          'rawCopyNumber': 0,
          'refCopyNumber': 0
        }],
        'geneFusions': [{ 'identifier': 'identifier-test', inclusion: true }, { 'identifier': 'identifier-test', inclusion: false }],
        'indels': ['test'],
        'nonHotspotRules': ['test'],
        'singleNucleotideVariants': ['test'],
        'unifiedGeneFusions': ['test']
      },
      'version': '2016-05-31'
    }]

    return Observable.of(testdata);
  }
  getTreatmentArmDetails(): Observable<any> {
    return Observable.of(ta_resolved_data.details);
  }
  getTreatmentArmVersions(): Observable<any> {
    return Observable.of(ta_resolved_data.versionData);
  }
  getTreatmentArmList(): Observable<any> {
    let testdata = [{
      date_molecular_id_created: '2-12-2016',
      date_variant_received: '2-12-2016',
    }];
    return Observable.of(testdata);
  }
}
