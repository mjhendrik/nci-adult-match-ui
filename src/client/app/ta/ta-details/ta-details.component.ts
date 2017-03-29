import { Component, OnInit } from '@angular/core';

import { routerTransition } from './../../shared/router.animations';
import { GMTFilter } from './../../shared/pipes/gmt';


/**
 * This class represents the lazy loaded TADetailsComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-ta-details',
  templateUrl: 'ta-details.component.html',
  styleUrls: ['ta-details.component.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' },
  providers: [GMTFilter]
})
export class TaDetailsComponent implements OnInit {

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

  recordsPerPageExdr: number;
  recordsPerPageExdz: number;
  recordsPerPageSnvIn: number;
  recordsPerPageSnvEx: number;
  recordsPerPageIndelIn: number;
  recordsPerPageIndelEx: number;
  recordsPerPageCnvIn: number;
  recordsPerPageCnvEx: number;
  recordsPerPageGeneIn: number;
  recordsPerPageGeneEx: number;
  recordsPerPageRuleIn: number;
  recordsPerPageRuleEx: number;
  recordsPerPageAssay: number;
  recordsPerPagePatient: number;

  tableHistoryDefaultSort: string;
  tableExdrDefaultSort: string;
  tableExdzDefaultSort: string;
  tableSnvInDefaultSort: string;
  tableSnvExDefaultSort: string;
  tableIndelInDefaultSort: string;
  tableIndelExDefaultSort: string;
  tableCnvInDefaultSort: string;
  tableCnvExDefaultSort: string;
  tableGeneInDefaultSort: string;
  tableGeneExDefaultSort: string;
  tableRuleInDefaultSort: string;
  tableRuleExDefaultSort: string;
  tableAssayDefaultSort: string;
  tablePatientDefaultSort: string;

  sortByAsc: string;
  sortByDesc: string;

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

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      xAxes: [{
        stacked: true
      }],
      yAxes: [{
        stacked: true
      }]
    }
  };

  public barChartLabels: string[] = ['Adenocarcinoma - pancreas', 'Adenocarcinoma, NOS', 'Bone cancer, NOS', 'Carcinoma, NOS', 'Cholangiocar.- intra/extrahepatic', 'CNS primary tumor, NOS', 'Female reprod. system cancer, NOS', 'Lung adenocarcinoma', 'Neuroendocrine cancer, NOS', 'Ovarian epithelial cancer', 'Pancreatic neuroendocrine tumor', 'Thyroid cancer, NOS'];
  // public barChartLabels: string[] = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    {
      data: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
      label: 'Off Trial'
    },
    {
      data: [1, 1, 1, 2, 2, 0, 1, 3, 1, 2, 0, 0],
      label: 'On Treatment Arm'
    },
    {
      data: [0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
      label: 'Pending Review'
    }
  ];

  constructor() {

  }

  ngOnInit() {
    this.recordsPerPageExdr = 10;
    this.recordsPerPageExdz = 10;
    this.recordsPerPageSnvIn = 5;
    this.recordsPerPageSnvEx = 5;
    this.recordsPerPageIndelIn = 5;
    this.recordsPerPageIndelEx = 5;
    this.recordsPerPageCnvIn = 5;
    this.recordsPerPageCnvEx = 5;
    this.recordsPerPageGeneIn = 5;
    this.recordsPerPageGeneEx = 5;
    this.recordsPerPageRuleIn = 5;
    this.recordsPerPageRuleEx = 5;
    this.recordsPerPageAssay = 10;
    this.recordsPerPagePatient = 10;

    this.tableHistoryDefaultSort = 'date';
    this.tableExdrDefaultSort = 'drugId';
    this.tableExdzDefaultSort = 'medraCode';
    this.tableSnvInDefaultSort = 'identifier';
    this.tableSnvExDefaultSort = 'identifier';
    this.tableIndelInDefaultSort = 'identifier';
    this.tableIndelExDefaultSort = 'identifier';
    this.tableCnvInDefaultSort = 'geneName';
    this.tableCnvExDefaultSort = 'geneName';
    this.tableGeneInDefaultSort = 'identifier';
    this.tableGeneExDefaultSort = 'identifier';
    this.tableRuleInDefaultSort = 'gene';
    this.tableRuleExDefaultSort = 'gene';
    this.tableAssayDefaultSort = 'gene';
    this.tablePatientDefaultSort = 'dateSelected';

    this.sortByAsc = 'asc';
    this.sortByDesc = 'desc';

    let itemsSnv: any[] = this.tableRulesData.variantReport.singleNucleotideVariants;
    this.snvIn = itemsSnv.filter(item => item.inclusion == true);
    this.snvEx = itemsSnv.filter(item => item.inclusion == false);

    let itemsIndel: any[] = this.tableRulesData.variantReport.indels;
    this.indelIn = itemsIndel.filter(item => item.inclusion == true);
    this.indelEx = itemsIndel.filter(item => item.inclusion == false);

    let itemsCnv: any[] = this.tableRulesData.variantReport.copyNumberVariants;
    this.cnvIn = itemsCnv.filter(item => item.inclusion == true);
    this.cnvEx = itemsCnv.filter(item => item.inclusion == false);

    let itemsGene: any[] = this.tableRulesData.variantReport.geneFusions;
    this.geneIn = itemsGene.filter(item => item.inclusion == true);
    this.geneEx = itemsGene.filter(item => item.inclusion == false);

    let itemsRule: any[] = this.tableRulesData.variantReport.nonHotspotRules;
    this.ruleIn = itemsRule.filter(item => item.inclusion == true);
    this.ruleEx = itemsRule.filter(item => item.inclusion == false);

    let gmt = new GMTFilter();

    for (let i = 0; i < this.tablePatientData.length; i++) {
      this.tablePatientData[i].dateSelected = gmt.transform(this.tablePatientData[i].dateSelected);
    }

    for (let i = 0; i < this.tablePatientData.length; i++) {
      this.tablePatientData[i].dateOnArm = gmt.transform(this.tablePatientData[i].dateOnArm);
    }

    for (let i = 0; i < this.tablePatientData.length; i++) {
      this.tablePatientData[i].dateOffArm = gmt.transform(this.tablePatientData[i].dateOffArm);
    }

  }

  versionData: any = [
    "2015-08-06",
    "2016-11-18",
    "2016-11-19"
  ];

  tableRulesData: any = {
    "id": "EAY131-IX1",
    "name": "GDC-0032 in PIK3CA mutation",
    "version": "2015-08-06",
    "targetId": "778795",
    "targetName": "GDC-0032",
    "gene": "PIK3C",
    "exclusionDiseases": [
      {
        "medraCode": "10053130",
        "ctepCategory": "Breast Cancer - Invasive",
        "shortName": "Cystosarcoma phylloides - breast"
      },
      {
        "medraCode": "10021980",
        "ctepCategory": "Breast Cancer - Invasive",
        "shortName": "Inflammatory breast carcinoma"
      },
      {
        "medraCode": "10006190",
        "ctepCategory": "Breast Cancer - Invasive",
        "shortName": "Invasive breast carcinoma"
      },
      {
        "medraCode": "10006285",
        "ctepCategory": "Breast Neoplasm, Miscellaneous",
        "shortName": "Breast cancer, NOS"
      },
      {
        "medraCode": "10025126",
        "ctepCategory": "Squamous cell lung carcinoma",
        "shortName": "Non-Small Cell Lung Cancer"
      },
      {
        "medraCode": "10009951",
        "ctepCategory": "Colorectal Cancer",
        "shortName": "Adenocarcinoma - colon"
      },
      {
        "medraCode": "10038045",
        "ctepCategory": "Colorectal Cancer",
        "shortName": "Adenocarcinoma - rectum"
      }
    ],
    "exclusionDrugs": [
      {
        "drugId": "778795",
        "name": "GDC-0032 (taselisib)"
      },
      {
        "drugId": "",
        "name": "BEZ235"
      },
      {
        "drugId": "",
        "name": "XL-765 (SAR245409)"
      },
      {
        "drugId": "",
        "name": "GDC-0980"
      },
      {
        "drugId": "",
        "name": "PF-04691502"
      },
      {
        "drugId": "",
        "name": "PF-05212384 (PKI-587)"
      },
      {
        "drugId": "",
        "name": "SF-1126"
      },
      {
        "drugId": "",
        "name": "GSK 2126458"
      },
      {
        "drugId": "",
        "name": "P-7170"
      },
      {
        "drugId": "",
        "name": "BGT-226"
      },
      {
        "drugId": "",
        "name": "LY3023414"
      },
      {
        "drugId": "",
        "name": "BAY-80-6946"
      },
      {
        "drugId": "",
        "name": "ZSTK-474"
      },
      {
        "drugId": "",
        "name": "WX 037"
      },
      {
        "drugId": "",
        "name": "AZD8835"
      },
      {
        "drugId": "",
        "name": "GSK2636771"
      },
      {
        "drugId": "",
        "name": "GS-9820"
      },
      {
        "drugId": "",
        "name": "BYL719"
      },
      {
        "drugId": "",
        "name": "MLN1117 (INK1117)"
      },
      {
        "drugId": "",
        "name": "Idelalisib"
      },
      {
        "drugId": "",
        "name": "TGR1202"
      },
      {
        "drugId": "",
        "name": "RP6530"
      },
      {
        "drugId": "",
        "name": "duvelisib (IPI-145)"
      },
      {
        "drugId": "",
        "name": "CUDC-907"
      },
      {
        "drugId": "",
        "name": "MK-2206"
      },
      {
        "drugId": "",
        "name": "GSK690693"
      },
      {
        "drugId": "",
        "name": "AZD5363"
      },
      {
        "drugId": "",
        "name": "triciribine"
      },
      {
        "drugId": "",
        "name": "perifosine"
      },
      {
        "drugId": "",
        "name": "GSK2141795"
      },
      {
        "drugId": "",
        "name": "GSK2110183"
      },
      {
        "drugId": "",
        "name": "SR13668"
      },
      {
        "drugId": "",
        "name": "BAY1125976"
      },
      {
        "drugId": "",
        "name": "GDC-0068 (ipatasertib)"
      },
      {
        "drugId": "",
        "name": "LY2780301"
      },
      {
        "drugId": "",
        "name": "ARQ092"
      }
    ],
    "assayResults": [
      {
        "gene": "PTEN",
        "assayResultStatus": "POSITIVE",
        "assayVariant": "PRESENT",
        "levelOfEvidence": 3.1
      }
    ],
    "numPatientsAssigned": 4,
    "maxPatientsAllowed": 35,
    "treatmentArmStatus": "SUSPENDED",
    "variantReport": {
      "singleNucleotideVariants": [
        {
          "publicMedIds": [
            "21266528"
          ],
          "chromosome": "chr3",
          "position": "178916876",
          "identifier": "COSM746",
          "reference": "G",
          "alternative": "A",
          "levelOfEvidence": 3.1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "17376864",
            " 22949682"
          ],
          "chromosome": "chr3",
          "position": "178921553",
          "identifier": "COSM754",
          "reference": "T",
          "alternative": "A",
          "levelOfEvidence": 3.1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "17376864",
            " 22949682"
          ],
          "chromosome": "chr3",
          "position": "178927980",
          "identifier": "COSM757",
          "reference": "T",
          "alternative": "C",
          "levelOfEvidence": 3.1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "17376864"
          ],
          "chromosome": "chr3",
          "position": "178936074",
          "identifier": "COSM759",
          "reference": "C",
          "alternative": "G",
          "levelOfEvidence": 3.1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "17376864"
          ],
          "chromosome": "chr3",
          "position": "178936082",
          "identifier": "COSM760",
          "reference": "G",
          "alternative": "A",
          "levelOfEvidence": 3.1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "17376864"
          ],
          "chromosome": "chr3",
          "position": "178936091",
          "identifier": "COSM763",
          "reference": "G",
          "alternative": "A",
          "levelOfEvidence": 3.1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "17376864"
          ],
          "chromosome": "chr3",
          "position": "178936092",
          "identifier": "COSM764",
          "reference": "A",
          "alternative": "G",
          "levelOfEvidence": 3.1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "17376864"
          ],
          "chromosome": "chr3",
          "position": "178936093",
          "identifier": "COSM765",
          "reference": "G",
          "alternative": "T",
          "levelOfEvidence": 3.1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "17376864"
          ],
          "chromosome": "chr3",
          "position": "178936095",
          "identifier": "COSM767",
          "reference": "A",
          "alternative": "C",
          "levelOfEvidence": 3.1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "23066039"
          ],
          "chromosome": "chr3",
          "position": "178952085",
          "identifier": "COSM775",
          "reference": "A",
          "alternative": "G",
          "levelOfEvidence": 3.1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "22120714"
          ],
          "chromosome": "chr3",
          "position": "178952085",
          "identifier": "COSM776",
          "reference": "A",
          "alternative": "T",
          "levelOfEvidence": 3.1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "17376864"
          ],
          "chromosome": "chr3",
          "position": "178936092",
          "identifier": "COSM12458",
          "reference": "A",
          "alternative": "C",
          "levelOfEvidence": 3.1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "17376864"
          ],
          "chromosome": "chr3",
          "position": "178936094",
          "identifier": "COSM766",
          "reference": "C",
          "alternative": "A",
          "levelOfEvidence": 3.1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "17376864"
          ],
          "chromosome": "chr3",
          "position": "178952018",
          "identifier": "COSM12590",
          "reference": "A",
          "alternative": "T",
          "levelOfEvidence": 3.1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "17376864"
          ],
          "chromosome": "chr3",
          "position": "178952072",
          "identifier": "COSM12591",
          "reference": "A",
          "alternative": "G",
          "levelOfEvidence": 3.1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "17376864"
          ],
          "chromosome": "chr3",
          "position": "178952074",
          "identifier": "COSM29313",
          "reference": "G",
          "alternative": "A",
          "levelOfEvidence": 3.1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "17376864"
          ],
          "chromosome": "chr3",
          "position": "178952074",
          "identifier": "COSM94984",
          "reference": "G",
          "alternative": "C",
          "levelOfEvidence": 3.1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "17376864"
          ],
          "chromosome": "chr3",
          "position": "178952074",
          "identifier": "COSM773",
          "reference": "G",
          "alternative": "T",
          "levelOfEvidence": 3.1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "17376864"
          ],
          "chromosome": "chr3",
          "position": "178952084",
          "identifier": "COSM774",
          "reference": "C",
          "alternative": "T",
          "levelOfEvidence": 3.1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "0"
          ],
          "chromosome": "chr3",
          "position": "178916890",
          "identifier": "COSM27493",
          "reference": "C",
          "alternative": "T",
          "levelOfEvidence": 3.1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "0"
          ],
          "chromosome": "chr3",
          "position": "178916930",
          "identifier": "COSM748",
          "reference": "G",
          "alternative": "T",
          "levelOfEvidence": 3.1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "0"
          ],
          "chromosome": "chr3",
          "position": "178916944",
          "identifier": "COSM13570",
          "reference": "A",
          "alternative": "G",
          "levelOfEvidence": 3.1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "0"
          ],
          "chromosome": "chr3",
          "position": "178917478",
          "identifier": "COSM751",
          "reference": "G",
          "alternative": "A",
          "levelOfEvidence": 3.1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "0"
          ],
          "chromosome": "chr3",
          "position": "178921552",
          "identifier": "COSM94978",
          "reference": "A",
          "alternative": "T",
          "levelOfEvidence": 3.1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "0"
          ],
          "chromosome": "chr3",
          "position": "178936083",
          "identifier": "COSM762",
          "reference": "A",
          "alternative": "T",
          "levelOfEvidence": 3.1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "0"
          ],
          "chromosome": "chr3",
          "position": "178936094",
          "identifier": "COSM6147",
          "reference": "C",
          "alternative": "G",
          "levelOfEvidence": 3.1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "0"
          ],
          "chromosome": "chr3",
          "position": "178936095",
          "identifier": "COSM12459",
          "reference": "A",
          "alternative": "G",
          "levelOfEvidence": 3.1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "0"
          ],
          "chromosome": "chr3",
          "position": "178952077",
          "identifier": "COSM27504",
          "reference": "T",
          "alternative": "G",
          "levelOfEvidence": 3.1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "0"
          ],
          "chromosome": "chr3",
          "position": "178952077",
          "identifier": "COSM12592",
          "reference": "T",
          "alternative": "A",
          "levelOfEvidence": 3.1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "0"
          ],
          "chromosome": "chr3",
          "position": "178952090",
          "identifier": "COSM12597",
          "reference": "G",
          "alternative": "C",
          "levelOfEvidence": 3.1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "0"
          ],
          "chromosome": "chr3",
          "position": "178928079",
          "identifier": "COSM12584",
          "reference": "G",
          "alternative": "A",
          "levelOfEvidence": 3.1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "0"
          ],
          "chromosome": "chr3",
          "position": "178936091",
          "identifier": "COSM27133",
          "reference": "G",
          "alternative": "C",
          "levelOfEvidence": 3.1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "0"
          ],
          "chromosome": "chr3",
          "position": "178916946",
          "identifier": "COSM27505",
          "reference": "G",
          "alternative": "T",
          "levelOfEvidence": 3.1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "0"
          ],
          "chromosome": "chr3",
          "position": "178916946",
          "identifier": "COSM12580",
          "reference": "G",
          "alternative": "C",
          "levelOfEvidence": 3.1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "21828076"
          ],
          "chromosome": "chr10",
          "position": "89653803",
          "identifier": "COSM86058",
          "reference": "C",
          "alternative": "A",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": [
            "21828076"
          ],
          "chromosome": "chr10",
          "position": "89685286",
          "identifier": "COSM5223",
          "reference": "C",
          "alternative": "G",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": [
            "21828076"
          ],
          "chromosome": "chr10",
          "position": "89685307",
          "identifier": "COSM5135",
          "reference": "T",
          "alternative": "G",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": [
            "21828076"
          ],
          "chromosome": "chr10",
          "position": "89653846",
          "identifier": "OM1539",
          "reference": "C",
          "alternative": "A",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": [
            "21828076"
          ],
          "chromosome": "chr10",
          "position": "89685286",
          "identifier": "MCH13",
          "reference": "C",
          "alternative": "G",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": [
            "21828076"
          ],
          "chromosome": "chr10",
          "position": "89685307",
          "identifier": "MCH14",
          "reference": "T",
          "alternative": "G",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": [
            "21828076"
          ],
          "chromosome": "chr10",
          "position": "89692791",
          "identifier": "COSM5264",
          "reference": "A",
          "alternative": "C",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": [
            "21828076"
          ],
          "chromosome": "chr10",
          "position": "89692792",
          "identifier": "COSM35759",
          "reference": "C",
          "alternative": "A",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": [
            "21828076"
          ],
          "chromosome": "chr10",
          "position": "89692792",
          "identifier": "COSM125653",
          "reference": "C",
          "alternative": "G",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": [
            "21828076"
          ],
          "chromosome": "chr10",
          "position": "89692791",
          "identifier": "COSM5099",
          "reference": "A",
          "alternative": "G",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": [
            "21828076"
          ],
          "chromosome": "chr10",
          "position": "89692790",
          "identifier": "COSM23566",
          "reference": "G",
          "alternative": "C",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": [
            "21828076"
          ],
          "chromosome": "chr10",
          "position": "89692791",
          "identifier": "COSM5236",
          "reference": "A",
          "alternative": "T",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": [
            "21828076"
          ],
          "chromosome": "chr10",
          "position": "89692793",
          "identifier": "COSM5283",
          "reference": "C",
          "alternative": "G",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": [
            "21828076"
          ],
          "chromosome": "chr10",
          "position": "89692793",
          "identifier": "COSM5043",
          "reference": "C",
          "alternative": "T",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": [
            "21828076"
          ],
          "chromosome": "chr10",
          "position": "89692803",
          "identifier": "COSM5265",
          "reference": "C",
          "alternative": "A",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": [
            "21828076"
          ],
          "chromosome": "chr10",
          "position": "89692878",
          "identifier": "COSM5273",
          "reference": "C",
          "alternative": "A",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": [
            "21828076"
          ],
          "chromosome": "chr10",
          "position": "89692881",
          "identifier": "COSM5234",
          "reference": "T",
          "alternative": "G",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": [
            "21828076"
          ],
          "chromosome": "chr10",
          "position": "89692883",
          "identifier": "COSM921088",
          "reference": "C",
          "alternative": "G",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": [
            "21828076"
          ],
          "chromosome": "chr10",
          "position": "89692889",
          "identifier": "COSM5082",
          "reference": "A",
          "alternative": "G",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": [
            "21828076"
          ],
          "chromosome": "chr10",
          "position": "89692893",
          "identifier": "COSM5041",
          "reference": "C",
          "alternative": "T",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": [
            "21828076"
          ],
          "chromosome": "chr10",
          "position": "89692896",
          "identifier": "COSM5143",
          "reference": "G",
          "alternative": "A",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": [
            "21828076"
          ],
          "chromosome": "chr10",
          "position": "89692902",
          "identifier": "COSM28917",
          "reference": "G",
          "alternative": "A",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": [
            "21828076"
          ],
          "chromosome": "chr10",
          "position": "89692902",
          "identifier": "COSM5276",
          "reference": "G",
          "alternative": "T",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": [
            "21828076"
          ],
          "chromosome": "chr10",
          "position": "89692901",
          "identifier": "COSM246853",
          "reference": "G",
          "alternative": "C",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": [
            "21828076"
          ],
          "chromosome": "chr10",
          "position": "89692908",
          "identifier": "COSM5104",
          "reference": "C",
          "alternative": "T",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": [
            "21828076"
          ],
          "chromosome": "chr10",
          "position": "89692980",
          "identifier": "COSM5144",
          "reference": "A",
          "alternative": "G",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": [
            "21828076"
          ],
          "chromosome": "chr10",
          "position": "89711876",
          "identifier": "COSM5114",
          "reference": "G",
          "alternative": "A",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": [
            "21828076"
          ],
          "chromosome": "chr10",
          "position": "89711876",
          "identifier": "COSM249877",
          "reference": "G",
          "alternative": "T",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": [
            "21828076"
          ],
          "chromosome": "chr10",
          "position": "89711889",
          "identifier": "MCH20",
          "reference": "A",
          "alternative": "C",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": [
            "21828076"
          ],
          "chromosome": "chr10",
          "position": "89711924",
          "identifier": "MCH17",
          "reference": "T",
          "alternative": "C",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": [
            "21828076"
          ],
          "chromosome": "chr10",
          "position": "89725045",
          "identifier": "MCH18",
          "reference": "T",
          "alternative": "A",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": [
            "10866302"
          ],
          "chromosome": "chr10",
          "position": "89624273",
          "identifier": "COSM5133",
          "reference": "A",
          "alternative": "G",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": [
            "10866302"
          ],
          "chromosome": "chr10",
          "position": "89653782",
          "identifier": "COSM5247",
          "reference": "A",
          "alternative": "C",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": [
            "10866302"
          ],
          "chromosome": "chr10",
          "position": "89685287",
          "identifier": "COSM5042",
          "reference": "A",
          "alternative": "G",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": [
            "10866302"
          ],
          "chromosome": "chr10",
          "position": "89685307",
          "identifier": "COSM5036",
          "reference": "T",
          "alternative": "C",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": [
            "10866302"
          ],
          "chromosome": "chr10",
          "position": "89690805",
          "identifier": "COSM5102",
          "reference": "G",
          "alternative": "A",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": [
            "10866302"
          ],
          "chromosome": "chr10",
          "position": "89692830",
          "identifier": "COSM5266",
          "reference": "G",
          "alternative": "T",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": [
            "10866302"
          ],
          "chromosome": "chr10",
          "position": "89692835",
          "identifier": "COSM5212",
          "reference": "G",
          "alternative": "T",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": [
            "10866302"
          ],
          "chromosome": "chr10",
          "position": "89692851",
          "identifier": "COSM5106",
          "reference": "T",
          "alternative": "C",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": [
            "10866302"
          ],
          "chromosome": "chr10",
          "position": "89692851",
          "identifier": "MCH15",
          "reference": "T",
          "alternative": "G",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": [
            "10866302"
          ],
          "chromosome": "chr10",
          "position": "89692877",
          "identifier": "COSM5214",
          "reference": "G",
          "alternative": "C",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": [
            "10866302"
          ],
          "chromosome": "chr10",
          "position": "89692886",
          "identifier": "COSM921089",
          "reference": "T",
          "alternative": "C",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": [
            "10866302"
          ],
          "chromosome": "chr10",
          "position": "89692886",
          "identifier": "COSM5224",
          "reference": "T",
          "alternative": "A",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": [
            "10866302"
          ],
          "chromosome": "chr10",
          "position": "89692904",
          "identifier": "COSM5219",
          "reference": "C",
          "alternative": "G",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": [
            "10866302"
          ],
          "chromosome": "chr10",
          "position": "89692905",
          "identifier": "COSM5033",
          "reference": "G",
          "alternative": "A",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": [
            "10866302"
          ],
          "chromosome": "chr10",
          "position": "89692905",
          "identifier": "COSM5216",
          "reference": "G",
          "alternative": "T",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": [
            "10866302"
          ],
          "chromosome": "chr10",
          "position": "89692913",
          "identifier": "COSM5044",
          "reference": "G",
          "alternative": "A",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": [
            "10866302"
          ],
          "chromosome": "chr10",
          "position": "89692923",
          "identifier": "COSM12734",
          "reference": "G",
          "alternative": "A",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": [
            "10866302"
          ],
          "chromosome": "chr10",
          "position": "89711875",
          "identifier": "COSM5091",
          "reference": "G",
          "alternative": "A",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": [
            "10866302"
          ],
          "chromosome": "chr10",
          "position": "89711891",
          "identifier": "COSM5045",
          "reference": "G",
          "alternative": "A",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": [
            "10866302"
          ],
          "chromosome": "chr10",
          "position": "89711899",
          "identifier": "COSM5089",
          "reference": "C",
          "alternative": "T",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": [
            "10866302"
          ],
          "chromosome": "chr10",
          "position": "89711900",
          "identifier": "COSM5039",
          "reference": "G",
          "alternative": "A",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": [
            "10866302"
          ],
          "chromosome": "chr10",
          "position": "89711900",
          "identifier": "MCH16",
          "reference": "G",
          "alternative": "C",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": [
            "10866302"
          ],
          "chromosome": "chr10",
          "position": "89711902",
          "identifier": "COSM5221",
          "reference": "T",
          "alternative": "A",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": [
            "10866302"
          ],
          "chromosome": "chr10",
          "position": "89717726",
          "identifier": "COSM5220",
          "reference": "G",
          "alternative": "T",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": [
            "10866302"
          ],
          "chromosome": "chr10",
          "position": "89720870",
          "identifier": "COSM5255",
          "reference": "T",
          "alternative": "G",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": [
            "10866302"
          ],
          "chromosome": "chr10",
          "position": "89725051",
          "identifier": "COSM5213",
          "reference": "T",
          "alternative": "A",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": [
            "10866302"
          ],
          "chromosome": "chr10",
          "position": "89711892",
          "identifier": "MCH21",
          "reference": "T",
          "alternative": "A",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": [
            "10866302"
          ],
          "chromosome": "chr10",
          "position": "89711892",
          "identifier": "MCH22",
          "reference": "T",
          "alternative": "G",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": null,
          "chromosome": "chr12",
          "position": "25380275",
          "identifier": "COSM555",
          "reference": "T",
          "alternative": "A",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": null,
          "chromosome": "chr12",
          "position": "25380275",
          "identifier": "COSM554",
          "reference": "T",
          "alternative": "G",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": null,
          "chromosome": "chr12",
          "position": "25380276",
          "identifier": "COSM553",
          "reference": "T",
          "alternative": "A",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": null,
          "chromosome": "chr12",
          "position": "25380276",
          "identifier": "COSM552",
          "reference": "T",
          "alternative": "C",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": null,
          "chromosome": "chr12",
          "position": "25380276",
          "identifier": "COSM551",
          "reference": "T",
          "alternative": "G",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": null,
          "chromosome": "chr12",
          "position": "25380277",
          "identifier": "COSM550",
          "reference": "G",
          "alternative": "C",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": null,
          "chromosome": "chr12",
          "position": "25380277",
          "identifier": "COSM549",
          "reference": "G",
          "alternative": "T",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": null,
          "chromosome": "chr12",
          "position": "25398275",
          "identifier": "COSM539",
          "reference": "C",
          "alternative": "T",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": null,
          "chromosome": "chr12",
          "position": "25398276",
          "identifier": "COSM538",
          "reference": "C",
          "alternative": "T",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": null,
          "chromosome": "chr12",
          "position": "25398279",
          "identifier": "COSM30567",
          "reference": "CGC",
          "alternative": "CCT",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": null,
          "chromosome": "chr12",
          "position": "25398279",
          "identifier": "COSM87280",
          "reference": "CGC",
          "alternative": "CTT",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": null,
          "chromosome": "chr12",
          "position": "25398281",
          "identifier": "COSM534",
          "reference": "C",
          "alternative": "A",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": null,
          "chromosome": "chr12",
          "position": "25398281",
          "identifier": "COSM533",
          "reference": "C",
          "alternative": "G",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": null,
          "chromosome": "chr12",
          "position": "25398281",
          "identifier": "COSM532",
          "reference": "C",
          "alternative": "T",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": null,
          "chromosome": "chr12",
          "position": "25398282",
          "identifier": "COSM527",
          "reference": "C",
          "alternative": "A",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": null,
          "chromosome": "chr12",
          "position": "25398282",
          "identifier": "COSM529",
          "reference": "C",
          "alternative": "G",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": null,
          "chromosome": "chr12",
          "position": "25398282",
          "identifier": "COSM528",
          "reference": "C",
          "alternative": "T",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": null,
          "chromosome": "chr12",
          "position": "25398283",
          "identifier": "COSM512",
          "reference": "ACC",
          "alternative": "AAA",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": null,
          "chromosome": "chr12",
          "position": "25398283",
          "identifier": "COSM514",
          "reference": "ACC",
          "alternative": "AAG",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": null,
          "chromosome": "chr12",
          "position": "25398283",
          "identifier": "COSM13643",
          "reference": "ACC",
          "alternative": "ATT",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": null,
          "chromosome": "chr12",
          "position": "25398284",
          "identifier": "COSM520",
          "reference": "C",
          "alternative": "A",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": null,
          "chromosome": "chr12",
          "position": "25398284",
          "identifier": "COSM522",
          "reference": "C",
          "alternative": "G",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": null,
          "chromosome": "chr12",
          "position": "25398284",
          "identifier": "COSM521",
          "reference": "C",
          "alternative": "T",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": null,
          "chromosome": "chr12",
          "position": "25398285",
          "identifier": "COSM516",
          "reference": "C",
          "alternative": "A",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": null,
          "chromosome": "chr12",
          "position": "25398285",
          "identifier": "COSM518",
          "reference": "C",
          "alternative": "G",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": null,
          "chromosome": "chr12",
          "position": "25398285",
          "identifier": "COSM517",
          "reference": "C",
          "alternative": "T",
          "levelOfEvidence": 3.1,
          "inclusion": false
        },
        {
          "publicMedIds": [
            "19075190"
          ],
          "chromosome": "chr12",
          "position": "25378562",
          "identifier": "COSM19404",
          "reference": "C",
          "alternative": "T",
          "levelOfEvidence": 3.1,
          "inclusion": false
        }
      ],
      "indels": [
        {
          "publicMedIds": null,
          "chromosome": "chr7",
          "position": "55242462",
          "identifier": "COSM26038",
          "reference": "CAAGGAATTAAGAGAA",
          "alternative": "C",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": null,
          "chromosome": "chr7",
          "position": "55242463",
          "identifier": "COSM1190791",
          "reference": "AAGGAATTAAGAGAAG",
          "alternative": "A",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": null,
          "chromosome": "chr7",
          "position": "55242463",
          "identifier": "COSM28517",
          "reference": "AAGGAATTAAGAG",
          "alternative": "A",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": null,
          "chromosome": "chr7",
          "position": "55242463",
          "identifier": "COSM18420",
          "reference": "AAGG",
          "alternative": "A",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": null,
          "chromosome": "chr7",
          "position": "55242464",
          "identifier": "COSM24869",
          "reference": "AGGAATTAAGAGAAGCAAC",
          "alternative": "A",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": null,
          "chromosome": "chr7",
          "position": "55242464",
          "identifier": "COSM6223",
          "reference": "AGGAATTAAGAGAAGC",
          "alternative": "A",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": null,
          "chromosome": "chr7",
          "position": "55242464",
          "identifier": "COSM13551",
          "reference": "AGGAATTAAGAGAAGCAAC",
          "alternative": "AAAT",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": null,
          "chromosome": "chr7",
          "position": "55242464",
          "identifier": "COSM13550",
          "reference": "AGGAATTAAGAGAAG",
          "alternative": "AAATTC",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": null,
          "chromosome": "chr7",
          "position": "55242464",
          "identifier": "COSM13552",
          "reference": "AGGAATTAAGAGAAGCAA",
          "alternative": "AAATTC",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": null,
          "chromosome": "chr7",
          "position": "55242464",
          "identifier": "COSM13549",
          "reference": "AGGAATTAAGAGAAGCAA",
          "alternative": "AAG",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": null,
          "chromosome": "chr7",
          "position": "55242465",
          "identifier": "COSM133189",
          "reference": "GGAATTAAGAGAAGCAACATCT",
          "alternative": "G",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": null,
          "chromosome": "chr7",
          "position": "55242465",
          "identifier": "COSM6225",
          "reference": "GGAATTAAGAGAAGCA",
          "alternative": "G",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": null,
          "chromosome": "chr7",
          "position": "55242465",
          "identifier": "COSM6218",
          "reference": "GGAATTAAGA",
          "alternative": "G",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": null,
          "chromosome": "chr7",
          "position": "55242465",
          "identifier": "COSM12728",
          "reference": "GGAATTAAGAGAAGCAACA",
          "alternative": "G",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": null,
          "chromosome": "chr7",
          "position": "55242465",
          "identifier": "COSM26680",
          "reference": "GGAATTAAGAGAAGCAAC",
          "alternative": "GAT",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": null,
          "chromosome": "chr7",
          "position": "55242465",
          "identifier": "COSM51526",
          "reference": "GGAATTAAGAGAAGCAACA",
          "alternative": "GATTCCT",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": null,
          "chromosome": "chr7",
          "position": "55242466",
          "identifier": "COSM24970",
          "reference": "GAATTAAGAGAAGCAACATCTCCGA",
          "alternative": "G",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": null,
          "chromosome": "chr7",
          "position": "55242466",
          "identifier": "COSM12678",
          "reference": "GAATTAAGAGAAGCAA",
          "alternative": "G",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": null,
          "chromosome": "chr7",
          "position": "55242466",
          "identifier": "COSM12367",
          "reference": "GAATTAAGAGAAGCAACAT",
          "alternative": "G",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": null,
          "chromosome": "chr7",
          "position": "55242466",
          "identifier": "COSM12386",
          "reference": "GAATTAAGAGAAGCAAC",
          "alternative": "GT",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": null,
          "chromosome": "chr7",
          "position": "55242466",
          "identifier": "COSM133192",
          "reference": "GAATTAAGAGAAGCAACA",
          "alternative": "GTA",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": null,
          "chromosome": "chr7",
          "position": "55242466",
          "identifier": "COSM18426",
          "reference": "GAATTAAGAGAAGCAACATCT",
          "alternative": "GTC",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": null,
          "chromosome": "chr7",
          "position": "55242466",
          "identifier": "COSM18427",
          "reference": "GAATTAAGAGAAGCAACATCTC",
          "alternative": "GTCT",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": null,
          "chromosome": "chr7",
          "position": "55242466",
          "identifier": "COSM133193",
          "reference": "GAATTAAGAGAAGCAACA",
          "alternative": "GTC",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": null,
          "chromosome": "chr7",
          "position": "55242466",
          "identifier": "COSM674057",
          "reference": "GAATTAAGAGAAGCAACATCT",
          "alternative": "GTG",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": null,
          "chromosome": "chr7",
          "position": "55242466",
          "identifier": "COSM53205",
          "reference": "GAATTAAGAGAAGCAA",
          "alternative": "GTGG",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": null,
          "chromosome": "chr7",
          "position": "55242466",
          "identifier": "COSM12384",
          "reference": "GAATTAAGAGAAGCAACATC",
          "alternative": "GT",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": null,
          "chromosome": "chr7",
          "position": "55242466",
          "identifier": "COSM12416",
          "reference": "GAATTAAGAGAAGCAACA",
          "alternative": "GTTGCT",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": null,
          "chromosome": "chr7",
          "position": "55242467",
          "identifier": "COSM255211",
          "reference": "AATTAAGAGAAGCAACATCTCC",
          "alternative": "A",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": null,
          "chromosome": "chr7",
          "position": "55242467",
          "identifier": "COSM6254",
          "reference": "AATTAAGAGAAGCAAC",
          "alternative": "A",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": null,
          "chromosome": "chr7",
          "position": "55242467",
          "identifier": "COSM6220",
          "reference": "AATTAAGAGAAGCAACATC",
          "alternative": "A",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": null,
          "chromosome": "chr7",
          "position": "55242467",
          "identifier": "COSM12419",
          "reference": "AATTAAGAGAAGCAAC",
          "alternative": "AGCA",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": null,
          "chromosome": "chr7",
          "position": "55242467",
          "identifier": "COSM12422",
          "reference": "AATTAAGAGAAG",
          "alternative": "AGC",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": null,
          "chromosome": "chr7",
          "position": "55242467",
          "identifier": "COSM22944",
          "reference": "AATTAAGAGAAGCAA",
          "alternative": "AGC",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": null,
          "chromosome": "chr7",
          "position": "55242468",
          "identifier": "COSM6255",
          "reference": "ATTAAGAGAAGCAACATCT",
          "alternative": "A",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": null,
          "chromosome": "chr7",
          "position": "55242468",
          "identifier": "COSM51527",
          "reference": "ATTAAGAGAAGCAACA",
          "alternative": "ACAA",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": null,
          "chromosome": "chr7",
          "position": "55242468",
          "identifier": "COSM133195",
          "reference": "ATTAAGAGAAGCA",
          "alternative": "ACCA",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": null,
          "chromosome": "chr7",
          "position": "55242468",
          "identifier": "COSM12387",
          "reference": "ATTAAGAGAAGCAACATCTCC",
          "alternative": "ACA",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": null,
          "chromosome": "chr7",
          "position": "55242468",
          "identifier": "COSM12420",
          "reference": "ATTAAGAGAAGCAAC",
          "alternative": "ACA",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": null,
          "chromosome": "chr7",
          "position": "55242468",
          "identifier": "COSM12382",
          "reference": "ATTAAGAGAAG",
          "alternative": "AC",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": null,
          "chromosome": "chr7",
          "position": "55242468",
          "identifier": "COSM12383",
          "reference": "ATTAAGAGAAGCAA",
          "alternative": "AC",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": null,
          "chromosome": "chr7",
          "position": "55242469",
          "identifier": "COSM12370",
          "reference": "TTAAGAGAAGCAACATCTC",
          "alternative": "T",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": null,
          "chromosome": "chr7",
          "position": "55242469",
          "identifier": "COSM6210",
          "reference": "TTAAGAGAAGCAA",
          "alternative": "T",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": null,
          "chromosome": "chr7",
          "position": "55242479",
          "identifier": "COSM23634",
          "reference": "CAACATCTCCGAAAGCCAACAAGGA",
          "alternative": "C",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": null,
          "chromosome": "chr7",
          "position": "55242479",
          "identifier": "COSM1667024",
          "reference": "CAACATCTCCGAAAGCCAACAAGGAAATC",
          "alternative": "CCAAC",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": null,
          "chromosome": "chr7",
          "position": "55242481",
          "identifier": "COSM96856",
          "reference": "ACATCTCCGAAAGCCAACAAGGAAAT",
          "alternative": "AA",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": null,
          "chromosome": "chr7",
          "position": "55242481",
          "identifier": "COSM24270",
          "reference": "ACATCTCCGAAAGCCAACAAGGAAATC",
          "alternative": "AAT",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": null,
          "chromosome": "chr7",
          "position": "55242482",
          "identifier": "COSM13556",
          "reference": "CATCTCCGAAAGCCAACAAGGAAAT",
          "alternative": "C",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": null,
          "chromosome": "chr7",
          "position": "55242483",
          "identifier": "COSM6256",
          "reference": "ATCTCCGAAAGCCAACAAGGAAATC",
          "alternative": "A",
          "levelOfEvidence": 1,
          "inclusion": true
        }
      ],
      "copyNumberVariants": [
        {
          "publicMedIds": [
            "3798106"
          ],
          "geneName": "ERBB2",
          "chromosome": "chr17",
          "position": "37856492",
          "levelOfEvidence": 1,
          "inclusion": true
        }
      ],
      "geneFusions": [
        {
          "publicMedIds": [
            "24965693"
          ],
          "identifier": "A2M-ALK.A22A19",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "0"
          ],
          "identifier": "ACTG2-ALK.A2A18",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "22649787"
          ],
          "identifier": "ATIC-ALK.A7A20",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "22327622"
          ],
          "identifier": "C2orf44-ALK.C4A20",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "13679433"
          ],
          "identifier": "CARS-ALK.C17A20",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "23139213"
          ],
          "identifier": "CLIP4-ALK.C12A23",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "11485898"
          ],
          "identifier": "CLTC-ALK.C31A20",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "24445538"
          ],
          "identifier": "DCTN1-ALK.D26A20",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "19383809"
          ],
          "identifier": "EML4-ALK.E13A20.AB462411",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "19383809"
          ],
          "identifier": "EML4-ALK.E13A20.COSF1062.2",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "24443522"
          ],
          "identifier": "EML4-ALK.E13ins90A20",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "19383809"
          ],
          "identifier": "EML4-ALK.E14A20.COSF1064.1",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "18927303"
          ],
          "identifier": "EML4-ALK.E14A20.COSF477.1",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "21036415"
          ],
          "identifier": "EML4-ALK.E14del36A20",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "24443522"
          ],
          "identifier": "EML4-ALK.E14ins124A20",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "22993539"
          ],
          "identifier": "EML4-ALK.E14ins2del52A20",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "18594010"
          ],
          "identifier": "EML4-ALK.E15A20.COSF413.1",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "23198868"
          ],
          "identifier": "EML4-ALK.E17A20.COSF1366.2",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "23198868"
          ],
          "identifier": "EML4-ALK.E17A20.COSF1367.2",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "21356191"
          ],
          "identifier": "EML4-ALK.E17ins30A20_V8a",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "22791881"
          ],
          "identifier": "EML4-ALK.E17ins65A20",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "20183914"
          ],
          "identifier": "EML4-ALK.E17ins68A20",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "19170230"
          ],
          "identifier": "EML4-ALK.E18A20.COSF487.1",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "17625570"
          ],
          "identifier": "EML4-ALK.E20A20.COSF409.1",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "20183914"
          ],
          "identifier": "EML4-ALK.E20A20.COSF730.1",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "19737969"
          ],
          "identifier": "EML4-ALK.E21A20",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "18927303"
          ],
          "identifier": "EML4-ALK.E2A20.COSF478.1",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "18927303"
          ],
          "identifier": "EML4-ALK.E2A20.COSF479.1",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "23625156"
          ],
          "identifier": "EML4-ALK.E3p53insA20",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "25204415"
          ],
          "identifier": "EML4-ALK.E6A17",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "0"
          ],
          "identifier": "EML4-ALK.E6A18",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "22706607"
          ],
          "identifier": "EML4-ALK.E6A19.COSF1296.1",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "18593892"
          ],
          "identifier": "EML4-ALK.E6aA20.AB374361",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "18593892"
          ],
          "identifier": "EML4-ALK.E6bA20.AB374362",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "23675251"
          ],
          "identifier": "EML4-ALK.E6ins18A20",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "0"
          ],
          "identifier": "EML4-ALK.E7A20.NGS",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "25204415"
          ],
          "identifier": "GTF2IRD1-ALK.G7A20",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "24518094"
          ],
          "identifier": "HIP1-ALK.H21A20",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "24496003"
          ],
          "identifier": "HIP1-ALK.H28A20",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "21656749"
          ],
          "identifier": "KIF5B-ALK.K15A20.COSF1060.1",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "23344087"
          ],
          "identifier": "KIF5B-ALK.K15A20.COSF1381",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "22327623"
          ],
          "identifier": "KIF5B-ALK.K17A20.COSF1257",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "22347464"
          ],
          "identifier": "KIF5B-ALK.K24A20.COSF1058",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "22347464"
          ],
          "identifier": "KLC1-ALK.K9A20.COSF1276",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "0"
          ],
          "identifier": "MEMO1-ALK.M2A7",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "0"
          ],
          "identifier": "NCOA1-ALK.N21A1.NGS",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "0"
          ],
          "identifier": "PRKAR1A-ALK.P2A20.NGS.1",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "22334442"
          ],
          "identifier": "ALK-PTPN3.A11P3",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "25028698"
          ],
          "identifier": "RANBP2-ALK.R18A20",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "16161041"
          ],
          "identifier": "SEC31L1_SEC31A-ALK.S21A20",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "16161041"
          ],
          "identifier": "SEC31L1_SEC31A-ALK.S22A20",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "25204415"
          ],
          "identifier": "SMEK2-ALK.S9A2",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "24613930"
          ],
          "identifier": "STRN-ALK.S3A20.COSF1430",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "10556217"
          ],
          "identifier": "TFG-ALK.T4A20.COSF424",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "10556217"
          ],
          "identifier": "TFG-ALK.T5A20.COSF426",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "11943732"
          ],
          "identifier": "TFG-ALK.T6A20.COSF428",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "25204415"
          ],
          "identifier": "TPM1-ALK.T8A20.NGS",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "10934142"
          ],
          "identifier": "TPM3-ALK.T7A20",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "11493472"
          ],
          "identifier": "TPM4-ALK.T7A20",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "24736082"
          ],
          "identifier": "TPR-ALK.T15A20",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "23999969"
          ],
          "identifier": "TRAF1-ALK.T6A20",
          "levelOfEvidence": 1,
          "inclusion": true
        },
        {
          "publicMedIds": [
            "21076462"
          ],
          "identifier": "VCL-ALK.V16A20.COSF1057",
          "levelOfEvidence": 1,
          "inclusion": true
        }
      ],
      "nonHotspotRules": [
        {
          "publicMedIds": null,
          "levelOfEvidence": 3.1,
          "inclusion": false,
          "gene": "PTEN",
          "oncominevariantclass": "Deleterious",
          "exon": null,
          "function": null
        }
      ],
      "createdDate": null
    },
    "statusLog": [
      {
        "status": "PENDING",
        "date": 1479488658486
      },
      {
        "status": "READY",
        "date": 1479762799825
      },
      {
        "status": "OPEN",
        "date": 1479790800000
      },
      {
        "status": "SUSPENDED",
        "date": 1479790800001
      },
      {
        "status": "AMENDED",
        "date": 1485544254663
      }
    ]
  };

  tablePatientData: any = [
    {
      "slot": null,
      "patientSequenceNumber": "10361",
      "formattedPatientStatus": "OFF_TRIAL_NOT_CONSENTED",
      "treatmentArmVersion": "2015-08-06",
      "dateSelected": 1448046697678,
      "dateOnArm": null,
      "dateOffArm": null,
      "formattedDiseaseNames": "Lung adenocarcinoma",
      "stepNumber": "0"
    },
    {
      "slot": null,
      "patientSequenceNumber": "10545",
      "formattedPatientStatus": "OFF_TRIAL_NOT_CONSENTED",
      "treatmentArmVersion": "2015-08-06",
      "dateSelected": 1448459559651,
      "dateOnArm": null,
      "dateOffArm": null,
      "formattedDiseaseNames": "Lung adenocar. w/ bronch. feat.",
      "stepNumber": "0"
    },
    {
      "slot": 1,
      "patientSequenceNumber": "10612",
      "formattedPatientStatus": "FORMERLY_ON_ARM_OFF_TRIAL",
      "treatmentArmVersion": "2015-08-06",
      "dateSelected": 1450128145904,
      "dateOnArm": 1451919617018,
      "dateOffArm": 1475155338408,
      "formattedDiseaseNames": "Neuroendocrine cancer, NOS",
      "stepNumber": "1"
    },
    {
      "slot": null,
      "patientSequenceNumber": "10700",
      "formattedPatientStatus": "NOT_ELIGIBLE",
      "treatmentArmVersion": "2015-08-06",
      "dateSelected": 1450389274395,
      "dateOnArm": null,
      "dateOffArm": null,
      "formattedDiseaseNames": "Lung adenocarcinoma",
      "stepNumber": "0"
    },
    {
      "slot": 2,
      "patientSequenceNumber": "10768",
      "formattedPatientStatus": "ON_TREATMENT_ARM",
      "treatmentArmVersion": "2015-08-06",
      "dateSelected": 1450733203822,
      "dateOnArm": 1452202216958,
      "dateOffArm": null,
      "formattedDiseaseNames": "Lung adenocarcinoma",
      "stepNumber": "1"
    },
    {
      "slot": 2,
      "patientSequenceNumber": "10886",
      "formattedPatientStatus": "ON_TREATMENT_ARM",
      "treatmentArmVersion": "2016-05-31",
      "dateSelected": 1467311077223,
      "dateOnArm": 1468935018558,
      "dateOffArm": null,
      "formattedDiseaseNames": "Neuroendocrine cancer, NOS",
      "stepNumber": "1"
    },
    {
      "slot": 1,
      "patientSequenceNumber": "10828",
      "formattedPatientStatus": "ON_TREATMENT_ARM",
      "treatmentArmVersion": "2016-05-31",
      "dateSelected": 1467752389171,
      "dateOnArm": 1469203218627,
      "dateOffArm": null,
      "formattedDiseaseNames": "Bone cancer, NOS",
      "stepNumber": "1"
    },
    {
      "slot": null,
      "patientSequenceNumber": "11094",
      "formattedPatientStatus": "NOT_ELIGIBLE",
      "treatmentArmVersion": "2016-05-31",
      "dateSelected": 1469546906956,
      "dateOnArm": null,
      "dateOffArm": null,
      "formattedDiseaseNames": "Neuroendocrine cancer, NOS",
      "stepNumber": "0"
    },
    {
      "slot": 3,
      "patientSequenceNumber": "11055",
      "formattedPatientStatus": "ON_TREATMENT_ARM",
      "treatmentArmVersion": "2016-05-31",
      "dateSelected": 1470238425707,
      "dateOnArm": 1472140822893,
      "dateOffArm": null,
      "formattedDiseaseNames": "Lung adenocarcinoma",
      "stepNumber": "1"
    },
    {
      "slot": 4,
      "patientSequenceNumber": "11315",
      "formattedPatientStatus": "ON_TREATMENT_ARM",
      "treatmentArmVersion": "2016-05-31",
      "dateSelected": 1471033659302,
      "dateOnArm": 1473195623287,
      "dateOffArm": null,
      "formattedDiseaseNames": "Adenocarcinoma, NOS",
      "stepNumber": "1"
    },
    {
      "slot": null,
      "patientSequenceNumber": "11763",
      "formattedPatientStatus": "OFF_TRIAL_DECEASED",
      "treatmentArmVersion": "2016-05-31",
      "dateSelected": 1472841163541,
      "dateOnArm": null,
      "dateOffArm": null,
      "formattedDiseaseNames": "Pancreatic neuroendocrine tumor",
      "stepNumber": "0"
    },
    {
      "slot": null,
      "patientSequenceNumber": "11929",
      "formattedPatientStatus": "NOT_ELIGIBLE",
      "treatmentArmVersion": "2016-05-31",
      "dateSelected": 1474551564492,
      "dateOnArm": null,
      "dateOffArm": null,
      "formattedDiseaseNames": "Non-small cell lung cancer, NOS",
      "stepNumber": "0"
    },
    {
      "slot": null,
      "patientSequenceNumber": "12531",
      "formattedPatientStatus": "OFF_TRIAL_NOT_CONSENTED",
      "treatmentArmVersion": "2016-05-31",
      "dateSelected": 1478028349249,
      "dateOnArm": null,
      "dateOffArm": null,
      "formattedDiseaseNames": "Ovarian epithelial cancer",
      "stepNumber": "0"
    },
    {
      "slot": 5,
      "patientSequenceNumber": "12633",
      "formattedPatientStatus": "ON_TREATMENT_ARM",
      "treatmentArmVersion": "2016-05-31",
      "dateSelected": 1478094729009,
      "dateOnArm": 1478710824998,
      "dateOffArm": null,
      "formattedDiseaseNames": "Lung adenocarcinoma",
      "stepNumber": "1"
    },
    {
      "slot": 6,
      "patientSequenceNumber": "13070",
      "formattedPatientStatus": "ON_TREATMENT_ARM",
      "treatmentArmVersion": "2016-05-31",
      "dateSelected": 1479820042728,
      "dateOnArm": 1481662819201,
      "dateOffArm": null,
      "formattedDiseaseNames": "Cholangiocar.- intra/extrahepatic",
      "stepNumber": "1"
    },
    {
      "slot": null,
      "patientSequenceNumber": "13073",
      "formattedPatientStatus": "OFF_TRIAL_NOT_CONSENTED",
      "treatmentArmVersion": "2016-05-31",
      "dateSelected": 1479835746460,
      "dateOnArm": null,
      "dateOffArm": null,
      "formattedDiseaseNames": "Ovarian epithelial cancer",
      "stepNumber": "0"
    },
    {
      "slot": null,
      "patientSequenceNumber": "13019",
      "formattedPatientStatus": "NOT_ELIGIBLE",
      "treatmentArmVersion": "2016-05-31",
      "dateSelected": 1480714290688,
      "dateOnArm": null,
      "dateOffArm": null,
      "formattedDiseaseNames": "Adenocarcinoma, NOS",
      "stepNumber": "0"
    },
    {
      "slot": 8,
      "patientSequenceNumber": "13365",
      "formattedPatientStatus": "ON_TREATMENT_ARM",
      "treatmentArmVersion": "2016-05-31",
      "dateSelected": 1481228829092,
      "dateOnArm": 1482262219341,
      "dateOffArm": null,
      "formattedDiseaseNames": "Ovarian epithelial cancer",
      "stepNumber": "1"
    },
    {
      "slot": 7,
      "patientSequenceNumber": "13249",
      "formattedPatientStatus": "ON_TREATMENT_ARM",
      "treatmentArmVersion": "2016-05-31",
      "dateSelected": 1481662058578,
      "dateOnArm": 1483135219417,
      "dateOffArm": null,
      "formattedDiseaseNames": "Ovarian epithelial cancer",
      "stepNumber": "1"
    },
    {
      "slot": 9,
      "patientSequenceNumber": "13623",
      "formattedPatientStatus": "ON_TREATMENT_ARM",
      "treatmentArmVersion": "2016-05-31",
      "dateSelected": 1482171494202,
      "dateOnArm": 1483734618635,
      "dateOffArm": null,
      "formattedDiseaseNames": "Cholangiocar.- intra/extrahepatic",
      "stepNumber": "1"
    },
    {
      "slot": null,
      "patientSequenceNumber": "13640",
      "formattedPatientStatus": "OFF_TRIAL_NOT_CONSENTED",
      "treatmentArmVersion": "2016-05-31",
      "dateSelected": 1484248936830,
      "dateOnArm": null,
      "dateOffArm": null,
      "formattedDiseaseNames": "Adenocarcinoma, NOS",
      "stepNumber": "0"
    },
    {
      "slot": null,
      "patientSequenceNumber": "13958",
      "formattedPatientStatus": "NOT_ELIGIBLE",
      "treatmentArmVersion": "2016-05-31",
      "dateSelected": 1484340831177,
      "dateOnArm": null,
      "dateOffArm": null,
      "formattedDiseaseNames": "Adenocarcinoma, NOS",
      "stepNumber": "0"
    },
    {
      "slot": 12,
      "patientSequenceNumber": "13875",
      "formattedPatientStatus": "ON_TREATMENT_ARM",
      "treatmentArmVersion": "2016-05-31",
      "dateSelected": 1484760624108,
      "dateOnArm": 1486495816399,
      "dateOffArm": null,
      "formattedDiseaseNames": "Carcinoma, NOS",
      "stepNumber": "1"
    },
    {
      "slot": 10,
      "patientSequenceNumber": "13782",
      "formattedPatientStatus": "ON_TREATMENT_ARM",
      "treatmentArmVersion": "2016-05-31",
      "dateSelected": 1485792340963,
      "dateOnArm": 1487694621424,
      "dateOffArm": null,
      "formattedDiseaseNames": "Carcinoma, NOS",
      "stepNumber": "1"
    },
    {
      "slot": 11,
      "patientSequenceNumber": "13835",
      "formattedPatientStatus": "ON_TREATMENT_ARM",
      "treatmentArmVersion": "2016-05-31",
      "dateSelected": 1485964598653,
      "dateOnArm": 1487788224089,
      "dateOffArm": null,
      "formattedDiseaseNames": "Adenocarcinoma - pancreas",
      "stepNumber": "1"
    },
    {
      "slot": 13,
      "patientSequenceNumber": "14473",
      "formattedPatientStatus": "ON_TREATMENT_ARM",
      "treatmentArmVersion": "2016-05-31",
      "dateSelected": 1486680300691,
      "dateOnArm": 1488409218705,
      "dateOffArm": null,
      "formattedDiseaseNames": "Female reprod. system cancer, NOS",
      "stepNumber": "1"
    },
    {
      "slot": 14,
      "patientSequenceNumber": "14499",
      "formattedPatientStatus": "PENDING_APPROVAL",
      "treatmentArmVersion": "2016-05-31",
      "dateSelected": 1487091166932,
      "dateOnArm": null,
      "dateOffArm": null,
      "formattedDiseaseNames": "Adenocarcinoma, NOS",
      "stepNumber": "0"
    },
    {
      "slot": 16,
      "patientSequenceNumber": "14687",
      "formattedPatientStatus": "PENDING_APPROVAL",
      "treatmentArmVersion": "2016-05-31",
      "dateSelected": 1487640652455,
      "dateOnArm": null,
      "dateOffArm": null,
      "formattedDiseaseNames": "Lung adenocarcinoma",
      "stepNumber": "0"
    },
    {
      "slot": 15,
      "patientSequenceNumber": "14644",
      "formattedPatientStatus": "PENDING_APPROVAL",
      "treatmentArmVersion": "2016-05-31",
      "dateSelected": 1487715656408,
      "dateOnArm": null,
      "dateOffArm": null,
      "formattedDiseaseNames": "CNS primary tumor, NOS",
      "stepNumber": "0"
    },
    {
      "slot": 17,
      "patientSequenceNumber": "14788",
      "formattedPatientStatus": "PENDING_CONFIRMATION",
      "treatmentArmVersion": "2016-05-31",
      "dateSelected": 1488495870588,
      "dateOnArm": null,
      "dateOffArm": null,
      "formattedDiseaseNames": "Thyroid cancer, NOS",
      "stepNumber": "0"
    }
  ];

}
