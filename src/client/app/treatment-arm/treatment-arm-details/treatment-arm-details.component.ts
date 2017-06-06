import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { routerTransition } from './../../shared/router.animations';
import { GmtPipe } from './../../shared/pipes/gmt.pipe';
import { TreatmentArmApiService } from '../treatment-arm-api.service';


/**
 * TreatmentArmDetailsComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-treatment-arm-details',
  templateUrl: 'treatment-arm-details.component.html',
  styleUrls: ['treatment-arm-details.component.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})
export class TreatmentArmDetailsComponent implements OnInit {

  searchtermExdr: string = '';
  searchtermExdz: string = '';
  searchtermSnvIn: string = '';
  searchtermSnvEx: string = '';
  searchtermIndelIn: string = '';
  searchtermIndelEx: string = '';
  searchtermCnvIn: string = '';
  searchtermCnvEx: string = '';
  searchtermGeneIn: string = '';
  searchtermGeneEx: string = '';
  searchtermRuleIn: string = '';
  searchtermRuleEx: string = '';
  searchtermAssay: string = '';
  searchtermPatient: string = '';

  recordsPerPageExdr: number = 10;
  recordsPerPageExdz: number = 10;
  recordsPerPageSnvIn: number = 10;
  recordsPerPageSnvEx: number = 10;
  recordsPerPageIndelIn: number = 10;
  recordsPerPageIndelEx: number = 10;
  recordsPerPageCnvIn: number = 10;
  recordsPerPageCnvEx: number = 10;
  recordsPerPageGeneIn: number = 10;
  recordsPerPageGeneEx: number = 10;
  recordsPerPageRuleIn: number = 10;
  recordsPerPageRuleEx: number = 10;
  recordsPerPageAssay: number = 10;
  recordsPerPagePatient: number = 10;

  tableHistoryDefaultSort: string = 'date';
  tableExdrDefaultSort: string = 'drugId';
  tableExdzDefaultSort: string = 'medraCode';
  tableSnvInDefaultSort: string = 'identifier';
  tableSnvExDefaultSort: string = 'identifier';
  tableIndelInDefaultSort: string = 'identifier';
  tableIndelExDefaultSort: string = 'identifier';
  tableCnvInDefaultSort: string = 'geneName';
  tableCnvExDefaultSort: string = 'geneName';
  tableGeneInDefaultSort: string = 'identifier';
  tableGeneExDefaultSort: string = 'identifier';
  tableRuleInDefaultSort: string = 'gene';
  tableRuleExDefaultSort: string = 'gene';
  tableAssayDefaultSort: string = 'gene';
  tablePatientDefaultSort: string = 'dateSelected';

  sortByAsc: string = 'asc';
  sortByDesc: string = 'desc';

  snvIn: any[];
  snvEx: any[];
  indelIn: any[];
  indelEx: any[];
  cnvIn: any[];
  cnvEx: any[];
  geneIn: any[];
  geneEx: any[];
  ruleIn: any[];
  ruleEx: any[];
  versionIndex: number = 0;

  versionData: any[];
  tableData: any[];
  dataAvailable: boolean = false;

  errorMessage: string;

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      xAxes: [{
        stacked: true,
        display: false
      }],
      yAxes: [{
        stacked: true,
        ticks: {
          suggestedMax: 10
        }
      }]
    }
  };

  public lineChartColors: Array<any> = [
    { // 'Max' color
      borderColor: 'rgba(240,75,70, 1)'
    },
    { // 'Off Trial' color
      backgroundColor: 'rgba(252,191,103, 0.75)'
    },
    { // 'On Treatment Arm' color
      backgroundColor: 'rgba(69,196,182, 0.75)'
    },
    { // 'Pending' color
      backgroundColor: 'rgba(175,122,196, 0.75)'
    }
  ];

  public barChartLabels: string[] = [];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = false;

  public barChartData: any[] = [
    {
      data: [],
      label: 'Max',
      type: 'line',
      fill: false,
      pointRadius: 0,
      pointHoverRadius: 0
    },
    {
      data: [],
      label: 'Off Trial'
      // FORMERLY_ON_ARM_OFF_TRIAL, FORMERLY_ON_ARM_PROGRESSED, OFF_TRIAL_DECEASED, OFF_TRIAL
    },
    {
      data: [],
      label: 'On Treatment Arm'
      // ON_TREATMENT_ARM
    },
    {
      data: [],
      label: 'Pending'
      // PENDING_APPROVAL, PENDING_CONFIRMATION
    }
  ];
  // NOT_ELIGIBLE, OFF_TRIAL_NOT_CONSENTED



  constructor(private treatmentArmApi: TreatmentArmApiService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.getVersionsData();
    this.getDetailsData();
  }

  getDetailsData() {
    let gmt = new GmtPipe();
    this.treatmentArmApi.getTreatmentArmDetails(this.route.snapshot.params['id'])
      .subscribe(itemList => {
        this.tableData = itemList;

        this.tableData[0].summaryReport.assignmentRecords = itemList[0].summaryReport.assignmentRecords.map((x: any) => {
          x.dateSelected = gmt.transform(x.dateSelected);
          x.dateOnArm = gmt.transform(x.dateOnArm);
          x.dateOffArm = gmt.transform(x.dateOffArm);
          return x;
        });
        let status1: string = '0,';
        let status2: string = '0,';
        let status3: string = '0,';
        let s1 = 0, s2 = 0, s3 = 0;
        let sta1 = 0, sta2 = 0, sta3 = 0;
        // console.log(this.tableData[this.versionIndex].summaryReport.assignmentRecords);
        if (this.tableData[this.versionIndex] !== null) {

          // this.tableData[this.versionIndex].summaryReport.assignmentRecords.forEach((element: any, ndx: number) => {
          //   if (element.assignmentStatusOutcome == 'ON_TREATMENT_ARM') {
          //     console.log(element);
          //     console.log(ndx);
          //   }
          // });

          // console.log(this.tableData[this.versionIndex].summaryReport.assignmentRecords);

          this.barChartLabels = this.tableData[this.versionIndex].summaryReport.assignmentRecords.map((x: any) => {
            if (x.assignmentStatusOutcome === 'ON_TREATMENT_ARM') {
              s2 = 0;
              s3 = 0;
              sta2 = 0;
              sta3 = 0;
              s1 = s1 + 1;
              sta1 = sta1 + 1;
              if (sta1 >= 2) {
                status1 = status1.substr(0, status1.length - 2);
                status1 = status1 + (sta1.toString()) + ',';
              } else {
                status1 = status1 + (sta1.toString()) + ',';
              }
              if (s1 < 2) {
                status2 = status2 + 0 + ',';
                status3 = status3 + 0 + ',';
              }
            } else if ('PENDING_APPROVAL,PENDING_CONFIRMATION'.indexOf(x.assignmentStatusOutcome) !== -1) {
              s1 = 0;
              s3 = 0;
              sta1 = 0;
              sta3 = 0;
              s2 = s2 + 1;
              sta2 = sta2 + 1;
              if (sta2 >= 2) {
                status2 = status2.substr(0, status2.length - 2);
                status2 = status2 + (sta2.toString()) + ',';
              } else {
                status2 = status2 + (sta2.toString()) + ',';
              }

              if (s2 < 2) {
                status1 = status1 + 0 + ',';
                status3 = status3 + 0 + ',';
              }
            } else if (`FORMERLY_ON_ARM_OFF_TRIAL, FORMERLY_ON_ARM_PROGRESSED, OFF_TRIAL_DECEASED, 
OFF_TRIAL`.indexOf(x.assignmentStatusOutcome) !== -1) {
              s1 = 0;
              s2 = 0;
              sta1 = 0;
              sta2 = 0;
              s3 = s3 + 1;
              sta3 = sta3 + 1;
              if (sta3 >= 2) {
                status3 = status3.substr(0, status3.length - 2);
                status3 = status3 + (sta3.toString()) + ',';
              } else {
                status3 = status3 + (sta3.toString()) + ',';
              }

              if (s3 < 2) {
                status1 = status1 + 0 + ',';
                status2 = status2 + 0 + ',';
              }
            }
            return x.disease.shortName + '(' + x.disease.meddraCode + ')';
          });

          this.barChartLabels = Array.from(new Set(this.barChartLabels));

          let itemsSnv: any[] = this.tableData[this.versionIndex].variantReport.singleNucleotideVariants;
          this.snvIn = itemsSnv.filter(item => item.inclusion === true);
          this.snvEx = itemsSnv.filter(item => item.inclusion === false);

          let itemsIndel: any[] = this.tableData[this.versionIndex].variantReport.indels;
          this.indelIn = itemsIndel.filter(item => item.inclusion === true);
          this.indelEx = itemsIndel.filter(item => item.inclusion === false);

          let itemsCnv: any[] = this.tableData[this.versionIndex].variantReport.copyNumberVariants;
          this.cnvIn = itemsCnv.filter(item => item.inclusion === true);
          this.cnvEx = itemsCnv.filter(item => item.inclusion === false);

          let itemsGene: any[] = this.tableData[this.versionIndex].variantReport.geneFusions;
          this.geneIn = itemsGene.filter(item => item.inclusion === true);
          this.geneEx = itemsGene.filter(item => item.inclusion === false);

          let itemsRule: any[] = this.tableData[this.versionIndex].variantReport.nonHotspotRules;
          this.ruleIn = itemsRule.filter(item => item.inclusion === true);
          this.ruleEx = itemsRule.filter(item => item.inclusion === false);

          this.dataAvailable = true;

          var strArr1: any[] = status1.split(',');
          for (var i = 1; i < strArr1.length - 1; i++)
            this.barChartData[2].data.push(parseInt(strArr1[i]));

          var strArr3: any[] = status3.split(',');
          for (var i = 1; i < strArr3.length - 1; i++)
            this.barChartData[1].data.push(parseInt(strArr3[i]));

          var strArr2: any[] = status2.split(',');
          for (var i = 1; i < strArr3.length - 1; i++) {
            this.barChartData[3].data.push(parseInt(strArr2[i]));
            this.barChartData[0].data.push(10);
          }
          // console.log(this.barChartData);
          // console.log(status1);
          // console.log(strArr1);
          // console.log(strArr2);
          // console.log(strArr3);

        }
      },
      error => this.errorMessage = <any>error
      );

  }

  getPreviousDetailsData() {
    let gmt = new GmtPipe();
    this.dataAvailable = false;
    this.treatmentArmApi.getPreviousTreatmentArmDetails(this.route.snapshot.params['id'])
      .subscribe(itemList => {
        this.tableData = itemList;

        this.tableData[0].summaryReport.assignmentRecords = itemList[0].summaryReport.assignmentRecords.map((x: any) => {
          x.dateSelected = gmt.transform(x.dateSelected);
          x.dateOnArm = gmt.transform(x.dateOnArm);
          x.dateOffArm = gmt.transform(x.dateOffArm);
          return x;
        });

        let itemsSnv: any[] = this.tableData[this.versionIndex].variantReport.singleNucleotideVariants;
        this.snvIn = itemsSnv.filter(item => item.inclusion === true);
        this.snvEx = itemsSnv.filter(item => item.inclusion === false);

        let itemsIndel: any[] = this.tableData[this.versionIndex].variantReport.indels;
        this.indelIn = itemsIndel.filter(item => item.inclusion === true);
        this.indelEx = itemsIndel.filter(item => item.inclusion === false);

        let itemsCnv: any[] = this.tableData[this.versionIndex].variantReport.copyNumberVariants;
        this.cnvIn = itemsCnv.filter(item => item.inclusion === true);
        this.cnvEx = itemsCnv.filter(item => item.inclusion === false);

        let itemsGene: any[] = this.tableData[this.versionIndex].variantReport.geneFusions;
        this.geneIn = itemsGene.filter(item => item.inclusion === true);
        this.geneEx = itemsGene.filter(item => item.inclusion === false);

        let itemsRule: any[] = this.tableData[this.versionIndex].variantReport.nonHotspotRules;
        this.ruleIn = itemsRule.filter(item => item.inclusion === true);
        this.ruleEx = itemsRule.filter(item => item.inclusion === false);

        this.dataAvailable = true;

      },
      error => this.errorMessage = <any>error
      );
  }

  setVersionIndex(i: number): void {
    this.versionIndex = i;
    this.getPreviousDetailsData();
  }

  getVersionsData() {
    this.treatmentArmApi.getTreatmentArmVersions(this.route.snapshot.params['id'])
      .subscribe(itemList => {
        this.versionData = itemList;

        // console.log(this.route.snapshot.params['version']);
        // console.log(this.versionIndex);

        // let i;
        // for (i = 0; i < this.versionData.length; i++) {
        //   if (this.versionData[i].version === this.route.snapshot.params['version']) this.versionIndex = i;
        // }

        // this.getPreviousDetailsData();

      },
      error => this.errorMessage = <any>error
      );
  }

}
