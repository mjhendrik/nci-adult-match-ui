// import { Component } from '@angular/core';
import {
  async,
  TestBed
} from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';

// import { CliaVariantReportqcModule } from './clia-variant-report-qc.module';
import { CliaVariantReportQcComponent } from './clia-variant-report-qc.component';
// import { CliaVariantReportqcRoutingModule } from './clia-variant-report-qc-routing.module';
import { CliaApiService, CliaVariantReportsQCInterface } from './../clia-api.service';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { PipesModule } from './../../shared/pipes/pipes.module';
import { DirectivesModule } from './../../shared/directives/directives.module';
import { VariantReportFilteredTableModule } from '../../shared/variant-report-table/variant-report-filtered-table.module';


export function main() {
  describe('clia variant report qc component', () => {
    // Setting module for testing
    // Disable old forms
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

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule.withRoutes(config), DirectivesModule, PipesModule, VariantReportFilteredTableModule],
        declarations: [CliaVariantReportQcComponent],
        providers: [
          { provide: CliaApiService, useClass: MockCliaApiService },
          { provide: ActivatedRoute, useValue: { snapshot: { url: [{ path: 'clia_mocha' }, { path: 'pc' }], params: { id: 1234 } } } }
        ]
      });
    });

    it('should work',
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
