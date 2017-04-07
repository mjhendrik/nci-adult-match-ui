import { Component } from '@angular/core';

import { routerTransition } from './../../shared/router.animations';
import { GMTFilter } from './../../shared/pipes/gmt';


/**
 * This class represents the lazy loaded CLIAYaleComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-clia-yale',
  templateUrl: 'clia-yale.component.html',
  styleUrls: ['clia-yale.component.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' },
  providers: [GMTFilter]
})
export class CliaYaleComponent {

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

  }

  tablePCData: any = [
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

  tableNTCData: any = [
    {
      "id": "Yale_4",
      "molecularSequenceNumber": "NtcControl_Yale_4",
      "dateCreated": 1456156472611,
      "dateReceived": 1456157767343,
      "site": "Yale",
      "siteIpAddress": "10.84.20.162",
      "status": null,
      "comment": null,
      "passed": true,
      "nextGenerationSequence": null
    },
    {
      "id": "Yale_1",
      "molecularSequenceNumber": "NtcControl_Yale_1",
      "dateCreated": 1446820780440,
      "dateReceived": 1454611045821,
      "site": "Yale",
      "siteIpAddress": "10.84.20.162",
      "status": null,
      "comment": "Testing accepting",
      "passed": true,
      "nextGenerationSequence": null
    },
    {
      "id": "Yale_5",
      "molecularSequenceNumber": "NtcControl_Yale_5",
      "dateCreated": 1456160756802,
      "dateReceived": 1456163682942,
      "site": "Yale",
      "siteIpAddress": "10.84.20.162",
      "status": null,
      "comment": null,
      "passed": true,
      "nextGenerationSequence": null
    },
    {
      "id": "Yale_2",
      "molecularSequenceNumber": "NtcControl_Yale_2",
      "dateCreated": 1454609828636,
      "dateReceived": 1454611676551,
      "site": "Yale",
      "siteIpAddress": "10.84.20.162",
      "status": null,
      "comment": null,
      "passed": false,
      "nextGenerationSequence": null
    },
    {
      "id": "Yale_3",
      "molecularSequenceNumber": "NtcControl_Yale_3",
      "dateCreated": 1454609835273,
      "dateReceived": 1456157445458,
      "site": "Yale",
      "siteIpAddress": "10.84.20.162",
      "status": null,
      "comment": null,
      "passed": false,
      "nextGenerationSequence": null
    },
    {
      "id": "Yale_6",
      "molecularSequenceNumber": "NtcControl_Yale_6",
      "dateCreated": 1456160766085,
      "dateReceived": 1456164054518,
      "site": "Yale",
      "siteIpAddress": "10.84.20.162",
      "status": null,
      "comment": "Manually accepted",
      "passed": true,
      "nextGenerationSequence": null
    },
    {
      "id": "Yale_7",
      "molecularSequenceNumber": "NtcControl_Yale_7",
      "dateCreated": 1491254926936,
      "dateReceived": null,
      "site": "Yale",
      "siteIpAddress": "10.84.20.162",
      "status": null,
      "comment": null,
      "passed": false,
      "nextGenerationSequence": null
    }
  ];

  tablePACCData: any = [
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

  ionReportersData: any = [
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
