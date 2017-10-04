import {
  async,
  TestBed,
  ComponentFixture
} from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { RouterTestingModule } from '@angular/router/testing';
import { DirectivesModule } from './../shared/directives/directives.module';
import { PipesModule } from './../shared/pipes/pipes.module';
import { DataTableModule } from './../shared/datatables/DataTableModule';
import { DashboardComponent } from './dashboard.component';
import { DashboardApiService } from './dashboard-api.service';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { PatientApiServiceStub, PatientApiServiceMock } from './../patient/testing/patient-api-service-stub';


let dashboard_data = {
  data: {
    AR: [{
      "analysisId": "job-1031",
      "biopsySequenceNumber": "bsn-1031",
      "dateAssigned": {
        "$date": 1488461903558
      },
      "hoursPending": 4486,
      "molecularSequenceNumber": "msn-1031",
      "patientSequenceNumber": "1031",
      "treatmentArmId": "rejoinTest6",
      "treatmentArmVersion": "2016-02-01"
    },
    {
      "analysisId": "JOB-105re",
      "biopsySequenceNumber": "bsn-105re",
      "dateAssigned": {
        "$date": 1488462008463
      },
      "hoursPending": 4486,
      "molecularSequenceNumber": "MSN-105re",
      "patientSequenceNumber": "105re"
    },
    {
      "analysisId": "job-160",
      "biopsySequenceNumber": "bsn-160re",
      "dateAssigned": {
        "$date": 1489416149287
      },
      "hoursPending": 4221,
      "molecularSequenceNumber": "msn-160re",
      "patientSequenceNumber": "160re",
      "treatmentArmId": "EAY131-F",
      "treatmentArmVersion": "2015-08-06"
    }
    ],
    VR: [{
      "analysisId": "JOB-1001re",
      "biopsySequenceNumber": "BSN-1001re",
      "dateVariantReportReceived": {
        "$date": 1488461755274
      },
      "daysPending": 186,
      "location": "Boston",
      "molecularSequenceNumber": "MSN-1001re",
      "patientSequenceNumber": "1001re",
      "specimenReceivedDate": {
        "$date": 1488461754675
      }
    },
    {
      "analysisId": "ee53b98a-45e8-4208-a66f-50b7183a7ddb",
      "biopsySequenceNumber": "CARIS-case1",
      "dateVariantReportReceived": {
        "$date": 1503348596194
      },
      "daysPending": 14,
      "location": "CARIS",
      "molecularSequenceNumber": "0d082b74-5970-4987-9118-f1a0501b740e",
      "patientSequenceNumber": "1121",
      "specimenReceivedDate": {
        "$date": 1503348596146
      }
    }
    ],
    PatientsAwaiting: [{
      "psn": "11767",
      "currentStatus": "T-16-001089",
      "message": "MSN20818",
      "amoi": false,
      "daysWaiting": "2016-09-16T15:10:53.241Z"
    },
    {
      "psn": "14549",
      "currentStatus": "T-17-000618",
      "message": "MSN43786",
      "amoi": false,
      "daysWaiting": "2017-02-10T22:51:12.316Z"
    }
    ],
    OverviewTa: {
      "CLOSED": 1,
      "OPEN": 94,
      "PENDING": 9,
      "READY": 1,
      "TOTAL": 105
    },
    OverviewPatients: {
      "OFF_TRIAL": 2,
      "ON_TREATMENT_ARM": 4,
      "TOTAL": 238
    },
    OverviewBt: {
      "BIOPSY_SEQUENCES": 201,
      "MOLECULAR_SEQUENCES": 219,
      "TOTAL": 233
    }

  }
};

