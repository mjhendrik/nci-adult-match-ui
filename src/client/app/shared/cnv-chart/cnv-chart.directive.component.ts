/**
 * Created by hendrikssonm on 6/6/17.
 */
import {
  Component,
  OnInit,
  Input,
  Output,
  animate,
  transition, style,
  trigger,
  EventEmitter
} from '@angular/core';
import { nvD3 } from 'ng2-nvd3';

declare let d3: any;

@Component({
  selector: 'cnv-chart',
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ perspective: '800px', transform: 'scale3d(1.5, 1.5, 1.5)', backgroundColor: 'gray', translateZ: '100px' }),
        animate(100)
      ]),
      transition('* => void', [])
    ])
  ],
  providers: [nvD3],

  template://Zoomout panel
  `<div *ngIf="file_name">
  <div [@dialog] *ngIf="show" class="dialog">
  
  <i class="fa fa-search-minus fa-2x" aria-hidden="true" *ngIf="show" (click)="show = !show" style="cursor: pointer; color: gray"></i>
   <h4 class="pull-right">{{ file_name }}</h4>
  <ul class="list-group" style="list-style-type: none;">
  <li>
  Tumor suppressor genes
  <i class="fa fa-square" aria-hidden="true" style="color:#CD0000;background-color:#CD0000"></i> </li>
  <li>Oncogenes
  <i class="fa fa-square" aria-hidden="true" style="color:#007200;background-color:#007200"></i>
  </li></ul>
  <nvd3 id="boxplotchart" config="{deepWatchData: false}" [options]="options" [data]="cnvdata" *ngIf="show"></nvd3>
  </div>
  <!--small panel-->
  <div *ngIf="!show">
  <i class="fa fa-search-plus fa-2x" aria-hidden="true" *ngIf="!show" (click)="show = !show" style="cursor: pointer; color: gray"></i>
   <h5 class="pull-right">{{ file_name }}</h5>
  <ul class="list-group" style="list-style-type: none;">
  <li>
  Tumor suppressor genes
  <i class="fa fa-square" aria-hidden="true" style="color:#CD0000;background-color:#CD0000"></i> </li>
  <li>Oncogenes
  <i class="fa fa-square" aria-hidden="true" style="color:#007200;background-color:#007200"></i>
  </li></ul>
  <nvd3 id="boxplotchart" config="{deepWatchData: false}" [options]="options" [data]="cnvdata" *ngIf="!show"></nvd3>
  </div>
  </div>
  <div *ngIf="!file_name">
  <span *ngIf="!parsed_vcf_genes">
  <i class="fa fa-bar-chart text-muted" style="font-size:154px; padding-left: 39px;"></i>
  <br />
  <span class="text-muted" style="padding-left: 39px;"> There are no CNV data </span>
  </span>`
})

