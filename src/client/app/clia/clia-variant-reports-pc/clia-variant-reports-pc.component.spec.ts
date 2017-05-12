// import { Component } from '@angular/core';
import {
  async,
  TestBed
} from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';

// import { CliaVariantReportsPcModule } from './clia-variant-reports-pc.module';
import { CliaVariantReportsPcComponent } from './clia-variant-reports-pc.component';
// import { CliaVariantReportsPcRoutingModule } from './clia-variant-reports-pc-routing.module';
import { CliaApiService, CliaVariantReportsPCInterface } from './../clia-api.service';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { PipesModule } from './../../shared/pipes/pipes.module';
import { DirectivesModule } from './../../shared/directives/directives.module';



export function main() {
  describe('clia variant reports pc component', () => {
    // Setting module for testing
    // Disable old forms
    let config: any[] = [
      { path: 'clia_variant_reports_pc', component: 'CliaVariantReportsPcComponent' }
    ];
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule.withRoutes(config), DirectivesModule, PipesModule],
        declarations: [CliaVariantReportsPcComponent],
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
    //         let fixture = TestBed.overrideComponent(CliaVariantReportsPcComponent, {
    //           set: {
    //             templateUrl: ''
    //           }
    //         }).createComponent(CliaVariantReportsPcComponent);
    //         // console.log(fixture);
    //         fixture.componentInstance.ngOnInit();
    //       });
    //   }));

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
}
