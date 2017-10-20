/**
 * Created by hendrikssonm on 6/26/17.
 */
import {
  Component,
  DebugElement
} from '@angular/core';
import {
  async,
  TestBed,
  ComponentFixture
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { nvD3 } from 'ng2-nvd3';
import { Observable } from 'rxjs/Observable';

declare let d3: any;
import { PatientApiService } from '../../patient/patient-api.service';
import { PatientApiServiceStub, PatientApiServiceMock } from '../../patient/testing/patient-api-service-stub';
import { CnvChartDirective } from './cnv-chart.directive.component';

export function main() {
  describe('Cnv chart component', () => {
    let component: CnvChartDirective;
    let fixture: ComponentFixture<CnvChartDirective>;
    let de: DebugElement;
    let el: HTMLElement;

    let ccwwServiceStub: {
      CW: { ccww: string }
    };

    beforeEach(() => {

      TestBed.configureTestingModule({
        declarations: [CnvChartDirective, nvD3],
        providers: [
          {provide: MockPatientApiService, useClass: MockPatientApiServiceError},
          {provide: ccwwServiceStub, useClass: MockPatientApiServiceError},
          {provide: MockPatientOptionsService, useClass: MockPatientOptionsServiceError},
          {provide: PatientApiService, useClass: PatientApiServiceMock },
        ],
      });
      // spyOn(localStorage, 'ViewChild("ccww")').and.returnValue(JSON.stringify({"ccww":{}}));
    });

    it('should work by calling Cnv chart ngOnInit --> ngOnChanges',
      async((done:any) => {

        // ccwwServiceStub = {
        //   CW: { ccww: 'ViewChild' }
        // };

        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(CnvChartDirective, {
              set: {
                templateUrl: ''
              }
            }).createComponent(CnvChartDirective);

            fixture.componentInstance.data = PatientApiServiceStub.makeRawVcftData();
            fixture.componentInstance.cnvdata = PatientApiServiceStub.makeCnvData();

            fixture.componentInstance.ngOnInit();
            fixture.componentInstance.ngOnChanges();

            expect(fixture.componentInstance.data).toBeDefined();
            expect(fixture.componentInstance.cnvdata).toBeDefined();

            fixture.detectChanges();
            fixture.destroy();

          });
      }));

    it('should work by calling Options --> ngAfterViewInit @ViewChild Response',
      async((done:any) => {

        ccwwServiceStub = {
          CW: { ccww: 'ViewChild' }
        };

        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(CnvChartDirective, {
              set: {
                templateUrl: ''
              }
            }).createComponent(CnvChartDirective);

            fixture.componentInstance.data = PatientApiServiceStub.makeRawVcftData();
            fixture.componentInstance.cnvdata = PatientApiServiceStub.makeCnvData();

            fixture.componentInstance.ngOnInit();
            fixture.componentInstance.ngOnChanges();
            // fixture.componentInstance.ngAfterViewInit();

            fixture.componentInstance.CW = ccwwServiceStub.CW.ccww;
            expect(fixture.componentInstance.CW).toBeDefined();
            expect(fixture.componentInstance.CW).toBe('ViewChild');
            fixture.detectChanges();
            fixture.destroy();

          });
      }));


    it('should work by calling Options --> Tooltip Response',
      async((done:any) => {

        let d = {
          "key": "RPS6KB1", "value": "RPS6KB1",
          "series": [{"key": "Q3", "value": "9.99", "color": "#CD0000"},
            {"key": "Q2", "value": "8.53", "color": "#CD0000"},
            {"key": "Q1", "value": "6.82", "color": "#CD0000"}],
          "data": {
            "x": "61", "label": "RPS6KB1", "status": "#CD0000", "chr": "chr17",
            "values": {
              "position": "57974717",
              "cn": "8.53",
              "Q1": "6.82",
              "Q2": "8.53",
              "Q3": "9.99",
              "whisker_low": "6.48",
              "whisker_high": "10.49",
              "outliers": ["6.48", "8.53", "10.49"]
            }
          }, "index": 61, "e": {"isTrusted": true}
        };

        let s = {"series":[{"key":"4.49","color":"#CD0000"}],"e":{"isTrusted":true}};

        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(CnvChartDirective, {
              set: {
                templateUrl: ''
              }
            }).createComponent(CnvChartDirective);

            fixture.componentInstance.data = PatientApiServiceStub.makeRawVcftData();

            fixture.componentInstance.ngOnInit();
            fixture.componentInstance.ngOnChanges();

            expect(fixture.componentInstance.options).toBeDefined();
            fixture.detectChanges();

            expect(fixture.componentInstance.options.chart.tooltip).toBeDefined();
            fixture.detectChanges();

            let html:any = fixture.componentInstance.options.chart.tooltip.contentGenerator(d);
            expect(html).toBeDefined();
            fixture.detectChanges();

            expect(html).toContain('<strong>RPS6KB1</strong>');
            // expect(html).toContain('<b>RPS6KB1</b>');
            fixture.detectChanges();

            expect(html).toContain('<strong>6.48</strong>');
            // expect(html).toContain('<li>Cl 5%: 6.48</li>');
            fixture.detectChanges();

            let series:any = fixture.componentInstance.options.chart.tooltip.contentGenerator(s);
            expect(series).toBeDefined();
            fixture.detectChanges();

            expect(series).toContain('<strong>4.49</strong>');
            fixture.detectChanges();

            fixture.destroy();
          });
      }));

    xit('should work by calling Options --> Callback Response',
      async((done:any) => {

          TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(CnvChartDirective, {
              set: {
                templateUrl: ''
              }
            }).createComponent(CnvChartDirective);

            fixture.componentInstance.data = PatientApiServiceStub.makeRawVcftData();

            fixture.componentInstance.ngOnInit();

            expect(fixture.componentInstance.options).toBeDefined();
            fixture.detectChanges();

            expect(fixture.componentInstance.data).toBeDefined();
            fixture.detectChanges();

            expect(fixture.componentInstance.options.chart.callback).toBeDefined();
            fixture.detectChanges();

            fixture.destroy();
          });
      }));
  });

  xdescribe('WelcomeComponent', () => {

    let comp: CnvChartDirective;
    let fixture: ComponentFixture<CnvChartDirective>;
    let componentCWService: PatientApiService; // the actually injected service
    let userService: PatientApiService; // the TestBed injected service
    let de: DebugElement;  // the DebugElement with the welcome message
    let el: HTMLElement; // the DOM element with the welcome message

    let ccwwServiceStub: {
      // isLoggedIn: boolean;
      CW: { ccww: string }
    };

    beforeEach(() => {
      // stub ccwwService for test purposes
      ccwwServiceStub = {
        // isLoggedIn: true,
        CW: { ccww: 'Test User' }
      };

      TestBed.configureTestingModule({
        declarations: [CnvChartDirective, nvD3],
        // providers:    [ ccwwService ]  // NO! Don't provide the real service!
        // Provide a test-double instead
        providers: [{ provide: PatientApiService, useValue: ccwwServiceStub }]
      });

      fixture = TestBed.createComponent(CnvChartDirective);
      comp = fixture.componentInstance;

      // ccwwService actually injected into the component
      userService = fixture.debugElement.injector.get(PatientApiService);
      componentCWService = userService;
      // ccwwService from the root injector
      userService = TestBed.get(PatientApiService);
      //  get the "welcome" element by CSS selector (e.g., by class name)
      el = fixture.debugElement.nativeElement; // de.nativeElement;

    });

    // it('should --> "CW"', () => {
    //   // fixture = TestBed.createComponent(CnvChartDirective);
    //   userService.CW.ccww = 'Test'; // welcome message hasn't been shown yet
    //   fixture.detectChanges();
    //   const content = el.querySelector('div');
    //   expect(content).toContain('Test');
    // });


  });

  // describe('AmoiDirective', () => {
  //   let testHost:TestHostComponent;
  //   let fixture:ComponentFixture<TestHostComponent>;
  //   let testEl:DebugElement;
  //
  //   beforeEach(async(() => {
  //     TestBed.configureTestingModule({
  //       declarations: [TestHostComponent, AmoiDirective]
  //     }).compileComponents();
  //   }));
  //
  //   beforeEach(() => {
  //     fixture = TestBed.createComponent(TestHostComponent);
  //     testHost = fixture.componentInstance;
  //     testEl = fixture.debugElement.query(By.css('span'));
  //     fixture.detectChanges();
  //   });
  //
  //   it('empty value adds no label class', () => {
  //     expect(testEl.nativeElement.classList.contains('label-success')).toBe(false);
  //     expect(testEl.nativeElement.classList.contains('label-info')).toBe(false);
  //     expect(testEl.nativeElement.classList.contains('label-danger')).toBe(false);
  //     expect(testEl.nativeElement.classList.contains('label-grey')).toBe(false);
  //   });
  // });

  @Component({
    selector: 'example-chart',
    providers: [nvD3],
    template: '<div> ' +
    '<h1 class="type">{{options.chart.type}}</h1>' +
    '<h1 class="height">{{options.chart.height}}</h1>' +
    '<h1 class="margin">{{options.chart.margin}}</h1>' +
    '<h1 class="outliers">{{options.chart.outliers}}</h1>' +
    '<h1 class="chart">{{chart}}</h1>' +
    '<h1 class="x">{{x}}</h1>' +
    '<i class="fa fa-search-minus fa-2x icon-pointer" aria-hidden="true"></i>' +
    '<nvd3 id="boxplotchart" [options]="options" [data]="data"></nvd3>' +
    '</div>'
  })

  class MockPatientApiServiceError {
    getData():Observable<any> {
      return Observable.throw("error");
    }
  }

  class MockPatientOptionsServiceError {
    getOptions():Observable<any> {
      return Observable.throw("error");
    }
  }

  class MockPatientApiService {
    getData():Observable<any> {

      let testdata:any = [
        {
          'values': [
            1.916932,
            1.937298,
            1.954991,
            1.975595,
            2.000843,
            2.01052,
            2.05,
            2.090255,
            2.100364,
            2.127207,
            2.149627,
            2.169258,
            2.192305
          ]
        }
        , 'ChartTestTitle']
      return testdata;
    }
    ngAfterViewInit():Observable<any> {
      let testdata:any = [{"nativeElement":{}}];
      return testdata;
    }
  }

  class MockPatientOptionsService {
    getOptions():Observable<any> {
      let testoptions:any =
        [
          {
            chart: [{
              x: 8,
              status: "#CD0000",
              values: {
                Q1: 2.0,
                Q2: 1.5,
                Q3: 1.8,
                whisker_low: 1.3,
                whisker_high: 2.1,
                outliers: [2.1, 1.8, 1.3]
              },
              position: 2
            }]
          }

        ];

      return testoptions;
    }
  }


}
