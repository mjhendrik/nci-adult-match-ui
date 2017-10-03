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
            console.log(fixture.componentInstance);
            fixture.componentInstance.getDataAR();
            // expect(fixture.componentInstance.tableARData.length).toEqual(dashboard_data.data.AR.length);
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
    return Observable.of();
  }
  getDashboardVR(): Observable<any> {
    return Observable.of();
  }
  getDashboardPatientsAwaiting(): Observable<any> {
    return Observable.of();
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
