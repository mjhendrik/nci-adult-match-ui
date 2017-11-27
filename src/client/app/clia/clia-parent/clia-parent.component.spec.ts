// import { Component } from '@angular/core';
import {
  async,
  TestBed,
} from '@angular/core/testing';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { DataTableModule } from '../../shared/datatables/index';
import { SharedModule } from '../../shared/shared.module';
import { DirectivesModule } from './../../shared/directives/directives.module';
import { CliaParentComponent } from './clia-parent.component';
import { RouterTestingModule } from '@angular/router/testing';
import { PipesModule } from './../../shared/pipes/pipes.module';
import { SampleControlApiService } from '../sample-control-api.service';
import { IonReportersApiService } from '../ion-reporters-api.service';
import { UserProfileService } from '../../shared/user-profile/user-profile.service';
import { UserProfileMockService } from '../../shared/testing/user-profile-mock.service';
import { CliaDataService } from "./../../shared/clia/clia-data.service";
import { CliaApiServiceStub } from '../testing/clia-api-service-stub';


export function main() {


  let resolved_data = {
    PCData: [{
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
      date_molecular_id_created: '2-12-2015',
      date_variant_received: '2-12-2015'
    }],
    NTCData: [{
      date_molecular_id_created: '2-12-2016',
      date_variant_received: '2-12-2016',
    }],
    PACCData: [{
      date_molecular_id_created: '2-12-2016',
      date_variant_received: '2-12-2016',
    }],
    ionData: [{
      date_molecular_id_created: '2-12-2016',
      date_variant_received: '2-12-2016',
    }]
  };



  describe('clia parent component with clia type mocha', () => {


    let config: any[] = [
      { path: 'clia_variant_reports_ntc', component: 'CliaParentComponent' }
    ];
    // inject([MockBackend], (mockBackend: MockBackend)
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule.withRoutes(config),
          DirectivesModule,
          PipesModule,
          FormsModule,
          DataTableModule,
          SharedModule],
        declarations: [CliaParentComponent],
        providers: [
          { provide: SampleControlApiService, useClass: MockCliaApiService },
          { provide: IonReportersApiService, useClass: MockCliaIonApiService },
          { provide: CliaDataService, useClass: MockCliaApiService },
          {
            provide: ActivatedRoute, useValue: {
              snapshot:
              {
                url: [{ path: 'clia_mocha' }],
                data: {
                  cliaTypeName: 'mocha',
                  adata: resolved_data
                }
              }
            }
          },
          { provide: UserProfileService, useClass: UserProfileMockService }
        ]
      });

      spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify({ 'roles': ['ADMIN'] }));
    });

    it('Clia Parent componenet should work',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(CliaParentComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(CliaParentComponent);

            let comp: CliaParentComponent = fixture.componentInstance;
            // comp.tablePCData = [{"nextGenerationSequence": {
            //   "ngsRunNumber": "1",
            //   "metadata": "",
            //   "dateReceived": '2016-10-28 12:56:19.566',
            //   "dateVerified": '2016-10-28 12:56:19.566',
            //   "status": "PENDING",
            //   "ionReporterResults": {
            //     "jobName": "job-sc-mocha-1",
            //     "molecularSequenceNumber": "SampleControl_MoCha_1",
            //     "ionReporterId": "BDD",
            //     "ionReporterUrl": "",
            //     "singleNucleotideVariantsFileName": "",
            //     "indelVariantsFileName": "",
            //     "copyNumberVariantsFileName": "",
            //     "geneFusionsFileName": "",
            //     "nonHotspotRulesFileName": "",
            //     "dnaBamFilePath": "s3://BDD/SampleControl_MoCha_1/job-sc-mocha-1/sample1.bam",
            //     "rnaBamFilePath": "s3://BDD/SampleControl_MoCha_1/job-sc-mocha-1/sample2.bam",
            //     "vcfFilePath": "s3://BDD/SampleControl_MoCha_1/job-sc-mocha-1/4_48_MATCHControl_v1_MATCHControl_RNA_v1.vcf",
            //     "qcFilePath": "",
            //     "variantReport": {
            //       "singleNucleotideVariants": [""]
            //     }
            //   }
            // }}];

            comp.tablePCData = [{
              "id": "MoCha_1",
              "molecularSequenceNumber": "SampleControl_MoCha_1",
              "dateCreated": '2016-10-28 12:56:19.566',
              "dateReceived": '2016-10-28 12:56:19.566',
              "site": "MoCha",
              "siteIpAddress": "0:0:0:0:0:0:0:1",
              "positiveControlVersion": "2",
              "positiveControlDateLoaded": '2016-10-28 12:56:19.566',
              "status": "FAILED",
              "passed": "false",
              "nextGenerationSequence": {
                "ngsRunNumber": "1",
                "metadata": "",
                "dateReceived": '2016-10-28 12:56:19.566',
                "dateVerified": '2016-10-28 12:56:19.566',
                "status": "PENDING",
                "ionReporterResults": {
                  "jobName": "job-sc-mocha-1",
                  "molecularSequenceNumber": "SampleControl_MoCha_1",
                  "ionReporterId": "BDD",
                  "ionReporterUrl": "",
                  "singleNucleotideVariantsFileName": "",
                  "indelVariantsFileName": "",
                  "copyNumberVariantsFileName": "",
                  "geneFusionsFileName": "",
                  "nonHotspotRulesFileName": "",
                  "dnaBamFilePath": "s3://BDD/SampleControl_MoCha_1/job-sc-mocha-1/sample1.bam",
                  "rnaBamFilePath": "s3://BDD/SampleControl_MoCha_1/job-sc-mocha-1/sample2.bam",
                  "vcfFilePath": "s3://BDD/SampleControl_MoCha_1/job-sc-mocha-1/4_48_MATCHControl_v1_MATCHControl_RNA_v1.vcf",
                  "qcFilePath": "",
                  "variantReport": {
                    "singleNucleotideVariants": [""]
                  }
                }
              }
            }];

            // let cliaApiServiceStub: CliaApiServiceStub = new CliaApiServiceStub();
            // let cliaApiServiceStub:any = CliaApiServiceStub.makeCliaParentData();
            // console.log("cliaApiServiceStub--> " + JSON.stringify(cliaApiServiceStub))
            // fixture.componentInstance.tablePCData = cliaApiServiceStub;
            fixture.componentInstance.ngOnInit();
            // fixture.componentInstance.getDataPC();

          });
      }));

    it('should test setControlType',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(CliaParentComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(CliaParentComponent);
            // console.log(fixture);
            fixture.componentInstance.setControlType('test');
            expect(fixture.componentInstance.control_type).toBe('test');
          });
      }));

    it('should test generateMsn with control type positive',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(CliaParentComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(CliaParentComponent);
            fixture.componentInstance.control_type = 'positive';
            fixture.componentInstance.generateMsn();
            expect(fixture.componentInstance.control_type).toBe('positive');
          });
      }));

    it('should test generateMsn with control type no_template',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(CliaParentComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(CliaParentComponent);
            fixture.componentInstance.control_type = 'no_template';
            fixture.componentInstance.generateMsn();
            expect(fixture.componentInstance.control_type).toBe('no_template');
          });
      }));

    it('should test generateMsn with control type proficiency_competency',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(CliaParentComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(CliaParentComponent);
            fixture.componentInstance.control_type = 'proficiency_competency';
            fixture.componentInstance.generateMsn();
            expect(fixture.componentInstance.control_type).toBe('proficiency_competency');
          });
      }));
  });

  describe('clia parent component with clia type dartmouth', () => {


    let config: any[] = [
      { path: 'clia_variant_reports_ntc', component: 'CliaParentComponent' }
    ];
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule.withRoutes(config), DirectivesModule, PipesModule, FormsModule, DataTableModule],
        declarations: [CliaParentComponent],
        providers: [
          { provide: SampleControlApiService, useClass: MockCliaApiService },
          { provide: IonReportersApiService, useClass: MockCliaIonApiService },
          { provide: CliaDataService, useClass: MockCliaTransferApiService },
          {
            provide: ActivatedRoute, useValue: {
              snapshot: {
                url: [{ path: 'clia_dartmouth' }],
                data: {
                  cliaType: 'dartmouth',
                  data: resolved_data
                }
              }
            }
          },
          { provide: UserProfileService, useClass: UserProfileMockService }
        ]
      });
      spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify({ 'roles': ['MOCHA_VARIANT_REPORT_REVIEWER'] }));
    });

    it('should work for clia_dartmouth',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(CliaParentComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(CliaParentComponent);
            fixture.componentInstance.ngOnInit();
          });
      }));

  });

  describe('clia parent component with clia type yale', () => {


    let config: any[] = [
      { path: 'clia_variant_reports_ntc', component: 'CliaParentComponent' }
    ];
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule.withRoutes(config), DirectivesModule, PipesModule, FormsModule, DataTableModule],
        declarations: [CliaParentComponent],
        providers: [
          { provide: SampleControlApiService, useClass: MockCliaApiService },
          { provide: IonReportersApiService, useClass: MockCliaIonApiService },
          { provide: CliaDataService, useClass: MockCliaTransferApiService },
          {
            provide: ActivatedRoute, useValue: {
              snapshot: {
                url: [{ path: 'clia_yale' }],
                data: {
                  cliaType: 'yale',
                  data: resolved_data
                }
              }
            }
          },
          { provide: UserProfileService, useClass: UserProfileMockService }
        ]
      });
      spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify({ 'roles': ['MOCHA_VARIANT_REPORT_REVIEWER'] }));
    });

    it('should work for clia_yale',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(CliaParentComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(CliaParentComponent);
            fixture.componentInstance.ngOnInit();
          });
      }));

  });

  describe('clia parent component with clia type mgh', () => {


    let config: any[] = [
      { path: 'clia_variant_reports_ntc', component: 'CliaParentComponent' }
    ];
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule.withRoutes(config), DirectivesModule, PipesModule, FormsModule, DataTableModule],
        declarations: [CliaParentComponent],
        providers: [
          { provide: SampleControlApiService, useClass: MockCliaApiService },
          { provide: IonReportersApiService, useClass: MockCliaIonApiService },
          { provide: CliaDataService, useClass: MockCliaTransferApiService },
          {
            provide: ActivatedRoute, useValue: {
              snapshot: {
                url: [{ path: 'clia_mgh' }], data: {
                  cliaType: 'mgh',
                  data: resolved_data
                }
              }
            }
          },
          { provide: UserProfileService, useClass: UserProfileMockService }
        ]
      });
      spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify({ 'roles': ['MOCHA_VARIANT_REPORT_REVIEWER'] }));
    });

    it('should work for clia_mgh',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(CliaParentComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(CliaParentComponent);
            fixture.componentInstance.ngOnInit();
          });
      }));

  });

  describe('clia parent component with clia type mda', () => {


    let config: any[] = [
      { path: 'clia_variant_reports_ntc', component: 'CliaParentComponent' }
    ];
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule.withRoutes(config), DirectivesModule, PipesModule, FormsModule, DataTableModule],
        declarations: [CliaParentComponent],
        providers: [
          { provide: SampleControlApiService, useClass: MockCliaApiService },
          { provide: IonReportersApiService, useClass: MockCliaIonApiService },
          { provide: CliaDataService, useClass: DataApiService },
          {
            provide: ActivatedRoute, useValue: {
              snapshot: {
                url: [{ path: 'clia_mda' }], data: {
                  cliaType: 'mda',
                  data: resolved_data
                }
              }
            }
          },
          { provide: UserProfileService, useClass: UserProfileMockService }
        ]
      });
      spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify({ 'roles': ['ADMIN'] }));
    });

    it('should work for clia_mda',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(CliaParentComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(CliaParentComponent);
            fixture.componentInstance.ngOnInit();
          });
      }));
  });
}

