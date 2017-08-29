/**
 * Created by hendrikssonm on 6/26/17.
 */
import {
  Component,DebugElement
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
import { CnvChartDirective } from './cnv-chart.directive.component';
import { PatientApiServiceStub } from '../../patient/testing/patient-api-service-stub';

export function main() {
  describe('Cnv chart component', () => {

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [],
        declarations: [CnvChartDirective, nvD3],
        providers: [
          { provide: MockPatientApiService, useClass: MockPatientApiServiceError },
          { provide: MockPatientOptionsService, useClass: MockPatientOptionsServiceError },
          // { provide: MockOutliers, useClass: MockPatientOptionsServiceError },
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

            fixture.componentInstance.data = PatientApiServiceStub.makeParsedVcftData();
            fixture.componentInstance.cnvdata  = PatientApiServiceStub.makeCnvData();

            fixture.componentInstance.ngOnInit();
            expect(fixture.componentInstance.data).toBeDefined();
            expect(fixture.componentInstance.cnvdata).toBeDefined();

          });
      }));
  });

@Component({
  selector: 'example-chart',
  providers: [nvD3],
  template: '<div> ' +
  // '<cnv-chart [data]="parsed_vcf_genes"></cnv-chart>' +
  '<h1 class="type">{{options.chart.type}}</h1>' +
  '<h1 class="height">{{options.chart.height}}</h1>' +
  '<h1 class="margin">{{options.chart.margin}}</h1>' +
  '<h1 class="outliers">{{options.chart.outliers}}</h1>' +
  '<h1 class="chart">{{chart}}</h1>' +
  '<h1 class="x">{{x}}</h1>' +
  '<nvd3 id="boxplotchart" [options]="options" [data]="data"></nvd3>' +
  '</div>'
})

  class MainComponent {
  options: any;
  outliers: {};
  chart: any;
  x: any;
  data: any;
  cnvdata: any;
  app: any;
  modal:any;
  allOptions:any;
  json = { chart: {} };

    ngOnInit() {
      // this.app = new CnvOptions();
      this.data = allData['boxPlotChart'];
      this.options = allOptions['boxPlotChart'];
      this.chart = allOptions['boxPlotChart'].chart;
      this.x = this.chart.x;
      this.outliers = this.chart.outliers;
    }
  }

  describe('Component: Cnv Chart Component ', () => {
    let fixture: ComponentFixture<MainComponent>;
    let main: MainComponent;
    let debugElement: any;
    let componentInstance: any;
    let currentChartType: string;
    let outliers: any;
    let options: any;
    let data: {};
    let cnvdata: any;
    let svg: any;
    let nvd3: any;
    let h1 : any;
    let div : any;
    let X: any;
    let Yx: any;
    let Xx: any;
    let de: DebugElement;
    let el: HTMLElement;

    const chartTypes = [
      'boxPlotChart'
    ];

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [nvD3, MainComponent],
        providers: [
          { provide: MockOptionsService, useClass: MockOptionsService },
        ],
      });
      fixture = TestBed.createComponent(MainComponent);

      //MAIN
      main = fixture.debugElement.componentInstance ;
      debugElement = fixture.debugElement;
      // componentInstance = fixture.componentInstance;
    });

    it('Cnv Chart main element should be created', () => {
      expect(main).toBeTruthy();
    });

    chartTypes.forEach((type) => {

      it('BoxPlot chart type Outliers should be created correctly', (done) => {
        let d = {
          x: 8,
          label: "Sample A",
          values: {
            Q1: 180,
            Q2: 200,
            Q3: 250,
            whisker_low: 115,
            whisker_high: 400,
            outliers: [ 2.1,1.8,1.3 ]
          }
        };

        let cnvdata: any = [
          {"x":"0","label":"MYCL","status":"#CD0000","chr":"chr1","values":{"position":"40361592","cn":"1.86","Q1":1.595531,"Q2":1.86,"Q3":2.073049,"whisker_low":1.51575445,"whisker_high":2.1767014500000004,"outliers":[1.51575445,1.86,2.1767014500000004]}},
          {"x":"1","label":"BCL9","status":"#CD0000","chr":"chr1","values":{"position":"147022100","cn":"1.74","Q1":1.492594,"Q2":1.74,"Q3":1.939304,"whisker_low":1.4179643,"whisker_high":2.0362692,"outliers":[1.4179643,1.74,2.0362692]}}];

        currentChartType = 'boxPlotChart';
        main.ngOnInit();

        options = main.options;
        data = main.data;
        outliers = main.outliers;

        expect(outliers).toBeDefined();

        fixture.componentInstance.cnvdata  =
          { "x":"70",
            "label":"AR",
            "status":"#CD0000",
            "chr":"chrX",
            "values":
            {"position":"66773856",
              "cn":"0.92",
              "Q1":"0.781879",
              "Q2":"0.92",
              "Q3":"1.032146",
              "whisker_low":"0.74278505",
              "whisker_high":"1.0837533000000001",
              "outliers":["0.74278505","0.92","1.0837533000000001"]
            }
          }
        ;
        let tmp:any = fixture.componentInstance.options.chart;
        spyOn(tmp, 'outliers').and.returnValue(d.values.outliers);
        let val = tmp.outliers(d);
        fixture.detectChanges();

        expect(fixture.componentInstance.options.chart.outliers).toBeDefined();
        fixture.detectChanges();
        fixture.destroy();

        done();
      });

      it('BoxPlot chart type X values should be created correctly', (done) => {

        let d = {
          x: 8,
          label: "Sample A",
          values: {
            Q1: 180,
            Q2: 200,
            Q3: 250,
            whisker_low: 115,
            whisker_high: 400,
            outliers: [ 2.1,1.8,1.3 ]
          }
        };

        currentChartType = 'boxPlotChart';
        main.ngOnInit();

        options = main.options;
        data = main.data;

        spyOn(fixture.componentInstance.options.chart, 'x').and.callThrough();
        fixture.detectChanges();
        expect(fixture.componentInstance.options.chart.x(d)).toEqual("Sample A");
        fixture.detectChanges();

        done();
      });

      it('BoxPlot chart type yAxis values should be created correctly', (done) => {

        let d = {
          x: 8,
          label: "Sample A",
          values: {
            Q1: 180,
            Q2: 200,
            Q3: 250,
            whisker_low: 115,
            whisker_high: 400,
            outliers: [ 2.1,1.8,1.3 ]
          }
        };

        currentChartType = 'boxPlotChart';
        main.ngOnInit();

        options = main.options;
        data = main.data;
        spyOn(fixture.componentInstance.options.chart.yAxis, 'tickFormat').and.callThrough();
        fixture.detectChanges();
        expect(fixture.componentInstance.options.chart.yAxis.tickFormat(d)).not.toEqual(0);
        fixture.detectChanges();
        fixture.destroy();

        done();
      });

    });
  });


  class MockOptionsService {

    getOptions():Observable<any> {
      let allOptions:any = {

        boxPlotChart: {
          chart: {
            type: 'boxPlotChart',
            height: 650,
            margin: {
              top: 20,
              right: 20,
              bottom: 60,
              left: 40
            },
            lines: { // for line chart
              forceX: [100],
              xDomain: [0, 5],
              xRange: [0, 10]
            },
            outliers: "function (d:any) {return [2.4, 1.8, 1.3];}",
            x: function (d:any) {
              return d.label;
            },
            xAxis: {
              itemColor: function () {
                return this.color;
              },
              tickValues: function (d:any) {
                return d3.format(',.0d')(d);
              },
              fontSize: 10
            },
            yAxis: {
              tickFormat: function (d:any) {
                return d3.format(',.0d')(d);
              },
              axisLabelDistance: 30
            },
            tooltip: {
              contentGenerator: function (d:any) {
              }
            }
          }
        }
      };

      return allOptions;
    }
  }

  let genes: any[] = [];
  let svg: any = [
    {"x":"0","label":"MYCL","status":"#CD0000","chr":"chr1","values":{"position":"40361592","cn":"1.86","Q1":1.595531,"Q2":1.86,"Q3":2.073049,"whisker_low":1.51575445,"whisker_high":2.1767014500000004,"outliers":[1.51575445,1.86,2.1767014500000004]}},
    {"x":"1","label":"BCL9","status":"#CD0000","chr":"chr1","values":{"position":"147022100","cn":"1.74","Q1":1.492594,"Q2":1.74,"Q3":1.939304,"whisker_low":1.4179643,"whisker_high":2.0362692,"outliers":[1.4179643,1.74,2.0362692]}}];

    let allOptions:any = {

      boxPlotChart: {
        chart: {
          type: 'boxPlotChart',
          height: 450,
          margin: {
            top: 20,
            right: 20,
            bottom: 60,
            left: 40
          },
          lines: { // for line chart
            forceX: [100],
            xDomain: [0, 5],
            xRange: [0, 10]
          },
          outliers: function (d:any) {return d.values.outliers;},
          x: function (d:any) {
            return d.label;
          },
          xAxis: {
            itemColor: function () {
              return this.color;
            },
            rotateLabels: -45,
            fontSize: 10,
            showMaxMin: false,
            color: function () {
              return ['#FF0000', '#0026FF']
            },
            tickValues: function (d: any) {
              let temp: any[] = [];
              let chr: any;
              let min: any;
              let max: any;
              let x: any = 0;
              let val: any;

              Object.keys(d).forEach((key: any) => {
                x = d[key].x;
                val = d[key].label;
                chr = d[key].chr;
                min = d[key].values.Q1;
                max = d[key].values.Q3;
                // let chrnum:any[] = chr.split('chr');
                let chrnum:any[] = [0, 'ABCGene'];

                genes.push([val,chr,x,chrnum[1],min,max]);
                temp.push(val);
              });

              return temp;
            }
          },

          yAxis: {
            tickFormat: function (d:any) {
              return d3.format(',.0d')(d);
            },
            axisLabelDistance: 30
          },
          tooltip: {
            contentGenerator: function (d:any) {
            }
          },
          callback: function(chart: any) {
            let height = 370;
            let chr: any;
            let prespot: any = 0;
            let median: any = [];
            let lowest: any = null;
            let highest: any = null;
            let spot: any = null;
            let gene: any = null;
            let lastspot = 0;

            svg = d3.select('#boxplotchart')
              .select('.nv-boxPlotWithAxes')
              .select('g')
              .append('g');

            Object.keys(genes).forEach((key: any) => {

              gene = genes[key][0];
              let temp = genes[key][1];
              let x = genes[key][2];
              let chrnum = genes[key][3];

              if(lowest !== null) {
                lowest = genes[key][4] < lowest ? genes[key][4] : lowest;
                median[0] = lowest;
              }
              else{
                lowest = genes[key][4];
              }

              if(highest !== null) {
                highest = genes[key][5] > highest ? genes[key][5] : highest;
                median[1] = highest;
              }
              else{
                highest = genes[key][5];
              }

              if (temp !== chr && typeof temp !== 'undefined') {
                spot = (chart.xScale()(gene)).toFixed(2) - 1;
                chr = temp;

                if(x > 0) {
                  svg.append('line')
                    .attr('x1', spot)
                    .attr('x2', spot)
                    .attr("y1", height)
                    .style('fill', 'none')
                    .style('stroke', 'gray')
                    .style('stroke-width', 0.5)
                    .style('stroke-linecap', 'line');

                  svg.append("text")
                    .attr("class", "nv-zeroLine")
                    // .attr("x", 0.5 * parseFloat(spot + prespot))
                    .attr("x", parseFloat(spot) + 1)
                    .attr("y", 365)
                    .text(chrnum)
                    .style("fill", "#c70505")
                    .style("font-size", 8);

                  prespot = spot;
                }
                else {
                  svg.append("text")
                    .attr("class", "nv-zeroLine")
                    .attr("x", 5)
                    .attr("y", 365)
                    .text(chrnum)
                    .style("fill", "#c70505")
                    .style("font-size", 8);

                  prespot = spot;
                }
              }
            });
            let max =  Math.round(highest / 10) * 3 + lowest;
            // let line2 = (7 - parseFloat(((5 / max) * 2)));
            lastspot = chart.xScale()(gene)+35;
            let y1 = chart.yScale()(max);
            let y2 = chart.yScale()(7);

            svg.append("line")
              .attr("x1", 0)
              .attr("y1", y2)
              .attr("x2", lastspot)
              .attr("y2", y2)
              .style("stroke-opacity", 2)
              .style("stroke", "red");

            svg.append("line")
              .attr("x1", 0)
              .attr("y1", y1)
              .attr("x2", lastspot)
              .attr("y2", y1)
              .style("stroke-dasharray", ("3, 3"))
              .style("stroke-opacity", 2)
              .style("stroke", "red");

            svg.append('line')
              .attr('x1', lastspot)
              .attr('x2', lastspot)
              .attr("y1", height)
              .style('fill', 'none')
              .style('stroke', 'gray')
              .style('stroke-width', 0.5)
              .style('stroke-linecap', 'line');
          }
        }
      }

    };

  const allData = {
    boxPlotChart: [
      {
        x: 8,
        label: "Sample A",
        values: {
          Q1: 180,
          Q2: 200,
          Q3: 250,
          whisker_low: 115,
          whisker_high: 400,
          outliers: [ 2.1,1.8,1.3 ]
        }
      }
    ]
  };


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
    return testdata;
  }
}

class MockPatientOptionsService {
  getOptions():Observable<any> {
    let testoptions: any =
      [
        {chart:
        [{
          x:8,
          status:"#CD0000",
          values:{
            Q1:2.0,
            Q2:1.5,
            Q3:1.8,
            whisker_low:1.3,
            whisker_high:2.1,
            outliers:[2.1,1.8,1.3]
          },
          position:2
        }]}

      ];

    return testoptions;
  }
}
