// import { Component } from '@angular/core';
import {
  async,
  TestBed
} from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from '../../shared/datatables/index';
// import { CliaVariantReportsNtcModule } from './clia-variant-reports-ntc.module';
import { CliaParentComponent } from './clia-parent.component';
// import { CliaVariantReportsNtcRoutingModule } from './clia-variant-reports-ntc-routing.module';
import { CliaApiService } from './../clia-api.service';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { PipesModule } from './../../shared/pipes/pipes.module';
import { DirectivesModule } from './../../shared/directives/directives.module';



export function main() {
  describe('clia parent component', () => {
    // Setting module for testing
    // Disable old forms
    let config: any[] = [
      { path: 'clia_variant_reports_ntc', component: 'CliaParentComponent' }
    ];
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule.withRoutes(config), DirectivesModule, PipesModule, FormsModule, DataTableModule],
        declarations: [CliaParentComponent],
        providers: [
          { provide: CliaApiService, useClass: MockCliaApiService },
          { provide: ActivatedRoute, useValue: { snapshot: { url: [{ path: 'clia_mocha' }], data: { cliaType: 'mocha' } } } }
        ]
      });
    });

    // it('should work',
    //   async(() => {
    //     TestBed
    //       .compileComponents()
    //       .then(() => {
    //         let fixture = TestBed.overrideComponent(CliaParentComponent, {
    //           set: {
    //             templateUrl: ''
    //           }
    //         }).createComponent(CliaParentComponent);
    //         // console.log(fixture);
    //         fixture.componentInstance.ngOnInit();
    //       });
    //   }));

  });
}


class MockCliaApiService {
  getCliaDetailsPC(): Observable<any> {
    let testData;
    testData = [{
      copy_number_variants: ['test'],
      gene_fusions: ['test'],
      snv_indels: ['test'],
      molecular_id: { 'test': 'test' },
      analysis_id: { 'test': 'test' },
      total_variants: { 'test': 'test' },
      mapd: { 'test': 'test' },
      cellularity: { 'test': 'test' },
      torrent_variant_caller_version: { 'test': 'test' },
      report_status: { 'test': 'test' },
      date_molecular_id_created: "2-12-2015",
      date_variant_received: "2-12-2015"
    }];
    return Observable.of(testData);
  }
  getCliaDetailsNTC(): Observable<any> {
    let testdata = [{
      date_molecular_id_created: '2-12-2016',
      date_variant_received: '2-12-2016',
    }];
    return Observable.of(testdata);
  }
  getCliaDetailsPACC(): Observable<any> {
    let testdata = [{
      date_molecular_id_created: '2-12-2016',
      date_variant_received: '2-12-2016',
    }];
    return Observable.of(testdata);
  }

  getDataIon(): Observable<any> {
    let testdata = [{
      date_molecular_id_created: '2-12-2016',
      date_variant_received: '2-12-2016',
    }];
    return Observable.of(testdata);
  }
  getCliaIon(): Observable<any> {
    let testdata = [{
      date_molecular_id_created: '2-12-2016',
      date_variant_received: '2-12-2016',
    }];
    return Observable.of(testdata);
  }
  generateMsn(): Observable<any> {
    let testdata = [{
      date_molecular_id_created: '2-12-2016',
      date_variant_received: '2-12-2016',
    }];
    return Observable.of(testdata);
  }
}