export function main() {
  describe('dashboard component', () => {

    let component: DashboardComponent;
    let fixture: ComponentFixture<DashboardComponent>;
    // Setting module for testing
    // Disable old forms

    let config: any[] = [
      { path: 'dashboard', component: 'DashboardComponent' }
    ];

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule.withRoutes(config),
          DirectivesModule,
          PipesModule,
          FormsModule,
          DataTableModule,
          SharedModule],
        declarations: [DashboardComponent],
        providers: [
          { provide: DashboardApiService, useClass: MockDashboardService },
          {
            provide: ActivatedRoute, useValue: {
              snapshot: {
                data: dashboard_data
              }
            }
          }
        ]
      });
    });

    it('should instantiate getDataAR',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(DashboardComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(DashboardComponent);
            console.log(fixture.componentInstance);
            let spy = spyOn(fixture.componentInstance, 'getDataAR');
            fixture.componentInstance.ngOnInit();
            expect(spy).toHaveBeenCalled();
          });
      }));

    it('should test getDataAR',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(DashboardComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(DashboardComponent);
            fixture.componentInstance.getDataAR();
            expect(fixture.componentInstance.tableARData[0].patientSequenceNumber).toEqual( '1031' );
            expect(fixture.componentInstance.tableARData[0].dateAssigned).toEqual('March 2, 2017 1:38 PM GMT');
          });
      }));

    it('should test getDataVR',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(DashboardComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(DashboardComponent);
            fixture.componentInstance.getDataVR();
            expect(fixture.componentInstance.tableVRData[0].patientSequenceNumber).toEqual( '1001re' );
            expect(fixture.componentInstance.tableVRData[0].analysisId).toEqual('JOB-1001re');
          });
      }));

    it('should test getDataPatientsAwaiting',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(DashboardComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(DashboardComponent);
            fixture.componentInstance.getDataPatientsAwaiting();
            expect(fixture.componentInstance.tablePatientsAwaitingData[0].outsideBiopsy.messages).not.toBe("");
          });
      }));

  });

  describe('dashboard component with error response', () => {

    let component: DashboardComponent;
    let fixture: ComponentFixture<DashboardComponent>;
    // Setting module for testing
    // Disable old form

    let config: any[] = [
      { path: 'dashboard', component: 'DashboardComponent' }
    ];

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule.withRoutes(config), DirectivesModule, PipesModule, FormsModule, DataTableModule],
        declarations: [DashboardComponent],
        providers: [
          { provide: DashboardApiService, useClass: MockDashboardServiceWithErrors },
          {
            provide: ActivatedRoute, useValue: {
              snapshot: {
                data: dashboard_data
              }
            }
          }
        ]
      });
    });

  });
}


