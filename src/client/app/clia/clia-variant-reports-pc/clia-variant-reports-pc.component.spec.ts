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

    it('should work',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(CliaVariantReportsPcComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(CliaVariantReportsPcComponent);
            // console.log(fixture);
            fixture.componentInstance.ngOnInit();
          });
      }));

  });
}


class MockCliaApiService {
  getCliaVariantReportsPC(): Observable<CliaVariantReportsPCInterface> {
    let testData: CliaVariantReportsPCInterface;
    testData = { lengendPCs: ['test'], tablePCsData: ['test'], variantReportPC: { 'test': 'test' } };
    return Observable.of(testData);
  }
}
