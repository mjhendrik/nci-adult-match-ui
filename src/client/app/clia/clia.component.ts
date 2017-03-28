import { Component } from '@angular/core';

import { routerTransition } from './../shared/router.animations';
import { GMTFilter } from './../shared/pipes/gmt';


/**
 * This class represents the lazy loaded CLIAComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-clia',
  templateUrl: 'clia.component.html',
  styleUrls: ['clia.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''},
  providers: [GMTFilter]
})
export class CliaComponent {

  cliaLabData: any = [
    "Mocha",
    "Yale",
    "MGH",
    "MD Anderson",
    "Dartmouth"
  ];

  searchtermVR: string = '';
  searchtermAR: string = '';
  searchtermAR2: string = '';

  recordsPerPageVR: number;
  recordsPerPageAR: number;
  recordsPerPageAR2: number;

  tableVRDefaultSort: string;
  tableARDefaultSort: string;
  tableAR2DefaultSort: string;

  ngOnInit() {
    this.recordsPerPageVR = 10;
    this.recordsPerPageAR = 10;
    this.recordsPerPageAR2 = 10;

    this.tableVRDefaultSort = 'daysPending';
    this.tableARDefaultSort = 'hoursPending';
    this.tableAR2DefaultSort = 'hoursPending';

    this.sortByAsc = 'asc';
    this.sortByDesc = 'desc';

    let gmt = new GMTFilter();

    for (let i = 0; i < this.tableVRData.variant_reports.length; i++) {
      this.tableVRData.variant_reports[i].specimenReceivedDate = gmt.transform(this.tableVRData.variant_reports[i].specimenReceivedDate);
    }

    for (let i = 0; i < this.tableVRData.variant_reports.length; i++) {
      this.tableVRData.variant_reports[i].ngsDateReceived = gmt.transform(this.tableVRData.variant_reports[i].ngsDateReceived);
    }

    for (let i = 0; i < this.tableARData.assignment_reports.length; i++) {
      this.tableARData.assignment_reports[i].dateAssigned = gmt.transform(this.tableARData.assignment_reports[i].dateAssigned);
    }

  }

  tableVRData: any = {
    "variant_reports": [
      {
        "patientSequenceNumber": "10405",
        "specimenReceivedDate": 1463784009913,
        "molecularSequenceNumber": "MSN2147",
        "ngsDateReceived": 1464815517857,
        "daysPending": 268,
        "location": "Yale"
      },
      {
        "patientSequenceNumber": "10403",
        "specimenReceivedDate": 1464039237037,
        "molecularSequenceNumber": "MSN2188",
        "ngsDateReceived": 1464815610741,
        "daysPending": 265,
        "location": "MoCha"
      },
      {
        "patientSequenceNumber": "10377",
        "specimenReceivedDate": 1449922209071,
        "molecularSequenceNumber": "10377_127",
        "ngsDateReceived": 1464815222770,
        "daysPending": 429,
        "location": "Boston"
      },
      {
        "patientSequenceNumber": "20001",
        "specimenReceivedDate": 1449922209071,
        "molecularSequenceNumber": "20001_MSN",
        "ngsDateReceived": 1478112979467,
        "daysPending": 429,
        "location": "Boston"
      },
      {
        "patientSequenceNumber": "20002",
        "specimenReceivedDate": 1449922209071,
        "molecularSequenceNumber": "20002_MSN",
        "ngsDateReceived": 1464965824447,
        "daysPending": 429,
        "location": "Boston"
      },
      {
        "patientSequenceNumber": "20003",
        "specimenReceivedDate": 1449922209071,
        "molecularSequenceNumber": "20003_MSN",
        "ngsDateReceived": 1464965910364,
        "daysPending": 429,
        "location": "Boston"
      },
      {
        "patientSequenceNumber": "20004",
        "specimenReceivedDate": 1449922209071,
        "molecularSequenceNumber": "20004_MSN",
        "ngsDateReceived": 1464966017316,
        "daysPending": 429,
        "location": "Boston"
      },
      {
        "patientSequenceNumber": "20005",
        "specimenReceivedDate": 1449922209071,
        "molecularSequenceNumber": "20005_MSN",
        "ngsDateReceived": 1464966127083,
        "daysPending": 429,
        "location": "Boston"
      },
      {
        "patientSequenceNumber": "20006",
        "specimenReceivedDate": 1449922209071,
        "molecularSequenceNumber": "20006_MSN",
        "ngsDateReceived": 1464966211251,
        "daysPending": 429,
        "location": "Boston"
      },
      {
        "patientSequenceNumber": "20007",
        "specimenReceivedDate": 1449922209071,
        "molecularSequenceNumber": "20007_MSN",
        "ngsDateReceived": 1464966294481,
        "daysPending": 429,
        "location": "Boston"
      },
      {
        "patientSequenceNumber": "20009",
        "specimenReceivedDate": 1449922209071,
        "molecularSequenceNumber": "20009_MSN",
        "ngsDateReceived": 1464966495653,
        "daysPending": 429,
        "location": "Boston"
      },
      {
        "patientSequenceNumber": "20010",
        "specimenReceivedDate": 1449922209071,
        "molecularSequenceNumber": "20010_MSN",
        "ngsDateReceived": 1464966632805,
        "daysPending": 429,
        "location": "Boston"
      }
    ]
  };

  tableARData: any = {
    "assignment_reports": [
      {
        "patientSequenceNumber": "10402",
        "dateAssigned": 1463178437398,
        "treatmentArm": {
          "id": "EAY131-Q",
          "version": "2016-01-20"
        },
        "hoursPending": 6621
      },
      {
        "patientSequenceNumber": "10373",
        "dateAssigned": 1465318217747,
        "treatmentArm": {
          "id": "EAY131-Q",
          "version": "2016-01-20"
        },
        "hoursPending": 6027
      },
      {
        "patientSequenceNumber": "10400",
        "dateAssigned": 1463666179838,
        "treatmentArm": {
          "id": "EAY131-Q",
          "version": "2016-01-20"
        },
        "hoursPending": 6486
      },
      {
        "patientSequenceNumber": "10401",
        "dateAssigned": 1464299430419,
        "treatmentArm": {
          "id": null,
          "version": null
        },
        "hoursPending": 6310
      },
      {
        "patientSequenceNumber": "10376",
        "dateAssigned": 1470402537070,
        "treatmentArm": {
          "id": null,
          "version": null
        },
        "hoursPending": 4614
      },
      {
        "patientSequenceNumber": "10641",
        "dateAssigned": 1465312718728,
        "treatmentArm": {
          "id": null,
          "version": null
        },
        "hoursPending": 6028
      },
      {
        "patientSequenceNumber": "10644",
        "dateAssigned": 1465564956324,
        "treatmentArm": {
          "id": "EAY131-Z1D",
          "version": "05-03-2016"
        },
        "hoursPending": 5958
      },
      {
        "patientSequenceNumber": "10649",
        "dateAssigned": 1465828170798,
        "treatmentArm": {
          "id": null,
          "version": null
        },
        "hoursPending": 5885
      },
      {
        "patientSequenceNumber": "10647",
        "dateAssigned": 1464972942205,
        "treatmentArm": {
          "id": null,
          "version": null
        },
        "hoursPending": 6123
      },
      {
        "patientSequenceNumber": "10374",
        "dateAssigned": 1465318364678,
        "treatmentArm": {
          "id": "EAY131-F",
          "version": "2016-05-31"
        },
        "hoursPending": 6027
      },
      {
        "patientSequenceNumber": "10372",
        "dateAssigned": 1470084396071,
        "treatmentArm": {
          "id": null,
          "version": null
        },
        "hoursPending": 4703
      },
      {
        "patientSequenceNumber": "10741",
        "dateAssigned": 1479837779853,
        "treatmentArm": {
          "id": "EAY131-IX1",
          "version": "2016-11-18"
        },
        "hoursPending": 1994
      },
      {
        "patientSequenceNumber": "10742",
        "dateAssigned": 1479919619007,
        "treatmentArm": {
          "id": null,
          "version": null
        },
        "hoursPending": 1971
      },
      {
        "patientSequenceNumber": "10761",
        "dateAssigned": 1481834875643,
        "treatmentArm": {
          "id": null,
          "version": null
        },
        "hoursPending": 1439
      },
      {
        "patientSequenceNumber": "10763",
        "dateAssigned": 1481833036889,
        "treatmentArm": {
          "id": null,
          "version": null
        },
        "hoursPending": 1439
      },
      {
        "patientSequenceNumber": "10812",
        "dateAssigned": 1487693527223,
        "treatmentArm": {
          "id": "EAY131-Q",
          "version": "2017-01-12"
        },
        "hoursPending": 51
      }
    ]
  };

}
