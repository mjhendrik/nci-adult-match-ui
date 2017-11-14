/**
 * Created by hendrikssonm on 6/6/17.
 */
import {
  Component,
  OnInit,
  OnChanges,
  OnDestroy,
  Input,
  Output,
  animate,
  transition, style,
  trigger,
  EventEmitter,
  AfterViewInit,
  AfterViewChecked,
  HostListener,
  ViewChild
} from '@angular/core';
import { nvD3 } from 'ng2-nvd3';
import {DOCUMENT} from '@angular/common';

declare let d3: any;

@Component({
  moduleId: module.id,
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
  styleUrls: ['cnv-chart.directive.component.css'],
  providers: [nvD3],
  template://Zoomout panel
  `<div *ngIf="file_name">
    <div [@dialog] *ngIf="show" id="zoom" class="dialog" #ccww c-w>
      <i class="fa fa-search-minus fa-2x" aria-hidden="true" *ngIf="show" (click)="show = !show"
      style="cursor: pointer; color: gray"></i>
       <h4 class="pull-right">{{ file_name }}</h4>
        <ul class="list-group" style="list-style-type: none;">
          <li>Tumor suppressor genes
          <i class="fa fa-square" aria-hidden="true" style="color:#CD0000;background-color:#CD0000"></i> 
          </li>
          <li>Oncogenes
          <i class="fa fa-square" aria-hidden="true" style="color:#007200;background-color:#007200"></i>
          </li>
        </ul>
    <nvd3 id="boxplotchart" config="{deepWatchData: false}" [options]="options" [data]="cnvdata" *ngIf="show"></nvd3>
    </div>
    <!--small panel-->
    <div *ngIf="!show" #ccww c-w>
      <i class="fa fa-search-plus fa-2x" aria-hidden="true" *ngIf="!show" (click)="show = !show"
      style="cursor: pointer; color: gray"></i>
       <h5 class="pull-right">{{ file_name }}</h5>
        <ul class="list-group" style="list-style-type: none;">
          <li>Tumor suppressor genes
          <i class="fa fa-square" aria-hidden="true" style="color:#CD0000;background-color:#CD0000"></i> </li>
          <li>Oncogenes
          <i class="fa fa-square" aria-hidden="true" style="color:#007200;background-color:#007200"></i>
          </li>
        </ul>
      <nvd3 id="boxplotchart" config="{deepWatchData: false}" [options]="options" [data]="cnvdata" *ngIf="!show"></nvd3>
    </div>
  </div>
  <div >
  
    <span *ngIf="cnvdata===undefined">
      <i class="fa fa-bar-chart text-muted" style="font-size:154px; padding-left: 39px;"></i>
      <br />
      <span class="text-muted" style="padding-left: 39px;"> There are no CNV data </span>
    </span>
    
  </div>`
})

export class CnvChartDirective implements AfterViewInit {
  @Input() data: any;
  options: any;
  errorMessage: string;
  cnvdata: any;
  file_name: string ;
  parseddata:any[] = [];
  frame: any;
  chartfrm: any;

  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('ccww') CW:any;

  constructor() { }

  ngAfterViewInit() {
    let cwElement:any = this.CW;
    if(typeof cwElement === 'undefined') {return;}
    else {this.frame = cwElement.nativeElement.clientWidth};

    this.ngOnChanges();

  }

  ngOnInit() {}

  ngOnChanges() {
    this.getData();
  }

