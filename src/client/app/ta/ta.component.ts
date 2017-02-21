import { Component, OnInit } from '@angular/core';

import { routerTransition } from './../shared/router.animations';
import { Pagination } from './../dashboard/paginationSetup';
import { filterByText } from './../shared/pipes/filterpipe';
/**
 * This class represents the lazy loaded TAComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-ta',
  templateUrl: 'ta.component.html',
  styleUrls: ['ta.component.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' },
  providers: [filterByText]
})
export class TaComponent extends Pagination implements OnInit {

  searchterm1: string = '';

  constructor(public filterbytext: filterByText) {
    super();

  }

  ngOnInit() {
    this.initPagination(this.table4Data.variant_reports.length);
    console.log(this.table4Data.variant_reports.length);
  }

  filterText(items: any[]): any[] {
    let result = this.filterbytext.transform(items, this.searchterm1);
    this.initPagination(result.length);
    return result;
  }

  table4Data: any = {
    "variant_reports": [
      {
        "patientSequenceNumber": "10405",
        "currentPatientStatus": "REGISTRATION",
        "specimenReceivedDate": 1463784009913,
        "molecularSequenceNumber": "MSN2147",
        "ngsDateReceived": 1464815517857,
        "daysPending": 268,
        "location": "Yale"
      },
      {
        "patientSequenceNumber": "10403",
        "currentPatientStatus": "REGISTRATION",
        "specimenReceivedDate": 1464039237037,
        "molecularSequenceNumber": "MSN2188",
        "ngsDateReceived": 1464815610741,
        "daysPending": 265,
        "location": "MoCha"
      },
      {
        "patientSequenceNumber": "10377",
        "currentPatientStatus": "REGISTRATION",
        "specimenReceivedDate": 1449922209071,
        "molecularSequenceNumber": "10377_127",
        "ngsDateReceived": 1464815222770,
        "daysPending": 429,
        "location": "Boston"
      },
      {
        "patientSequenceNumber": "20001",
        "currentPatientStatus": "REGISTRATION",
        "specimenReceivedDate": 1449922209071,
        "molecularSequenceNumber": "20001_MSN",
        "ngsDateReceived": 1478112979467,
        "daysPending": 429,
        "location": "Boston"
      },
      {
        "patientSequenceNumber": "20002",
        "currentPatientStatus": "REGISTRATION",
        "specimenReceivedDate": 1449922209071,
        "molecularSequenceNumber": "20002_MSN",
        "ngsDateReceived": 1464965824447,
        "daysPending": 429,
        "location": "Boston"
      },
      {
        "patientSequenceNumber": "20003",
        "currentPatientStatus": "REGISTRATION",
        "specimenReceivedDate": 1449922209071,
        "molecularSequenceNumber": "20003_MSN",
        "ngsDateReceived": 1464965910364,
        "daysPending": 429,
        "location": "Boston"
      },
      {
        "patientSequenceNumber": "20004",
        "currentPatientStatus": "REGISTRATION",
        "specimenReceivedDate": 1449922209071,
        "molecularSequenceNumber": "20004_MSN",
        "ngsDateReceived": 1464966017316,
        "daysPending": 429,
        "location": "Boston"
      },
      {
        "patientSequenceNumber": "20005",
        "currentPatientStatus": "REGISTRATION",
        "specimenReceivedDate": 1449922209071,
        "molecularSequenceNumber": "20005_MSN",
        "ngsDateReceived": 1464966127083,
        "daysPending": 429,
        "location": "Boston"
      },
      {
        "patientSequenceNumber": "20006",
        "currentPatientStatus": "REGISTRATION",
        "specimenReceivedDate": 1449922209071,
        "molecularSequenceNumber": "20006_MSN",
        "ngsDateReceived": 1464966211251,
        "daysPending": 429,
        "location": "Boston"
      },
      {
        "patientSequenceNumber": "20007",
        "currentPatientStatus": "REGISTRATION",
        "specimenReceivedDate": 1449922209071,
        "molecularSequenceNumber": "20007_MSN",
        "ngsDateReceived": 1464966294481,
        "daysPending": 429,
        "location": "Boston"
      },
      {
        "patientSequenceNumber": "20009",
        "currentPatientStatus": "REGISTRATION",
        "specimenReceivedDate": 1449922209071,
        "molecularSequenceNumber": "20009_MSN",
        "ngsDateReceived": 1464966495653,
        "daysPending": 429,
        "location": "Boston"
      },
      {
        "patientSequenceNumber": "20010",
        "currentPatientStatus": "REGISTRATION",
        "specimenReceivedDate": 1449922209071,
        "molecularSequenceNumber": "20010_MSN",
        "ngsDateReceived": 1464966632805,
        "daysPending": 429,
        "location": "Boston"
      }
    ]
  }
}
