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
        style({ transform: 'scale3d(.5, .5, .5)' }),
        animate(100)
      ]),
      transition('* => void', [])
    ])
  ],

  providers: [nvD3],
  template://Zoomout panel
  '<div *ngIf="file_name">'
  + '<div [@dialog] *ngIf="show" class="dialog">'
  + '<i class="fa fa-search-minus fa-2x" aria-hidden="true" *ngIf="show" (click)="show = !show" style="cursor: pointer; color: gray"></i>'
  + ' <h4 class="pull-right">{{ file_name }}</h4>'
  + '<ul class="list-group" style="list-style-type: none;">'
  + '<li>Tumor suppressor genes '
  + '<i class="fa fa-square" aria-hidden="true" style="color:#CD0000;background-color:#CD0000"></i> </li>'
  + '<li>Oncogenes '
  + '<i class="fa fa-square" aria-hidden="true" style="color:green;background-color:green"></i>'
  + '</li></ul>'
  + '<nvd3 id="boxplotchart" config="{deepWatchData: false}" [options]="options" [data]="cnvdata" *ngIf="show"></nvd3>'
  + '</div>'
  //Small panel
  + '<div *ngIf="!show">'
  + '<i class="fa fa-search-plus fa-2x" aria-hidden="true" *ngIf="!show" (click)="show = !show" style="cursor: pointer; color: gray"></i>'
  + ' <h5 class="pull-right">{{ file_name }}</h5>'
  + '<ul class="list-group" style="list-style-type: none;">'
  + '<li>Tumor suppressor genes '
  + '<i class="fa fa-square" aria-hidden="true" style="color:#CD0000;background-color:#CD0000"></i> </li>'
  + '<li>Oncogenes '
  + '<i class="fa fa-square" aria-hidden="true" style="color:green;background-color:green"></i>'
  + '</li></ul>'
  + '<nvd3 id="boxplotchart" config="{deepWatchData: false}" [options]="options" [data]="cnvdata" *ngIf="!show"></nvd3>'
  + '</div>'
  + '</div>'

  + '<div *ngIf="!file_name">'
  + '<span *ngIf="!parsed_vcf_genes">'
  + '<i class="fa fa-bar-chart text-muted" style="font-size:154px; padding-left: 39px;"></i>'
  + '<br />'
  + '<span class="text-muted"> There are no CNV data </span>'
  + '</span>'

})

export class CnvChartDirective implements OnInit {
  @Input() data: any;
  options: any;
  errorMessage: string;
  cnvdata: any;
  file_name: string ;
  // tooltip: any;

  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  // constructor() {}

  ngOnInit() {
    this.getData();
  }
  getData() {

    let array = this.data[0];
    if(typeof this.data[1] !== 'undefined') {
      this.file_name = this.data[1].split('tmp/')[1];
    }
    let temp: any[] = [];
    let svg: any;

    Object.keys(array).forEach((key: any) => {

      let gene = array[key].gene;
      let values = array[key].values;
      let median = array[key].raw_copy_number;
      let position = array[key].position;
      let chromosome = array[key].chromosome;
      let status = !array[key].tsg_gene ? '#CD0000' : 'Green';

      let min = values[0];
      let max = values[10];

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
    let colors: any[] = [];
    //COLORS
    Object.keys(temp).forEach((key: any) => {
      colors.push(temp[key].status);
    });

    this.cnvdata = temp;

    let id:any = function () {return 'boxplotchart';};
    let type:any = function () {return 'boxPlotChart';};
    let height:any = function () {return 450;};
    let margin:any = function () {return {top: 20, right: 20, bottom: 60, left: 40};};
    let showLabels:any = function () {return true;};
    let showXAxis:any = function () {return true;};
    let xAxis:any = function () {return {rotateLabels: -45, fontSize: 10}};
    let color = function () {return colors;};

    // let contentGenerator = function (d) {console.log("--> " + JSON.stringify(d))};

    // let contentGenerator = (d:any) => {
    //   let label:any;
    //   let position:any;
    //   let cn:any;
    //   let cl95:any;
    //   let cl05:any;
    //   let html:any;
    //   let li:any;
    //   let color:any;
    //
    //   label = d.key;
    //   position = 'POS: ' + d.data.values.position;
    //   cn = 'CN: ' + d.data.values.cn;
    //   color = 'color: white; background-color: ' + d.data.status;
    //
    //   cl95 = 'Cl 5%: ' + d.data.values.whisker_low;
    //   cl05 = 'Cl 95%: ' + d.data.values.whisker_high;
    //
    //   html = '<h4 class="text-center" style="' + color + '"><b>' + label + '</b></h4>';
    //   li = '<li>' + position + '</li>';
    //   li += '<li>' + cn + '</li>';
    //   li += '<li>' + cl95 + '</li>';
    //   li += '<li>' + cl05 + '</li>';
    //
    //   html += '<ul class="list-group" style="list-style-type: none;">' + li + '</ul>';
    //
    //   return html;
    // }


    this.options = {
      chart : {

        color: color(),
        id: id(),
        type: type(),
        height: height(),
        margin: margin(),
        showLabels: showLabels(),
        showXAxis: showXAxis(),
        xAxis: xAxis(),
        tooltip: {
          contentGenerator: (d:any) => {
            let label:any;
            let position:any;
            let cn:any;
            let cl95:any;
            let cl05:any;
            let html:any;
            let li:any;
            let color:any;

            label = d.key;
            position = 'POS: ' + d.data.values.position;
            cn = 'CN: ' + d.data.values.cn;
            color = 'color: white; background-color: ' + d.data.status;

            cl95 = 'Cl 5%: ' + d.data.values.whisker_low;
            cl05 = 'Cl 95%: ' + d.data.values.whisker_high;

            html = '<h4 class="text-center" style="' + color + '"><b>' + label + '</b></h4>';
            li = '<li>' + position + '</li>';
            li += '<li>' + cn + '</li>';
            li += '<li>' + cl95 + '</li>';
            li += '<li>' + cl05 + '</li>';

            html += '<ul class="list-group" style="list-style-type: none;">' + li + '</ul>';

            return html;

          }
        }
      }
    };

  }
}