export class CnvChartDirective implements OnInit {
  @Input() data: any;
  options: any;
  errorMessage: string;
  cnvdata: any;
  file_name: string ;
  parseddata:any[] = [];

  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit() {
    this.getData();
  }
  getData() {
    let array:any = this.data[0];

    if (typeof this.data[1] !== 'undefined' && this.data[1] !== null) {
      this.file_name = "Cnv Chart Test Name";
      // this.file_name = this.data[1].split('tmp/')[1];
    }
    let temp:any[] = [];
    let svg:any;

    Object.keys(array).forEach((key:any) => {

      let gene:string = array[key].gene;
      let values = array[key].values;
      let median = array[key].raw_copy_number;
      let position:number = array[key].position;
      let chromosome:string = array[key].chromosome;
      let status:string = !array[key].tsg_gene ? '#CD0000' : '#007200';

      let min = values[0];
      let max = values[10];
      let chrnum:any[] = [];

      if (typeof chromosome !== 'undefined') {
        chrnum = chromosome.split('chr');
        this.parseddata.push([gene,chromosome,key,chrnum[1],min,max]);
      }

      let Object = {
        x: key,
        label: gene,
        status: status,
        chr: chromosome,
        values: {
          position: position,
          cn: median,
          Q1: parseFloat(min).toFixed(2),
          Q2: parseFloat(median).toFixed(2),
          Q3: parseFloat(max).toFixed(2),
          whisker_low: (0.95 * parseFloat(min)).toFixed(2),
          whisker_high: (1.05 * parseFloat(max)).toFixed(2),
          outliers: [(0.95 * parseFloat(min)).toFixed(2), parseFloat(median).toFixed(2), (1.05 * parseFloat(max)).toFixed(2)]
        }
      };
      temp.push(Object);

    });

    let colors:any[] = [];
    let tip:any = 0;
    //COLORS
    Object.keys(temp).forEach((key:any) => {
      colors.push(temp[key].status);
    });

    //Y MARGINS
    if(temp !== null && temp.length > 0) {
      let keys:any = Object.keys(temp);
      keys.sort(function (a:any, b:any) {
        return temp[b].values.whisker_high - temp[a].values.whisker_high;
      })
      tip = (temp[keys[0]].values.whisker_high < 7) ? 7 : (temp[keys[0]].values.whisker_high);
    }

    this.cnvdata = temp;

    let id:any = function () {
      return 'boxplotchart';
    };
    let type:any = function () {
      return 'boxPlotChart';
    };
    let height:any = function () {
      return 450;
    };
    let margin:any = function () {
      return {top: 20, right: 20, bottom: 60, left: 40};
    };
    let showLabels:any = function () {
      return true;
    };
    let showXAxis:any = function () {
      return true;
    };
    let xAxis:any = function () {
      return {rotateLabels: -45, fontSize: 10}
    };
    let yDomain:any = function () {
      return [0, (tip)];
    };
    let color:any = function () {
      return colors;
    };

    this.options = {
      chart: {
        color: color(),
        id: id(),
        type: type(),
        height: height(),
        margin: margin(),
        showLabels: showLabels(),
        showXAxis: showXAxis(),
        xAxis: xAxis(),
        yDomain: yDomain(),
        tooltip: {
          contentGenerator: (d:any) => {
            let html:any;
            let rows:any;
            let header:any;

            const series = d.series[0];

            if (series.key !== 'Q3') {
              html = "<span class='list-group' style='font-size: 18px'><strong>" +
                series.key +
                "</strong></span>";
            }
            else {
              rows =
                "<tr>" +
                "<td class='key'>" + 'Position: ' + "</td>" +
                "<td class='x-value'><strong>" + d.data.values.position + "</strong></td>" +
                "</tr>" +
                "<tr>" +
                "<td class='key'>" + 'CN: ' + "</td>" +
                "<td class='x-value'><strong>" +  d.data.values.cn + "</strong></td>" +
                "</tr>" +
                "<tr>" +
                "<td class='key'>" + 'Cl 5%: ' + "</td>" +
                "<td class='x-value'><strong>" +  d.data.values.whisker_low + "</strong></td>" +
                "</tr>" +
                "<tr>" +
                "<td class='key'>" + 'Cl 95%: ' + "</td>" +
                "<td class='x-value'><strong>" + d.data.values.whisker_high + "</strong></td>" +
                "</tr>";

              header =
                "<thead>" +
                "<tr>" +
                "<td class='legend-color-guide'><div style='background-color: " + d.data.status + ";'></div></td>" +
                "<td class='key'><strong>" +  d.key + "</strong></td>" +
                "</tr>" +
                "</thead>";

              return "<table style='font-size: 18px'>" +
                header +
                "<tbody>" + rows + "</tbody>" +
                "</table>";

            }
            return html;
          }
        },
        callback: (chart:any) => {
          let height = 370;
          let chr:any;
          let prespot:any = 0;
          let median:any = [];
          let lowest:any = null;
          let highest:any = null;
          let spot:any = null;
          let gene:any = null;
          let lastspot = 0;
          let genes = this.parseddata;

          svg = d3.select('#boxplotchart')
            .select('.nv-boxPlotWithAxes')
            .select('g')
            .append('g');

          //Get highest gene y value
          let keys:any = Object.keys(genes);
          keys.sort(function(a:any,b:any){
            return genes[b][5] - genes[a][5];
          })
          let tip:any = genes[keys[0]];

          highest = tip[5];

          Object.keys(genes).forEach((key:any) => {
            gene = genes[key][0];
            let temp = genes[key][1];
            let x = genes[key][2];
            let chrnum = genes[key][3];

            if (lowest !== null) {
              lowest = genes[key][4] < lowest ? genes[key][4] : lowest;
              median[0] = lowest;
            }
            else {
              lowest = genes[key][4];
            }

            median[1] = highest;

            if (temp !== chr && typeof temp !== 'undefined') {
              spot = (chart.xScale()(gene)).toFixed(2) - 1;
              chr = temp;

              if (x > 0) {
                svg.append('line')
                  .attr('x1', spot)
                  .attr('x2', spot)
                  .attr('y1', height)
                  .style('fill', 'none')
                  .style('stroke', 'gray')
                  .style('stroke-width', 0.5)
                  .style('stroke-linecap', 'round');

                svg.append('text')
                  .attr('class', 'nv-zeroLine')
                  .attr('x', parseFloat(spot) + 1)
                  .attr('y', 365)
                  .text(chrnum)
                  .style('fill', '#c70505')
                  .style('font-weight', 'bold')
                  .style('font-size', '12px');

                prespot = spot;
              }
              else {
                svg.append('text')
                  .attr('class', 'nv-zeroLine')
                  .attr('x', 5)
                  .attr('y', 365)
                  .text(chrnum)
                  .style('fill', '#c70505')
                  .style('font-weight', 'bold')
                  .style('font-size', '12px');

                prespot = spot;
              }
            }
          });
          let max = Math.round(highest / 10) * 3 + lowest  ;
          lastspot = chart.xScale()(gene) + 35;
          let y1 = chart.yScale()(max);
          let y2 = chart.yScale()(7);

          svg.append('line')
            .attr('x1', 0)
            .attr('y1', y2)
            .attr('x2', lastspot)
            .attr('y2', y2)
            .style('stroke-opacity', 2)
            .style('stroke', 'red');

          svg.append('line')
            .attr('x1', 0)
            .attr('y1', y1)
            .attr('x2', lastspot)
            .attr('y2', y1)
            .style('stroke-dasharray', ('3, 3'))
            .style('stroke-opacity', 2)
            .style('stroke', 'red');

          svg.append('line')
            .attr('x1', lastspot)
            .attr('x2', lastspot)
            .attr('y1', height)
            .style('fill', 'none')
            .style('stroke', 'gray')
            .style('stroke-width', 0.5)
            .style('stroke-linecap', 'line');
        }
      }
    }
  }
}
