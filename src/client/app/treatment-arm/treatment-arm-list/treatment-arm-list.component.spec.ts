// import { Component } from '@angular/core';
import {
  async,
  TestBed,
  ComponentFixture,
  tick,
  fakeAsync,
  inject
} from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from '../../shared/datatables/index';
import { TreatmentArmListComponent } from './treatment-arm-list.component';
import { TreatmentArmApiService } from './../treatment-arm-api.service';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { PipesModule } from './../../shared/pipes/pipes.module';
import { DirectivesModule } from './../../shared/directives/directives.module';
import { GmtPipe } from './../../shared/pipes/gmt.pipe';
import { SharedModule } from '../../shared/shared.module';
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

import { ChartsModule } from 'ng2-charts/ng2-charts';

let ta_list_data = {
  data: [
    [
      {
        date_molecular_id_created: '2-12-2016',
        date_variant_received: '2-12-2016',
        dateCreated: '2-12-2016',
      }
    ]
  ]
};

export function main() {
  describe('treatment arms list component', () => {

    let component: TreatmentArmListComponent;
    let fixture: ComponentFixture<TreatmentArmListComponent>;

    let config: any[] = [
      { path: 'treatments/details/:id/:version', component: 'TreatmentArmListComponent' },
      { path: 'treatmentsdetails/:id/:version', component: TreatmentArmListComponent }
    ];
    // inject([MockBackend], (mockBackend: MockBackend)
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule.withRoutes(config),
          DirectivesModule,
          PipesModule,
          FormsModule,
          SharedModule,
          DataTableModule,
          ChartsModule],
        declarations: [TreatmentArmListComponent],
        providers: [
          { provide: TreatmentArmApiService, useClass: MockTAListApiService },
          {
            provide: ActivatedRoute, useValue: {
              snapshot: {
                params:
                  {
                    id: 'EAY131-F',
                    version: '2016-05-31'
                  },
                data: ta_list_data
              }
            }
          },
        ]
      });
      spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify({ 'roles': ['MOCHA_VARIANT_REPORT_REVIEWER'] }));
    });

    it('should work by calling Treatment Arm List --> ngOnInit',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(TreatmentArmListComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(TreatmentArmListComponent);
            fixture.componentInstance.ngOnInit();
            fixture.componentInstance.gmt = new GmtPipe();
            expect(fixture.componentInstance).toBeDefined();
          });
      }));

  });

  describe('treatment arms list component', () => {

    let config: any[] = [
      { path: 'treatments/details/:id/:version', component: TreatmentArmListComponent },
      { path: 'treatmentsdetails/:id/:version', component: TreatmentArmListComponent }
    ];
    // inject([MockBackend], (mockBackend: MockBackend)
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule.withRoutes(config),
          DirectivesModule,
          PipesModule,
          FormsModule,
          SharedModule,
          DataTableModule,
          ChartsModule],
        declarations: [TreatmentArmListComponent],
        providers: [
          { provide: TreatmentArmApiService, useClass: MockTAListApiServiceError },
          {
            provide: ActivatedRoute, useValue: {
              snapshot: {
                params: {
                  id: 'EAY131-F',
                  version: '2016-05-31'
                },
                data: ta_list_data
              }
            }
          },
        ]
      });

      spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify({ 'roles': ['MOCHA_VARIANT_REPORT_REVIEWER'] }));
    });

    xit('should work by calling ngOnInit',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(TreatmentArmListComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(TreatmentArmListComponent);
            fixture.componentInstance.ngOnInit();
          });
      }));

  });
}

class MockTAListApiServiceError {
  getTreatmentArmList(): Observable<any> {
    let testdata = [
      {
        date_molecular_id_created: '2-12-2016',
        date_variant_received: '2-12-2016',
      }
    ];
    return Observable.throw(testdata);
  }
}


