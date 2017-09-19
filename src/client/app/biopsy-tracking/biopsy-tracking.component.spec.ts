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
import { BiopsyTrackingListComponent } from './biopsy-tracking.component';
import { BiopsyTrackingApiService } from './biopsy-tracking-api.service';
import { ActivatedRoute } from '@angular/router';

let biopsy_resolved_data = {
  data: {
    count: 135,
    data: [{
      'biopsies': {
        mdAndersonMessages: [{
          message: 'SPECIMEN_RECEIVED',
          collectedDate: '1462468345727',
          "biopsySequenceNumber": "T-16-000008",
          "specimenReceivedDate": 1462468345727,
          "specimenFailureDate": 1479760274770,
          "patientSequenceNumber": "10402",
          "molecularSequenceNumber": "MSN2105",
          "lab": "MoCha",
          "dnaShippedDate": 1462550578015,
          "trackingNumber": "794692795960"
        }, {
          message: 'SPECIMEN_RECEIVED',
          collectedDate: null,
          "biopsySequenceNumber": "T-16-000008",
          "specimenReceivedDate": 1462468345727,
          "specimenFailureDate": 1479760274770,
          "patientSequenceNumber": "10402",
          "molecularSequenceNumber": "MSN2105",
          "lab": "MoCha",
          "dnaShippedDate": 1462550578015,
          "trackingNumber": "794692795960"
        }, {
          message: 'NUCLEIC_ACID_SENDOUT',
          collectedDate: '1462468345727',
          "biopsySequenceNumber": "T-16-000008",
          "specimenReceivedDate": 1462468345727,
          "specimenFailureDate": 1479760274770,
          "patientSequenceNumber": "10402",
          "molecularSequenceNumber": "MSN2105",
          "lab": "MoCha",
          "dnaShippedDate": 1462550578015,
          "trackingNumber": "794692795960"
        },
        {
          message: 'SPECIMEN_FAILURE',
          collectedDate: '1462468345727',
          "biopsySequenceNumber": "T-16-000008",
          "specimenReceivedDate": 1462468345727,
          "specimenFailureDate": 1479760274770,
          "patientSequenceNumber": "10402",
          "molecularSequenceNumber": "MSN2105",
          "lab": "MoCha",
          "dnaShippedDate": 1462550578015,
          "trackingNumber": "794692795960"
        },
        {
          message: 'PATHOLOGY_CONFIRMATION',
          collectedDate: '1462468345727',
          "biopsySequenceNumber": "T-16-000008",
          "specimenReceivedDate": 1462468345727,
          "specimenFailureDate": 1479760274770,
          "patientSequenceNumber": "10402",
          "molecularSequenceNumber": "MSN2105",
          "lab": "MoCha",
          "dnaShippedDate": 1462550578015,
          "trackingNumber": "794692795960"
        }]
      }
    }],
    total: 220
  }

};

