import {
  async,
  TestBed
} from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';

import { CliaVariantReportQcComponent } from './clia-variant-report-qc.component';
import { CliaApiService, CliaVariantReportsQCInterface } from './../clia-api.service';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { PipesModule } from './../../shared/pipes/pipes.module';
import { DirectivesModule } from './../../shared/directives/directives.module';
import { VariantReportFilteredTableModule } from '../../shared/variant-report-filtered-table/variant-report-filtered-table.module';


export function main() {

  let config: any[] = [
    { path: 'clia_mocha/variant_reports_pc/qc/:id', component: CliaVariantReportQcComponent },
    { path: 'clia_mgh/variant_reports_pc/qc/:id', component: CliaVariantReportQcComponent },
    { path: 'clia_dartmount/variant_reports_pc/qc/:id', component: CliaVariantReportQcComponent },
    { path: 'clia_yale/variant_reports_pc/qc/:id', component: CliaVariantReportQcComponent },
    { path: 'clia_mda/variant_reports_pc/qc/:id', component: CliaVariantReportQcComponent },
    { path: 'clia_mocha/variant_reports_ntc/qc/:id', component: CliaVariantReportQcComponent },
    { path: 'clia_mgh/variant_reports_ntc/qc/:id', component: CliaVariantReportQcComponent },
    { path: 'clia_dartmount/variant_reports_ntc/qc/:id', component: CliaVariantReportQcComponent },
    { path: 'clia_yale/variant_reports_ntc/qc/:id', component: CliaVariantReportQcComponent },
    { path: 'clia_mda/variant_reports_ntc/qc/:id', component: CliaVariantReportQcComponent },
    { path: 'clia_mocha/variant_reports_pacc/qc/:id', component: CliaVariantReportQcComponent },
    { path: 'clia_mgh/variant_reports_pacc/qc/:id', component: CliaVariantReportQcComponent },
    { path: 'clia_dartmount/variant_reports_pacc/qc/:id', component: CliaVariantReportQcComponent },
    { path: 'clia_yale/variant_reports_pacc/qc/:id', component: CliaVariantReportQcComponent },
    { path: 'clia_mda/variant_reports_pacc/qc/:id', component: CliaVariantReportQcComponent }
  ];

  describe('clia variant report qc component clia type mocha', () => {
    // Setting module for testing
    // Disable old forms
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule.withRoutes(config), DirectivesModule, PipesModule, VariantReportFilteredTableModule],
        declarations: [CliaVariantReportQcComponent],
        providers: [
          { provide: CliaApiService, useClass: MockCliaApiService },
          {
            provide: ActivatedRoute, useValue: {
              snapshot: {
                url: [{ path: 'clia_mocha' }, { path: 'pc' }],
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

    it('should work for clia_mocha',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(CliaVariantReportQcComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(CliaVariantReportQcComponent);
            fixture.componentInstance.ngOnInit();
            fixture.componentInstance.downloadDnaBam();
            fixture.componentInstance.downloadDnaBai();
            fixture.componentInstance.downloadRnaBam();
            fixture.componentInstance.downloadRnaBai();
            fixture.componentInstance.downloadVcf();
          });
      }));

  });

  describe('clia variant report qc component clia type dartmouth', () => {
    // Setting module for testing
    // Disable old forms
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule.withRoutes(config), DirectivesModule, PipesModule, VariantReportFilteredTableModule],
        declarations: [CliaVariantReportQcComponent],
        providers: [
          { provide: CliaApiService, useClass: MockCliaApiService },
          {
            provide: ActivatedRoute, useValue: {
              snapshot: {
                url: [{ path: 'clia_dartmouth' }, { path: 'ntc' }], params: { id: 1234 },
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

    it('should work for clia_dartmouth',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(CliaVariantReportQcComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(CliaVariantReportQcComponent);
            fixture.componentInstance.ngOnInit();
          });
      }));

  });

  describe('clia variant report qc component clia type yale', () => {
    // Setting module for testing
    // Disable old forms
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule.withRoutes(config), DirectivesModule, PipesModule, VariantReportFilteredTableModule],
        declarations: [CliaVariantReportQcComponent],
        providers: [
          { provide: CliaApiService, useClass: MockCliaApiServiceWithErrors },
          {
            provide: ActivatedRoute, useValue: {
              snapshot: {
                url: [{ path: 'clia_yale' }, { path: 'pacc' }], params: { id: 1234 },
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

    it('should work for clia_yale',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(CliaVariantReportQcComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(CliaVariantReportQcComponent);
            fixture.componentInstance.ngOnInit();
          });
      }));

  });

  describe('clia variant report qc component clia type mgh', () => {
    // Setting module for testing
    // Disable old forms
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule.withRoutes(config), DirectivesModule, PipesModule, VariantReportFilteredTableModule],
        declarations: [CliaVariantReportQcComponent],
        providers: [
          { provide: CliaApiService, useClass: MockCliaApiService },
          {
            provide: ActivatedRoute, useValue: {
              snapshot: {
                url: [{ path: 'clia_mgh' }, { path: 'pc' }], params: { id: 1234 },
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

    it('should work for clia_mgh',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(CliaVariantReportQcComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(CliaVariantReportQcComponent);
            fixture.componentInstance.ngOnInit();
          });
      }));

  });

  describe('clia variant report qc component clia type mda', () => {
    // Setting module for testing
    // Disable old forms
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule.withRoutes(config), DirectivesModule, PipesModule, VariantReportFilteredTableModule],
        declarations: [CliaVariantReportQcComponent],
        providers: [
          { provide: CliaApiService, useClass: MockCliaApiService },
          {
            provide: ActivatedRoute, useValue: {
              snapshot: {
                url: [{ path: 'clia_mda' }, { path: 'pc' }], params: { id: 1234 },
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

    it('should work for clia_mda',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(CliaVariantReportQcComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(CliaVariantReportQcComponent);
            fixture.componentInstance.ngOnInit();
          });
      }));

  });
}


class MockCliaApiService {
  getCliaVariantReportQC(): Observable<CliaVariantReportsQCInterface> {
    let testData: CliaVariantReportsQCInterface;
    testData = {
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
    };
    return Observable.of(testData);
  }

  downloadCliaDnaBam(): Observable<any> {
    let testdata = {
      s3_download_file_url: 'javascript:void(0)'
    };
    return Observable.of(testdata);
  }
  downloadCliaDnaBai(): Observable<any> {
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
  downloadCliaRnaBai(): Observable<any> {
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
  getCliaVariantReportQC(): Observable<CliaVariantReportsQCInterface> {
    let testData: CliaVariantReportsQCInterface;
    testData = {
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
    };
    return Observable.throw(testData);
  }

  downloadCliaDnaBam(): Observable<any> {
    let testdata = {
      s3_download_file_url: 'javascript:void(0)'
    };
    return Observable.of(testdata);
  }
  downloadCliaDnaBai(): Observable<any> {
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
  downloadCliaRnaBai(): Observable<any> {
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
