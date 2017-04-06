import { Component } from '@angular/core';

import { routerTransition } from './../../shared/router.animations';
import { GMTFilter } from './../../shared/pipes/gmt';


/**
 * This class represents the lazy loaded CliaDartmouthComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-clia-dartmouth',
  templateUrl: 'clia-dartmouth.component.html',
  styleUrls: ['clia-dartmouth.component.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' },
  providers: [GMTFilter]
})
export class CliaDartmouthComponent {

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

  ngOnInit() {

    this.recordsPerPagePC = 10;
    this.recordsPerPageNTC = 10;
    this.recordsPerPagePACC = 10;

    this.tablePCDefaultSort = 'dateCreated';
    this.tableNTCDefaultSort = 'dateCreated';
    this.tablePACCDefaultSort = 'dateCreated';

    this.sortByAsc = 'asc';
    this.sortByDesc = 'desc';

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

    this.timestamp = gmt.transform(this.timestamp);

  }

  timestamp: any = 1491507004943;

  tablePCData: any = [
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

  tableNTCData: any = [
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

  tablePACCData: any = [
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

  ionReportersData: any = [
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
