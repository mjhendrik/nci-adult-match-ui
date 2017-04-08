import { Component } from '@angular/core';

import { routerTransition } from './../../shared/router.animations';
import { GMTFilter } from './../../shared/pipes/gmt';


/**
 * This class represents the lazy loaded CLIAMdaccComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-clia-mdacc',
  templateUrl: 'clia-mdacc.component.html',
  styleUrls: ['clia-mdacc.component.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' },
  providers: [GMTFilter]
})
export class CliaMdaccComponent {

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

    let gmt = new GMTFilter();

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

  tableNTCData: any = [
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

  tablePACCData: any = [
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

  ionReportersData: any = [
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
