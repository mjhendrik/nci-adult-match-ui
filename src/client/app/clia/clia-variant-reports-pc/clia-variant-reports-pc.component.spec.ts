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
import { CliaVariantReportsPCInterface } from '../clia-data-interfaces';

export function main() {
  describe('clia variant reports pc component with clia type mocha', () => {
    // Setting module for testing
    // Disable old forms
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
                      snv_indels: ['test']
                    }
                  }
                }
              }
            }
          }
        ]
      });
    });

    xit('should work for clia_mocha',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(CliaVariantReportsPcComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(CliaVariantReportsPcComponent);
            fixture.componentInstance.ngOnInit();
            fixture.componentInstance.downloadDnaBam();
            fixture.componentInstance.downloadRnaBam();
            fixture.componentInstance.downloadVcf();
          });
      }));

  });

  describe('clia variant reports pc component with clia type dartmouth', () => {
    // Setting module for testing
    // Disable old forms
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
          {
            provide: ActivatedRoute, useValue: {
              snapshot: {
                url: [{ path: 'clia_dartmouth' }],
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
                      snv_indels: ['test']
                    }
                  }
                }
              }
            }
          }
        ]
      });
    });

    xit('should work for clia_dartmouth',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(CliaVariantReportsPcComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(CliaVariantReportsPcComponent);
            fixture.componentInstance.ngOnInit();
          });
      }));

  });

  describe('clia variant reports pc component with clia type yale', () => {
    // Setting module for testing
    // Disable old forms
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
          {
            provide: ActivatedRoute, useValue: {
              snapshot: {
                url: [{ path: 'clia_yale' }],
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
                      snv_indels: ['test']
                    }
                  }
                }
              }
            }
          }
        ]
      });
    });

    xit('should work for clia_yale',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(CliaVariantReportsPcComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(CliaVariantReportsPcComponent);
            fixture.componentInstance.ngOnInit();
          });
      }));

  });

  describe('clia variant reports pc component with clia type mgh', () => {
    // Setting module for testing
    // Disable old forms
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
          {
            provide: ActivatedRoute, useValue: {
              snapshot: {
                url: [{ path: 'clia_mgh' }],
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
                      snv_indels: ['test']
                    }
                  }
                }
              }
            }
          }
        ]
      });
    });

    xit('should work for clia_mgh',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(CliaVariantReportsPcComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(CliaVariantReportsPcComponent);
            fixture.componentInstance.ngOnInit();
          });
      }));

  });

  describe('clia variant reports pc component with clia type mda', () => {
    // Setting module for testing
    // Disable old forms
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
          {
            provide: ActivatedRoute, useValue: {
              snapshot: {
                url: [{ path: 'clia_mda' }],
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
                      snv_indels: ['test']
                    }
                  }
                }
              }
            }
          }
        ]
      });
    });

    xit('should work for clia_mda',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(CliaVariantReportsPcComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(CliaVariantReportsPcComponent);
            fixture.componentInstance.ngOnInit();
          });
      }));

  });
}


class MockCliaApiService {
  getCliaVariantReportsPC(): Observable<CliaVariantReportsPCInterface> {
    let testData: CliaVariantReportsPCInterface;
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
}

class MockCliaApiServiceWithErrors {
  getCliaVariantReportsPC(): Observable<CliaVariantReportsPCInterface> {
    let testData: CliaVariantReportsPCInterface;
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


