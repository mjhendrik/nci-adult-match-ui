import { Component, OnInit } from '@angular/core';
import { NameListService } from '../shared/name-list/name-list.service';

import { routerTransition } from './../shared/router.animations';

/**
 * This class represents the lazy loaded DashboardComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})
export class DashboardComponent implements OnInit {

  newName: string = '';
  errorMessage: string;
  names: any[] = [];
  currentPage: number;
  numberOfRecords: number;

  /**
   * Creates an instance of the DashboardComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor(public nameListService: NameListService) { }

  /**
   * Get the names OnInit
   */
  ngOnInit() {
    this.getNames();
    this.currentPage = 0;
    this.numberOfRecords = 25;
  }

  /**
   * Handle the nameListService observable
   */
  getNames() {
    this.nameListService.get()
      .subscribe(
      names => this.names = names,
      error => this.errorMessage = <any>error
      );
  }

  /**
   * Pushes a new name onto the names array
   * @return {boolean} false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
    // TODO: implement nameListService.post
    this.names.push(this.newName);
    this.newName = '';
    return false;
  }

  disablePrevious(): string {
    return this.currentPage === 0 ? 'disabled' : '';
  }

  disableNext(): string {
    return this.currentPage === this.totalPages() ? "disabled" : "";
  }

  totalPages(): number {
    return Math.ceil(this.table1Data.variant_reports.length / this.numberOfRecords) - 1;
  }

  setPage(page: number): void {
    this.currentPage = page;
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages())
      this.currentPage++;
  }

  prevPage(): void {
    if (this.currentPage > 0)
      this.currentPage--;
  }

  pageClicked(p: number): void {
    console.log(p);
  }

  rangeSize: number = 5;
  ps: number[] = [];
  start: number;
  paginationRange(): number[] {

    this.ps = [];

    this.start = this.currentPage;

    if (this.start > this.totalPages() - this.rangeSize) {

      this.start = this.totalPages() - this.rangeSize + 1;

    }

    for (var i = this.start; i < this.start + this.rangeSize; i++) {
      if (i >= 0)
        this.ps.push(i);
    }

    return this.ps;
  }

  lastPage(): void {
    console.log(this.totalPages());
    this.currentPage = this.totalPages();
    console.log(this.currentPage);
  }

  firstPage(): void {
    this.currentPage = 0;
    console.log(this.currentPage);
  }


  table1Data: any = {
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


  table2Data: any = {
    "assignment_reports": [
      {
        "patientSequenceNumber": "10402",
        "dateAssigned": 1463178437398,
        "patientCurrentStatus": "PENDING_CONFIRMATION",
        "hoursPending": 6621
      },
      {
        "patientSequenceNumber": "10373",
        "dateAssigned": 1465318217747,
        "patientCurrentStatus": "PENDING_CONFIRMATION",
        "hoursPending": 6027
      },
      {
        "patientSequenceNumber": "10400",
        "dateAssigned": 1463666179838,
        "patientCurrentStatus": "PENDING_CONFIRMATION",
        "hoursPending": 6486
      },
      {
        "patientSequenceNumber": "10401",
        "dateAssigned": 1464299430419,
        "patientCurrentStatus": "PENDING_CONFIRMATION",
        "hoursPending": 6310
      },
      {
        "patientSequenceNumber": "10376",
        "dateAssigned": 1470402537070,
        "patientCurrentStatus": "PENDING_CONFIRMATION",
        "hoursPending": 4614
      },
      {
        "patientSequenceNumber": "10641",
        "dateAssigned": 1465312718728,
        "patientCurrentStatus": "PENDING_CONFIRMATION",
        "hoursPending": 6028
      },
      {
        "patientSequenceNumber": "10644",
        "dateAssigned": 1465564956324,
        "patientCurrentStatus": "PENDING_CONFIRMATION",
        "hoursPending": 5958
      },
      {
        "patientSequenceNumber": "10649",
        "dateAssigned": 1465828170798,
        "patientCurrentStatus": "PENDING_CONFIRMATION",
        "hoursPending": 5885
      },
      {
        "patientSequenceNumber": "10647",
        "dateAssigned": 1464972942205,
        "patientCurrentStatus": "PENDING_CONFIRMATION",
        "hoursPending": 6123
      },
      {
        "patientSequenceNumber": "10374",
        "dateAssigned": 1465318364678,
        "patientCurrentStatus": "PENDING_CONFIRMATION",
        "hoursPending": 6027
      },
      {
        "patientSequenceNumber": "10372",
        "dateAssigned": 1470084396071,
        "patientCurrentStatus": "PENDING_CONFIRMATION",
        "hoursPending": 4703
      },
      {
        "patientSequenceNumber": "10741",
        "dateAssigned": 1479837779853,
        "patientCurrentStatus": "PENDING_CONFIRMATION",
        "hoursPending": 1994
      },
      {
        "patientSequenceNumber": "10742",
        "dateAssigned": 1479919619007,
        "patientCurrentStatus": "PENDING_CONFIRMATION",
        "hoursPending": 1971
      },
      {
        "patientSequenceNumber": "10761",
        "dateAssigned": 1481834875643,
        "patientCurrentStatus": "PENDING_CONFIRMATION",
        "hoursPending": 1439
      },
      {
        "patientSequenceNumber": "10763",
        "dateAssigned": 1481833036889,
        "patientCurrentStatus": "PENDING_CONFIRMATION",
        "hoursPending": 1439
      }
    ]
  }

  table3Data: any = [
    {
      "psn": "11767",
      "msn": "MSN20818",
      "date_verified": "2016-09-16T15:10:53.241Z"
    },
    {
      "psn": "13066",
      "msn": "MSN30353",
      "date_verified": "2016-11-18T15:53:36.164Z"
    },
    {
      "psn": "13134",
      "msn": "MSN31351",
      "date_verified": "2016-11-23T15:56:41.951Z"
    },
    {
      "psn": "13397",
      "msn": "MSN32698",
      "date_verified": "2016-12-05T20:07:24.121Z"
    },
    {
      "psn": "13459",
      "msn": "MSN36343",
      "date_verified": "2017-01-09T18:40:36.272Z"
    },
    {
      "psn": "13537",
      "msn": "MSN35386",
      "date_verified": "2016-12-19T20:50:22.018Z"
    },
    {
      "psn": "13626",
      "msn": "MSN37481",
      "date_verified": "2016-12-30T21:39:23.162Z"
    },
    {
      "psn": "13663",
      "msn": "MSN35675",
      "date_verified": "2016-12-23T15:15:36.350Z"
    },
    {
      "psn": "13676",
      "msn": "MSN36467",
      "date_verified": "2016-12-22T21:37:46.169Z"
    },
    {
      "psn": "13693",
      "msn": "MSN36426",
      "date_verified": "2016-12-22T21:08:34.867Z"
    },
    {
      "psn": "13705",
      "msn": "MSN40295",
      "date_verified": "2017-01-20T23:34:17.798Z"
    },
    {
      "psn": "13784",
      "msn": "MSN37150",
      "date_verified": "2016-12-30T19:39:43.729Z"
    },
    {
      "psn": "14028",
      "msn": "MSN39016",
      "date_verified": "2017-01-12T19:51:27.674Z"
    },
    {
      "psn": "14225",
      "msn": "MSN41087",
      "date_verified": "2017-01-26T18:53:08.268Z"
    },
    {
      "psn": "14260",
      "msn": "MSN42002",
      "date_verified": "2017-02-03T20:44:15.422Z"
    },
    {
      "psn": "14277",
      "msn": "MSN42614",
      "date_verified": "2017-02-07T18:53:58.185Z"
    },
    {
      "psn": "14282",
      "msn": "MSN43109",
      "date_verified": "2017-02-11T20:01:46.549Z"
    },
    {
      "psn": "14298",
      "msn": "MSN41343",
      "date_verified": "2017-02-01T17:19:02.544Z"
    },
    {
      "psn": "14310",
      "msn": "MSN43935",
      "date_verified": "2017-02-13T19:44:43.228Z"
    },
    {
      "psn": "14330",
      "msn": "MSN41350",
      "date_verified": "2017-02-01T18:32:57.773Z"
    },
    {
      "psn": "14331",
      "msn": "MSN42036",
      "date_verified": "2017-02-03T21:23:05.330Z"
    },
    {
      "psn": "14339",
      "msn": "MSN42846",
      "date_verified": "2017-02-07T19:24:03.439Z"
    },
    {
      "psn": "14342",
      "msn": "MSN43042",
      "date_verified": "2017-02-04T01:40:53.662Z"
    },
    {
      "psn": "14421",
      "msn": "MSN42804",
      "date_verified": "2017-02-07T19:09:29.688Z"
    },
    {
      "psn": "14452",
      "msn": "MSN43778",
      "date_verified": "2017-02-09T00:37:57.253Z"
    },
    {
      "psn": "14490",
      "msn": "MSN43224",
      "date_verified": "2017-02-10T02:32:42.410Z"
    },
    {
      "psn": "14491",
      "msn": "MSN43604",
      "date_verified": "2017-02-10T22:33:57.708Z"
    },
    {
      "psn": "14503",
      "msn": "MSN43208",
      "date_verified": "2017-02-11T21:59:17.556Z"
    },
    {
      "psn": "14519",
      "msn": "MSN43729",
      "date_verified": "2017-02-09T00:25:21.497Z"
    },
    {
      "psn": "14531",
      "msn": "MSN43265",
      "date_verified": "2017-02-11T21:23:49.114Z"
    },
    {
      "psn": "14549",
      "msn": "MSN43786",
      "date_verified": "2017-02-10T22:51:12.316Z"
    }
  ]

}
