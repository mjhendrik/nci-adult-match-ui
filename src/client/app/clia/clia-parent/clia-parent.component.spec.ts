// import { Component } from '@angular/core';
import {
  async,
  TestBed,
} from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { DataTableModule } from '../../shared/datatables/index';
import { CliaParentComponent } from './clia-parent.component';
import { RouterTestingModule } from '@angular/router/testing';
import { PipesModule } from './../../shared/pipes/pipes.module';
import { DirectivesModule } from './../../shared/directives/directives.module';
import { SampleControlApiService } from '../sample-control-api.service';
import { IonReportersApiService } from '../ion-reporters-api.service';
import { UserProfileService } from '../../shared/user-profile/user-profile.service';
import { UserProfileMockService } from '../../shared/testing/user-profile-mock.service';

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
  };

  describe('clia parent component with clia type mocha', () => {


    let config: any[] = [
      { path: 'clia_variant_reports_ntc', component: 'CliaParentComponent' }
    ];
    // inject([MockBackend], (mockBackend: MockBackend)
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule.withRoutes(config),
          DirectivesModule,
          PipesModule,
          FormsModule,
          DataTableModule],
        declarations: [CliaParentComponent],
        providers: [
          { provide: SampleControlApiService, useClass: MockCliaApiService },
          { provide: IonReportersApiService, useClass: MockCliaIonApiService },
          {
            provide: ActivatedRoute, useValue: {
              snapshot:
              {
                url: [{ path: 'clia_mocha' }],
                data: {
                  cliaType: 'mocha',
                  adata: resolved_data
                }
              }
            }
          },
          { provide: UserProfileService, useClass: UserProfileMockService }
        ]
      });

      spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify({ 'roles': ['MOCHA_VARIANT_REPORT_REVIEWER'] }));
    });

    it('Clia Parent componenet should work',
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

    it('should test setControlType',
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

    it('should test generateMsn with control type positive',
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
            expect(fixture.componentInstance.control_type).toBe('positive');
          });
      }));

    it('should test generateMsn with control type no_template',
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
            expect(fixture.componentInstance.control_type).toBe('no_template');
          });
      }));

    it('should test generateMsn with control type proficiency_competency',
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
            expect(fixture.componentInstance.control_type).toBe('proficiency_competency');
          });
      }));
  });

  describe('clia parent component with clia type dartmouth', () => {


    let config: any[] = [
      { path: 'clia_variant_reports_ntc', component: 'CliaParentComponent' }
    ];
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule.withRoutes(config), DirectivesModule, PipesModule, FormsModule, DataTableModule],
        declarations: [CliaParentComponent],
        providers: [
          { provide: SampleControlApiService, useClass: MockCliaApiService },
          { provide: IonReportersApiService, useClass: MockCliaIonApiService },
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
          { provide: UserProfileService, useClass: UserProfileMockService }
        ]
      });
      spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify({ 'roles': ['MOCHA_VARIANT_REPORT_REVIEWER'] }));
    });

    it('should work for clia_dartmouth',
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


    let config: any[] = [
      { path: 'clia_variant_reports_ntc', component: 'CliaParentComponent' }
    ];
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule.withRoutes(config), DirectivesModule, PipesModule, FormsModule, DataTableModule],
        declarations: [CliaParentComponent],
        providers: [
          { provide: SampleControlApiService, useClass: MockCliaApiService },
          { provide: IonReportersApiService, useClass: MockCliaIonApiService },
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
          { provide: UserProfileService, useClass: UserProfileMockService }
        ]
      });
      spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify({ 'roles': ['MOCHA_VARIANT_REPORT_REVIEWER'] }));
    });

    it('should work for clia_yale',
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


    let config: any[] = [
      { path: 'clia_variant_reports_ntc', component: 'CliaParentComponent' }
    ];
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule.withRoutes(config), DirectivesModule, PipesModule, FormsModule, DataTableModule],
        declarations: [CliaParentComponent],
        providers: [
          { provide: SampleControlApiService, useClass: MockCliaApiService },
          { provide: IonReportersApiService, useClass: MockCliaIonApiService },
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
          { provide: UserProfileService, useClass: UserProfileMockService }
        ]
      });
      spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify({ 'roles': ['MOCHA_VARIANT_REPORT_REVIEWER'] }));
    });

    it('should work for clia_mgh',
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


    let config: any[] = [
      { path: 'clia_variant_reports_ntc', component: 'CliaParentComponent' }
    ];
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule.withRoutes(config), DirectivesModule, PipesModule, FormsModule, DataTableModule],
        declarations: [CliaParentComponent],
        providers: [
          { provide: SampleControlApiService, useClass: MockCliaApiService },
          { provide: IonReportersApiService, useClass: MockCliaIonApiService },
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
          { provide: UserProfileService, useClass: UserProfileMockService }
        ]
      });
      spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify({ 'roles': ['ADMIN'] }));
    });

    it('should work for clia_mda',
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

class MockCliaIonApiService {
  getCliaIon(): Observable<any> {
    let testData;
    testData = [{
      lastContactDate: '2-12-2015'
    }];
    return Observable.of(testData);
  }
}

