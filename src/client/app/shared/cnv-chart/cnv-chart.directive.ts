/**
 * Created by hendrikssonm on 6/6/17.
 */
import {
  Component,
  OnInit
} from '@angular/core';
import { nvD3 } from 'ng2-nvd3';
import { ActivatedRoute } from '@angular/router';
import {
  ConfigApiService,
  CnvChartInterface
} from './../config/config-api.service';

declare let d3: any;

@Component({
  selector: 'cnv-chart',
  directives: [nvD3],
  template: '<div> <nvd3 [options]="options" [data]=data ></nvd3> </div>'
})



export class CnvChartDirective implements OnInit {
  name: string;
  molecular_id: any;

  options: any;
  data: any[];
  valueFormat: any;

  constructor(private configApi: ConfigApiService) { }

  getData() {
    this.configApi.getCnvChart()
      .subscribe((itemList: CnvChartInterface) => {
        var val = [{values: []}];
        var temp = [];

        var array = itemList.parsedVCFGenes;
        var count = 0;
        Object.keys(array).forEach((key: any) => {
          count = count + 1;
          var gene = array[key].gene;
          var values = array[key].values;
          var median = array[key].rawCopyNumber;
          var position = array[key].position;
          // var status = array[key].tsgGene;

          var status = !array[key].tsgGene ? 'Crimson' : 'Green';

          var min = values[0];
          var max = values[12];

          var Object = {
            'gene': parseInt(count),
            'open': parseFloat(min),
            'high': parseFloat(max),
            'low': parseFloat(min),
            'close': parseFloat(max),
            'volume': parseInt(position),
            'adjusted': parseFloat(median),
            'status': status
          };

          temp.push(Object);
        });

        this.data = [{values: temp}];

          // this.data = [{
          //   values: [
          //     { 'gene': 15854, 'open': 165.42, 'high': 165.8, 'low': 164.34, 'close': 165.22, 'volume': 160363400, 'adjusted': 164.35 },
          //     { 'gene': 15855, 'open': 165.35, 'high': 166.59, 'low': 165.22, 'close': 165.83, 'volume': 107793800, 'adjusted': 164.96 },
          //     { 'gene': 15856, 'open': 165.37, 'high': 166.31, 'low': 163.13, 'close': 163.45, 'volume': 176850100, 'adjusted': 162.59 },
          //     { 'gene': 15859, 'open': 163.83, 'high': 164.46, 'low': 162.66, 'close': 164.35, 'volume': 168390700, 'adjusted': 163.48 },
          //     { 'gene': 15860, 'open': 164.44, 'high': 165.1, 'low': 162.73, 'close': 163.56, 'volume': 157631500, 'adjusted': 162.7 },
          //     { 'gene': 15861, 'open': 163.09, 'high': 163.42, 'low': 161.13, 'close': 161.27, 'volume': 211737800, 'adjusted': 160.42 },
          //     { 'gene': 15862, 'open': 161.2, 'high': 162.74, 'low': 160.25, 'close': 162.73, 'volume': 200225500, 'adjusted': 161.87 },
          //     { 'gene': 15863, 'open': 163.85, 'high': 164.95, 'low': 163.14, 'close': 164.8, 'volume': 188337800, 'adjusted': 163.93 },
          //     { 'gene': 15866, 'open': 165.31, 'high': 165.4, 'low': 164.37, 'close': 164.8, 'volume': 105667100, 'adjusted': 163.93 },
          //     { 'gene': 15867, 'open': 163.3, 'high': 164.54, 'low': 162.74, 'close': 163.1, 'volume': 159505400, 'adjusted': 162.24 },
          //     { 'gene': 15868, 'open': 164.22, 'high': 164.39, 'low': 161.6, 'close': 161.75, 'volume': 177361500, 'adjusted': 160.9 },
          //     { 'gene': 15869, 'open': 161.66, 'high': 164.5, 'low': 161.3, 'close': 164.21, 'volume': 163587800, 'adjusted': 163.35 },
          //     { 'gene': 15870, 'open': 164.03, 'high': 164.67, 'low': 162.91, 'close': 163.18, 'volume': 141197500, 'adjusted': 162.32 },
          //     { 'gene': 15873, 'open': 164.29, 'high': 165.22, 'low': 163.22, 'close': 164.44, 'volume': 136295600, 'adjusted': 163.57 },
          //     { 'gene': 15874, 'open': 164.53, 'high': 165.99, 'low': 164.52, 'close': 165.74, 'volume': 114695600, 'adjusted': 164.87 },
          //     { 'gene': 15875, 'open': 165.6, 'high': 165.89, 'low': 163.38, 'close': 163.45, 'volume': 206149500, 'adjusted': 162.59 },
          //     { 'gene': 15876, 'open': 161.86, 'high': 163.47, 'low': 158.98, 'close': 159.4, 'volume': 321255900, 'adjusted': 158.56 },
          //     { 'gene': 15877, 'open': 159.64, 'high': 159.76, 'low': 157.47, 'close': 159.07, 'volume': 271956800, 'adjusted': 159.07 },
          //     { 'gene': 15880, 'open': 157.41, 'high': 158.43, 'low': 155.73, 'close': 157.06, 'volume': 222329000, 'adjusted': 157.06 },
          //     { 'gene': 15881, 'open': 158.48, 'high': 160.1, 'low': 157.42, 'close': 158.57, 'volume': 162262200, 'adjusted': 158.57 },
          //     { 'gene': 15882, 'open': 159.87, 'high': 160.5, 'low': 159.25, 'close': 160.14, 'volume': 134848000, 'adjusted': 160.14 },
          //     { 'gene': 15883, 'open': 161.1, 'high': 161.82, 'low': 160.95, 'close': 161.08, 'volume': 129483700, 'adjusted': 161.08 },
          //     { 'gene': 15884, 'open': 160.63, 'high': 161.4, 'low': 159.86, 'close': 160.42, 'volume': 160402900, 'adjusted': 160.42 },
          //     { 'gene': 15887, 'open': 161.26, 'high': 162.48, 'low': 161.08, 'close': 161.36, 'volume': 131954800, 'adjusted': 161.36 }
          //   ]
          // }];

          this.options = {

            chart: {
              type: 'candlestickBarChart',
              height: 450,
              margin: {
                top: 20,
                right: 20,
                bottom: 40,
                left: 60
              },

              color: ['#2ca02c', 'darkred'],

              x: function (d) {
                d3.select('rect')
                    .style('fill', d.status);

                return d.gene;
              },
              y: function (d) {
                return d.close;
              },

              showValues: true,
              tickFormat: function(d){
                return d3.format(',.4f')(d);
              },
              duration: 1,

              xAxis: {
                axisLabel: 'Gene',
                tickFormat: function (d) {

                  // return d.gene;
                  return d3.format()(d.gene);
                },
                showMaxMin: false
              },
              yAxis: {
                axisLabel: 'Median',
                tickFormat: function (d: any) {

                  return d3.format(',.4f')(d);
                }
              }
            }
          };
        },
        error => this.errorMessage = <any>error
      );
  }

  ngOnInit() {
    this.getData();
  }
}

