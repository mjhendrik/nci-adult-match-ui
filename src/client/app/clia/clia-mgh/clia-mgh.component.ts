import { Component } from '@angular/core';

import { routerTransition } from './../../shared/router.animations';
import { GMTFilter } from './../../shared/pipes/gmt';


/**
 * This class represents the lazy loaded CLIAMghComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-clia-mgh',
  templateUrl: 'clia-mgh.component.html',
  styleUrls: ['clia-mgh.component.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' },
  providers: [GMTFilter]
})
export class CliaMghComponent {

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

  tableNTCData: any = [
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

  tablePACCData: any = [
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

  ionReportersData: any = [
  ];

}
