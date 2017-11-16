import {
  async,
  TestBed
} from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';

import { CliaVariantReportQcComponent } from './clia-variant-report-qc.component';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { PipesModule } from './../../shared/pipes/pipes.module';
import { DirectivesModule } from './../../shared/directives/directives.module';
import { VariantReportFilteredTableModule } from '../../shared/variant-report-filtered-table/variant-report-filtered-table.module';
import { SharedModule } from '../../shared/shared.module';
import { SampleControlApiService } from '../sample-control-api.service';
import { CliaVariantReportsQCViewData } from '../clia-data-interfaces';
import { PatientApiServiceStub, PatientApiServiceMock } from '../../patient/testing/patient-api-service-stub';

export function main() {

  let config: any[] = [
    { path: 'clia_mocha/variant_reports_pc/qc/:id', component: CliaVariantReportQcComponent },
    { path: 'clia_mgh/variant_reports_pc/qc/:id', component: CliaVariantReportQcComponent },
    { path: 'clia_dartmouth/variant_reports_pc/qc/:id', component: CliaVariantReportQcComponent },
    { path: 'clia_yale/variant_reports_pc/qc/:id', component: CliaVariantReportQcComponent },
    { path: 'clia_mda/variant_reports_pc/qc/:id', component: CliaVariantReportQcComponent },
    { path: 'clia_mocha/variant_reports_ntc/qc/:id', component: CliaVariantReportQcComponent },
    { path: 'clia_mgh/variant_reports_ntc/qc/:id', component: CliaVariantReportQcComponent },
    { path: 'clia_dartmouth/variant_reports_ntc/qc/:id', component: CliaVariantReportQcComponent },
    { path: 'clia_yale/variant_reports_ntc/qc/:id', component: CliaVariantReportQcComponent },
    { path: 'clia_mda/variant_reports_ntc/qc/:id', component: CliaVariantReportQcComponent },
    { path: 'clia_mocha/variant_reports_pacc/qc/:id', component: CliaVariantReportQcComponent },
    { path: 'clia_mgh/variant_reports_pacc/qc/:id', component: CliaVariantReportQcComponent },
    { path: 'clia_dartmouth/variant_reports_pacc/qc/:id', component: CliaVariantReportQcComponent },
    { path: 'clia_yale/variant_reports_pacc/qc/:id', component: CliaVariantReportQcComponent },
    { path: 'clia_mda/variant_reports_pacc/qc/:id', component: CliaVariantReportQcComponent }
  ];


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

  describe('clia variant report qc component clia type mocha', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule.withRoutes(config),
          DirectivesModule,
          PipesModule,
          VariantReportFilteredTableModule,
          SharedModule
        ],
        declarations: [CliaVariantReportQcComponent],
        providers: [
          { provide: SampleControlApiService, useClass: MockCliaApiService },
          {
            provide: ActivatedRoute, useValue: {
              snapshot: {
                url: [{path: 'clia_mocha'}, {path: 'pc'}],
                params: {id: 1234},
                data: {
                  data: {
                    data: {
                      molecular_id: {'test': 'test_mocha'},
                      analysis_id: {'test': 'test'},
                      total_variants: {'test': 'test'},
                      mapd: {'test': 'test'},
                      cellularity: {'test': 'test'},
                      torrent_variant_caller_version: {'test': 'test'},
                      oncomine_control_panel_summary: ['test'],
                      copy_number_variants: parsedVCFGenes,
                      parsedVCFGenes: parsedVCFGenes,
                      gene_fusions: ['test'],
                      snv_indels: ['test'],
                      sum: 0
                    },
                    graph: {
                      parsedVCFGenes: parsedVCFGenes,
                      tvcVersion: ['test']
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
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(CliaVariantReportQcComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(CliaVariantReportQcComponent);

            let comp: CliaVariantReportQcComponent = fixture.componentInstance;
            comp.parsedVCFGenes = {'parsedVCFGenes':[
              {
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
              }
            ]};
            fixture.componentInstance.ngOnInit();
            expect(comp.molecular_id).toEqual({ test: 'test_mocha' });
          });
      }));

  });

  describe('clia variant report qc component clia type dartmouth', () => {

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule.withRoutes(config),
          DirectivesModule,
          PipesModule,
          VariantReportFilteredTableModule,
          SharedModule
        ],
        declarations: [CliaVariantReportQcComponent],
        providers: [
          { provide: SampleControlApiService, useClass: MockCliaApiService },
          {
            provide: ActivatedRoute, useValue: {
              snapshot: {
                url: [{ path: 'clia_dartmouth' }, { path: 'ntc' }], params: { id: 1234 },
                data: {
                  data: {
                    data: {
                      molecular_id: {'test': 'dartmouth_test'},
                      analysis_id: {'test': 'test'},
                      total_variants: {'test': 'test'},
                      mapd: {'test': 'test'},
                      cellularity: {'test': 'test'},
                      torrent_variant_caller_version: {'test': 'test'},
                      oncomine_control_panel_summary: ['test'],
                      copy_number_variants: parsedVCFGenes,
                      parsedVCFGenes: parsedVCFGenes,
                      gene_fusions: ['test'],
                      snv_indels: ['test'],
                      sum: 0
                    },
                    graph: {
                      parsedVCFGenes: parsedVCFGenes,
                      tvcVersion: ['test']
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
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(CliaVariantReportQcComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(CliaVariantReportQcComponent);
            let comp: CliaVariantReportQcComponent = fixture.componentInstance;
            comp.parsedVCFGenes = {'parsedVCFGenes':[
              {
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
              }
            ]};
            fixture.componentInstance.ngOnInit();
            expect(comp.molecular_id).toEqual({ test: 'dartmouth_test' });
          });
      }));

  });

  describe('clia variant report qc component clia type yale', () => {


    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule.withRoutes(config),
          DirectivesModule,
          PipesModule,
          VariantReportFilteredTableModule,
          SharedModule
        ],
        declarations: [CliaVariantReportQcComponent],
        providers: [
          { provide: SampleControlApiService, useClass: MockCliaApiServiceWithErrors },
          {
            provide: ActivatedRoute, useValue: {
              snapshot: {
                url: [{ path: 'clia_yale' }, { path: 'pacc' }], params: { id: 1234 },
                data: {
                  data: {
                    data: {
                      molecular_id: {'test': 'yale_test'},
                      analysis_id: {'test': 'test'},
                      total_variants: {'test': 'test'},
                      mapd: {'test': 'test'},
                      cellularity: {'test': 'test'},
                      torrent_variant_caller_version: {'test': 'test'},
                      oncomine_control_panel_summary: ['test'],
                      copy_number_variants: parsedVCFGenes,
                      parsedVCFGenes: parsedVCFGenes,
                      gene_fusions: ['test'],
                      snv_indels: ['test'],
                      sum: 0
                    },
                    graph: {
                      parsedVCFGenes: parsedVCFGenes,
                      tvcVersion: ['test']
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
            let comp: CliaVariantReportQcComponent = fixture.componentInstance;
            comp.parsedVCFGenes = {'parsedVCFGenes':[
              {
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
              }
            ]};
            fixture.componentInstance.ngOnInit();
            expect(comp.molecular_id).toEqual({ test: 'yale_test' });
          });
      }));

  });

  describe('clia variant report qc component clia type mgh', () => {


    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule.withRoutes(config),
          DirectivesModule,
          PipesModule,
          VariantReportFilteredTableModule,
          SharedModule
        ],
        declarations: [CliaVariantReportQcComponent],
        providers: [
          { provide: SampleControlApiService, useClass: MockCliaApiService },
          {
            provide: ActivatedRoute, useValue: {
              snapshot: {
                url: [{ path: 'clia_mgh' }, { path: 'pc' }], params: { id: 1234 },
                data: {
                  data: {
                    data: {
                      molecular_id: {'test': 'mgh_test'},
                      analysis_id: {'test': 'test'},
                      total_variants: {'test': 'test'},
                      mapd: {'test': 'test'},
                      cellularity: {'test': 'test'},
                      torrent_variant_caller_version: {'test': 'test'},
                      oncomine_control_panel_summary: ['test'],
                      copy_number_variants: parsedVCFGenes,
                      parsedVCFGenes: parsedVCFGenes,
                      gene_fusions: ['test'],
                      snv_indels: ['test'],
                      sum: 0
                    },
                    graph: {
                      parsedVCFGenes: parsedVCFGenes,
                      tvcVersion: ['test']
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
            let comp: CliaVariantReportQcComponent = fixture.componentInstance;
            comp.parsedVCFGenes = {'parsedVCFGenes':[
              {
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
              }
            ]};
            fixture.componentInstance.ngOnInit();
            expect(comp.molecular_id).toEqual({ test: 'mgh_test' });
          });
      }));

  });

  describe('clia variant report qc component clia type mda', () => {


    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule.withRoutes(config),
          DirectivesModule,
          PipesModule,
          VariantReportFilteredTableModule,
          SharedModule
        ],
        declarations: [CliaVariantReportQcComponent],
        providers: [
          { provide: SampleControlApiService, useClass: MockCliaApiService },
          {
            provide: ActivatedRoute, useValue: {
              snapshot: {
                url: [{ path: 'clia_mda' }, { path: 'pc' }], params: { id: 1234 },
                data: {
                  data: {
                    data: {
                      molecular_id: {'test': 'mda_test'},
                      analysis_id: {'test': 'test'},
                      total_variants: {'test': 'test'},
                      mapd: {'test': 'test'},
                      cellularity: {'test': 'test'},
                      torrent_variant_caller_version: {'test': 'test'},
                      oncomine_control_panel_summary: ['test'],
                      copy_number_variants: parsedVCFGenes,
                      parsedVCFGenes: parsedVCFGenes,
                      gene_fusions: ['test'],
                      snv_indels: ['test'],
                      sum: 0
                    },
                    graph: {
                      parsedVCFGenes: parsedVCFGenes,
                      tvcVersion: ['test']
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
            let comp: CliaVariantReportQcComponent = fixture.componentInstance;
            comp.parsedVCFGenes = {'parsedVCFGenes':[
              {
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
              }
            ]};
            fixture.componentInstance.ngOnInit();
            expect(comp.molecular_id).toEqual({ test: 'mda_test' });
          });
      }));

  });
}


class MockCliaApiService {
  getGraph(): Observable<CliaVariantReportsQCViewData> {
    let testData: CliaVariantReportsQCViewData;
    testData = {
      molecular_id: { 'test': 'test' },
      analysis_id: { 'test': 'test' },
      total_variants: { 'test': 'test' },
      mapd: { 'test': 'test' },
      cellularity: { 'test': 'test' },
      torrent_variant_caller_version: { 'test': 'test' },
      oncomine_control_panel_summary: ['test'],
      copy_number_variants: [{
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
      }],
      gene_fusions: ['test'],
      snv_indels: ['test'],
      parsedVCFGenes: [{
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
      }],
      copy_number_variant_genes: ['test'],
      parsed_vcf_genes: { 'test': 'test' },
      file_name: 'test',
      body: { 'test': 'test' },
      statusCode: 'test',
      header: { 'test': 'test' },
      tvcVersion: ['test']
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
  // getCliaVariantReportQC(): Observable<CliaVariantReportsQCViewData> {
  //   let testData: CliaVariantReportsQCViewData;
  //   testData = {
  //     molecular_id: { 'test': 'test' },
  //     analysis_id: { 'test': 'test' },
  //     total_variants: { 'test': 'test' },
  //     mapd: { 'test': 'test' },
  //     cellularity: { 'test': 'test' },
  //     torrent_variant_caller_version: { 'test': 'test' },
  //     oncomine_control_panel_summary: ['test'],
  //     copy_number_variants: ['test'],
  //     gene_fusions: ['test'],
  //     snv_indels: ['test']
  //   };
  //   return Observable.throw(testData);
  // }

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
