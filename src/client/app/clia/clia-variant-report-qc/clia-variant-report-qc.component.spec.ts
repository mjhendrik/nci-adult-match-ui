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



export function main() {
  describe('clia variant report qc component', () => {
    // Setting module for testing
    // Disable old forms
    let config: any[] = [
      { path: 'clia_variant_report_qc', component: 'CliaVariantReportqcComponent' }
    ];
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule.withRoutes(config), DirectivesModule, PipesModule],
        declarations: [CliaVariantReportQcComponent],
        providers: [
          { provide: CliaApiService, useClass: MockCliaApiService },
          { provide: ActivatedRoute, useValue: { snapshot: { url: [{ path: 'vc_mocha' }] } } }
        ]
      });
    });

    it('dummy test', () => {
      expect(true).toEqual(true);
    });

    // it('should work',
    //   async(() => {
    //     TestBed
    //       .compileComponents()
    //       .then(() => {
    //         let fixture = TestBed.overrideComponent(CliaVariantReportQcComponent, {
    //           set: {
    //             templateUrl: ''
    //           }
    //         }).createComponent(CliaVariantReportQcComponent);
    //         // console.log(fixture);
    //         fixture.componentInstance.ngOnInit();
    //       });
    //   }));

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
}