class DataApiService {
  getCliaDetailsPC(): Observable<CliaDataService> {
    let testData: any;
    testData = {
      molecular_id: 'molecular_123',
      date_molecular_id_created: '2-12-2015',
      date_variant_received: '3-12-2015',
      analysis_id: 'job_123',
      report_status: 'failed'
    };
    return Observable.of(testData);
  }
}

class MockCliaApiService {
  getCliaDetailsPC(): Observable<SampleControlApiService> {
    let testData: any = CliaApiServiceStub.makeCliaParentData();
    // testData = [{
    //   copy_number_variants: ['test'],
    //   gene_fusions: ['test'],
    //   snv_indels: ['test'],
    //   molecular_id: { 'test': 'test' },
    //   analysis_id: { 'test': 'test' },
    //   total_variants: { 'test': 'test' },
    //   mapd: { 'test': 'test' },
    //   cellularity: { 'test': 'test' },
    //   torrent_variant_caller_version: { 'test': 'test' },
    //   report_status: { 'test': 'test' },
    //   date_molecular_id_created: '2-12-2015',
    //   date_variant_received: '2-12-2015'
    // }];
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

class MockCliaIonApiService {
  getCliaIon(): Observable<any> {
    let testData;
    testData = [{
      lastContactDate: '2-12-2015'
    }];
    return Observable.of(testData);
  }
  getDataIon(): Observable<any> {
    let testData;
    testData = [{
      lastContactDate: '2-12-2015'
    }];
    return Observable.of(testData);
  }
  autoLoadDataIon(): Observable<any> {
    let testData;
    testData = [{
      lastContactDate: '2-12-2015'
    }];
    return Observable.of(testData);
  }
}

class MockCliaTransferApiService {
  transferData(): Observable<CliaDataService> {
    let testData: any;
    testData = {
      molecular_id: 'molecular_123',
      analysis_id: 'job_123',
      status: 'failed'
    };
    return Observable.of(testData);
  }
}

