import { Component } from '@angular/core';

import { routerTransition } from './../../shared/router.animations';
import { GmtPipe } from './../../shared/pipes/gmt.pipe';


/**
 * This class represents the lazy loaded CLIAMochaComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-clia-mocha',
  templateUrl: 'clia-mocha.component.html',
  styleUrls: ['clia-mocha.component.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' },
  providers: [GmtPipe]
})
export class CliaMochaComponent {

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

  tablePCData: any = [
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

  tableNTCData: any = [
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

  tablePACCData: any = [
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

  ionReportersData: any = [
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
