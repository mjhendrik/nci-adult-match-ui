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

  public barChartLabels: string[] = ['Adenocarcinoma - pancreas (10053130)', 'Adenocarcinoma, NOS (10021980)',
    'Bone cancer, NOS (10006190)', 'Carcinoma, NOS (10006285)', 'Cholangiocar.- intra/extrahepatic (10025126)',
    'CNS primary tumor, NOS (10009951)', 'Female reprod. system cancer, NOS (10038045)', 'Lung adenocarcinoma (10053130)',
    'Neuroendocrine cancer, NOS (10021980)', 'Ovarian epithelial cancer (10006190)', 'Pancreatic neuroendocrine tumor (10006285)',
    'Thyroid cancer, NOS (10025126)', 'Adenocarcinoma - pancreas (10009951)', 'Adenocarcinoma, NOS (10038045)',
    'Bone cancer, NOS (10053130)', 'Carcinoma, NOS (10021980)', 'Cholangiocar.- intra/extrahepatic (10006190)',
    'CNS primary tumor, NOS (10006285)', 'Female reprod. system cancer, NOS (10025126)', 'Lung adenocarcinoma (10009951)',
    'Neuroendocrine cancer, NOS (10038045)', 'Ovarian epithelial cancer (10053130)', 'Pancreatic neuroendocrine tumor (10021980)',
    'Thyroid cancer, NOS (10006190)', 'Adenocarcinoma - pancreas (10006285)', 'Adenocarcinoma, NOS (10025126)',
    'Bone cancer, NOS (10009951)', 'Carcinoma, NOS (10038045)', 'Cholangiocar.- intra/extrahepatic (10053130)',
    'CNS primary tumor, NOS (10021980)', 'Female reprod. system cancer, NOS (10006190)', 'Lung adenocarcinoma (10006285)',
    'Neuroendocrine cancer, NOS (10025126)', 'Ovarian epithelial cancer (10009951)', 'Pancreatic neuroendocrine tumor (10038045)'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = false;

  public barChartData: any[] = [
    {
      data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
        10, 10, 10],
      label: 'Max',
      type: 'line',
      fill: false,
      pointRadius: 0,
      pointHoverRadius: 0
    },
    {
      data: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
      label: 'Off Trial'
      // FORMERLY_ON_ARM_OFF_TRIAL, FORMERLY_ON_ARM_PROGRESSED, OFF_TRIAL_DECEASED, OFF_TRIAL
    },
    {
      data: [1, 1, 1, 2, 2, 0, 1, 3, 1, 2, 0, 0, 1, 1, 1, 2, 2, 7, 0, 1, 3, 1, 2, 0, 0, 1, 1, 1, 2, 2, 0, 1, 3, 1, 3],
      label: 'On Treatment Arm'
      // ON_TREATMENT_ARM
    },
    {
      data: [0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 2, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0],
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
      },
      error => this.errorMessage = <any>error
      );
  }

}
