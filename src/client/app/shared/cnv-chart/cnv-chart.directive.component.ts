/**
 * Created by hendrikssonm on 6/6/17.
 */
import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { nvD3 } from 'ng2-nvd3';

declare let d3: any;

@Component({
  selector: 'cnv-chart',
  providers: [nvD3],
  template: '<div> <nvd3 id="boxplotchart" [options]="options" [data]="cnvdata" ></nvd3> </div>'
})

export class CnvChartDirective implements OnInit {
  @Input() data: any;
  options: any;
  errorMessage: string;
  cnvdata: any;

  constructor() { }

  ngOnInit() {
    this.getData();
  }

  getData() {
          var array = this.data;
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

          this.cnvdata = temp;
          var genes: any[] = [];

          this.options = {
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
              tooltip: {
                contentGenerator: function (d: any) {
                  var label;
                  var position;
                  var cn;
                  var chr;
                  var cl95;
                  var cl05;
                  var html;
                  var li;
                  var color;

                  chr = 'CHR: ' + d.data.chr;

                  label = d.key;
                  position = 'POS: ' + d.data.values.position;
                  cn = 'CN: ' + d.data.values.cn;
                  color = 'color: white; background-color: ' + d.data.status;

                  cl95 = 'Cl 5%: ' + d.data.values.whisker_low.toFixed(4);
                  cl05 = 'Cl 95%: ' + d.data.values.whisker_high.toFixed(4);

                  html = '<h4 class="text-center" style="' + color + '"><b>' + label + '</b></h4>';
                  li = '<li>' + position + '</li>';
                  li += '<li>' + cn + '</li>';
                  li += '<li>' + chr + '</li>';
                  li += '<li>' + cl95 + '</li>';
                  li += '<li>' + cl05 + '</li>';
                  html += '<ul class="list-group" style="list-style-type: none;">' + li + '</ul>';

                  return html;
                }
              },
              x: function (d: any) {
                return d.label;
              },
              showXAxis: true,
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
                  var temp: any[] = [];
                  var chr: any;
                  var min: any;
                  var max: any;
                  var x: any = 0;
                  var val: any;

                  Object.keys(d).forEach((key: any) => {
                    x = d[key].x;
                    val = d[key].label;
                    chr = d[key].chr;
                    min = d[key].values.Q1;
                    max = d[key].values.Q3;
                    var chrnum:any[] = chr.split('chr');

                    genes.push([val,chr,x,chrnum[1],min,max]);
                    temp.push(val);
                  });

                  return temp;
                },
                tickArguments: function () { return [20] },
                reduceXTicks: false,
                ticks: function () { return 13},
                width: function () { return 4},
                tickSize:  function () { return 2}
              },
              yAxis: {
                tickFormat: function (d: any) {
                  return d3.format(',.0d')(d);
                },
                axisLabelDistance: 30
              },
              callback: function(chart: any) {
                var height = 370;
                var chr: any;
                var prespot: any = 0;
                var median: any = [];
                var lowest: any = null;
                var highest: any = null;
                var spot: any = null;
                var gene: any = null;

                var svg = d3.select('#boxplotchart')
                  .select('.nv-boxPlotWithAxes')
                  .select('g')
                  .append('g');

                // svg(".nv-scatterWrap").remove();

                Object.keys(genes).forEach((key: any) => {
                  gene = genes[key][0];
                  var temp = genes[key][1];
                  var x = genes[key][2];
                  var chrnum = genes[key][3];

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
                        .attr("x", parseFloat(spot) + 3)
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
                    // svg.append('line')
                    //   .attr('x1', x1)
                    //   .attr('x2', x2)
                    //   .style('stroke', 'black')
                    //   .style('stroke-width', 10);

                    // svg.append('rect')
                    //   .attr('x', x)
                    //   .attr('width', x3 - x1)
                    //   .style('fill', 'steelblue')
                    //   .style('opacity', 0.05)
                    //   .attr('y', 0)
                    //   .attr('height', height);

                  }
                });
                var max =  Math.round(highest / 10) * 3 + lowest;
                // var line2 = (7 - parseFloat(((5 / max) * 2)));
                var lastspot = chart.xScale()(gene)+35;
                var y1 = chart.yScale()(max);
                var y2 = chart.yScale()(7);

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
              },
              maxBoxWidth: 0.01,
              yDomain: [0, 10]
            }
          };
  }
}
