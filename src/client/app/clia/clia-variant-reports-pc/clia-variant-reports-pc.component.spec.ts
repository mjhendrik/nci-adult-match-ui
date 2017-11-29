import {
  async,
  TestBed
} from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { CliaVariantReportsPcComponent } from './clia-variant-reports-pc.component';
import { PipesModule } from './../../shared/pipes/pipes.module';
import { DirectivesModule } from './../../shared/directives/directives.module';
import { SharedModule } from '../../shared/shared.module';
import { CliaVariantReportsPCViewData } from '../clia-data-interfaces';
import { SampleControlApiService } from '../sample-control-api.service';
import { CliaDataService } from "./../../shared/clia/clia-data.service";

export function main() {
  describe('clia variant reports pc component with clia type mocha --> Download', () => {


    let config: any[] = [
      { path: 'clia_variant_reports_pc', component: 'CliaVariantReportsPcComponent' }
    ];
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule.withRoutes(config),
          DirectivesModule,
          PipesModule,
          SharedModule
        ],
        declarations: [CliaVariantReportsPcComponent],
        providers: [
          { provide: SampleControlApiService, useClass: MockCliaApiService },
          { provide: CliaDataService, useClass: DataApiService },
          {
            provide: ActivatedRoute, useValue: {
              snapshot: {
                url: [{ path: 'clia_mocha' }],
                params: { id: 1234 },
                data: {
                  data: {
                    data: {
                      molecular_id: { 'test': 'test' },
                      analysis_id: { 'test': 'test' },
                      total_variants: { 'test': 'test' },
                      mapd: { 'test': 'test' },
                      cellularity: { 'test': 'test' },
                      torrent_variant_caller_version: { 'test': 'test' },
                      oncomine_control_panel_summary: ['test'],
                      copy_number_variants: ['test'],
                      gene_fusions: ['test'],
                      snv_indels: ['test'],
                      positiveControlVersion: { 'test': 'test' },
                      positiveControlLoadedDate: { 'test': 'test' },
                      matchingCriteria: { 'test': 'test' },
                      positiveControls: ['test']
                    }
                  }
                }
              }
            }
          }
        ]
      });
      spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify({ 'roles': ['ADMIN'] }));
    });

    it('should work for clia_mocha --> Download',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(CliaVariantReportsPcComponent);
            fixture.componentInstance.ngOnInit();
            fixture.componentInstance.downloadDnaBam();
            fixture.componentInstance.downloadRnaBam();
            fixture.componentInstance.downloadVcf();
            fixture.componentInstance.rejectReport();
          });
      }));

  });

  describe('clia variant reports pc component with clia type mocha', () => {


    let config: any[] = [
      { path: 'clia_variant_reports_pc', component: 'CliaVariantReportsPcComponent' }
    ];
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule.withRoutes(config),
          DirectivesModule,
          PipesModule,
          SharedModule
        ],
        declarations: [CliaVariantReportsPcComponent],
        providers: [
          { provide: SampleControlApiService, useClass: MockCliaApiService },
          { provide: CliaDataService, useClass: DataApiService },
          {
            provide: ActivatedRoute, useValue: {
              snapshot: {
                url: [{ path: 'clia_mocha' }],
                params: { id: 1234 },
                data: {
                  data: {
                    data: {
                      molecular_id: { 'test': 'test_mocha' },
                      analysis_id: { 'test': 'test' },
                      total_variants: { 'test': 'test' },
                      mapd: { 'test': 'test' },
                      cellularity: { 'test': 'test' },
                      torrent_variant_caller_version: { 'test': 'test' },
                      oncomine_control_panel_summary: ['test'],
                      copy_number_variants: ['test'],
                      gene_fusions: ['test'],
                      snv_indels: ['test'],
                      positiveControlVersion: { 'test': 'test' },
                      positiveControlLoadedDate: { 'test': 'test' },
                      matchingCriteria: { 'test': 'test' },
                      positiveControls: ['test']
                    }
                  }
                }
              }
            }
          }
        ]
      });
      spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify({ 'roles': ['ADMIN'] }));
    });

    it('should work for clia_mocha',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(CliaVariantReportsPcComponent);
            fixture.componentInstance.ngOnInit();
            expect(fixture.componentInstance.molecular_id).toEqual(1234)
          });
      }));

  });

  describe('clia variant reports pc component with clia type dartmouth', () => {


    let config: any[] = [
      { path: 'clia_variant_reports_pc', component: 'CliaVariantReportsPcComponent' }
    ];
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule.withRoutes(config),
          DirectivesModule,
          PipesModule,
          SharedModule
        ],
        declarations: [CliaVariantReportsPcComponent],
        providers: [
          { provide: SampleControlApiService, useClass: MockCliaApiService },
          { provide: CliaDataService, useClass: DataApiService },
          {
            provide: ActivatedRoute, useValue: {
              snapshot: {
                url: [{ path: 'clia_dartmouth' }],
                params: { id: 1234 },
                data: {
                  data: {
                    data: {
                      molecular_id: { 'test': 'test_dartmouth' },
                      analysis_id: { 'test': 'test' },
                      total_variants: { 'test': 'test' },
                      mapd: { 'test': 'test' },
                      cellularity: { 'test': 'test' },
                      torrent_variant_caller_version: { 'test': 'test' },
                      oncomine_control_panel_summary: ['test'],
                      copy_number_variants: ['test'],
                      gene_fusions: ['test'],
                      snv_indels: ['test'],
                      positiveControlVersion: { 'test': 'test' },
                      positiveControlLoadedDate: { 'test': 'test' },
                      matchingCriteria: { 'test': 'test' },
                      positiveControls: ['test']
                    }
                  }
                }
              }
            }
          }
        ]
      });
      spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify({ 'roles': ['ADMIN'] }));
    });

    it('should work for clia_dartmouth',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(CliaVariantReportsPcComponent);
            fixture.componentInstance.ngOnInit();
            expect(fixture.componentInstance.molecular_id).toEqual(1234);
          });
      }));

  });

  describe('clia variant reports pc component with clia type yale', () => {


    let config: any[] = [
      { path: 'clia_variant_reports_pc', component: 'CliaVariantReportsPcComponent' }
    ];
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule.withRoutes(config),
          DirectivesModule,
          PipesModule,
          SharedModule
        ],
        declarations: [CliaVariantReportsPcComponent],
        providers: [
          { provide: SampleControlApiService, useClass: MockCliaApiService },
          { provide: CliaDataService, useClass: DataApiService },
          {
            provide: ActivatedRoute, useValue: {
              snapshot: {
                url: [{ path: 'clia_yale' }],
                params: { id: 1234 },
                data: {
                  data: {
                    data: {
                      molecular_id: { 'test': 'test_yale' },
                      analysis_id: { 'test': 'test' },
                      total_variants: { 'test': 'test' },
                      mapd: { 'test': 'test' },
                      cellularity: { 'test': 'test' },
                      torrent_variant_caller_version: { 'test': 'test' },
                      oncomine_control_panel_summary: ['test'],
                      copy_number_variants: ['test'],
                      gene_fusions: ['test'],
                      snv_indels: ['test'],
                      positiveControlVersion: { 'test': 'test' },
                      positiveControlLoadedDate: { 'test': 'test' },
                      matchingCriteria: { 'test': 'test' },
                      positiveControls: ['test']
                    }
                  }
                }
              }
            }
          }
        ]
      });
      spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify({ 'roles': ['ADMIN'] }));
    });

    it('should work for clia_yale',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(CliaVariantReportsPcComponent);
            fixture.componentInstance.ngOnInit();
            expect(fixture.componentInstance.molecular_id).toEqual(1234);
          });
      }));

  });

  describe('clia variant reports pc component with clia type mgh', () => {


    let config: any[] = [
      { path: 'clia_variant_reports_pc', component: 'CliaVariantReportsPcComponent' }
    ];
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule.withRoutes(config),
          DirectivesModule,
          PipesModule,
          SharedModule
        ],
        declarations: [CliaVariantReportsPcComponent],
        providers: [
          { provide: SampleControlApiService, useClass: MockCliaApiService },
          { provide: CliaDataService, useClass: DataApiService },
          {
            provide: ActivatedRoute, useValue: {
              snapshot: {
                url: [{ path: 'clia_mgh' }],
                params: { id: 1234 },
                data: {
                  data: {
                    data: {
                      molecular_id: { 'test': 'test_mgh' },
                      analysis_id: { 'test': 'test' },
                      total_variants: { 'test': 'test' },
                      mapd: { 'test': 'test' },
                      cellularity: { 'test': 'test' },
                      torrent_variant_caller_version: { 'test': 'test' },
                      oncomine_control_panel_summary: ['test'],
                      copy_number_variants: ['test'],
                      gene_fusions: ['test'],
                      snv_indels: ['test'],
                      positiveControlVersion: { 'test': 'test' },
                      positiveControlLoadedDate: { 'test': 'test' },
                      matchingCriteria: { 'test': 'test' },
                      positiveControls: ['test']
                    }
                  }
                }
              }
            }
          }
        ]
      });
      spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify({ 'roles': ['ADMIN'] }));
    });

    it('should work for clia_mgh',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(CliaVariantReportsPcComponent);
            fixture.componentInstance.ngOnInit();
            expect(fixture.componentInstance.molecular_id).toEqual(1234);
          });
      }));

  });

  describe('clia variant reports pc component with clia type mda', () => {


    let config: any[] = [
      { path: 'clia_variant_reports_pc', component: 'CliaVariantReportsPcComponent' }
    ];
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule.withRoutes(config),
          DirectivesModule,
          PipesModule,
          SharedModule
        ],
        declarations: [CliaVariantReportsPcComponent],
        providers: [
          { provide: SampleControlApiService, useClass: MockCliaApiService },
          { provide: CliaDataService, useClass: DataApiService },
          {
            provide: ActivatedRoute, useValue: {
              snapshot: {
                url: [{ path: 'clia_mda' }],
                params: { id: 1234 },
                data: {
                  data: {
                    data: {
                      molecular_id: { 'test': 'test_mda' },
                      analysis_id: { 'test': 'test' },
                      total_variants: { 'test': 'test' },
                      mapd: { 'test': 'test' },
                      cellularity: { 'test': 'test' },
                      torrent_variant_caller_version: { 'test': 'test' },
                      oncomine_control_panel_summary: ['test'],
                      copy_number_variants: ['test'],
                      gene_fusions: ['test'],
                      snv_indels: ['test'],
                      positiveControlVersion: { 'test': 'test' },
                      positiveControlLoadedDate: { 'test': 'test' },
                      matchingCriteria: { 'test': 'test' },
                      positiveControls: ['test']
                    }
                  }
                }
              }
            }
          }
        ]
      });
      spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify({ 'roles': ['ADMIN'] }));
    });

    it('should work for clia_mda',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(CliaVariantReportsPcComponent);
            fixture.componentInstance.ngOnInit();
            expect(fixture.componentInstance.molecular_id).toEqual(1234);
          });
      }));

  });
}


