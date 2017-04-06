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

    this.tablePCDefaultSort = 'molecularSequenceNumber';
    this.tableNTCDefaultSort = 'hoursPending';
    this.tablePACCDefaultSort = 'hoursPending';

    this.sortByAsc = 'asc';
    this.sortByDesc = 'desc';

    let gmt = new GMTFilter();

    for (let i = 0; i < this.tablePCData.length; i++) {
      this.tablePCData[i].specimenReceivedDate = gmt.transform(this.tablePCData[i].specimenReceivedDate);
    }

    for (let i = 0; i < this.tablePCData.length; i++) {
      this.tablePCData[i].ngsDateReceived = gmt.transform(this.tablePCData[i].ngsDateReceived);
    }

    for (let i = 0; i < this.tablePCData.length; i++) {
      this.tablePCData[i].dateAssigned = gmt.transform(this.tablePCData[i].dateAssigned);
    }

  }

  tablePCData: any = [
    {
      "id": "Dartmouth_1",
      "molecularSequenceNumber": "SampleControl_Dartmouth_1",
      "dateCreated": 1491329102131,
      "dateReceived": null,
      "site": "Dartmouth",
      "siteIpAddress": "129.43.39.192",
      "positiveControlVersion": 0,
      "positiveControlDateLoaded": null,
      "status": null,
      "comment": null,
      "passed": false,
      "nextGenerationSequence": null
    },
    {
      "id": "Dartmouth_2",
      "molecularSequenceNumber": "SampleControl_Dartmouth_2",
      "dateCreated": 1491329109999,
      "dateReceived": null,
      "site": "Dartmouth",
      "siteIpAddress": "129.43.39.192",
      "positiveControlVersion": 0,
      "positiveControlDateLoaded": null,
      "status": null,
      "comment": null,
      "passed": false,
      "nextGenerationSequence": null
    },
    {
      "id": "Dartmouth_3",
      "molecularSequenceNumber": "SampleControl_Dartmouth_3",
      "dateCreated": 1491329112873,
      "dateReceived": null,
      "site": "Dartmouth",
      "siteIpAddress": "129.43.39.192",
      "positiveControlVersion": 0,
      "positiveControlDateLoaded": null,
      "status": null,
      "comment": null,
      "passed": false,
      "nextGenerationSequence": null
    },
    {
      "id": "Dartmouth_4",
      "molecularSequenceNumber": "SampleControl_Dartmouth_4",
      "dateCreated": 1491329310696,
      "dateReceived": null,
      "site": "Dartmouth",
      "siteIpAddress": "129.43.39.192",
      "positiveControlVersion": 0,
      "positiveControlDateLoaded": null,
      "status": null,
      "comment": null,
      "passed": false,
      "nextGenerationSequence": null
    }
  ];

  tableNTCData: any = [
    {
      "id": "Dartmouth_1",
      "molecularSequenceNumber": "NtcControl_Dartmouth_1",
      "dateCreated": 1491329106245,
      "dateReceived": null,
      "site": "Dartmouth",
      "siteIpAddress": "129.43.39.192",
      "status": null,
      "comment": null,
      "passed": false,
      "nextGenerationSequence": null
    },
    {
      "id": "Dartmouth_2",
      "molecularSequenceNumber": "NtcControl_Dartmouth_2",
      "dateCreated": 1491329116463,
      "dateReceived": null,
      "site": "Dartmouth",
      "siteIpAddress": "129.43.39.192",
      "status": null,
      "comment": null,
      "passed": false,
      "nextGenerationSequence": null
    },
    {
      "id": "Dartmouth_3",
      "molecularSequenceNumber": "NtcControl_Dartmouth_3",
      "dateCreated": 1491329119584,
      "dateReceived": null,
      "site": "Dartmouth",
      "siteIpAddress": "129.43.39.192",
      "status": null,
      "comment": null,
      "passed": false,
      "nextGenerationSequence": null
    },
    {
      "id": "Dartmouth_4",
      "molecularSequenceNumber": "NtcControl_Dartmouth_4",
      "dateCreated": 1491329316146,
      "dateReceived": null,
      "site": "Dartmouth",
      "siteIpAddress": "129.43.39.192",
      "status": null,
      "comment": null,
      "passed": false,
      "nextGenerationSequence": null
    }
  ];

  tablePACCData: any = [
    {
      "id": "Dartmouth_1",
      "molecularSequenceNumber": "ProficiencyCompetencyControl_dartmouth_1",
      "dateCreated": 1491255648237,
      "dateReceived": null,
      "site": "Dartmouth",
      "siteIpAddress": "129.43.39.192",
      "status": null,
      "comment": null,
      "nextGenerationSequence": null
    },
    {
      "id": "Dartmouth_2",
      "molecularSequenceNumber": "ProficiencyCompetencyControl_Dartmouth_2",
      "dateCreated": 1491256161789,
      "dateReceived": null,
      "site": "Dartmouth",
      "siteIpAddress": "129.43.39.192",
      "status": null,
      "comment": null,
      "nextGenerationSequence": null
    },
    {
      "id": "Dartmouth_3",
      "molecularSequenceNumber": "ProficiencyCompetencyControl_Dartmouth_3",
      "dateCreated": 1491313516066,
      "dateReceived": null,
      "site": "Dartmouth",
      "siteIpAddress": "129.43.39.192",
      "status": null,
      "comment": null,
      "nextGenerationSequence": null
    },
    {
      "id": "Dartmouth_4",
      "molecularSequenceNumber": "ProficiencyCompetencyControl_Dartmouth_4",
      "dateCreated": 1491324674356,
      "dateReceived": null,
      "site": "Dartmouth",
      "siteIpAddress": "129.43.39.192",
      "status": null,
      "comment": null,
      "nextGenerationSequence": null
    }
  ];

}
