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
import { DataTableModule } from '../../shared/datatables/index';
// import { CliaVariantReportsNtcModule } from './clia-variant-reports-ntc.module';
import { CliaParentComponent } from './clia-parent.component';
// import { CliaVariantReportsNtcRoutingModule } from './clia-variant-reports-ntc-routing.module';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { PipesModule } from './../../shared/pipes/pipes.module';
import { DirectivesModule } from './../../shared/directives/directives.module';
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
import { SampleControlApiService } from '../sample-control-api.service';


export function main() {


  let resolved_data = {
    PCData: [{
      copy_number_variants: ['test'],
      gene_fusions: ['test'],
      snv_indels: ['test'],
      molecular_id: { 'test': 'test' },
      analysis_id: { 'test': 'test' },
      total_variants: { 'test': 'test' },
      mapd: { 'test': 'test' },
      cellularity: { 'test': 'test' },
      torrent_variant_caller_version: { 'test': 'test' },
      report_status: { 'test': 'test' },
      date_molecular_id_created: '2-12-2015',
      date_variant_received: '2-12-2015'
    }],
    NTCData: [{
      date_molecular_id_created: '2-12-2016',
      date_variant_received: '2-12-2016',
    }],
    PACCData: [{
      date_molecular_id_created: '2-12-2016',
      date_variant_received: '2-12-2016',
    }],
    ionData: [{
      date_molecular_id_created: '2-12-2016',
      date_variant_received: '2-12-2016',
    }]
  }


  describe('clia parent component with clia type mocha', () => {
    // Setting module for testing
    // Disable old forms
    let config: any[] = [
      { path: 'clia_variant_reports_ntc', component: 'CliaParentComponent' }
    ];
    // inject([MockBackend], (mockBackend: MockBackend)
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule.withRoutes(config), DirectivesModule, PipesModule, FormsModule, DataTableModule],
        declarations: [CliaParentComponent],
        providers: [
          { provide: SampleControlApiService, useClass: MockCliaApiService },
          {
            provide: ActivatedRoute, useValue: {
              snapshot:
              {
                url: [{ path: 'clia_mocha' }],
                data: {
                  cliaType: 'mocha',
                  data: resolved_data
                }
              }
            }
          },
          // MockBackend,
          // BaseRequestOptions,
          // { provide: XHRBackend, useClass: MockBackend },
          // {
          //   provide: Http,
          //   useFactory: (backend: MockBackend, options: BaseRequestOptions) => new Http(backend, options),
          //   deps: [MockBackend, BaseRequestOptions]
          // },
        ]
      });

      // mockBackend.connections.subscribe((connection: MockConnection) => {
      //   connection.mockRespond(new Response(new ResponseOptions(this.spyConnection({
      //     body: connection.request.text(),
      //     method: connection.request.method,
      //     url: connection.request.url
      //   }))));
      // });


      spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify({ 'roles': ['MOCHA_VARIANT_REPORT_REVIEWER'] }));
    });

    xit('should work',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(CliaParentComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(CliaParentComponent);
            // console.log(fixture);
            fixture.componentInstance.ngOnInit();
            // let interval = setInterval(() => {
            //   // expect(1).toBe(1);
            //   // done();
            //   // fixture.detectChanges();
            // }, 1000 * 60);
            // clearInterval(interval);

            // Observable.interval(1000 * 60).subscribe(() => {
            //   fixture.detectChanges();
            // });

          });
      }));

    xit('should test setControlType',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(CliaParentComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(CliaParentComponent);
            // console.log(fixture);
            fixture.componentInstance.setControlType('test');
            expect(fixture.componentInstance.control_type).toBe('test');
          });
      }));

    xit('should test generateMsn with control type positive',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(CliaParentComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(CliaParentComponent);
            fixture.componentInstance.control_type = 'positive';
            fixture.componentInstance.generateMsn();
          });
      }));

    xit('should test generateMsn with control type no_template',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(CliaParentComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(CliaParentComponent);
            fixture.componentInstance.control_type = 'no_template';
            fixture.componentInstance.generateMsn();
          });
      }));

    xit('should test generateMsn with control type proficiency_competency',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(CliaParentComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(CliaParentComponent);
            fixture.componentInstance.control_type = 'proficiency_competency';
            fixture.componentInstance.generateMsn();
          });
      }));

  });

  describe('clia parent component with clia type dartmouth', () => {
    // Setting module for testing
    // Disable old forms
    let config: any[] = [
      { path: 'clia_variant_reports_ntc', component: 'CliaParentComponent' }
    ];
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule.withRoutes(config), DirectivesModule, PipesModule, FormsModule, DataTableModule],
        declarations: [CliaParentComponent],
        providers: [
          { provide: SampleControlApiService, useClass: MockCliaApiService },
          {
            provide: ActivatedRoute, useValue: {
              snapshot: {
                url: [{ path: 'clia_dartmouth' }],
                data: {
                  cliaType: 'dartmouth',
                  data: resolved_data
                }
              }
            }
          },
        ]
      });
      spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify({ 'roles': ['MOCHA_VARIANT_REPORT_REVIEWER'] }));
    });

    xit('should work for clia_dartmouth',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(CliaParentComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(CliaParentComponent);
            fixture.componentInstance.ngOnInit();
          });
      }));

  });

  describe('clia parent component with clia type yale', () => {
    // Setting module for testing
    // Disable old forms
    let config: any[] = [
      { path: 'clia_variant_reports_ntc', component: 'CliaParentComponent' }
    ];
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule.withRoutes(config), DirectivesModule, PipesModule, FormsModule, DataTableModule],
        declarations: [CliaParentComponent],
        providers: [
          { provide: SampleControlApiService, useClass: MockCliaApiService },
          {
            provide: ActivatedRoute, useValue: {
              snapshot: {
                url: [{ path: 'clia_yale' }],
                data: {
                  cliaType: 'yale',
                  data: resolved_data
                }
              }
            }
          },
        ]
      });
      spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify({ 'roles': ['MOCHA_VARIANT_REPORT_REVIEWER'] }));
    });

    xit('should work for clia_yale',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(CliaParentComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(CliaParentComponent);
            fixture.componentInstance.ngOnInit();
          });
      }));

  });

  describe('clia parent component with clia type mgh', () => {
    // Setting module for testing
    // Disable old forms
    let config: any[] = [
      { path: 'clia_variant_reports_ntc', component: 'CliaParentComponent' }
    ];
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule.withRoutes(config), DirectivesModule, PipesModule, FormsModule, DataTableModule],
        declarations: [CliaParentComponent],
        providers: [
          { provide: SampleControlApiService, useClass: MockCliaApiService },
          {
            provide: ActivatedRoute, useValue: {
              snapshot: {
                url: [{ path: 'clia_mgh' }], data: {
                  cliaType: 'mgh',
                  data: resolved_data
                }
              }
            }
          },
        ]
      });
      spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify({ 'roles': ['MOCHA_VARIANT_REPORT_REVIEWER'] }));
    });

    xit('should work for clia_mgh',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(CliaParentComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(CliaParentComponent);
            fixture.componentInstance.ngOnInit();
          });
      }));

  });

  describe('clia parent component with clia type mda', () => {
    // Setting module for testing
    // Disable old forms
    let config: any[] = [
      { path: 'clia_variant_reports_ntc', component: 'CliaParentComponent' }
    ];
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule.withRoutes(config), DirectivesModule, PipesModule, FormsModule, DataTableModule],
        declarations: [CliaParentComponent],
        providers: [
          { provide: SampleControlApiService, useClass: MockCliaApiService },
          {
            provide: ActivatedRoute, useValue: {
              snapshot: {
                url: [{ path: 'clia_mda' }], data: {
                  cliaType: 'mda',
                  data: resolved_data
                }
              }
            }
          },
        ]
      });
      spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify({ 'roles': ['ADMIN'] }));
    });

    xit('should work for clia_mda',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(CliaParentComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(CliaParentComponent);
            fixture.componentInstance.ngOnInit();
          });
      }));

  });

}


