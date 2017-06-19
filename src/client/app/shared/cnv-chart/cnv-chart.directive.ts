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
  template: '<div> <nvd3 [options]="options" [data]=data ></nvd3> </div>'
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
        var count = 0;
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
            staggerLabels: function () {
              return true;
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
            yAxis: {
              tickFormat: function () {
                return d3.format('d');
              }
            },
            yAxis: {
              color: function () {
                return '#2ca02c';
              },
              tickValues: function () {
                return [2, 7];
              },
              axisLabelDistance: 30
            },

            y2Axis: {
              axisLabel: 'Y2 Axis',
              tickFormat: function (d: any) {
                return d3.format(',.2f')(d.chr);
              }
            },

            maxBoxWidth: 0.01,
            yDomain: [0, 10],

            // xDomain: [5],
            // xRange: [0,100]
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