  getData() {
    if(this.data===null) return;




    let array:any = this.data[0] || {};
    let version:any = this.data[1] || {};
    let xr:number = array.length * 24;
    let temp:any[] = [];
    let svg:any;
    let point5:string = "";
    let point95:string = "";
    let endX:string = "";

    if(array.length===0) return;

    // if (typeof this.data !== "undefined" && this.data !== null) {
      this.file_name = "Cnv Chart Test Name. Version: " + version;
      // this.file_name = this.data[1].split('tmp/')[1];
    // }

    let frm:any = (typeof this.frame !== 'undefined') ? (this.frame) : 0;

    Object.keys(array).forEach((key:any) => {
      let gene:string = array[key].gene;
      let cis:any = (typeof array[key].confidence_intervals === 'undefined') ? 0 : array[key].confidence_intervals;

      if(cis !== 0) {
         point5 = parseFloat(cis[0].split(':')[1]).toFixed(2);
         point95 = parseFloat(cis[1].split(':')[1]).toFixed(2);
      }

      let values = array[key].values;
      let width:number = values.length;

      let median:any = ("raw_copy_number" in array[key])===true ? array[key].raw_copy_number : array[key].rawCopyNumber;
      let tsg:any = ("tsg_gene" in array[key])===true ? array[key].tsg_gene : array[key].tsgGene;

      let status:string = !tsg ? '#CD0000' : '#007200';

      let position:number = array[key].position;
      let chromosome:string = array[key].chromosome;

      let min = values[0];
      let max = values[(width - 1)];
      let chrnum:any[] = [];
      let error:number = 0;
      endX = ((chromosome !== 'chrX') ? '-' : 'x');

      if(frm > 0) {
        if (typeof chromosome !== 'undefined') {
          error = (parseFloat(median) > parseFloat(max)) ? 1 : 0;
          status = status;
          chrnum = chromosome.split('chr');
          this.parseddata.push([gene, chromosome, key, chrnum[1], min, max, error]);
        }
      }

      let pMin:string = parseFloat(min).toFixed(2);
      let pMax:string = parseFloat(max).toFixed(2);

      let Object:any = {
        x: key,
        label: gene,
        // label: '<a href>' + gene + '</a>',
        status: status,
        error: error,
        chr: chromosome,
        values: {
          position: position,
          cn: median,
          Q1: parseFloat(point5).toFixed(2),
          Q2: parseFloat(median).toFixed(2),
          Q3: parseFloat(point95).toFixed(2),
          whisker_low: pMin,
          whisker_high: pMax,
          outliers: [pMin, parseFloat(median).toFixed(2), pMax]
        }
      };

      temp.push(Object);
    });

    let colors:any[] = [];
    let tip:any = 0;

    //COLORS
    Object.keys(temp).forEach((key:any) => {
      (temp[key].error === 1) ? colors.push("#595851") : colors.push(temp[key].status);
    });

    //Y MARGINS
    if(temp !== null && temp.length > 0) {
      let keys:any = Object.keys(temp);
      keys.sort(function (a:any, b:any) {
        return temp[b].values.whisker_high - temp[a].values.whisker_high;
      })
      tip = (temp[keys[0]].values.whisker_high < 7) ? 8 : (temp[keys[0]].values.whisker_high);
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
      return {top: 20, right: 5, bottom: 60, left: 30};
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
    let xRange:any = function () {
      if(endX === '-') {
        let seq:number = (temp.length < 10) ? (temp.length * 25) : frm;
        return [10, seq];
      }
      return null;
    };
    let maxBoxWidth:any = function () {
        return 0.5;
      };
    let color:any = function () {
      return colors;
    };
    let noData:any = function () {
      return 'There are no CNV data';
    };

    this.options = {
      chart: {
        noData: noData(),
        color: color(),
        id: id(),
        type: type(),
        height: height(),
        margin: margin(),
        showLabels: showLabels(),
        showXAxis: showXAxis(),
        xAxis: xAxis(),
        yDomain: yDomain(),
        xRange: xRange(),
        maxBoxWidth: maxBoxWidth(),
        legend: {
          margin: {
            top: 5,
            right: 70,
            bottom: 5,
            left: 0
          }
        },
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
            } else {
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

              return "<table id='" + d.data.label + "' style='font-size: 18px'>" +
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
          let genespot = 0;
          let genes = this.parseddata;
          let frame:any;
          let marker:any = [];
          let name:any = 'test';

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
            let err = genes[key][6];

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

              } else {
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

          let max = Math.round(highest / 10) * 3 + lowest;

          lastspot = chart.xScale()(gene) + (frm);
          genespot = chart.xScale()(gene) + 25;
          let y1 = chart.yScale()(2);//2.0 line
          let y2 = chart.yScale()(7);//7.0 line

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
            .attr('x1', genespot)
            .attr('x2', genespot)
            .attr('y1', height)
            .style('fill', 'none')
            .style('stroke', 'gray')
            .style('stroke-width', 0.5)
            .style('stroke-dasharray', ('3, 3'));
            // .style('stroke-linecap', 'line');

          if(frm === 0) return;

          svg.append('line')
            .attr('x1', lastspot)
            .attr('x2', lastspot)
            .attr('y1', height)
            .style('fill', 'none')
            .style('stroke', 'black')
            .style('stroke-width', 0.5)
            .style('stroke-linecap', 'line');

        }
      }
    }
  }

}


