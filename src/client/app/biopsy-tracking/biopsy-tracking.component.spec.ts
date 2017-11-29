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
          'biopsySequenceNumber': 'T-16-000008',
          'specimenReceivedDate': 1462468345727,
          'specimenFailureDate': 1479760274770,
          'patientSequenceNumber': '10402',
          'molecularSequenceNumber': 'MSN2105',
          'lab': 'MoCha',
          'dnaShippedDate': 1462550578015,
          'trackingNumber': '794692795960'
        }, {
          message: 'SPECIMEN_RECEIVED',
          collectedDate: null,
          'biopsySequenceNumber': 'T-16-000008',
          'specimenReceivedDate': 1462468345727,
          'specimenFailureDate': 1479760274770,
          'patientSequenceNumber': '10402',
          'molecularSequenceNumber': 'MSN2105',
          'lab': 'MoCha',
          'dnaShippedDate': 1462550578015,
          'trackingNumber': '794692795960'
        }, {
          message: 'NUCLEIC_ACID_SENDOUT',
          collectedDate: '1462468345727',
          'biopsySequenceNumber': 'T-16-000008',
          'specimenReceivedDate': 1462468345727,
          'specimenFailureDate': 1479760274770,
          'patientSequenceNumber': '10402',
          'molecularSequenceNumber': 'MSN2105',
          'lab': 'MoCha',
          'dnaShippedDate': 1462550578015,
          'trackingNumber': '794692795960'
        },
        {
          message: 'SPECIMEN_FAILURE',
          collectedDate: '1462468345727',
          'biopsySequenceNumber': 'T-16-000008',
          'specimenReceivedDate': 1462468345727,
          'specimenFailureDate': 1479760274770,
          'patientSequenceNumber': '10402',
          'molecularSequenceNumber': 'MSN2105',
          'lab': 'MoCha',
          'dnaShippedDate': 1462550578015,
          'trackingNumber': '794692795960'
        },
        {
          message: 'PATHOLOGY_CONFIRMATION',
          collectedDate: '1462468345727',
          'biopsySequenceNumber': 'T-16-000008',
          'specimenReceivedDate': 1462468345727,
          'specimenFailureDate': 1479760274770,
          'patientSequenceNumber': '10402',
          'molecularSequenceNumber': 'MSN2105',
          'lab': 'MoCha',
          'dnaShippedDate': 1462550578015,
          'trackingNumber': '794692795960'
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
            let fixture = TestBed.createComponent(BiopsyTrackingListComponent);
            fixture.componentInstance.ngOnInit();
            expect(fixture.componentInstance).toBeDefined();
          });
      }));

    it('should test currentPageActive  -->  return tableBiopsyTrackingListData',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(BiopsyTrackingListComponent);
            fixture.componentInstance.previous = '1,100,asc,biopsySequenceNumber';
            fixture.componentInstance.currentPageActive('1,10,asc,biopsySequenceNumber');
            expect(fixture.componentInstance).toBeDefined();
            expect(fixture.componentInstance.previous).toBeDefined();
            expect(fixture.componentInstance.previous).toBe('1,10,asc,biopsySequenceNumber,');
            expect(fixture.componentInstance.currentPageActive).toBeDefined();
            expect(fixture.componentInstance.tableBiopsyTrackingListData[0].patientSequenceNumber).toBeDefined();
            expect(fixture.componentInstance.tableBiopsyTrackingListData[0].patientSequenceNumber).toBe('1001re');
          });
      }));

    it('should test currentPageActive with else status',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(BiopsyTrackingListComponent);
            fixture.componentInstance.searchtermBiopsyTrackingList = '';
            fixture.componentInstance.previous = '1,10,asc,biopsySequenceNumber,';
            fixture.componentInstance.currentPageActive('1,10,asc,biopsySequenceNumber');
            expect(fixture.componentInstance).toBeDefined();
            expect(fixture.componentInstance.previous).toBeDefined();
            expect(fixture.componentInstance.previous).toBe('1,10,asc,biopsySequenceNumber,');
            expect(fixture.componentInstance.currentPageActive).toBeDefined();
          });
      }));

    it('should test SortStatus',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(BiopsyTrackingListComponent);
            fixture.componentInstance.previous = '1,100,asc,biopsySequenceNumber';
            fixture.componentInstance.SortStatus('1,10,asc,biopsySequenceNumber');
            expect(fixture.componentInstance).toBeDefined();
            expect(fixture.componentInstance.previous).toBeDefined();
            expect(fixture.componentInstance.previous).toBe('1,10,asc,biopsySequenceNumber,');
            expect(fixture.componentInstance.currentPageActive).toBeDefined();
          });
      }));

    it('should test SortStatus with else',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(BiopsyTrackingListComponent);
            fixture.componentInstance.searchtermBiopsyTrackingList = 'test';
            fixture.componentInstance.previous = '1,100,asc,biopsySequenceNumber,test';
            fixture.componentInstance.SortStatus('1,100,asc,biopsySequenceNumber');
            expect(fixture.componentInstance).toBeDefined();
            expect(fixture.componentInstance.searchtermBiopsyTrackingList).toBeDefined();
            expect(fixture.componentInstance.searchtermBiopsyTrackingList).toBe('test');
            expect(fixture.componentInstance.previous).toBeDefined();
            expect(fixture.componentInstance.previous).toBe('1,100,asc,biopsySequenceNumber,test');
            expect(fixture.componentInstance.currentPageActive).toBeDefined();
          });
      }));

    it('should test onSearchChanged',
      async((done: any) => {

        let input: any;
        let inputValue: string = 'test';

        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(BiopsyTrackingListComponent);
            fixture.componentInstance.previous = '1,100,asc,biopsySequenceNumber';
            fixture.componentInstance.onSearchChanged('test');
            // fixture.componentInstance.onSearchChanged()
            expect(fixture.componentInstance).toBeDefined();
            expect(fixture.componentInstance.previous).toBeDefined();
            expect(fixture.componentInstance.previous).toBe('1,100,asc,biopsySequenceNumber');

          });
      }));

    it('should test onSearchChanged with else status',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(BiopsyTrackingListComponent);
            fixture.componentInstance.searchtermBiopsyTrackingList = 'test';
            fixture.componentInstance.onSearchChanged('test');

            expect(fixture.componentInstance).toBeDefined();
            expect(fixture.componentInstance.searchtermBiopsyTrackingList).toBeDefined();
            expect(fixture.componentInstance.searchtermBiopsyTrackingList).toBe('test');
          });
      }));

  });

  describe('biopsy tracking component with error response', () => {

    let component: BiopsyTrackingListComponent;
    let fixture: ComponentFixture<BiopsyTrackingListComponent>;

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

    xit('should test getData',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(BiopsyTrackingListComponent);
            // fixture.componentInstance.getData();
            // expect(fixture.componentInstance).toBeDefined();
          });
      }));

    xit('should test getBiopsyCount',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(BiopsyTrackingListComponent);
            fixture.componentInstance.getBiopsyCount();
          });
      }));

    xit('should test getBiopsyTotal',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(BiopsyTrackingListComponent);
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

    let testdata = [{
      'patientSequenceNumber': '1001re',
      'biopsySequenceNumber': 'BSN-1001re',
      'molecularSequenceNumber': 'MSN-1001re',
      'location': 'Boston',
      'trackingNumber': '123456789',
      'nucleicAcidSendoutDate': { '$date': 1488461754715 },
      'specimenReceivedDate': { '$date': 1488461754675 }
    }, {
      'patientSequenceNumber': '1010re',
      'biopsySequenceNumber': 'BSN-1010re',
      'molecularSequenceNumber': 'MSN-1010re',
      'location': 'Boston',
      'trackingNumber': 'TN-1010',
      'nucleicAcidSendoutDate': { '$date': 1488461958348 },
      'specimenReceivedDate': { '$date': 1488461958310 }
    }, {
      'patientSequenceNumber': '1011re',
      'biopsySequenceNumber': 'BSN-1011re',
      'molecularSequenceNumber': 'MSN-1011re',
      'location': 'Boston',
      'trackingNumber': 'TN-1011',
      'nucleicAcidSendoutDate': { '$date': 1488461959774 },
      'specimenReceivedDate': { '$date': 1488461959733 }
    }, {
      'patientSequenceNumber': '1013',
      'biopsySequenceNumber': 'BSN-1013',
      'molecularSequenceNumber': 'MSN-1013',
      'location': 'MDACC',
      'trackingNumber': 'TN-1013',
      'nucleicAcidSendoutDate': { '$date': 1488461945611 },
      'specimenReceivedDate': { '$date': 1488461945578 }
    }, {
      'patientSequenceNumber': '1014',
      'biopsySequenceNumber': 'BSN-1014',
      'molecularSequenceNumber': 'MSN-1014',
      'location': 'MoCha',
      'trackingNumber': 'TN-1014',
      'nucleicAcidSendoutDate': { '$date': 1488461947248 },
      'specimenReceivedDate': { '$date': 1488461947209 }
    }, {
      'patientSequenceNumber': '1015',
      'biopsySequenceNumber': 'BSN-1015',
      'molecularSequenceNumber': 'MSN-1015',
      'location': 'Yale',
      'trackingNumber': 'TN-1015',
      'nucleicAcidSendoutDate': { '$date': 1488461948484 },
      'specimenReceivedDate': { '$date': 1488461948445 }
    }, {
      'patientSequenceNumber': '1016',
      'biopsySequenceNumber': 'BSN-1016',
      'molecularSequenceNumber': 'MSN-1016',
      'location': 'MGH',
      'trackingNumber': 'TN-1016',
      'nucleicAcidSendoutDate': { '$date': 1488461949610 },
      'specimenReceivedDate': { '$date': 1488461949570 }
    }, {
      'patientSequenceNumber': '1022',
      'biopsySequenceNumber': 'BSN-1022',
      'molecularSequenceNumber': 'MSN-1022',
      'location': 'Boston1',
      'trackingNumber': 'TN-1022',
      'nucleicAcidSendoutDate': { '$date': 1488461950890 },
      'specimenReceivedDate': { '$date': 1488461950852 }
    }, {
      'patientSequenceNumber': '1023',
      'biopsySequenceNumber': 'BSN-1023',
      'molecularSequenceNumber': 'MSN-1023',
      'location': 'Boston2',
      'trackingNumber': 'TN-1023',
      'nucleicAcidSendoutDate': { '$date': 1488461951980 },
      'specimenReceivedDate': { '$date': 1488461951940 }
    }, {
      'patientSequenceNumber': '1055',
      'biopsySequenceNumber': 'BSN-1055',
      'molecularSequenceNumber': 'MSN-1055',
      'location': 'Boston',
      'trackingNumber': 'TN-1055',
      'nucleicAcidSendoutDate': { '$date': 1489181844551 },
      'specimenReceivedDate': { '$date': 1489181844515 }
    }];

    return Observable.of(testdata);
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
