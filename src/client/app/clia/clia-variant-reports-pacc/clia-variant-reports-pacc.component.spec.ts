// import { Component } from '@angular/core';
import {
  async,
  TestBed
} from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';

// import { CliaVariantReportsPaccModule } from './clia-variant-reports-pacc.module';
import { CliaVariantReportsPaccComponent } from './clia-variant-reports-pacc.component';
// import { CliaVariantReportsPaccRoutingModule } from './clia-variant-reports-pacc-routing.module';
import { CliaApiService, CliaVariantReportsPACCInterface } from './../clia-api.service';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { PipesModule } from './../../shared/pipes/pipes.module';
import { DirectivesModule } from './../../shared/directives/directives.module';



export function main() {
  describe('clia variant reports pacc component', () => {
    // Setting module for testing
    // Disable old forms
    let config: any[] = [
      { path: 'clia_variant_reports_pacc', component: 'CliaVariantReportsPaccComponent' }
    ];
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule.withRoutes(config), DirectivesModule, PipesModule],
        declarations: [CliaVariantReportsPaccComponent],
        providers: [
          { provide: CliaApiService, useClass: MockCliaApiService },
          { provide: ActivatedRoute, useValue: { snapshot: { url: [{ path: 'vc_mocha' }] } } }
        ]
      });
    });

    it('should work',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(CliaVariantReportsPaccComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(CliaVariantReportsPaccComponent);
            // console.log(fixture);
            fixture.componentInstance.ngOnInit();
          });
      }));

  });
}


class MockCliaApiService {
  getCliaVariantReportsPACC(): Observable<CliaVariantReportsPACCInterface> {
    let testData: CliaVariantReportsPACCInterface;
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
}