class MockCliaApiService {
  getCliaVariantReportsPC(): Observable<CliaVariantReportsPCViewData> {
    let testData: CliaVariantReportsPCViewData;
    testData = {
      false_positive_variants: ['test'],
      positive_variants: ['test'],
      molecular_id: { 'test': 'test' },
      analysis_id: { 'test': 'test' },
      total_variants: { 'test': 'test' },
      mapd: { 'test': 'test' },
      cellularity: { 'test': 'test' },
      positive_control_version: { 'test': 'test' },
      date_molecular_id_created: { 'test': 'test' },
      date_variant_received: { 'test': 'test' },
      torrent_variant_caller_version: { 'test': 'test' },
      report_status: { 'test': 'test' },
      positiveControlVersion: { 'test': 'test' },
      positiveControlLoadedDate: { 'test': 'test' },
      matchingCriteria: { 'test': 'test' },
      positiveControls: ['test']
    };
    return Observable.of(testData);
  }
  downloadCliaDnaBam(): Observable<any> {
    let testdata = {
      s3_download_file_url: 'javascript:void(0)'
    };
    return Observable.of(testdata);
  }
  downloadCliaRnaBam(): Observable<any> {
    let testdata = {
      s3_download_file_url: 'javascript:void(0)'
    };
    return Observable.of(testdata);
  }
  downloadCliaVcf(): Observable<any> {
    let testdata = {
      s3_download_file_url: 'javascript:void(0)'
    };
    return Observable.of(testdata);
  }
  rejectReport(): Observable<any> {
    let testdata = {
      s3_download_file_url: 'javascript:void(0)'
    };
    return Observable.of(testdata);
  }
}

class DataApiService {
  transferData(): Observable<CliaDataService> {
    let testData: any;
    testData = {
      molecular_id: 'molecular_123',
      analysis_id: 'job_123',
      status: 'failed'
    };
    return Observable.of(testData);
  }
}

class MockCliaApiServiceWithErrors {
  downloadCliaDnaBam(): Observable<any> {
    let testdata = {
      s3_download_file_url: 'javascript:void(0)'
    };
    return Observable.of(testdata);
  }
  downloadCliaRnaBam(): Observable<any> {
    let testdata = {
      s3_download_file_url: 'javascript:void(0)'
    };
    return Observable.of(testdata);
  }
  downloadCliaVcf(): Observable<any> {
    let testdata = {
      s3_download_file_url: 'javascript:void(0)'
    };
    return Observable.of(testdata);
  }
}


