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
  describe('clia variant reports pacc component with clia type mocha', () => {
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
          { provide: ActivatedRoute, useValue: { snapshot: { url: [{ path: 'clia_mocha' }], params: { id: 1234 } } } }
        ]
      });
    });

    it('should work for clia_mocha',
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
            fixture.componentInstance.downloadDnaBam();
            fixture.componentInstance.downloadRnaBam();
            fixture.componentInstance.downloadVcf();
          });
      }));

  });
  describe('clia variant reports pacc component with clia type dartmouth', () => {
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
          { provide: ActivatedRoute, useValue: { snapshot: { url: [{ path: 'clia_dartmouth' }], params: { id: 1234 } } } }
        ]
      });
    });

    it('should work for clia_dartmouth',
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
  describe('clia variant reports pacc component with clia type yale', () => {
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
          { provide: ActivatedRoute, useValue: { snapshot: { url: [{ path: 'clia_yale' }], params: { id: 1234 } } } }
        ]
      });
    });

    it('should work for clia_yale',
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
  describe('clia variant reports pacc component with clia type mgh', () => {
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
          { provide: ActivatedRoute, useValue: { snapshot: { url: [{ path: 'clia_mgh' }], params: { id: 1234 } } } }
        ]
      });
    });

    it('should work for clia_mgh',
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
  describe('clia variant reports pacc component with clia type mda', () => {
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
          { provide: CliaApiService, useClass: MockCliaApiServiceWithErrors },
          { provide: ActivatedRoute, useValue: { snapshot: { url: [{ path: 'clia_mda' }], params: { id: 1234 } } } }
        ]
      });
    });

    it('should work for clia_mda',
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