class MockDashboardService {
  getDashboardAR(): Observable<any> {
    let testdata = [{"patientSequenceNumber":"1031","dateAssigned":{"$date":1488461903558},"biopsySequenceNumber":"bsn-1031","treatmentArmId":"rejoinTest6","treatmentArmVersion":"2016-02-01","hoursPending":5184,"molecularSequenceNumber":"msn-1031","analysisId":"job-1031"},{"patientSequenceNumber":"105re","dateAssigned":{"$date":1488462008463},"biopsySequenceNumber":"bsn-105re","hoursPending":5184,"molecularSequenceNumber":"MSN-105re","analysisId":"JOB-105re"},{"patientSequenceNumber":"106re","dateAssigned":{"$date":1488462027293},"biopsySequenceNumber":"BSN-106re","hoursPending":5184,"molecularSequenceNumber":"MSN-106re","analysisId":"JOB-106re"},{"patientSequenceNumber":"111re","dateAssigned":{"$date":1488462377826},"biopsySequenceNumber":"bsn-111re","hoursPending":5184,"molecularSequenceNumber":"msn-111re","analysisId":"job-111re"},{"patientSequenceNumber":"1055","dateAssigned":{"$date":1489181874843},"biopsySequenceNumber":"BSN-1055","treatmentArmId":"CukeTest-1055","treatmentArmVersion":"2015-08-06","hoursPending":4984,"molecularSequenceNumber":"MSN-1055","analysisId":"JOB-1055"},{"patientSequenceNumber":"1056","dateAssigned":{"$date":1489181898876},"biopsySequenceNumber":"BSN-1056","treatmentArmId":"CukeTest-1056","treatmentArmVersion":"2015-08-06","hoursPending":4984,"molecularSequenceNumber":"MSN-1056","analysisId":"JOB-1056"},{"patientSequenceNumber":"1057","dateAssigned":{"$date":1489181921727},"biopsySequenceNumber":"BSN-1057","treatmentArmId":"CukeTest-1057","treatmentArmVersion":"2015-08-06","hoursPending":4984,"molecularSequenceNumber":"MSN-1057","analysisId":"JOB-1057"},{"patientSequenceNumber":"1058","dateAssigned":{"$date":1489181950923},"biopsySequenceNumber":"BSN-1058","treatmentArmId":"CukeTest-1057","treatmentArmVersion":"2015-08-06","hoursPending":4984,"molecularSequenceNumber":"MSN-1058","analysisId":"JOB-1058"},{"patientSequenceNumber":"1059","dateAssigned":{"$date":1489181981085},"biopsySequenceNumber":"BSN-1059","treatmentArmId":"CukeTest-1057","treatmentArmVersion":"2015-08-06","hoursPending":4984,"molecularSequenceNumber":"MSN-1059","analysisId":"JOB-1059"},{"patientSequenceNumber":"1060","dateAssigned":{"$date":1489182013585},"biopsySequenceNumber":"BSN-1060","treatmentArmId":"CukeTest-1057","treatmentArmVersion":"2015-08-06","hoursPending":4984,"molecularSequenceNumber":"MSN-1060","analysisId":"JOB-1060"},{"patientSequenceNumber":"1061","dateAssigned":{"$date":1489182034862},"biopsySequenceNumber":"BSN-1061","treatmentArmId":"CukeTest-1057","treatmentArmVersion":"2015-08-06","hoursPending":4984,"molecularSequenceNumber":"MSN-1061","analysisId":"JOB-1061"},{"patientSequenceNumber":"1062","dateAssigned":{"$date":1489182057322},"biopsySequenceNumber":"BSN-1062","treatmentArmId":"CukeTest-1057","treatmentArmVersion":"2015-08-06","hoursPending":4984,"molecularSequenceNumber":"MSN-1062","analysisId":"JOB-1062"},{"patientSequenceNumber":"1063","dateAssigned":{"$date":1489182084100},"biopsySequenceNumber":"BSN-1063","treatmentArmId":"CukeTest-1078","treatmentArmVersion":"2015-08-06","hoursPending":4984,"molecularSequenceNumber":"MSN-1063","analysisId":"JOB-1063"},{"patientSequenceNumber":"1064","dateAssigned":{"$date":1489187046378},"biopsySequenceNumber":"BSN-1064","treatmentArmId":"CukeTest-1064","treatmentArmVersion":"2015-08-06","hoursPending":4983,"molecularSequenceNumber":"MSN-1064","analysisId":"JOB-1064"},{"patientSequenceNumber":"1065","dateAssigned":{"$date":1489187075335},"biopsySequenceNumber":"BSN-1065","treatmentArmId":"CukeTest-1065","treatmentArmVersion":"2015-08-06","hoursPending":4983,"molecularSequenceNumber":"MSN-1065","analysisId":"JOB-1065"},{"patientSequenceNumber":"1066","dateAssigned":{"$date":1489187103365},"biopsySequenceNumber":"BSN-1066","treatmentArmId":"CukeTest-1066","treatmentArmVersion":"2015-08-06","hoursPending":4983,"molecularSequenceNumber":"MSN-1066","analysisId":"JOB-1066"},{"patientSequenceNumber":"1067","dateAssigned":{"$date":1489187127209},"biopsySequenceNumber":"BSN-1067","treatmentArmId":"CukeTest-1066","treatmentArmVersion":"2015-08-06","hoursPending":4983,"molecularSequenceNumber":"MSN-1067","analysisId":"JOB-1067"},{"patientSequenceNumber":"1068","dateAssigned":{"$date":1489187152061},"biopsySequenceNumber":"BSN-1068","treatmentArmId":"CukeTest-1066","treatmentArmVersion":"2015-08-06","hoursPending":4983,"molecularSequenceNumber":"MSN-1068","analysisId":"JOB-1068"},{"patientSequenceNumber":"1069","dateAssigned":{"$date":1489187182158},"biopsySequenceNumber":"BSN-1069","treatmentArmId":"CukeTest-1066","treatmentArmVersion":"2015-08-06","hoursPending":4983,"molecularSequenceNumber":"MSN-1069","analysisId":"JOB-1069"},{"patientSequenceNumber":"1070","dateAssigned":{"$date":1489187213388},"biopsySequenceNumber":"BSN-1070","treatmentArmId":"CukeTest-1066","treatmentArmVersion":"2015-08-06","hoursPending":4983,"molecularSequenceNumber":"MSN-1070","analysisId":"JOB-1070"},{"patientSequenceNumber":"1071","dateAssigned":{"$date":1489187249202},"biopsySequenceNumber":"BSN-1071","treatmentArmId":"CukeTest-1066","treatmentArmVersion":"2015-08-06","hoursPending":4983,"molecularSequenceNumber":"MSN-1071","analysisId":"JOB-1071"},{"patientSequenceNumber":"1072","dateAssigned":{"$date":1489187272808},"biopsySequenceNumber":"BSN-1072","hoursPending":4983,"molecularSequenceNumber":"MSN-1072","analysisId":"JOB-1072"},{"patientSequenceNumber":"1078","dateAssigned":{"$date":1489195129523},"biopsySequenceNumber":"BSN-1078","treatmentArmId":"CukeTest-1078","treatmentArmVersion":"2015-08-06","hoursPending":4980,"molecularSequenceNumber":"MSN-1078","analysisId":"JOB-1078"},{"patientSequenceNumber":"160re","dateAssigned":{"$date":1489416149287},"biopsySequenceNumber":"bsn-160re","treatmentArmId":"EAY131-F","treatmentArmVersion":"2015-08-06","hoursPending":4919,"molecularSequenceNumber":"msn-160re","analysisId":"job-160"}]
    return Observable.of(testdata);
  }
  getDashboardVR(): Observable<any> {
    let testdata = [
      {
        "patientSequenceNumber" : "1001re",
        "biopsySequenceNumber" : "BSN-1001re",
        "molecularSequenceNumber" : "MSN-1001re",
        "location" : "Boston",
        "specimenReceivedDate" : {"$date" : 1488461755963},
        "dateVariantReportReceived" : {"$date" : 1488461756559},
        "analysisId" : "JOB-1001re",
        "daysPending" : 216
      },
      {
        "patientSequenceNumber" : "UIConfirmVariantReport",
        "biopsySequenceNumber" : "BSN-UIConfirmVariantReport",
        "molecularSequenceNumber" : "MSN-UIConfirmVariantReport",
        "location" : "Boston",
        "specimenReceivedDate" : {"$date" : 1488461755963},
        "dateVariantReportReceived" : {"$date" : 1488461756559},
        "analysisId" : "JOB-UIConfirmVariantReport",
        "daysPending" : 216
      }
      ];
    return Observable.of(testdata);
  }
  getDashboardPatientsAwaiting(): Observable<any> {
    let testdata = [{
      "outsideBiopsy" :{
        "messages" : [
          'Variant report missing,Required assay result missing: MLH1, MSH2, PTEN'
        ],
        "PTEN" : {"applicable" : true},
        "MLH1" : {"applicable" : true},
        "MSH2" : {"applicable" : true},
        "RB" : {"applicable" : false},
        "molecularSequenceNumber" : 'MSN-170re-1',
        "dateMsnShipped" : {"$date" : 1489409094505},
        "lab" : 'Boston',
        "dateSpecimenCollected" : {"$date" : 1489409094505},
        "daysWaiting" : 211,
        "diseases" : [
          {
            "_id" : 10040811,
            "ctepCategory" : 'Skin Neoplasm',
            "ctepSubCategory" : 'Skin Neoplasm, Miscellaneous',
            "ctepTerm" : 'Skin cancer, NOS',
            "shortName" : 'Skin cancer, NOS'
          }
        ],
        "amoi" : [''],
        "biopsySequenceNumber" : 'N-14-000005-4'
      },
        "patientSequenceNumber" : '170re',
        "currentPatientStatus" : 'PROGRESSION_REBIOPSY',
        "concordance" : 'Y',
        "isOutsideAssay" : true
    }]
    return Observable.of(testdata);
  }
  getDashboardOverviewTa(): Observable<any> {
    return Observable.of();
  }
  getDashboardOverviewPatients(): Observable<any> {
    return Observable.of();
  }
  getDashboardOverviewBt(): Observable<any> {
    return Observable.of();
  }
}

class MockDashboardServiceWithErrors {
  getDashboardAR(): Observable<any> {
    return Observable.throw('error');
  }
  getDashboardVR(): Observable<any> {
    return Observable.throw('error');
  }
  getDashboardPatientsAwaiting(): Observable<any> {
    return Observable.throw('error');
  }
  getDashboardOverviewTa(): Observable<any> {
    return Observable.throw('error');
  }
  getDashboardOverviewPatients(): Observable<any> {
    return Observable.throw('error');
  }
  getDashboardOverviewBt(): Observable<any> {
    return Observable.throw('error');
  }
}
