/**
 * Created by hendrikssonm on 6/6/17.
 */
import {
  Component,
  OnInit
} from '@angular/core';
import { nvD3 } from 'ng2-nvd3';
import { ActivatedRoute } from '@angular/router';
import { ConfigApiService } from './../config/config-api.service';

declare let d3: any;

@Component({
  selector: 'cnv-chart',
  providers: [nvD3],
  template: '<div> <nvd3 id="boxplotchart" [options]="options" [data]=data ></nvd3> </div>'
})

export class CnvChartDirective implements OnInit {
  options: any;
  data: any;
  errorMessage: string;

  constructor(private configApi: ConfigApiService) { }

  getData() {
    this.configApi.getCnvChart()
      .subscribe((itemList: any) => {
        var array = itemList.parsed_vcf_genes;
        var temp: any[] = [];
        Object.keys(array).forEach((key: any) => {

          var gene = array[key].gene;
          var values = array[key].values;
          var median = array[key].raw_copy_number;
          var position = array[key].position;
          var chromosome = array[key].chromosome;
          var status = !array[key].tsg_gene ? 'Crimson' : 'Green';

          var min = values[0];
          var max = values[10];

          var Object = {
            x: key,
            label: gene,
            status: status,
            chr: chromosome,
            values: {
              position: position,
              cn: median,
              Q1: parseFloat(min),
              Q2: parseFloat(median),
              Q3: parseFloat(max),
              whisker_low: 0.95 * parseFloat(min),
              whisker_high: 1.05 * parseFloat(max),
              outliers: [0.95 * parseFloat(min), parseFloat(median), 1.05 * parseFloat(max)]
            }
          };
          temp.push(Object);
        });

        this.data = temp;

        this.options = {
          //  ********
          chart: {
            id: 'boxplotchart',
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
            color: function (d: any) {
              return d.status;
            },
            position: function (d: any) {
              return d.position;
            },
            cn: function (d: any) {
              return d.cn;
            },
            // chr: function (d: any) {
            //   return d.chr;
            // },
            tooltip: {
              contentGenerator: function (d: any) {
                var label;
                var position;
                var cn;
                var cl95;
                var cl05;
                var html;
                var li;
                var color;

                label = d.key;
                position = 'POS: ' + d.data.values.position;
                cn = 'CN: ' + d.data.values.cn;
                color = 'color: white; background-color: ' + d.data.status;

                cl95 = 'Cl 5%: ' + d.data.values.whisker_low.toFixed(4);
                cl05 = 'Cl 95%: ' + d.data.values.whisker_high.toFixed(4);

                html = '<h4 class="text-center" style="' + color + '"><b>' + label + '</b></h4>';
                li = '<li>' + position + '</li>';
                li += '<li>' + cn + '</li>';
                li += '<li>' + cl95 + '</li>';
                li += '<li>' + cl05 + '</li>';
                html += '<ul class="list-group">' + li + '</ul>';

                return html;
              }
            },
            x: function (d: any) {
              return d.label;
            },
            showXAxis: true,
            xAxis: {
              // color: 'red',

              // tickSize: 500,
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
                var temp: any[] = [];
                var chr: any;
                var x: any;
                var val: any;

                Object.keys(d).forEach((key: any) => {

                  if (d[key].chr !== chr) {
                    chr = d[key].chr;
                    x = d[key].x;
                    val = d[key].label;

                    temp.push(val);
                    // temp.push(val);

                    var x1 = 10;
                    var x2 = 10;
                    var x3 = x + 20;
                    var height = 370;

                    var custLine = d3.select('#boxplotchart')
                      .select('.nv-boxPlotWithAxes')
                      .select('g')
                      .append('g');

                    custLine.append('line')
                      .attr('x1', x + x1)
                      .attr('x2', x + x2)
                      .attr("y1", height)
                      .style('stroke', 'red')
                      .style('stroke-width', 1);

                    custLine.append("text")
                      .attr("class", "nv-zeroLine")
                      .attr("x", x + 12)
                      .attr("y", 365)
                      .text(chr)
                      .style("fill", "#c70505")
                      .style("font-size", 15);
                  }
                  else{
                    val = d[key].label;
                    chr = d[key].chr;
                    temp.push(val);
                  }
                });
                return temp;
              },
              reduceXTicks: false,
              ticks: function () { return 13},
              width: function () { return 4},
              tickSize:  function () { return 2}
              // tickPadding: function () { return 10}
            },
            yAxis: {
              color: function () {
                return '#2ca02c';
              },
              tickValues: function () {
                return [2, 7];
              },
              tickFormat: function (d: any) {
                return d3.format(',.0d')(d);
              },
              axisLabelDistance: 30
            },
            maxBoxWidth: 0.01,
            yDomain: [0, 10]
            // xDomain: [0, 40]
          }
          //  *******
        };
      },
      error => this.errorMessage = <any>error
      );
  }

  ngOnInit() {
    this.getData();
  }
}

