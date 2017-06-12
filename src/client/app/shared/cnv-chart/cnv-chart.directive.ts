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

        var array = itemList.parsed_vcf_genes;
        var count = 0;
        Object.keys(array).forEach((key: any) => {

          count = count + 1;
          var gene = array[key].gene;
          var values = array[key].values;
          var median = array[key].raw_copy_number;
          var position = array[key].position;
          // var status = array[key].tsg_gene;
          // console.log("status--" + status)

          var status = !array[key].tsg_gene ? 'Crimson' : 'Green';

          var min = values[0];
          var max = values[10];

          // var Object = {
          //   'gene': parseInt(count),
          //   'open': parseFloat(min),
          //   'high': parseFloat(max),
          //   'low': parseFloat(min),
          //   'close': parseFloat(max),
          //   'volume': parseInt(position),
          //   'adjusted': parseFloat(median),
          //   'status': status
          // };

          var Object = {
            label: gene,
            status: status,
            values: {
              Q1: parseFloat(min),
              Q2: parseFloat(median),
              Q3: parseFloat(max),
              whisker_low: parseFloat(min),
              whisker_high: parseFloat(max),
              outliers: [parseFloat(0.95*min), parseFloat(median), parseFloat(1.05*max)]
            }
          };
          temp.push(Object);
        });

        // this.data = [{values: temp}];
          this.data = temp;

          this.options = {

            chart: {
              type: 'boxPlotChart',
              height: 450,
              margin : {
                top: 20,
                right: 20,
                bottom: 60,
                left: 40
              },
              color: function(d){
                return d.status;
              },
              x: function(d){

                return d.label;
              },
              maxBoxWidth: 0.1,
              yDomain: [0, 3]
            }

            // chart: {
            //   type: 'candlestickBarChart',
            //   height: 450,
            //   margin: {
            //     top: 20,
            //     right: 20,
            //     bottom: 40,
            //     left: 60
            //   },
            //
            //   // color: ['#2ca02c', 'darkred'],
            //   color: function(d){
            //     //     // console.log("color--> " + d.status)
            //     d3.select('rect')
            //         .style('fill', d.status);
            //         // return d.status;
            //   },
            //   x: function (d) {
            //
            //
            //     return d.gene;
            //   },
            //   y: function (d) {
            //     return d.close;
            //   },
            //
            //   showValues: true,
            //   tickFormat: function(d){
            //     return d3.format(',.4f')(d);
            //   },
            //   duration: 1,
            //
            //   xAxis: {
            //     axisLabel: 'Gene',
            //     tickFormat: function (d) {
            //
            //       // return d.gene;
            //       return d3.format()(d.gene);
            //     },
            //     showMaxMin: false
            //   },
            //   yAxis: {
            //     axisLabel: 'Median',
            //     tickFormat: function (d: any) {
            //
            //       return d3.format(',.4f')(d);
            //     }
            //   }
            // }

          };
        },
        error => this.errorMessage = <any>error
      );
  }

  ngOnInit() {
    this.getData();
  }
}

