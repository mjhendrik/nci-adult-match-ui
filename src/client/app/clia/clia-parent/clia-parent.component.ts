import {
  Component,
  Input
} from '@angular/core';

import { routerTransition } from './../../shared/router.animations';
import { GmtPipe } from './../../shared/pipes/gmt.pipe';


/**
 * This class represents the lazy loaded CliaParentComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-clia-parent',
  templateUrl: 'clia-parent.component.html',
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' },
  providers: [GmtPipe]
})
export class CliaParentComponent {

  @Input('cliaType') cliaType: string;

  searchtermPC: string = '';
  searchtermNTC: string = '';
  searchtermPACC: string = '';

  recordsPerPagePC: number;
  recordsPerPageNTC: number;
  recordsPerPagePACC: number;

  tablePCDefaultSort: string;
  tableNTCDefaultSort: string;
  tablePACCDefaultSort: string;

  sortByAsc: string;
  sortByDesc: string;

  countContacted: number;
  countLost: number;

  timestamp: any = new Date();

  tablePCData: any;
  tableNTCData: any;
  tablePACCData: any;
  ionReportersData: any;

  cliaTypeName: string;

  ngOnInit() {

    this.recordsPerPagePC = 10;
    this.recordsPerPageNTC = 10;
    this.recordsPerPagePACC = 10;

    this.tablePCDefaultSort = 'dateCreated';
    this.tableNTCDefaultSort = 'dateCreated';
    this.tablePACCDefaultSort = 'dateCreated';

    this.sortByAsc = 'asc';
    this.sortByDesc = 'desc';

    this.countContacted = 0;
    this.countLost = 0;

    let gmt = new GmtPipe();

    if (this.cliaType === 'mocha') {

      this.cliaTypeName = 'MoCha';

      this.tablePCData = [
        {
          "molecularSequenceNumber": "SampleControl_MoCha_21",
          "dateCreated": 1455828416610,
          "dateReceived": 1455914224800,
          "status": "FAILED"
        },
        {
          "molecularSequenceNumber": "SampleControl_MoCha_23",
          "dateCreated": 1455828430931,
          "dateReceived": 1455913647043,
          "status": "FAILED"
        },
        {
          "molecularSequenceNumber": "SampleControl_MoCha_33",
          "dateCreated": 1464799917521,
          "dateReceived": null,
          "status": null
        },
        {
          "molecularSequenceNumber": "SampleControl_MoCha_1",
          "dateCreated": 1438873767785,
          "dateReceived": 1438881441753,
          "status": "PASSED"
        },
        {
          "molecularSequenceNumber": "SampleControl_MoCha_10",
          "dateCreated": 1442589546317,
          "dateReceived": 1442589694482,
          "status": "PASSED"
        },
        {
          "molecularSequenceNumber": "SampleControl_MoCha_11",
          "dateCreated": 1442589567947,
          "dateReceived": 1442589791366,
          "status": "FAILED"
        },
        {
          "molecularSequenceNumber": "SampleControl_MoCha_12",
          "dateCreated": 1442610683322,
          "dateReceived": 1442611011636,
          "status": "PASSED"
        },
        {
          "molecularSequenceNumber": "SampleControl_MoCha_13",
          "dateCreated": 1442610687501,
          "dateReceived": 1446148374512,
          "status": "FAILED"
        },
        {
          "molecularSequenceNumber": "SampleControl_MoCha_14",
          "dateCreated": 1445630978613,
          "dateReceived": 1445631142111,
          "status": "FAILED"
        },
        {
          "molecularSequenceNumber": "SampleControl_MoCha_15",
          "dateCreated": 1446147259587,
          "dateReceived": 1455917196133,
          "status": "FAILED"
        },
        {
          "molecularSequenceNumber": "SampleControl_MoCha_16",
          "dateCreated": 1446818805142,
          "dateReceived": 1455916946308,
          "status": "FAILED"
        },
        {
          "molecularSequenceNumber": "SampleControl_MoCha_20",
          "dateCreated": 1455828409856,
          "dateReceived": 1455916395946,
          "status": "FAILED"
        },
        {
          "molecularSequenceNumber": "SampleControl_MoCha_24",
          "dateCreated": 1455828510776,
          "dateReceived": 1455913339980,
          "status": "FAILED"
        },
        {
          "molecularSequenceNumber": "SampleControl_MoCha_9",
          "dateCreated": 1441827440685,
          "dateReceived": 1441903510113,
          "status": "FAILED"
        },
        {
          "molecularSequenceNumber": "SampleControl_MoCha_17",
          "dateCreated": 1446819155371,
          "dateReceived": 1455916081696,
          "status": "FAILED"
        },
        {
          "molecularSequenceNumber": "SampleControl_MoCha_18",
          "dateCreated": 1446819191597,
          "dateReceived": 1455900581671,
          "status": "FAILED"
        },
        {
          "molecularSequenceNumber": "SampleControl_MoCha_19",
          "dateCreated": 1455828402104,
          "dateReceived": 1455915803120,
          "status": "FAILED"
        },
        {
          "molecularSequenceNumber": "SampleControl_MoCha_2",
          "dateCreated": 1438873776727,
          "dateReceived": 1438881522032,
          "status": "FAILED"
        },
        {
          "molecularSequenceNumber": "SampleControl_MoCha_22",
          "dateCreated": 1455828424118,
          "dateReceived": 1455913890191,
          "status": "FAILED"
        },
        {
          "molecularSequenceNumber": "SampleControl_MoCha_25",
          "dateCreated": 1455828519981,
          "dateReceived": 1455913018249,
          "status": "FAILED"
        },
        {
          "molecularSequenceNumber": "SampleControl_MoCha_26",
          "dateCreated": 1455828529958,
          "dateReceived": 1455912460108,
          "status": "FAILED"
        },
        {
          "molecularSequenceNumber": "SampleControl_MoCha_28",
          "dateCreated": 1455916351195,
          "dateReceived": 1455916636084,
          "status": "FAILED"
        },
        {
          "molecularSequenceNumber": "SampleControl_MoCha_3",
          "dateCreated": 1438881468357,
          "dateReceived": 1438881567198,
          "status": "FAILED"
        },
        {
          "molecularSequenceNumber": "SampleControl_MoCha_4",
          "dateCreated": 1438881521895,
          "dateReceived": 1438881774368,
          "status": "FAILED"
        },
        {
          "molecularSequenceNumber": "SampleControl_MoCha_5",
          "dateCreated": 1438881560216,
          "dateReceived": 1438881801545,
          "status": "FAILED"
        },
        {
          "molecularSequenceNumber": "SampleControl_MoCha_6",
          "dateCreated": 1438881580165,
          "dateReceived": 1438881806153,
          "status": "FAILED"
        },
        {
          "molecularSequenceNumber": "SampleControl_MoCha_7",
          "dateCreated": 1441827414900,
          "dateReceived": 1441827988864,
          "status": "FAILED"
        },
        {
          "molecularSequenceNumber": "SampleControl_MoCha_8",
          "dateCreated": 1441827432127,
          "dateReceived": 1441903342189,
          "status": "PASSED"
        },
        {
          "molecularSequenceNumber": "SampleControl_MoCha_29",
          "dateCreated": 1464547561006,
          "dateReceived": 1464707257715,
          "status": "PASSED"
        },
        {
          "molecularSequenceNumber": "SampleControl_MoCha_30",
          "dateCreated": 1464547568412,
          "dateReceived": 1464707446130,
          "status": "FAILED"
        },
        {
          "molecularSequenceNumber": "SampleControl_MoCha_32",
          "dateCreated": 1464799913313,
          "dateReceived": 1464974669878,
          "status": "PASSED"
        },
        {
          "molecularSequenceNumber": "SampleControl_MoCha_31",
          "dateCreated": 1464799158292,
          "dateReceived": 1464974843716,
          "status": "PASSED"
        },
        {
          "molecularSequenceNumber": "SampleControl_MoCha_27",
          "dateCreated": 1455828561102,
          "dateReceived": 1465392685717,
          "status": "FAILED"
        },
        {
          "molecularSequenceNumber": "SampleControl_MoCha_34",
          "dateCreated": 1467303976757,
          "dateReceived": null,
          "status": null
        },
        {
          "molecularSequenceNumber": "SampleControl_MoCha_35",
          "dateCreated": 1472150750011,
          "dateReceived": 1472151163857,
          "status": "PASSED"
        },
        {
          "molecularSequenceNumber": "SampleControl_MoCha_36",
          "dateCreated": 1472150754027,
          "dateReceived": 1472151205987,
          "status": "PASSED"
        },
        {
          "molecularSequenceNumber": "SampleControl_MoCha_37",
          "dateCreated": 1491254779004,
          "dateReceived": null,
          "status": null
        },
        {
          "molecularSequenceNumber": "SampleControl_MoCha_38",
          "dateCreated": 1491324738354,
          "dateReceived": null,
          "status": null
        },
        {
          "molecularSequenceNumber": "SampleControl_MoCha_39",
          "dateCreated": 1491324748889,
          "dateReceived": null,
          "status": null
        }
      ];

      this.tableNTCData = [
        {
          "molecularSequenceNumber": "NtcControl_MoCha_1",
          "dateCreated": 1441827420568,
          "dateReceived": 1441900031807,
          "status": "PASSED"
        },
        {
          "molecularSequenceNumber": "NtcControl_MoCha_14",
          "dateCreated": 1446818967330,
          "dateReceived": null,
          "status": null
        },
        {
          "molecularSequenceNumber": "NtcControl_MoCha_4",
          "dateCreated": 1442589550080,
          "dateReceived": 1442590213139,
          "status": "PASSED"
        },
        {
          "molecularSequenceNumber": "NtcControl_MoCha_5",
          "dateCreated": 1442589571161,
          "dateReceived": 1442590292613,
          "status": "PASSED"
        },
        {
          "molecularSequenceNumber": "NtcControl_MoCha_6",
          "dateCreated": 1442610692009,
          "dateReceived": 1442610913707,
          "status": "PASSED"
        },
        {
          "molecularSequenceNumber": "NtcControl_MoCha_15",
          "dateCreated": 1464547578402,
          "dateReceived": null,
          "status": null
        },
        {
          "molecularSequenceNumber": "NtcControl_MoCha_10",
          "dateCreated": 1445618708687,
          "dateReceived": 1445618917502,
          "status": "FAILED"
        },
        {
          "molecularSequenceNumber": "NtcControl_MoCha_11",
          "dateCreated": 1445630996331,
          "dateReceived": 1445631283390,
          "status": "PASSED"
        },
        {
          "molecularSequenceNumber": "NtcControl_MoCha_12",
          "dateCreated": 1445640044917,
          "dateReceived": 1445640510340,
          "status": "FAILED"
        },
        {
          "molecularSequenceNumber": "NtcControl_MoCha_13",
          "dateCreated": 1446147270909,
          "dateReceived": 1446148453248,
          "status": "PASSED"
        },
        {
          "molecularSequenceNumber": "NtcControl_MoCha_2",
          "dateCreated": 1441827434849,
          "dateReceived": 1441903060083,
          "status": "PASSED"
        },
        {
          "molecularSequenceNumber": "NtcControl_MoCha_3",
          "dateCreated": 1441827437980,
          "dateReceived": 1442590579859,
          "status": "PASSED"
        },
        {
          "molecularSequenceNumber": "NtcControl_MoCha_7",
          "dateCreated": 1442610697258,
          "dateReceived": 1442610955095,
          "status": "FAILED"
        },
        {
          "molecularSequenceNumber": "NtcControl_MoCha_8",
          "dateCreated": 1445435248553,
          "dateReceived": 1445435498849,
          "status": "PASSED"
        },
        {
          "molecularSequenceNumber": "NtcControl_MoCha_9",
          "dateCreated": 1445605256855,
          "dateReceived": 1445605478181,
          "status": "FAILED"
        },
        {
          "molecularSequenceNumber": "NtcControl_MoCha_16",
          "dateCreated": 1491254784953,
          "dateReceived": null,
          "status": null
        },
        {
          "molecularSequenceNumber": "NtcControl_MoCha_17",
          "dateCreated": 1491324755955,
          "dateReceived": null,
          "status": null
        }
      ];

      this.tablePACCData = [
        {
          "molecularSequenceNumber": "ProficiencyCompetencyControl_MoCha_1",
          "dateCreated": 1471543012397,
          "dateReceived": 1471544473188,
          "status": "PASSED"
        },
        {
          "molecularSequenceNumber": "ProficiencyCompetencyControl_MoCha_2",
          "dateCreated": 1471543018636,
          "dateReceived": 1471544525000,
          "status": "FAILED"
        },
        {
          "molecularSequenceNumber": "ProficiencyCompetencyControl_MoCha_3",
          "dateCreated": 1471543022839,
          "dateReceived": 1471544784649,
          "status": "PENDING"
        },
        {
          "molecularSequenceNumber": "ProficiencyCompetencyControl_MoCha_4",
          "dateCreated": 1471545998742,
          "dateReceived": 1471546077455,
          "status": "PENDING"
        },
        {
          "molecularSequenceNumber": "ProficiencyCompetencyControl_MoCha_5",
          "dateCreated": 1471546003961,
          "dateReceived": 1484168988158,
          "status": "PASSED"
        },
        {
          "molecularSequenceNumber": "ProficiencyCompetencyControl_MoCha_6",
          "dateCreated": 1484168994658,
          "dateReceived": 1484169078924,
          "status": "PENDING"
        },
        {
          "molecularSequenceNumber": "ProficiencyCompetencyControl_MoCha_7",
          "dateCreated": 1491231374452,
          "dateReceived": null,
          "status": null
        },
        {
          "molecularSequenceNumber": "ProficiencyCompetencyControl_MoCha_8",
          "dateCreated": 1491231385049,
          "dateReceived": null,
          "status": null
        },
        {
          "molecularSequenceNumber": "ProficiencyCompetencyControl_MoCha_9",
          "dateCreated": 1491254788277,
          "dateReceived": null,
          "status": null
        }
      ];

      this.ionReportersData = [
        {
          "ionReporterId": "IR_ICHGP",
          "ionReporterVersion": "5.0",
          "hostName": "NCI-MATCH-IR",
          "ipAddress": "129.43.39.182",
          "status": "Lost contact! Last heartbeat was sent 1506 minutes ago",
          "lastContactDate": 1491416891266,
          "externalIpAddress": "10.133.210.11"
        },
        {
          "ionReporterId": "IR_1CHGP",
          "ionReporterVersion": "5.0",
          "hostName": "NCI-MATCH-IR",
          "ipAddress": "129.43.39.182",
          "status": "Lost contact! Last heartbeat was sent 374 minutes ago",
          "lastContactDate": 1491484802979,
          "externalIpAddress": "10.133.210.11"
        }
      ];

    }

    if (this.cliaType === 'dartmouth') {

      this.cliaTypeName = 'Dartmouth';

      this.tablePCData = [
        {
          "molecularSequenceNumber": "SampleControl_Dartmouth_1",
          "dateCreated": 1491329102131,
          "dateReceived": null,
          "status": null
        },
        {
          "molecularSequenceNumber": "SampleControl_Dartmouth_2",
          "dateCreated": 1491329109999,
          "dateReceived": null,
          "status": null
        },
        {
          "molecularSequenceNumber": "SampleControl_Dartmouth_3",
          "dateCreated": 1491329112873,
          "dateReceived": null,
          "status": null
        },
        {
          "molecularSequenceNumber": "SampleControl_Dartmouth_4",
          "dateCreated": 1491329310696,
          "dateReceived": null,
          "status": null
        }
      ];

      this.tableNTCData = [
        {
          "molecularSequenceNumber": "NtcControl_Dartmouth_1",
          "dateCreated": 1491329106245,
          "dateReceived": null,
          "status": null
        },
        {
          "molecularSequenceNumber": "NtcControl_Dartmouth_2",
          "dateCreated": 1491329116463,
          "dateReceived": null,
          "status": null
        },
        {
          "molecularSequenceNumber": "NtcControl_Dartmouth_3",
          "dateCreated": 1491329119584,
          "dateReceived": null,
          "status": null
        },
        {
          "molecularSequenceNumber": "NtcControl_Dartmouth_4",
          "dateCreated": 1491329316146,
          "dateReceived": null,
          "status": null
        }
      ];

      this.tablePACCData = [
        {
          "molecularSequenceNumber": "ProficiencyCompetencyControl_dartmouth_1",
          "dateCreated": 1491255648237,
          "dateReceived": null,
          "status": null
        },
        {
          "molecularSequenceNumber": "ProficiencyCompetencyControl_Dartmouth_2",
          "dateCreated": 1491256161789,
          "dateReceived": null,
          "status": null
        },
        {
          "molecularSequenceNumber": "ProficiencyCompetencyControl_Dartmouth_3",
          "dateCreated": 1491313516066,
          "dateReceived": null,
          "status": null
        },
        {
          "molecularSequenceNumber": "ProficiencyCompetencyControl_Dartmouth_4",
          "dateCreated": 1491324674356,
          "dateReceived": null,
          "status": null
        }
      ];

      this.ionReportersData = [
        {
          "ionReporterId": "IR_KTBOF",
          "ionReporterVersion": "5.2",
          "hostName": "DRT-MATCH-IR",
          "ipAddress": "129.43.39.192",
          "status": "Contacted 4 minutes ago",
          "lastContactDate": 1491507004943,
          "externalIpAddress": "10.133.210.11"
        }
      ];

    }

    if (this.cliaType === 'yale') {

      this.cliaTypeName = 'Yale';

      this.tablePCData = [
        {
          "molecularSequenceNumber": "SampleControl_Yale_1",
          "dateCreated": 1446820770383,
          "dateReceived": 1454610348866,
          "status": "FAILED"
        },
        {
          "molecularSequenceNumber": "SampleControl_Yale_2",
          "dateCreated": 1454609818768,
          "dateReceived": 1454610867459,
          "status": "FAILED"
        },
        {
          "molecularSequenceNumber": "SampleControl_Yale_3",
          "dateCreated": 1456156465733,
          "dateReceived": 1456157104784,
          "status": "FAILED"
        },
        {
          "molecularSequenceNumber": "SampleControl_Yale_4",
          "dateCreated": 1456158997284,
          "dateReceived": 1456160505028,
          "status": "FAILED"
        },
        {
          "molecularSequenceNumber": "SampleControl_Yale_5",
          "dateCreated": 1456159006206,
          "dateReceived": 1456160838470,
          "status": "FAILED"
        },
        {
          "molecularSequenceNumber": "SampleControl_Yale_6",
          "dateCreated": 1491254923348,
          "dateReceived": null,
          "status": null
        }
      ];

      this.tableNTCData = [
        {
          "molecularSequenceNumber": "NtcControl_Yale_4",
          "dateCreated": 1456156472611,
          "dateReceived": 1456157767343,
          "status": "PASSED"
        },
        {
          "molecularSequenceNumber": "NtcControl_Yale_1",
          "dateCreated": 1446820780440,
          "dateReceived": 1454611045821,
          "status": "PASSED"
        },
        {
          "molecularSequenceNumber": "NtcControl_Yale_5",
          "dateCreated": 1456160756802,
          "dateReceived": 1456163682942,
          "status": "PASSED"
        },
        {
          "molecularSequenceNumber": "NtcControl_Yale_2",
          "dateCreated": 1454609828636,
          "dateReceived": 1454611676551,
          "status": "FAILED"
        },
        {
          "molecularSequenceNumber": "NtcControl_Yale_3",
          "dateCreated": 1454609835273,
          "dateReceived": 1456157445458,
          "status": "FAILED"
        },
        {
          "molecularSequenceNumber": "NtcControl_Yale_6",
          "dateCreated": 1456160766085,
          "dateReceived": 1456164054518,
          "status": "PASSED"
        },
        {
          "molecularSequenceNumber": "NtcControl_Yale_7",
          "dateCreated": 1491254926936,
          "dateReceived": null,
          "status": null
        }
      ];

      this.tablePACCData = [
        {
          "molecularSequenceNumber": "ProficiencyCompetencyControl_Yale_1",
          "dateCreated": 1471543039017,
          "dateReceived": 1471544972327,
          "status": "PASSED"
        },
        {
          "molecularSequenceNumber": "ProficiencyCompetencyControl_Yale_2",
          "dateCreated": 1471543042997,
          "dateReceived": 1471545093614,
          "status": "FAILED"
        },
        {
          "molecularSequenceNumber": "ProficiencyCompetencyControl_Yale_3",
          "dateCreated": 1471543046990,
          "dateReceived": 1471545065707,
          "status": "PENDING"
        },
        {
          "molecularSequenceNumber": "ProficiencyCompetencyControl_Yale_4",
          "dateCreated": 1491254929626,
          "dateReceived": null,
          "status": null
        }
      ];

      this.ionReportersData = [
        {
          "ionReporterId": "IR_F6ZZM",
          "ionReporterVersion": "5.2",
          "hostName": "NCIAS-D1356",
          "ipAddress": "10.133.130.53",
          "status": "Contacted 4 minutes ago",
          "lastContactDate": 1491507005457,
          "externalIpAddress": "10.133.210.11"
        }
      ];

    }

    if (this.cliaType === 'mgh') {

      this.cliaTypeName = 'MGH';

      this.tablePCData = [
        {
          "molecularSequenceNumber": "SampleControl_MGH_1",
          "dateCreated": 1446820738762,
          "dateReceived": null,
          "status": null
        },
        {
          "molecularSequenceNumber": "SampleControl_MGH_6",
          "dateCreated": 1458062481552,
          "dateReceived": null,
          "status": null
        },
        {
          "molecularSequenceNumber": "SampleControl_MGH_2",
          "dateCreated": 1450450851544,
          "dateReceived": 1450451186492,
          "status": "FAILED"
        },
        {
          "molecularSequenceNumber": "SampleControl_MGH_3",
          "dateCreated": 1450450858522,
          "dateReceived": 1450454802749,
          "status": "FAILED"
        },
        {
          "molecularSequenceNumber": "SampleControl_MGH_4",
          "dateCreated": 1456161336045,
          "dateReceived": 1458062971467,
          "status": "FAILED"
        },
        {
          "molecularSequenceNumber": "SampleControl_MGH_5",
          "dateCreated": 1458062471730,
          "dateReceived": 1458063552293,
          "status": "FAILED"
        }
      ];

      this.tableNTCData = [
        {
          "molecularSequenceNumber": "NtcControl_MGH_5",
          "dateCreated": 1458062492626,
          "dateReceived": 1458064149765,
          "status": "PASSED"
        },
        {
          "molecularSequenceNumber": "NtcControl_MGH_1",
          "dateCreated": 1446820762319,
          "dateReceived": 1446821112493,
          "status": "PASSED"
        },
        {
          "molecularSequenceNumber": "NtcControl_MGH_2",
          "dateCreated": 1450450866096,
          "dateReceived": 1450456634387,
          "status": "PASSED"
        },
        {
          "molecularSequenceNumber": "NtcControl_MGH_3",
          "dateCreated": 1450450874140,
          "dateReceived": 1450456959205,
          "status": "FAILED"
        },
        {
          "molecularSequenceNumber": "NtcControl_MGH_4",
          "dateCreated": 1456161346821,
          "dateReceived": 1456161456537,
          "status": "PASSED"
        },
        {
          "molecularSequenceNumber": "NtcControl_MGH_6",
          "dateCreated": 1458062502161,
          "dateReceived": 1458064906548,
          "status": "PASSED"
        }
      ];

      this.tablePACCData = [
        {
          "molecularSequenceNumber": "ProficiencyCompetencyControl_MGH_1",
          "dateCreated": 1471543061582,
          "dateReceived": 1471545130321,
          "status": "PENDING"
        },
        {
          "molecularSequenceNumber": "ProficiencyCompetencyControl_MGH_2",
          "dateCreated": 1471543065790,
          "dateReceived": 1471545143796,
          "status": "PENDING"
        },
        {
          "molecularSequenceNumber": "ProficiencyCompetencyControl_MGH_3",
          "dateCreated": 1471543069898,
          "dateReceived": 1471545219989,
          "status": "PENDING"
        },
        {
          "molecularSequenceNumber": "ProficiencyCompetencyControl_MGH_4",
          "dateCreated": 1491254934869,
          "dateReceived": null,
          "status": null
        }
      ];

      this.ionReportersData = [
      ];

    }

    if (this.cliaType === 'mdacc') {

      this.cliaTypeName = 'MD Anderson';

      this.tablePCData = [
        {
          "molecularSequenceNumber": "SampleControl_MDACC_1",
          "dateCreated": 1446820790381,
          "dateReceived": 1446820902400,
          "status": "FAILED"
        },
        {
          "molecularSequenceNumber": "SampleControl_MDACC_2",
          "dateCreated": 1450102192630,
          "dateReceived": 1450102439001,
          "status": "FAILED"
        },
        {
          "molecularSequenceNumber": "SampleControl_MDACC_3",
          "dateCreated": 1450102215376,
          "dateReceived": 1450102597712,
          "status": "FAILED"
        },
        {
          "molecularSequenceNumber": "SampleControl_MDACC_4",
          "dateCreated": 1458243895005,
          "dateReceived": 1458244153904,
          "status": "FAILED"
        },
        {
          "molecularSequenceNumber": "SampleControl_MDACC_5",
          "dateCreated": 1458243902954,
          "dateReceived": 1458244204624,
          "status": "FAILED"
        },
        {
          "molecularSequenceNumber": "SampleControl_MDACC_6",
          "dateCreated": 1463513958871,
          "dateReceived": 1463515053999,
          "status": "FAILED"
        },
        {
          "molecularSequenceNumber": "SampleControl_MDACC_11",
          "dateCreated": 1464804885832,
          "dateReceived": null,
          "status": null
        },
        {
          "molecularSequenceNumber": "SampleControl_MDACC_12",
          "dateCreated": 1464804892244,
          "dateReceived": null,
          "status": null
        },
        {
          "molecularSequenceNumber": "SampleControl_MDACC_13",
          "dateCreated": 1464804898193,
          "dateReceived": null,
          "status": null
        },
        {
          "molecularSequenceNumber": "SampleControl_MDACC_14",
          "dateCreated": 1464804910808,
          "dateReceived": 1491335522538,
          "status": "FAILED"
        },
        {
          "molecularSequenceNumber": "SampleControl_MDACC_7",
          "dateCreated": 1464804860415,
          "dateReceived": 1464805122595,
          "status": "FAILED"
        },
        {
          "molecularSequenceNumber": "SampleControl_MDACC_8",
          "dateCreated": 1464804866443,
          "dateReceived": 1464805230480,
          "status": "FAILED"
        },
        {
          "molecularSequenceNumber": "SampleControl_MDACC_10",
          "dateCreated": 1464804879094,
          "dateReceived": 1464805762557,
          "status": "FAILED"
        },
        {
          "molecularSequenceNumber": "SampleControl_MDACC_9",
          "dateCreated": 1464804873046,
          "dateReceived": 1464805888370,
          "status": "FAILED"
        },
        {
          "molecularSequenceNumber": "SampleControl_MDACC_15",
          "dateCreated": 1491256052996,
          "dateReceived": null,
          "status": null
        },
        {
          "molecularSequenceNumber": "SampleControl_MDACC_16",
          "dateCreated": 1491256075193,
          "dateReceived": null,
          "status": null
        }
      ];

      this.tableNTCData = [
        {
          "molecularSequenceNumber": "NtcControl_MDACC_3",
          "dateCreated": 1450102235509,
          "dateReceived": 1458244204984,
          "status": "PASSED"
        },
        {
          "molecularSequenceNumber": "NtcControl_MDACC_1",
          "dateCreated": 1446820801842,
          "dateReceived": 1450102801132,
          "status": "PASSED"
        },
        {
          "molecularSequenceNumber": "NtcControl_MDACC_2",
          "dateCreated": 1450102226404,
          "dateReceived": 1450102968577,
          "status": "FAILED"
        },
        {
          "molecularSequenceNumber": "NtcControl_MDACC_4",
          "dateCreated": 1458243910505,
          "dateReceived": 1458244223579,
          "status": "FAILED"
        },
        {
          "molecularSequenceNumber": "NtcControl_MDACC_5",
          "dateCreated": 1491256060808,
          "dateReceived": null,
          "status": null
        },
        {
          "molecularSequenceNumber": "NtcControl_MDACC_6",
          "dateCreated": 1491256081929,
          "dateReceived": null,
          "status": null
        }
      ];

      this.tablePACCData = [
        {
          "molecularSequenceNumber": "ProficiencyCompetencyControl_MDACC_1",
          "dateCreated": 1471543083447,
          "dateReceived": 1471545246603,
          "status": "PENDING"
        },
        {
          "molecularSequenceNumber": "ProficiencyCompetencyControl_MDACC_2",
          "dateCreated": 1471543087043,
          "dateReceived": 1471545260967,
          "status": "PENDING"
        },
        {
          "molecularSequenceNumber": "ProficiencyCompetencyControl_MDACC_3",
          "dateCreated": 1471543091101,
          "dateReceived": 1471545341592,
          "status": "PENDING"
        },
        {
          "molecularSequenceNumber": "ProficiencyCompetencyControl_MDACC_4",
          "dateCreated": 1491256064474,
          "dateReceived": null,
          "status": null
        },
        {
          "molecularSequenceNumber": "ProficiencyCompetencyControl_MDACC_5",
          "dateCreated": 1491256118711,
          "dateReceived": null,
          "status": null
        }
      ];

      this.ionReportersData = [
        {
          "ionReporterId": "IR_9TQW9",
          "ionReporterVersion": "5.0",
          "hostName": "NCIAS-D1227",
          "ipAddress": "10.133.130.32",
          "status": "Contacted 4 minutes ago",
          "lastContactDate": 1491507004846,
          "externalIpAddress": "10.133.210.11"
        }
      ];

    }

    for (let i = 0; i < this.tablePCData.length; i++) {
      this.tablePCData[i].dateCreated = gmt.transform(this.tablePCData[i].dateCreated);
    }

    for (let i = 0; i < this.tablePCData.length; i++) {
      this.tablePCData[i].dateReceived = gmt.transform(this.tablePCData[i].dateReceived);
    }

    for (let i = 0; i < this.tableNTCData.length; i++) {
      this.tableNTCData[i].dateCreated = gmt.transform(this.tableNTCData[i].dateCreated);
    }

    for (let i = 0; i < this.tableNTCData.length; i++) {
      this.tableNTCData[i].dateReceived = gmt.transform(this.tableNTCData[i].dateReceived);
    }

    for (let i = 0; i < this.tablePACCData.length; i++) {
      this.tablePACCData[i].dateCreated = gmt.transform(this.tablePACCData[i].dateCreated);
    }

    for (let i = 0; i < this.tablePACCData.length; i++) {
      this.tablePACCData[i].dateReceived = gmt.transform(this.tablePACCData[i].dateReceived);
    }

    for (let i = 0; i < this.ionReportersData.length; i++) {
      this.ionReportersData[i].lastContactDate = gmt.transform(this.ionReportersData[i].lastContactDate);
    }

    this.countIonReporters();

  }

  countIonReporters(): any {
    for (let i = 0; i < this.ionReportersData.length; i++) {
      if (this.ionReportersData[i].status.indexOf('Contacted') !== -1) this.countContacted++;
      else this.countLost++;
    }
  }

}
