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
  host: {'[@routerTransition]': ''}
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

}
