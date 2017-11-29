import {
  async,
  TestBed
} from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { CliaVariantReportsPaccComponent } from './clia-variant-reports-pacc.component';
import { PipesModule } from './../../shared/pipes/pipes.module';
import { DirectivesModule } from './../../shared/directives/directives.module';
import { SharedModule } from '../../shared/shared.module';
import { SampleControlApiService } from '../sample-control-api.service';
import { CliaVariantReportsPACCViewData } from '../clia-data-interfaces';

export function main() {

  describe('clia variant reports pacc component with clia type mocha --> Downloads', () => {


    let config: any[] = [
      { path: 'clia_variant_reports_pacc', component: 'CliaVariantReportsPaccComponent' }
    ];
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule.withRoutes(config),
          DirectivesModule,
          PipesModule,
          SharedModule
        ],
        declarations: [CliaVariantReportsPaccComponent],
        providers: [
          { provide: SampleControlApiService, useClass: MockCliaApiService },
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
                      snv_indels: ['test']
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

    it('should work for clia_mocha  --> Downloads',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(CliaVariantReportsPaccComponent);
            fixture.componentInstance.ngOnInit();
            fixture.componentInstance.downloadDnaBam();
            fixture.componentInstance.downloadRnaBam();
            fixture.componentInstance.downloadVcf();
            fixture.componentInstance.confirmReport();
            fixture.componentInstance.rejectReport();
          });
      }));

  });

  describe('clia variant reports pacc component with clia type mocha', () => {


    let config: any[] = [
      { path: 'clia_variant_reports_pacc', component: 'CliaVariantReportsPaccComponent' }
    ];
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule.withRoutes(config),
          DirectivesModule,
          PipesModule,
          SharedModule
        ],
        declarations: [CliaVariantReportsPaccComponent],
        providers: [
          { provide: SampleControlApiService, useClass: MockCliaApiService },
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
                      snv_indels: ['test']
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
            let fixture = TestBed.createComponent(CliaVariantReportsPaccComponent);
            fixture.componentInstance.ngOnInit();
            expect(fixture.componentInstance.molecular_id).toEqual({ "test": "test_mocha" })
          });
      }));

  });

  describe('clia variant reports pacc component with clia type dartmouth', () => {


    let config: any[] = [
      { path: 'clia_variant_reports_pacc', component: 'CliaVariantReportsPaccComponent' }
    ];
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule.withRoutes(config),
          DirectivesModule,
          PipesModule,
          SharedModule
        ],

        declarations: [CliaVariantReportsPaccComponent],
        providers: [
          { provide: SampleControlApiService, useClass: MockCliaApiService },
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
                      snv_indels: ['test']
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
            let fixture = TestBed.createComponent(CliaVariantReportsPaccComponent);
            fixture.componentInstance.ngOnInit();
            expect(fixture.componentInstance.molecular_id).toEqual({ "test": "test_dartmouth" })
          });
      }));

  });
  describe('clia variant reports pacc component with clia type yale', () => {


    let config: any[] = [
      { path: 'clia_variant_reports_pacc', component: 'CliaVariantReportsPaccComponent' }
    ];
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule.withRoutes(config),
          DirectivesModule,
          PipesModule,
          SharedModule
        ],

        declarations: [CliaVariantReportsPaccComponent],
        providers: [
          { provide: SampleControlApiService, useClass: MockCliaApiService },
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
                      snv_indels: ['test']
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
            let fixture = TestBed.createComponent(CliaVariantReportsPaccComponent);
            fixture.componentInstance.ngOnInit();
            expect(fixture.componentInstance.molecular_id).toEqual({ "test": "test_yale" })
          });
      }));

  });
  describe('clia variant reports pacc component with clia type mgh', () => {


    let config: any[] = [
      { path: 'clia_variant_reports_pacc', component: 'CliaVariantReportsPaccComponent' }
    ];
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule.withRoutes(config),
          DirectivesModule,
          PipesModule,
          SharedModule
        ],

        declarations: [CliaVariantReportsPaccComponent],
        providers: [
          { provide: SampleControlApiService, useClass: MockCliaApiService },
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
                      snv_indels: ['test']
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
            let fixture = TestBed.createComponent(CliaVariantReportsPaccComponent);
            fixture.componentInstance.ngOnInit();
            expect(fixture.componentInstance.molecular_id).toEqual({ "test": "test_mgh" })
          });
      }));

  });
  describe('clia variant reports pacc component with clia type mda', () => {


    let config: any[] = [
      { path: 'clia_variant_reports_pacc', component: 'CliaVariantReportsPaccComponent' }
    ];
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule.withRoutes(config),
          DirectivesModule,
          PipesModule,
          SharedModule
        ],

        declarations: [CliaVariantReportsPaccComponent],
        providers: [
          { provide: SampleControlApiService, useClass: MockCliaApiServiceWithErrors },
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
                      snv_indels: ['test']
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
            let fixture = TestBed.createComponent(CliaVariantReportsPaccComponent);
            fixture.componentInstance.ngOnInit();
            expect(fixture.componentInstance.molecular_id).toEqual({ "test": "test_mda" })
          });
      }));

  });
}


class MockCliaApiService {
  getCliaVariantReportsPACC(): Observable<CliaVariantReportsPACCViewData> {
    let testData: CliaVariantReportsPACCViewData;
    testData = {
      copy_number_variants: ['test'],
      gene_fusions: ['test'],
      snv_indels: ['test'],
      molecular_id: { 'test': 'test' },
      analysis_id: { 'test': 'test' },
      total_variants: { 'test': 'test' },
      mapd: { 'test': 'test' },
      cellularity: { 'test': 'test' },
      date_variant_received: { 'test': 'test' },
      torrent_variant_caller_version: { 'test': 'test' },
      report_status: { 'test': 'test' }
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
  confirmReport(): Observable<any> {
    let testdata = {
      s3_download_file_url: 'javascript:void(0)'
    };
    return Observable.of(testdata);
  }
}

class MockCliaApiServiceWithErrors {
  getCliaVariantReportsPACC(): Observable<CliaVariantReportsPACCViewData> {
    let testData: CliaVariantReportsPACCViewData;
    testData = {
      copy_number_variants: ['test'],
      gene_fusions: ['test'],
      snv_indels: ['test'],
      molecular_id: { 'test': 'test' },
      analysis_id: { 'test': 'test' },
      total_variants: { 'test': 'test' },
      mapd: { 'test': 'test' },
      cellularity: { 'test': 'test' },
      date_variant_received: { 'test': 'test' },
      torrent_variant_caller_version: { 'test': 'test' },
      report_status: { 'test': 'test' }
    };
    return Observable.throw(testData);
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
}
