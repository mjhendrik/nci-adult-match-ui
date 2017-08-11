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
  dataAvailable: boolean = true;

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
  // NOT_ELIGIBLE, OFF_TRIAL_NOT_CONSENTED, PROGRESSION, PROGRESSION_REBIOPSY



  constructor(private treatmentArmApi: TreatmentArmApiService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.getVersionsData(this.route.snapshot.data['data'].versionData);
    this.getDetailsData(this.route.snapshot.data['data'].details);
  }

  getDetailsData(itemList: any) {
    let gmt = new GmtPipe();

    this.tableData = itemList;

    this.tableData[0].summaryReport.assignmentRecords = itemList[0].summaryReport.assignmentRecords.map((x: any) => {
      x.dateSelected = gmt.transform(x.dateSelected);
      x.dateOnArm = gmt.transform(x.dateOnArm);
      x.dateOffArm = gmt.transform(x.dateOffArm);
      x.diseaseShortName = x.diseases[0].shortName;
      return x;
    });

    if (this.tableData[this.versionIndex] !== null) {
      let assignmentRecords = this.tableData[this.versionIndex].summaryReport.assignmentRecords;

      this.barChartLabels = assignmentRecords.filter((x: any) => `FORMERLY_ON_ARM_OFF_TRIAL, FORMERLY_ON_ARM_PROGRESSED, OFF_TRIAL_DECEASED,
OFF_TRIAL, PENDING_CONFIRMATION, PENDING_APPROVAL, ON_TREATMENT_ARM`.indexOf(x.assignmentStatusOutcome) !== -1).map((x: any) => {
          return x.diseases[0].shortName + ' (' + x.diseases[0]._id + ')';
        });
      this.barChartLabels = Array.from(new Set(this.barChartLabels));

      let statusArray: any = {};
      let tastatus: number = 0;
      let offtrailstatus: number = 0;
      let pendingstatus: number = 0;

      assignmentRecords.forEach((element: any) => {
        this.barChartLabels.forEach((label: any) => {
          if (label.indexOf(element.diseases[0].shortName) !== -1) {
            if (statusArray[element.diseases[0].shortName] === undefined) {
              statusArray[element.diseases[0].shortName] = '';
            }
            statusArray[element.diseases[0].shortName] = statusArray[element.diseases[0].shortName] + JSON.stringify(element) + '|||';
          }
        });
      });

      let result: any = {};
      Object.keys(statusArray).forEach((key: any) => {
        let disease = statusArray[key].split('|||');
        tastatus = 0;
        pendingstatus = 0;
        offtrailstatus = 0;
        disease.forEach((elem: any) => {
          let element;
          if (elem !== '') {
            element = JSON.parse(elem);
            if (element.assignmentStatusOutcome === 'ON_TREATMENT_ARM') {
              tastatus++;
            } else if ('PENDING_APPROVAL,PENDING_CONFIRMATION'.indexOf(element.assignmentStatusOutcome) !== -1) {
              pendingstatus++;
            } else if (`FORMERLY_ON_ARM_OFF_TRIAL, FORMERLY_ON_ARM_PROGRESSED, OFF_TRIAL_DECEASED, 
OFF_TRIAL`.indexOf(element.assignmentStatusOutcome) !== -1) {
              offtrailstatus++;
            }
            result[key] = {
              'offtrail': offtrailstatus,
              'pending': pendingstatus,
              'onta': tastatus
            };
          }
        });
      });

      Object.keys(result).forEach((key: any) => {
        if (result[key].offtrail === 0 && result[key].onta === 0 && result[key].pending === 0) {

        } else {
          this.barChartData[0].data.push(10);
          this.barChartData[1].data.push(result[key].offtrail);
          this.barChartData[2].data.push(result[key].onta);
          this.barChartData[3].data.push(result[key].pending);
        }
      });


      let itemsSnv: any[] = this.tableData[this.versionIndex].variantReport.singleNucleotideVariants;
      this.snvIn = itemsSnv.filter(item => item.inclusion === true);
      this.snvEx = itemsSnv.filter(item => item.inclusion === false);

      let itemsIndel: any[] = this.tableData[this.versionIndex].variantReport.indels;
      this.snvIn = this.snvIn.concat(itemsIndel.filter(item => item.inclusion === true));
      this.snvEx = this.snvEx.concat(itemsIndel.filter(item => item.inclusion === false));

      let itemsCnv: any[] = this.tableData[this.versionIndex].variantReport.copyNumberVariants;
      this.cnvIn = itemsCnv.filter(item => item.inclusion === true);
      this.cnvEx = itemsCnv.filter(item => item.inclusion === false);

      let itemsGene: any[] = this.tableData[this.versionIndex].variantReport.geneFusions;
      this.geneIn = itemsGene.filter(item => item.inclusion === true);
      this.geneEx = itemsGene.filter(item => item.inclusion === false);

      let itemsRule: any[] = this.tableData[this.versionIndex].variantReport.nonHotspotRules;
      this.ruleIn = itemsRule.filter(item => item.inclusion === true);
      this.ruleEx = itemsRule.filter(item => item.inclusion === false);

      this.geneIn.forEach(element => {
        let genes = element.identifier.split('-');
        element.gene1 = genes[0];
        element.gene2 = genes[1].split('.')[0];
      });

      this.geneEx.forEach(element => {
        let genes = element.identifier.split('-');
        element.gene1 = genes[0];
        element.gene2 = genes[1].split('.')[0];
      });

    }

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

  getVersionsData(itemList: any) {

    this.versionData = itemList;

  }

}
