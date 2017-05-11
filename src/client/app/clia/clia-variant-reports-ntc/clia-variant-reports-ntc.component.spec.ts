// import { Component } from '@angular/core';
import {
  async,
  TestBed
} from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';

// import { CliaVariantReportsNtcModule } from './clia-variant-reports-ntc.module';
import { CliaVariantReportsNtcComponent } from './clia-variant-reports-ntc.component';
// import { CliaVariantReportsNtcRoutingModule } from './clia-variant-reports-ntc-routing.module';
import { CliaApiService, CliaVariantReportsNTCInterface } from './../clia-api.service';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { PipesModule } from './../../shared/pipes/pipes.module';
import { DirectivesModule } from './../../shared/directives/directives.module';



export function main() {
  describe('clia variant reports ntc component', () => {
    // Setting module for testing
    // Disable old forms
    let config: any[] = [
      { path: 'clia_variant_reports_ntc', component: 'CliaVariantReportsNtcComponent' }
    ];
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule.withRoutes(config), DirectivesModule, PipesModule],
        declarations: [CliaVariantReportsNtcComponent],
        providers: [
          { provide: CliaApiService, useClass: MockCliaApiService },
          { provide: ActivatedRoute, useValue: { snapshot: { url: [{ path: 'vc_mocha' }] } } }
        ]
      });
    });

    // it('should work',
    //   async(() => {
    //     TestBed
    //       .compileComponents()
    //       .then(() => {
    //         let fixture = TestBed.overrideComponent(CliaVariantReportsNtcComponent, {
    //           set: {
    //             templateUrl: ''
    //           }
    //         }).createComponent(CliaVariantReportsNtcComponent);
    //         // console.log(fixture);
    //         fixture.componentInstance.ngOnInit();
    //       });
    //   }));

  });
}


class MockCliaApiService {
  getCliaVariantReportsNTC(): Observable<CliaVariantReportsNTCInterface> {
    let testData: CliaVariantReportsNTCInterface;
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
