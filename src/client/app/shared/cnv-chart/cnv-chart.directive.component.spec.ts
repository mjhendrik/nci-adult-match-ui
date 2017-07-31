/**
 * Created by hendrikssonm on 6/26/17.
 */
import {
  Component,
} from '@angular/core';
import { Observable } from "rxjs/Observable";
import {
  async,
  TestBed,
  ComponentFixture
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { nvD3 } from 'ng2-nvd3';

declare let d3: any;
import { CnvChartDirective } from './cnv-chart.directive.component';

export function main() {

  describe('Cnv chart component', () => {

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [],
        declarations: [CnvChartDirective, nvD3],
        providers: [
          { provide: MockPatientApiService, useClass: MockPatientApiServiceError },
          { provide: MockPatientOptionsService, useClass: MockPatientOptionsServiceError },
        ],
      });
    });

    it('should work by calling Cnv chart ngOnInit',
      async((done: any) => {

        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(CnvChartDirective, {
              set: {
                templateUrl: ''
              }
            }).createComponent(CnvChartDirective);
            fixture.componentInstance.data = [ { 'values' : [
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
            ] }, 'tmp/ChartTitle'];

            // fixture.componentInstance.cnvdata = [{"x":"values","status":"#CD0000","values":{"Q1":2.0,"Q2":1.5,"Q3":1.8,"whisker_low":1.3,"whisker_high":2.1,"outliers":[2.1,1.8,1.3]}}];
            fixture.componentInstance.options = [{'chart': [{
              "outliers":[{'d':[2.1,1.8,1.3]}],
              "x":[{'d.label':'ABC'}],
              "status":"#CD0000",
              "values":{"Q1":2.0,"Q2":1.5,"Q3":1.8,"whisker_low":1.3,"whisker_high":2.1,"outliers":[2.1,1.8,1.3]}
              }]}];

            fixture.componentInstance.ngOnInit();

          });
      }));
  });


@Component({
  selector: 'example-chart',
  providers: [nvD3],
  template: '<div> ' +
  '<h1 class="type">{{options.chart.type}}</h1>' +
  '<nvd3 id="boxplotchart" [options]="options" [data]="data"></nvd3>' +
  '</div>'
})

  class MainComponent {
    options: any;
    data: any;

    ngOnInit() {
      this.data = allData['boxPlotChart'];
      this.options = allOptions['boxPlotChart'];
    }
  }

  describe('Component: DynamicFormComponent', () => {
    let fixture: ComponentFixture<MainComponent>;
    let main: MainComponent;
    let debugElement: any;
    let currentChartType: string;
    let outliers: any;
    let options: any;
    let data: any;
    let svg: any;
    let nvd3: any;
    let h1 : any;
    let X: any;
    let Yx: any;
    let Xx: any;

    const chartTypes = [
      'boxPlotChart'
    ];

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [nvD3, MainComponent, CnvChartDirective],
      });
      fixture = TestBed.createComponent(MainComponent);
      main = fixture.debugElement.componentInstance;
      debugElement = fixture.debugElement;
    });

    it('Cnv Chart main element should be created', () => {
      expect(main).toBeTruthy();
    });

    chartTypes.forEach((type) => {
      it(type + ' chart type should be created correctly', (done) => {

        currentChartType = type;
        main.ngOnInit();
        fixture.detectChanges();

        options = main.options;
        data = main.data;
        h1 = debugElement.query(By.css('.type')).nativeElement;

        expect(h1.textContent).toEqual(options['chart'].type);

        nvd3 = debugElement.query(By.css('nvd3')).nativeElement;
        expect(nvd3).toBeDefined();

        svg = nvd3.querySelector('svg');
        expect(svg).toBeDefined();
        Yx = options['chart'].yAxis;
        Xx = options['chart'].xAxis;
        done();
      });
    });

    it('should have a defined options chart height function', () => {
      if (options['chart'].height){
        expect(svg.getAttribute('height')).toEqual(options['chart'].height + 'px');
      }
    });

    it('should have a defined outliers function', () => {
      let op = options['chart'].outliers;
      expect(op(0)).toEqual([2.1,1.8,1.3]);
    });

    it('should have a defined x function', () => {
      let op = options['chart'].x;
      expect(op(0)).toEqual('Sample A');
    });

    it('Y Axis is a test', function(){
      const op = Yx;
      spyOn(op, 'tickFormat').and.returnValue(function(d:any){});
    });

    // it('X Axis is a test', function(){
    //   const op = Xx;
    //   // spyOn(op, 'itemColor').and.returnValue(d:[0]);
    // });

    it('should have a defined Y axis axisLabelDistance function', () => {
      expect(Yx.axisLabelDistance).toEqual(30);
    });

    it('should have a defined Y axis tickFormat function', () => {
      expect(Yx.axisLabelDistance).toEqual(30);
    });
  });
}

class MockPatientApiServiceError {
  getData(): Observable<any> {
    return Observable.throw("error");
  }
}

class MockPatientOptionsServiceError {
  getOptions(): Observable<any> {
    return Observable.throw("error");
  }
}

class MockPatientApiService {
  getData():Observable<any> {

    let testdata: any = [
      { 'values' : [
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
    ] }
    , 'ChartTestTitle']
    return Observable.of(testdata);
  }
}

class MockPatientOptionsService {
  getOptions():Observable<any> {
    let testoptions: any = [

      {"x":[{'label':'ABC'}],
        "status":"#CD0000",
        "values":{
          "Q1":2.0,
          "Q2":1.5,
          "Q3":1.8,
          "whisker_low":1.3,
          "whisker_high":2.1,
          "outliers":[2.1,1.8,1.3]}}];

    return Observable.of(testoptions);
  }
}
//
// Options and Data definitions
//
const allOptions = {
  boxPlotChart: {
    chart: {
      type: 'boxPlotChart',
      height: 450,
      outliers: function (d: any) {
        return [2.1,1.8,1.3];
      },
      x: function (d: any) {
        return "Sample A";
      },
      xAxis: {
        itemColor: function () {
          return this.color;
        },
        tickValues: function (d: any) {
          return d3.format(',.0d')(d);
        },
        fontSize: 10
      },
      yAxis: {
        tickFormat: function (d: any) {
          return d3.format(',.0d')(d);
        },
        axisLabelDistance: 30
      }
    }
  }
};

const allData = {
  boxPlotChart: [
    {
      label: "Sample A",
      values: {
        Q1: 180,
        Q2: 200,
        Q3: 250,
        whisker_low: 115,
        whisker_high: 400,
        outliers: [50, 100, 425]
      }
    }
  ]
};