class MockCliaApiService {
  getCliaDetailsPC(): Observable<any> {
    let testData;
    testData = [{
      copy_number_variants: ['test'],
      gene_fusions: ['test'],
      snv_indels: ['test'],
      molecular_id: { 'test': 'test' },
      analysis_id: { 'test': 'test' },
      total_variants: { 'test': 'test' },
      mapd: { 'test': 'test' },
      cellularity: { 'test': 'test' },
      torrent_variant_caller_version: { 'test': 'test' },
      report_status: { 'test': 'test' },
      date_molecular_id_created: '2-12-2015',
      date_variant_received: '2-12-2015'
    }];
    return Observable.of(testData);
  }
  getCliaDetailsNTC(): Observable<any> {
    let testdata = [{
      date_molecular_id_created: '2-12-2016',
      date_variant_received: '2-12-2016',
    }];
    return Observable.of(testdata);
  }
  getCliaDetailsPACC(): Observable<any> {
    let testdata = [{
      date_molecular_id_created: '2-12-2016',
      date_variant_received: '2-12-2016',
    }];
    return Observable.of(testdata);
  }

  getDataIon(): Observable<any> {
    let testdata = [{
      date_molecular_id_created: '2-12-2016',
      date_variant_received: '2-12-2016',
    }];
    return Observable.of(testdata);
  }
  getCliaIon(): Observable<any> {
    let testdata = [{
      date_molecular_id_created: '2-12-2016',
      date_variant_received: '2-12-2016',
    }];
    return Observable.of(testdata);
  }
  generateMsn(): Observable<any> {
    let testdata = [{
      date_molecular_id_created: '2-12-2016',
      date_variant_received: '2-12-2016',
    }];
    return Observable.of(testdata);
  }
}