export function main() {
  describe('biopsy tracking component', () => {

    let component: BiopsyTrackingListComponent;
    let fixture: ComponentFixture<BiopsyTrackingListComponent>;
    // Setting module for testing
    // Disable old forms

    let config: any[] = [
      { path: 'tracking', component: 'BiopsyTrackingListComponent' }
    ];

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule.withRoutes(config), DirectivesModule, PipesModule, FormsModule, DataTableModule],
        declarations: [BiopsyTrackingListComponent],
        providers: [
          { provide: BiopsyTrackingApiService, useClass: MockBiopsyService },
          {
            provide: ActivatedRoute, useValue: {
              snapshot: {
                data: biopsy_resolved_data
              }
            }
          }
        ]
      });

      spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify({ 'roles': ['MOCHA_VARIANT_REPORT_REVIEWER'] }));
    });

    it('should test ngOnInit',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(BiopsyTrackingListComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(BiopsyTrackingListComponent);
            // console.log(fixture);
            fixture.componentInstance.ngOnInit();
            expect(fixture.componentInstance).toBeDefined();
          });
      }));

    it('should test currentPageActive',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(BiopsyTrackingListComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(BiopsyTrackingListComponent);
            fixture.componentInstance.previous = "1,100,asc,biopsySequenceNumber";
            fixture.componentInstance.currentPageActive("1,10,asc,biopsySequenceNumber");
            expect(fixture.componentInstance).toBeDefined();
            expect(fixture.componentInstance.previous).toBeDefined();
            expect(fixture.componentInstance.previous).toBe("1,10,asc,biopsySequenceNumber,");
            expect(fixture.componentInstance.currentPageActive).toBeDefined();
          });
      }));

    it('should test currentPageActive with else status',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(BiopsyTrackingListComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(BiopsyTrackingListComponent);
            fixture.componentInstance.searchtermBiopsyTrackingList = '';
            fixture.componentInstance.previous = "1,10,asc,biopsySequenceNumber,";
            fixture.componentInstance.currentPageActive("1,10,asc,biopsySequenceNumber");
            expect(fixture.componentInstance).toBeDefined();
            expect(fixture.componentInstance.previous).toBeDefined();
            expect(fixture.componentInstance.previous).toBe("1,10,asc,biopsySequenceNumber,");
            expect(fixture.componentInstance.currentPageActive).toBeDefined();
          });
      }));

    it('should test SortStatus',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(BiopsyTrackingListComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(BiopsyTrackingListComponent);
            fixture.componentInstance.previous = "1,100,asc,biopsySequenceNumber";
            fixture.componentInstance.SortStatus("1,10,asc,biopsySequenceNumber");
            expect(fixture.componentInstance).toBeDefined();
            expect(fixture.componentInstance.previous).toBeDefined();
            expect(fixture.componentInstance.previous).toBe("1,10,asc,biopsySequenceNumber,");
            expect(fixture.componentInstance.currentPageActive).toBeDefined();
          });
      }));

    it('should test SortStatus with else',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(BiopsyTrackingListComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(BiopsyTrackingListComponent);
            fixture.componentInstance.searchtermBiopsyTrackingList = "test";
            fixture.componentInstance.previous = "1,100,asc,biopsySequenceNumber,test";
            fixture.componentInstance.SortStatus("1,100,asc,biopsySequenceNumber");
            expect(fixture.componentInstance).toBeDefined();
            expect(fixture.componentInstance.searchtermBiopsyTrackingList).toBeDefined();
            expect(fixture.componentInstance.searchtermBiopsyTrackingList).toBe("test");
            expect(fixture.componentInstance.previous).toBeDefined();
            expect(fixture.componentInstance.previous).toBe("1,100,asc,biopsySequenceNumber,test");
            expect(fixture.componentInstance.currentPageActive).toBeDefined();
          });
      }));

    it('should test onSearchChanged',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(BiopsyTrackingListComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(BiopsyTrackingListComponent);
            fixture.componentInstance.previous = "1,100,asc,biopsySequenceNumber";
            fixture.componentInstance.onSearchChanged("test");
            // fixture.componentInstance.onSearchChanged()
            expect(fixture.componentInstance).toBeDefined();
            expect(fixture.componentInstance.previous).toBeDefined();
            expect(fixture.componentInstance.previous).toBe("1,100,asc,biopsySequenceNumber");
          });
      }));

    it('should test onSearchChanged with else status',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(BiopsyTrackingListComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(BiopsyTrackingListComponent);
            fixture.componentInstance.searchtermBiopsyTrackingList = "test";
            fixture.componentInstance.onSearchChanged("test");

            expect(fixture.componentInstance).toBeDefined();
            expect(fixture.componentInstance.searchtermBiopsyTrackingList).toBeDefined();

            expect(fixture.componentInstance.searchtermBiopsyTrackingList).toBe("test");
          });
      }));

  });

  describe('biopsy tracking component with error response', () => {

    let component: BiopsyTrackingListComponent;
    let fixture: ComponentFixture<BiopsyTrackingListComponent>;
    // Setting module for testing
    // Disable old form

    let config: any[] = [
      { path: 'tracking', component: 'BiopsyTrackingListComponent' }
    ];

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule.withRoutes(config), DirectivesModule, PipesModule, FormsModule, DataTableModule],
        declarations: [BiopsyTrackingListComponent],
        providers: [
          { provide: BiopsyTrackingApiService, useClass: MockBiopsyServiceWithErrors },
          {
            provide: ActivatedRoute, useValue: {
              snapshot: {
                data: biopsy_resolved_data
              }
            }
          }
        ]
      });

      spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify({ 'roles': ['MOCHA_VARIANT_REPORT_REVIEWER'] }));
    });

    it('should test getData',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(BiopsyTrackingListComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(BiopsyTrackingListComponent);
            fixture.componentInstance.getData();
            expect(fixture.componentInstance).toBeDefined();
          });
      }));

    xit('should test getBiopsyCount',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(BiopsyTrackingListComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(BiopsyTrackingListComponent);
            fixture.componentInstance.getBiopsyCount({});
          });
      }));

    it('should test getBiopsyTotal',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(BiopsyTrackingListComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(BiopsyTrackingListComponent);
            fixture.componentInstance.getBiopsyTotal();
          });
      }));

  });
}


class MockBiopsyService {
  getBiopsyCount(): Observable<any> {
    return Observable.of(135);
  }
  getBiopsyTotal(): Observable<any> {
    return Observable.of(100);
  }
  getBiopsyTracking(): Observable<any> {
    return Observable.of(biopsy_resolved_data.data);
  }
}

class MockBiopsyServiceWithErrors {
  getBiopsyCount(): Observable<any> {
    return Observable.throw('135');
  }
  getBiopsyTotal(): Observable<any> {
    return Observable.throw(100);
  }
  getBiopsyTracking(): Observable<any> {
    return Observable.throw('error');
  }
}
