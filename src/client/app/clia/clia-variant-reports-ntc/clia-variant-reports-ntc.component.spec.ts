import {
  async,
  TestBed
} from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';

import { CliaVariantReportsNtcComponent } from './clia-variant-reports-ntc.component';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { PipesModule } from './../../shared/pipes/pipes.module';
import { DirectivesModule } from './../../shared/directives/directives.module';
import { SharedModule } from '../../shared/shared.module';
import { SampleControlApiService } from '../sample-control-api.service';
import { CliaVariantReportsNTCViewData } from '../clia-data-interfaces';

export function main() {

  let parsedVCFGenes = [{
    "gene": "ARID1A",
    "values": [
      1.859241,
      1.886604,
      1.910464,
      1.938356,
      1.972687,
      1.985888,
      2.04,
      2.095586,
      2.10961,
      2.146974,
      2.178319,
      2.205869,
      2.238333
    ],
    "chromosome": "chr1",
    "position": "27022976",
    "tsgGene": true,
    "rawCopyNumber": 2.04,
    "confidence_intervals": [
      "0.05:1.91046",
      "0.95:2.17832"
    ]
  }];

  describe('clia variant reports ntc component with clia type mocha', () => {


    let config: any[] = [
      { path: 'clia_variant_reports_ntc', component: 'CliaVariantReportsNtcComponent' }
    ];

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule.withRoutes(config),
          DirectivesModule,
          PipesModule,
          SharedModule
        ],
        declarations: [CliaVariantReportsNtcComponent],
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
                      molecular_id: { 'test': 'test' },
                      analysis_id: { 'test': 'test' },
                      total_variants: { 'test': 'test' },
                      mapd: { 'test': 'test' },
                      cellularity: { 'test': 'test' },
                      date_variant_received: { 'test': 'test' },
                      torrent_variant_caller_version: { 'test': 'test' },
                      report_status: { 'test': 'test' },
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
            let fixture = TestBed.overrideComponent(CliaVariantReportsNtcComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(CliaVariantReportsNtcComponent);
            fixture.componentInstance.ngOnInit();
            fixture.componentInstance.downloadDnaBam();
            fixture.componentInstance.downloadDnaBai();
            fixture.componentInstance.downloadRnaBam();
            fixture.componentInstance.downloadRnaBai();
            fixture.componentInstance.downloadVcf();
            fixture.componentInstance.confirmReport();
          });
      }));

  });

  describe('clia variant reports ntc component with clia type dartmouth', () => {


    let config: any[] = [
      { path: 'clia_variant_reports_ntc', component: 'CliaVariantReportsNtcComponent' }
    ];

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule.withRoutes(config),
          DirectivesModule,
          PipesModule,
          SharedModule
        ],
        declarations: [CliaVariantReportsNtcComponent],
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
                      molecular_id: {'test': 'test_mocha'},
                      analysis_id: {'test': 'test'},
                      total_variants: {'test': 'test'},
                      mapd: {'test': 'test'},
                      cellularity: {'test': 'test'},
                      torrent_variant_caller_version: {'test': 'test'},
                      copy_number_variants: parsedVCFGenes,
                      gene_fusions: ['test'],
                      snv_indels: ['test'],
                      date_variant_received: ['test']
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
            let fixture = TestBed.overrideComponent(CliaVariantReportsNtcComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(CliaVariantReportsNtcComponent);
            fixture.componentInstance.ngOnInit();
            expect(fixture.componentInstance.molecular_id).toEqual({"test":"test_mocha"})
          });
      }));

  });

  describe('clia variant reports ntc component with clia type yale', () => {


    let config: any[] = [
      { path: 'clia_variant_reports_ntc', component: 'CliaVariantReportsNtcComponent' }
    ];

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule.withRoutes(config),
          DirectivesModule,
          PipesModule,
          SharedModule
        ],
        declarations: [CliaVariantReportsNtcComponent],
        providers: [
          { provide: SampleControlApiService, useClass: MockCliaApiServiceWithError },
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
            let fixture = TestBed.overrideComponent(CliaVariantReportsNtcComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(CliaVariantReportsNtcComponent);
            fixture.componentInstance.ngOnInit();
            expect(fixture.componentInstance.molecular_id).toEqual({"test":"test_yale"})
          });
      }));

  });

  describe('clia variant reports ntc component with clia type mgh', () => {


    let config: any[] = [
      { path: 'clia_variant_reports_ntc', component: 'CliaVariantReportsNtcComponent' }
    ];

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule.withRoutes(config),
          DirectivesModule,
          PipesModule,
          SharedModule
        ],
        declarations: [CliaVariantReportsNtcComponent],
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
            let fixture = TestBed.overrideComponent(CliaVariantReportsNtcComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(CliaVariantReportsNtcComponent);
            fixture.componentInstance.ngOnInit();
            expect(fixture.componentInstance.molecular_id).toEqual({"test":"test_mgh"})
          });
      }));

  });

  describe('clia variant reports ntc component with clia type mda', () => {


    let config: any[] = [
      { path: 'clia_variant_reports_ntc', component: 'CliaVariantReportsNtcComponent' }
    ];

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule.withRoutes(config),
          DirectivesModule,
          PipesModule,
          SharedModule
        ],
        declarations: [CliaVariantReportsNtcComponent],
        providers: [
          { provide: SampleControlApiService, useClass: MockCliaApiService },
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
            let fixture = TestBed.overrideComponent(CliaVariantReportsNtcComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(CliaVariantReportsNtcComponent);
            fixture.componentInstance.ngOnInit();
            expect(fixture.componentInstance.molecular_id).toEqual({"test":"test_mda"})
          });
      }));

  });

}


class MockCliaApiService {
  getCliaVariantReportsNTC(type: any): Observable<CliaVariantReportsNTCViewData> {
    let testData: CliaVariantReportsNTCViewData;
    testData = {
      molecular_id: { 'test': 'test' },
      analysis_id: { 'test': 'test' },
      total_variants: { 'test': 'test' },
      mapd: { 'test': 'test' },
      cellularity: { 'test': 'test' },
      date_variant_received: ['test'],
      torrent_variant_caller_version: { 'test': 'test' },
      report_status: { 'test': 'test' },
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
  confirmReport(): Observable<any> {
    let testdata = {
      s3_download_file_url: 'javascript:void(0)'
    };
    return Observable.of(testdata);
  }
}

class MockCliaApiServiceWithError {
  getCliaVariantReportsNTC(type: any): Observable<CliaVariantReportsNTCViewData> {
    let testData: CliaVariantReportsNTCViewData;
    testData = {
      molecular_id: { 'test': 'test' },
      analysis_id: { 'test': 'test' },
      total_variants: { 'test': 'test' },
      mapd: { 'test': 'test' },
      cellularity: { 'test': 'test' },
      date_variant_received: ['test'],
      torrent_variant_caller_version: { 'test': 'test' },
      report_status: { 'test': 'test' },
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