class MockTAListApiService {
  getPreviousTreatmentArmDetails(): Observable<any> {
    let testdata = [
      {
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
        'exclusionDiseases': [
          {
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
        'exclusionDrugs': [
          {
            'drugs': [
              {
                'drugId': '780263',
                'name': 'TDM1 (Ado-trastuzumab emtansine)'
              }
            ]
          },
          {
            'drugs': [
              {
                'drugId': '',
                'name': 'Trastuzumab'
              }
            ]
          },
          {
            'drugs': [
              {
                'drugId': '',
                'name': 'Pertuzumab'
              }
            ]
          },
          {
            'drugs': [
              {
                'drugId': '',
                'name': 'Margetuximab'
              }
            ]
          },
          {
            'drugs': [
              {
                'drugId': '',
                'name': 'PF-05280014 (Pfizer, Trastuzumab Biosimilar)'
              }
            ]
          },
          {
            'drugs': [
              {
                'drugId': '',
                'name': 'CT-P6 (Celltrion, Trastuzumab Biosimilar)'
              }
            ]
          },
          {
            'drugs': [
              {
                'drugId': '',
                'name': 'ABP-980 (Amgen, Trastuzumab Biosimilar)'
              }
            ]
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
          'assignmentRecords': [
            {
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
              'disease': {
                'meddraCode': '90600236',
                'ctepCategory': 'Reproductive System Neoplasm, Male',
                'ctepSubCategory': 'Penile Cancer',
                'ctepTerm': 'Penile adenocarcinoma',
                'shortName': 'Penile adenocarcinoma'
              },
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
              'dateOffArm': 'test',
              'timeOnArm': 314235,
              'stepNumber': '1',
              'disease': {
                'meddraCode': '90600236',
                'ctepCategory': 'Reproductive System Neoplasm, Male',
                'ctepSubCategory': 'Penile Cancer',
                'ctepTerm': 'Penile adenocarcinoma',
                'shortName': 'Penile adenocarcinoma'
              },
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
              'dateOffArm': 'test',
              'timeOnArm': 314235,
              'stepNumber': '1',
              'disease': {
                'meddraCode': '90600236',
                'ctepCategory': 'Reproductive System Neoplasm, Male',
                'ctepSubCategory': 'Penile Cancer',
                'ctepTerm': 'Penile adenocarcinoma',
                'shortName': 'Neuroendocrine cancer, NOS'
              },
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
              'dateOffArm': 'test',
              'timeOnArm': 314235,
              'stepNumber': '1',
              'disease': {
                'meddraCode': '90600236',
                'ctepCategory': 'Reproductive System Neoplasm, Male',
                'ctepSubCategory': 'Penile Cancer',
                'ctepTerm': 'Penile adenocarcinoma',
                'shortName': 'Neuroendocrine cancer, NOS'
              },
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
              'dateOffArm': 'test',
              'timeOnArm': 314235,
              'stepNumber': '1',
              'disease': {
                'meddraCode': '90600236',
                'ctepCategory': 'Reproductive System Neoplasm, Male',
                'ctepSubCategory': 'Penile Cancer',
                'ctepTerm': 'Penile adenocarcinoma',
                'shortName': 'Lung adenocarcinoma'
              },
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
              'dateOffArm': 'test',
              'timeOnArm': 314235,
              'stepNumber': '1',
              'disease': {
                'meddraCode': '90600236',
                'ctepCategory': 'Reproductive System Neoplasm, Male',
                'ctepSubCategory': 'Penile Cancer',
                'ctepTerm': 'Penile adenocarcinoma',
                'shortName': 'Neuroendocrine cancer, NOS'
              },
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
              'dateOffArm': 'test',
              'timeOnArm': 314235,
              'stepNumber': '1',
              'disease': {
                'meddraCode': '90600236',
                'ctepCategory': 'Reproductive System Neoplasm, Male',
                'ctepSubCategory': 'Penile Cancer',
                'ctepTerm': 'Penile adenocarcinoma',
                'shortName': 'Penile adenocarcinoma'
              },
              'assignmentReason': 'The patient was selected for this because it matched identifier COSM12345.'
            }
          ]
        },
        'targetId': '#REF!',
        'targetName': 'Ado-trastuzumab Emtansine',
        'treatmentArmDrugs': [
          {
            'drugId': '780263',
            'name': 'Ado-trastuzumab Emtansine',
            'pathway': 'HER2'
          }
        ],
        'treatmentArmStatus': 'CLOSED',
        'treatmentArmId': 'EAY131-Q',
        'variantReport': {
          'copyNumberVariants': [
            {
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
            }
          ],
          'geneFusions': ['test'],
          'indels': ['test'],
          'nonHotspotRules': ['test'],
          'singleNucleotideVariants': ['test'],
          'unifiedGeneFusions': ['test']
        },
        'version': '2016-05-31'
      }
    ];

    return Observable.of(testdata);
  }
  getTreatmentArmDetails(): Observable<any> {
    let testdata = [
      {
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
        'exclusionDiseases': [
          {
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
        'exclusionDrugs': [
          {
            'drugs': [
              {
                'drugId': '780263',
                'name': 'TDM1 (Ado-trastuzumab emtansine)'
              }
            ]
          },
          {
            'drugs': [
              {
                'drugId': '',
                'name': 'Trastuzumab'
              }
            ]
          },
          {
            'drugs': [
              {
                'drugId': '',
                'name': 'Pertuzumab'
              }
            ]
          },
          {
            'drugs': [
              {
                'drugId': '',
                'name': 'Margetuximab'
              }
            ]
          },
          {
            'drugs': [
              {
                'drugId': '',
                'name': 'PF-05280014 (Pfizer, Trastuzumab Biosimilar)'
              }
            ]
          },
          {
            'drugs': [
              {
                'drugId': '',
                'name': 'CT-P6 (Celltrion, Trastuzumab Biosimilar)'
              }
            ]
          },
          {
            'drugs': [
              {
                'drugId': '',
                'name': 'ABP-980 (Amgen, Trastuzumab Biosimilar)'
              }
            ]
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
          'assignmentRecords': [
            {
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
              'disease': {
                'meddraCode': '90600236',
                'ctepCategory': 'Reproductive System Neoplasm, Male',
                'ctepSubCategory': 'Penile Cancer',
                'ctepTerm': 'Penile adenocarcinoma',
                'shortName': 'Penile adenocarcinoma'
              },
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
              'dateOffArm': 'test',
              'timeOnArm': 314235,
              'stepNumber': '1',
              'disease': {
                'meddraCode': '90600236',
                'ctepCategory': 'Reproductive System Neoplasm, Male',
                'ctepSubCategory': 'Penile Cancer',
                'ctepTerm': 'Penile adenocarcinoma',
                'shortName': 'Penile adenocarcinoma'
              },
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
              'dateOffArm': 'test',
              'timeOnArm': 314235,
              'stepNumber': '1',
              'disease': {
                'meddraCode': '90600236',
                'ctepCategory': 'Reproductive System Neoplasm, Male',
                'ctepSubCategory': 'Penile Cancer',
                'ctepTerm': 'Penile adenocarcinoma',
                'shortName': 'Neuroendocrine cancer, NOS'
              },
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
              'dateOffArm': 'test',
              'timeOnArm': 314235,
              'stepNumber': '1',
              'disease': {
                'meddraCode': '90600236',
                'ctepCategory': 'Reproductive System Neoplasm, Male',
                'ctepSubCategory': 'Penile Cancer',
                'ctepTerm': 'Penile adenocarcinoma',
                'shortName': 'Neuroendocrine cancer, NOS'
              },
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
              'dateOffArm': 'test',
              'timeOnArm': 314235,
              'stepNumber': '1',
              'disease': {
                'meddraCode': '90600236',
                'ctepCategory': 'Reproductive System Neoplasm, Male',
                'ctepSubCategory': 'Penile Cancer',
                'ctepTerm': 'Penile adenocarcinoma',
                'shortName': 'Lung adenocarcinoma'
              },
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
              'dateOffArm': 'test',
              'timeOnArm': 314235,
              'stepNumber': '1',
              'disease': {
                'meddraCode': '90600236',
                'ctepCategory': 'Reproductive System Neoplasm, Male',
                'ctepSubCategory': 'Penile Cancer',
                'ctepTerm': 'Penile adenocarcinoma',
                'shortName': 'Neuroendocrine cancer, NOS'
              },
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
              'dateOffArm': 'test',
              'timeOnArm': 314235,
              'stepNumber': '1',
              'disease': {
                'meddraCode': '90600236',
                'ctepCategory': 'Reproductive System Neoplasm, Male',
                'ctepSubCategory': 'Penile Cancer',
                'ctepTerm': 'Penile adenocarcinoma',
                'shortName': 'Penile adenocarcinoma'
              },
              'assignmentReason': 'The patient was selected for this because it matched identifier COSM12345.'
            }
          ]
        },
        'targetId': '#REF!',
        'targetName': 'Ado-trastuzumab Emtansine',
        'treatmentArmDrugs': [
          {
            'drugId': '780263',
            'name': 'Ado-trastuzumab Emtansine',
            'pathway': 'HER2'
          }
        ],
        'treatmentArmStatus': 'CLOSED',
        'treatmentArmId': 'EAY131-Q',
        'variantReport': {
          'copyNumberVariants': [
            {
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
            }
          ],
          'geneFusions': ['test'],
          'indels': ['test'],
          'nonHotspotRules': ['test'],
          'singleNucleotideVariants': ['test'],
          'unifiedGeneFusions': ['test']
        },
        'version': '2016-05-31'
      }
    ];

    return Observable.of(testdata);
  }
  getTreatmentArmVersions(): Observable<any> {
    let testdata = [
      {
        'dateArchived': 'test',
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
    ];
    return Observable.of(testdata);
  }
  getTreatmentArmList(): Observable<any> {
    let testdata = [
      {
        'name': 'CukeTest-1034',
        'version': '2015-08-06',
        'treatmentArmStatus': 'OPEN',
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
        'dateCreated': {
          '$date': 1488461537494
        },
        'treatmentArmId': 'CukeTest-1034',
        'summaryReport': {
          'numCurrentPatientsOnArm': 0,
          'numFormerPatients': 0,
          'numPendingArmApproval': 0,
          'numNotEnrolledPatient': 0,
          'assignmentRecords': ['']
        }
      },
      {
        'name': 'CukeTest-1034',
        'version': '2015-08-06',
        'treatmentArmStatus': 'OPEN',
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
            'status': 'CLOSED'
          }
        ],
        'dateCreated': {
          '$date': 1488461537494
        },
        'treatmentArmId': 'CukeTest-1034',
        'summaryReport': {
          'numCurrentPatientsOnArm': 0,
          'numFormerPatients': 0,
          'numPendingArmApproval': 0,
          'numNotEnrolledPatient': 0,
          'assignmentRecords': ['']
        }
      }
    ];
    return Observable.of(testdata);
  }
}
