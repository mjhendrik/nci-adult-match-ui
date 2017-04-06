import { Component } from '@angular/core';

import { routerTransition } from './../../shared/router.animations';
import { GMTFilter } from './../../shared/pipes/gmt';


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
  providers: [GMTFilter]
})
export class CliaMochaComponent {

  searchtermVR: string = '';
  searchtermAR: string = '';
  searchtermAR2: string = '';

  recordsPerPageVR: number;
  recordsPerPageAR: number;
  recordsPerPageAR2: number;

  tableVRDefaultSort: string;
  tableARDefaultSort: string;
  tableAR2DefaultSort: string;

  sortByAsc: string;
  sortByDesc: string;
  tabtype: string;

  ngOnInit() {
    this.tabtype = 'MoCha';
    this.recordsPerPageVR = 10;
    this.recordsPerPageAR = 10;
    this.recordsPerPageAR2 = 10;

    this.tableVRDefaultSort = 'molecularSequenceNumber';
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

  clickedTab(type: string): void {
    this.tabtype = type;
    switch (type) {
      case 'MoCha':
        break;
      case 'Yale':
        break;
      case 'MGH':
        break;
      case 'MDACC':
        this.tabtype = 'MD Anderson';
        break;
      case 'Dartmouth':
        break;
    }

  }

  tablePCData: any = [
    {
      "siteName": "MoCha",
      "siteIpAddress": "129.43.39.182",
      "sampleControls": [
        {
          "id": "MoCha_21",
          "molecularSequenceNumber": "SampleControl_MoCha_21",
          "dateCreated": 1455828416610,
          "dateReceived": 1455914224800,
          "site": "MoCha",
          "siteIpAddress": "129.43.127.133",
          "positiveControlVersion": 1,
          "positiveControlDateLoaded": 1438358256124,
          "status": "FAILED",
          "comment": null,
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "MoCha_23",
          "molecularSequenceNumber": "SampleControl_MoCha_23",
          "dateCreated": 1455828430931,
          "dateReceived": 1455913647043,
          "site": "MoCha",
          "siteIpAddress": "129.43.127.133",
          "positiveControlVersion": 1,
          "positiveControlDateLoaded": 1438358256124,
          "status": "FAILED",
          "comment": null,
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "MoCha_33",
          "molecularSequenceNumber": "SampleControl_MoCha_33",
          "dateCreated": 1464799917521,
          "dateReceived": null,
          "site": "MoCha",
          "siteIpAddress": "129.43.127.133",
          "positiveControlVersion": 0,
          "positiveControlDateLoaded": null,
          "status": null,
          "comment": null,
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "MoCha_1",
          "molecularSequenceNumber": "SampleControl_MoCha_1",
          "dateCreated": 1438873767785,
          "dateReceived": 1438881441753,
          "site": "MoCha",
          "siteIpAddress": "127.0.0.1",
          "positiveControlVersion": 1,
          "positiveControlDateLoaded": 1438358256124,
          "status": "PASSED",
          "comment": null,
          "passed": true,
          "nextGenerationSequence": null
        },
        {
          "id": "MoCha_10",
          "molecularSequenceNumber": "SampleControl_MoCha_10",
          "dateCreated": 1442589546317,
          "dateReceived": 1442589694482,
          "site": "MoCha",
          "siteIpAddress": "129.43.127.133",
          "positiveControlVersion": 1,
          "positiveControlDateLoaded": 1438358256124,
          "status": "PASSED",
          "comment": null,
          "passed": true,
          "nextGenerationSequence": null
        },
        {
          "id": "MoCha_11",
          "molecularSequenceNumber": "SampleControl_MoCha_11",
          "dateCreated": 1442589567947,
          "dateReceived": 1442589791366,
          "site": "MoCha",
          "siteIpAddress": "129.43.127.133",
          "positiveControlVersion": 1,
          "positiveControlDateLoaded": 1438358256124,
          "status": "REJECTED",
          "comment": "Testing rejecting a passed positive sample control.",
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "MoCha_12",
          "molecularSequenceNumber": "SampleControl_MoCha_12",
          "dateCreated": 1442610683322,
          "dateReceived": 1442611011636,
          "site": "MoCha",
          "siteIpAddress": "129.43.127.133",
          "positiveControlVersion": 1,
          "positiveControlDateLoaded": 1438358256124,
          "status": "PASSED",
          "comment": null,
          "passed": true,
          "nextGenerationSequence": null
        },
        {
          "id": "MoCha_13",
          "molecularSequenceNumber": "SampleControl_MoCha_13",
          "dateCreated": 1442610687501,
          "dateReceived": 1446148374512,
          "site": "MoCha",
          "siteIpAddress": "129.43.127.133",
          "positiveControlVersion": 1,
          "positiveControlDateLoaded": 1438358256124,
          "status": "FAILED",
          "comment": null,
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "MoCha_14",
          "molecularSequenceNumber": "SampleControl_MoCha_14",
          "dateCreated": 1445630978613,
          "dateReceived": 1445631142111,
          "site": "MoCha",
          "siteIpAddress": "129.43.127.133",
          "positiveControlVersion": 1,
          "positiveControlDateLoaded": 1438358256124,
          "status": "FAILED",
          "comment": null,
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "MoCha_15",
          "molecularSequenceNumber": "SampleControl_MoCha_15",
          "dateCreated": 1446147259587,
          "dateReceived": 1455917196133,
          "site": "MoCha",
          "siteIpAddress": "129.43.127.133",
          "positiveControlVersion": 1,
          "positiveControlDateLoaded": 1438358256124,
          "status": "FAILED",
          "comment": null,
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "MoCha_16",
          "molecularSequenceNumber": "SampleControl_MoCha_16",
          "dateCreated": 1446818805142,
          "dateReceived": 1455916946308,
          "site": "MoCha",
          "siteIpAddress": "129.43.127.133",
          "positiveControlVersion": 1,
          "positiveControlDateLoaded": 1438358256124,
          "status": "FAILED",
          "comment": null,
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "MoCha_20",
          "molecularSequenceNumber": "SampleControl_MoCha_20",
          "dateCreated": 1455828409856,
          "dateReceived": 1455916395946,
          "site": "MoCha",
          "siteIpAddress": "129.43.127.133",
          "positiveControlVersion": 1,
          "positiveControlDateLoaded": 1438358256124,
          "status": "FAILED",
          "comment": null,
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "MoCha_24",
          "molecularSequenceNumber": "SampleControl_MoCha_24",
          "dateCreated": 1455828510776,
          "dateReceived": 1455913339980,
          "site": "MoCha",
          "siteIpAddress": "129.43.127.133",
          "positiveControlVersion": 1,
          "positiveControlDateLoaded": 1438358256124,
          "status": "FAILED",
          "comment": null,
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "MoCha_9",
          "molecularSequenceNumber": "SampleControl_MoCha_9",
          "dateCreated": 1441827440685,
          "dateReceived": 1441903510113,
          "site": "MoCha",
          "siteIpAddress": "129.43.127.133",
          "positiveControlVersion": 1,
          "positiveControlDateLoaded": 1438358256124,
          "status": "FAILED",
          "comment": null,
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "MoCha_17",
          "molecularSequenceNumber": "SampleControl_MoCha_17",
          "dateCreated": 1446819155371,
          "dateReceived": 1455916081696,
          "site": "MoCha",
          "siteIpAddress": "129.43.127.133",
          "positiveControlVersion": 1,
          "positiveControlDateLoaded": 1438358256124,
          "status": "FAILED",
          "comment": null,
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "MoCha_18",
          "molecularSequenceNumber": "SampleControl_MoCha_18",
          "dateCreated": 1446819191597,
          "dateReceived": 1455900581671,
          "site": "MoCha",
          "siteIpAddress": "129.43.127.133",
          "positiveControlVersion": 1,
          "positiveControlDateLoaded": 1438358256124,
          "status": "FAILED",
          "comment": null,
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "MoCha_19",
          "molecularSequenceNumber": "SampleControl_MoCha_19",
          "dateCreated": 1455828402104,
          "dateReceived": 1455915803120,
          "site": "MoCha",
          "siteIpAddress": "129.43.127.133",
          "positiveControlVersion": 1,
          "positiveControlDateLoaded": 1438358256124,
          "status": "FAILED",
          "comment": null,
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "MoCha_2",
          "molecularSequenceNumber": "SampleControl_MoCha_2",
          "dateCreated": 1438873776727,
          "dateReceived": 1438881522032,
          "site": "MoCha",
          "siteIpAddress": "127.0.0.1",
          "positiveControlVersion": 1,
          "positiveControlDateLoaded": 1438358256124,
          "status": "FAILED",
          "comment": null,
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "MoCha_22",
          "molecularSequenceNumber": "SampleControl_MoCha_22",
          "dateCreated": 1455828424118,
          "dateReceived": 1455913890191,
          "site": "MoCha",
          "siteIpAddress": "129.43.127.133",
          "positiveControlVersion": 1,
          "positiveControlDateLoaded": 1438358256124,
          "status": "FAILED",
          "comment": null,
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "MoCha_25",
          "molecularSequenceNumber": "SampleControl_MoCha_25",
          "dateCreated": 1455828519981,
          "dateReceived": 1455913018249,
          "site": "MoCha",
          "siteIpAddress": "129.43.127.133",
          "positiveControlVersion": 1,
          "positiveControlDateLoaded": 1438358256124,
          "status": "FAILED",
          "comment": null,
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "MoCha_26",
          "molecularSequenceNumber": "SampleControl_MoCha_26",
          "dateCreated": 1455828529958,
          "dateReceived": 1455912460108,
          "site": "MoCha",
          "siteIpAddress": "129.43.127.133",
          "positiveControlVersion": 1,
          "positiveControlDateLoaded": 1438358256124,
          "status": "FAILED",
          "comment": null,
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "MoCha_28",
          "molecularSequenceNumber": "SampleControl_MoCha_28",
          "dateCreated": 1455916351195,
          "dateReceived": 1455916636084,
          "site": "MoCha",
          "siteIpAddress": "129.43.127.133",
          "positiveControlVersion": 1,
          "positiveControlDateLoaded": 1438358256124,
          "status": "FAILED",
          "comment": null,
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "MoCha_3",
          "molecularSequenceNumber": "SampleControl_MoCha_3",
          "dateCreated": 1438881468357,
          "dateReceived": 1438881567198,
          "site": "MoCha",
          "siteIpAddress": "127.0.0.1",
          "positiveControlVersion": 1,
          "positiveControlDateLoaded": 1438358256124,
          "status": "FAILED",
          "comment": null,
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "MoCha_4",
          "molecularSequenceNumber": "SampleControl_MoCha_4",
          "dateCreated": 1438881521895,
          "dateReceived": 1438881774368,
          "site": "MoCha",
          "siteIpAddress": "127.0.0.1",
          "positiveControlVersion": 1,
          "positiveControlDateLoaded": 1438358256124,
          "status": "FAILED",
          "comment": null,
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "MoCha_5",
          "molecularSequenceNumber": "SampleControl_MoCha_5",
          "dateCreated": 1438881560216,
          "dateReceived": 1438881801545,
          "site": "MoCha",
          "siteIpAddress": "127.0.0.1",
          "positiveControlVersion": 1,
          "positiveControlDateLoaded": 1438358256124,
          "status": "FAILED",
          "comment": null,
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "MoCha_6",
          "molecularSequenceNumber": "SampleControl_MoCha_6",
          "dateCreated": 1438881580165,
          "dateReceived": 1438881806153,
          "site": "MoCha",
          "siteIpAddress": "127.0.0.1",
          "positiveControlVersion": 1,
          "positiveControlDateLoaded": 1438358256124,
          "status": "REJECTED",
          "comment": "Donald Trump will be at center stage and potentially in the line of fire on Thursday as 10 leading Republican presidential candidates look for a break-out moment at their first debate on the road to the November 2016 election.\n\nThe real estate mogul, along with rivals Jeb Bush, Scott Walker, Marco Rubio and six others, square off at 9 p.m. EDT (0100 GMT Friday) at Quicken Loans Arena in Cleveland, Ohio, just three hours after seven candidates who rank lower in the polls wrap up a separate debate.\n\nThe prime-time event, to be moderated by Fox News anchors Bret Baier, Megyn Kelly and Chris Wallace, will offer Americans their first look at the major Republican candidates en masse six months before Iowa holds the first nominating contest.\n\n\nFor Trump, the first debate offers an opportunity to prove whether he has a substantive vision for the country and go beyond brick-throwing rhetoric.\nFor Trump, the first debate offers an opportunity to prove whether he has a substantive vision for the country and go b",
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "MoCha_7",
          "molecularSequenceNumber": "SampleControl_MoCha_7",
          "dateCreated": 1441827414900,
          "dateReceived": 1441827988864,
          "site": "MoCha",
          "siteIpAddress": "129.43.127.133",
          "positiveControlVersion": 1,
          "positiveControlDateLoaded": 1438358256124,
          "status": "REJECTED",
          "comment": "Sed vitae augue nisi. Praesent molestie purus quis tincidunt commodo. Mauris nibh libero, dignissim id augue vitae, semper convallis leo. Morbi suscipit nec lorem sed mollis. Nulla facilisi. Duis id dictum libero, sit amet faucibus mi. Duis finibus eros vitae odio dignissim maximus. Phasellus sit amet leo accumsan, tincidunt nisi sed, malesuada ipsum. Aliquam pulvinar lacus arcu, sed eleifend tellus pharetra nec. Etiam quis velit vel ex rutrum mollis. Integer dolor ligula, tempor eget rhoncus in, tempor placerat nibh. Aliquam vitae arcu maximus, congue quam et, eleifend ligula. Sed non lorem rhoncus, feugiat nisi a, consequat mi.",
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "MoCha_8",
          "molecularSequenceNumber": "SampleControl_MoCha_8",
          "dateCreated": 1441827432127,
          "dateReceived": 1441903342189,
          "site": "MoCha",
          "siteIpAddress": "129.43.127.133",
          "positiveControlVersion": 1,
          "positiveControlDateLoaded": 1438358256124,
          "status": "PASSED",
          "comment": null,
          "passed": true,
          "nextGenerationSequence": null
        },
        {
          "id": "MoCha_29",
          "molecularSequenceNumber": "SampleControl_MoCha_29",
          "dateCreated": 1464547561006,
          "dateReceived": 1464707257715,
          "site": "MoCha",
          "siteIpAddress": "129.43.127.133",
          "positiveControlVersion": 2,
          "positiveControlDateLoaded": 1464706967317,
          "status": "PASSED",
          "comment": null,
          "passed": true,
          "nextGenerationSequence": null
        },
        {
          "id": "MoCha_30",
          "molecularSequenceNumber": "SampleControl_MoCha_30",
          "dateCreated": 1464547568412,
          "dateReceived": 1464707446130,
          "site": "MoCha",
          "siteIpAddress": "129.43.127.133",
          "positiveControlVersion": 2,
          "positiveControlDateLoaded": 1464706967317,
          "status": "FAILED",
          "comment": null,
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "MoCha_32",
          "molecularSequenceNumber": "SampleControl_MoCha_32",
          "dateCreated": 1464799913313,
          "dateReceived": 1464974669878,
          "site": "MoCha",
          "siteIpAddress": "129.43.127.133",
          "positiveControlVersion": 2,
          "positiveControlDateLoaded": 1464706967317,
          "status": "PASSED",
          "comment": null,
          "passed": true,
          "nextGenerationSequence": null
        },
        {
          "id": "MoCha_31",
          "molecularSequenceNumber": "SampleControl_MoCha_31",
          "dateCreated": 1464799158292,
          "dateReceived": 1464974843716,
          "site": "MoCha",
          "siteIpAddress": "129.43.127.133",
          "positiveControlVersion": 2,
          "positiveControlDateLoaded": 1464706967317,
          "status": "PASSED",
          "comment": null,
          "passed": true,
          "nextGenerationSequence": null
        },
        {
          "id": "MoCha_27",
          "molecularSequenceNumber": "SampleControl_MoCha_27",
          "dateCreated": 1455828561102,
          "dateReceived": 1465392685717,
          "site": "MoCha",
          "siteIpAddress": "129.43.127.133",
          "positiveControlVersion": 2,
          "positiveControlDateLoaded": 1464706967317,
          "status": "FAILED",
          "comment": null,
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "MoCha_34",
          "molecularSequenceNumber": "SampleControl_MoCha_34",
          "dateCreated": 1467303976757,
          "dateReceived": null,
          "site": "MoCha",
          "siteIpAddress": "129.43.127.133",
          "positiveControlVersion": 0,
          "positiveControlDateLoaded": null,
          "status": null,
          "comment": null,
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "MoCha_35",
          "molecularSequenceNumber": "SampleControl_MoCha_35",
          "dateCreated": 1472150750011,
          "dateReceived": 1472151163857,
          "site": "MoCha",
          "siteIpAddress": "129.43.127.133",
          "positiveControlVersion": 2,
          "positiveControlDateLoaded": 1464706967317,
          "status": "PASSED",
          "comment": null,
          "passed": true,
          "nextGenerationSequence": null
        },
        {
          "id": "MoCha_36",
          "molecularSequenceNumber": "SampleControl_MoCha_36",
          "dateCreated": 1472150754027,
          "dateReceived": 1472151205987,
          "site": "MoCha",
          "siteIpAddress": "129.43.127.133",
          "positiveControlVersion": 2,
          "positiveControlDateLoaded": 1464706967317,
          "status": "PASSED",
          "comment": null,
          "passed": true,
          "nextGenerationSequence": null
        },
        {
          "id": "MoCha_37",
          "molecularSequenceNumber": "SampleControl_MoCha_37",
          "dateCreated": 1491254779004,
          "dateReceived": null,
          "site": "MoCha",
          "siteIpAddress": "10.133.130.53",
          "positiveControlVersion": 0,
          "positiveControlDateLoaded": null,
          "status": null,
          "comment": null,
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "MoCha_38",
          "molecularSequenceNumber": "SampleControl_MoCha_38",
          "dateCreated": 1491324738354,
          "dateReceived": null,
          "site": "MoCha",
          "siteIpAddress": "10.133.130.53",
          "positiveControlVersion": 0,
          "positiveControlDateLoaded": null,
          "status": null,
          "comment": null,
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "MoCha_39",
          "molecularSequenceNumber": "SampleControl_MoCha_39",
          "dateCreated": 1491324748889,
          "dateReceived": null,
          "site": "MoCha",
          "siteIpAddress": "10.133.130.53",
          "positiveControlVersion": 0,
          "positiveControlDateLoaded": null,
          "status": null,
          "comment": null,
          "passed": false,
          "nextGenerationSequence": null
        }
      ],
      "ntcControls": [
        {
          "id": "MoCha_1",
          "molecularSequenceNumber": "NtcControl_MoCha_1",
          "dateCreated": 1441827420568,
          "dateReceived": 1441900031807,
          "site": "MoCha",
          "siteIpAddress": "129.43.127.133",
          "status": null,
          "comment": null,
          "passed": true,
          "nextGenerationSequence": null
        },
        {
          "id": "MoCha_14",
          "molecularSequenceNumber": "NtcControl_MoCha_14",
          "dateCreated": 1446818967330,
          "dateReceived": null,
          "site": "MoCha",
          "siteIpAddress": "129.43.127.133",
          "status": null,
          "comment": null,
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "MoCha_4",
          "molecularSequenceNumber": "NtcControl_MoCha_4",
          "dateCreated": 1442589550080,
          "dateReceived": 1442590213139,
          "site": "MoCha",
          "siteIpAddress": "129.43.127.133",
          "status": null,
          "comment": null,
          "passed": true,
          "nextGenerationSequence": null
        },
        {
          "id": "MoCha_5",
          "molecularSequenceNumber": "NtcControl_MoCha_5",
          "dateCreated": 1442589571161,
          "dateReceived": 1442590292613,
          "site": "MoCha",
          "siteIpAddress": "129.43.127.133",
          "status": null,
          "comment": null,
          "passed": true,
          "nextGenerationSequence": null
        },
        {
          "id": "MoCha_6",
          "molecularSequenceNumber": "NtcControl_MoCha_6",
          "dateCreated": 1442610692009,
          "dateReceived": 1442610913707,
          "site": "MoCha",
          "siteIpAddress": "129.43.127.133",
          "status": null,
          "comment": null,
          "passed": true,
          "nextGenerationSequence": null
        },
        {
          "id": "MoCha_15",
          "molecularSequenceNumber": "NtcControl_MoCha_15",
          "dateCreated": 1464547578402,
          "dateReceived": null,
          "site": "MoCha",
          "siteIpAddress": "129.43.127.133",
          "status": null,
          "comment": null,
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "MoCha_10",
          "molecularSequenceNumber": "NtcControl_MoCha_10",
          "dateCreated": 1445618708687,
          "dateReceived": 1445618917502,
          "site": "MoCha",
          "siteIpAddress": "129.43.127.133",
          "status": null,
          "comment": null,
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "MoCha_11",
          "molecularSequenceNumber": "NtcControl_MoCha_11",
          "dateCreated": 1445630996331,
          "dateReceived": 1445631283390,
          "site": "MoCha",
          "siteIpAddress": "129.43.127.133",
          "status": null,
          "comment": "This is good enough. SY Testing",
          "passed": true,
          "nextGenerationSequence": null
        },
        {
          "id": "MoCha_12",
          "molecularSequenceNumber": "NtcControl_MoCha_12",
          "dateCreated": 1445640044917,
          "dateReceived": 1445640510340,
          "site": "MoCha",
          "siteIpAddress": "129.43.127.133",
          "status": null,
          "comment": null,
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "MoCha_13",
          "molecularSequenceNumber": "NtcControl_MoCha_13",
          "dateCreated": 1446147270909,
          "dateReceived": 1446148453248,
          "site": "MoCha",
          "siteIpAddress": "129.43.127.133",
          "status": null,
          "comment": "This one is acceptable. SY testing",
          "passed": true,
          "nextGenerationSequence": null
        },
        {
          "id": "MoCha_2",
          "molecularSequenceNumber": "NtcControl_MoCha_2",
          "dateCreated": 1441827434849,
          "dateReceived": 1441903060083,
          "site": "MoCha",
          "siteIpAddress": "129.43.127.133",
          "status": null,
          "comment": "Nulla turpis nulla, dictum varius sapien nec, porttitor ullamcorper justo. Fusce interdum ante vitae nisl egestas, ultricies maximus justo suscipit. Ut auctor, quam eu condimentum aliquet, nisi tellus ullamcorper erat, vitae luctus magna urna ut ipsum. Proin non nulla blandit, euismod arcu vitae, malesuada ipsum. In varius libero sed ligula condimentum rhoncus. Sed laoreet dolor eu sapien tincidunt cursus. Nullam risus sem, lacinia et nisl non, euismod auctor turpis. Fusce dignissim dignissim diam non viverra. Pellentesque tristique dictum justo, a facilisis nibh vestibulum vitae. Pellentesque cursus condimentum mattis. Duis vel rutrum ligula. Curabitur nec efficitur dolor. Ut varius nulla vitae lacus efficitur consequat.",
          "passed": true,
          "nextGenerationSequence": null
        },
        {
          "id": "MoCha_3",
          "molecularSequenceNumber": "NtcControl_MoCha_3",
          "dateCreated": 1441827437980,
          "dateReceived": 1442590579859,
          "site": "MoCha",
          "siteIpAddress": "129.43.127.133",
          "status": null,
          "comment": "Testing passing a failed NTC Sample Control.",
          "passed": true,
          "nextGenerationSequence": null
        },
        {
          "id": "MoCha_7",
          "molecularSequenceNumber": "NtcControl_MoCha_7",
          "dateCreated": 1442610697258,
          "dateReceived": 1442610955095,
          "site": "MoCha",
          "siteIpAddress": "129.43.127.133",
          "status": null,
          "comment": null,
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "MoCha_8",
          "molecularSequenceNumber": "NtcControl_MoCha_8",
          "dateCreated": 1445435248553,
          "dateReceived": 1445435498849,
          "site": "MoCha",
          "siteIpAddress": "129.43.127.133",
          "status": null,
          "comment": "Accepted!",
          "passed": true,
          "nextGenerationSequence": null
        },
        {
          "id": "MoCha_9",
          "molecularSequenceNumber": "NtcControl_MoCha_9",
          "dateCreated": 1445605256855,
          "dateReceived": 1445605478181,
          "site": "MoCha",
          "siteIpAddress": "129.43.127.133",
          "status": null,
          "comment": null,
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "MoCha_16",
          "molecularSequenceNumber": "NtcControl_MoCha_16",
          "dateCreated": 1491254784953,
          "dateReceived": null,
          "site": "MoCha",
          "siteIpAddress": "10.133.130.53",
          "status": null,
          "comment": null,
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "MoCha_17",
          "molecularSequenceNumber": "NtcControl_MoCha_17",
          "dateCreated": 1491324755955,
          "dateReceived": null,
          "site": "MoCha",
          "siteIpAddress": "10.133.130.53",
          "status": null,
          "comment": null,
          "passed": false,
          "nextGenerationSequence": null
        }
      ],
      "proficiencyCompetencyControls": [
        {
          "id": "MoCha_1",
          "molecularSequenceNumber": "ProficiencyCompetencyControl_MoCha_1",
          "dateCreated": 1471543012397,
          "dateReceived": 1471544473188,
          "site": "MoCha",
          "siteIpAddress": "129.43.127.133",
          "status": "PASSED",
          "comment": null,
          "nextGenerationSequence": null
        },
        {
          "id": "MoCha_2",
          "molecularSequenceNumber": "ProficiencyCompetencyControl_MoCha_2",
          "dateCreated": 1471543018636,
          "dateReceived": 1471544525000,
          "site": "MoCha",
          "siteIpAddress": "129.43.127.133",
          "status": "REJECTED",
          "comment": "When the filtered moi doesn't look correct, hit the reject button.",
          "nextGenerationSequence": null
        },
        {
          "id": "MoCha_3",
          "molecularSequenceNumber": "ProficiencyCompetencyControl_MoCha_3",
          "dateCreated": 1471543022839,
          "dateReceived": 1471544784649,
          "site": "MoCha",
          "siteIpAddress": "129.43.127.133",
          "status": "PENDING",
          "comment": null,
          "nextGenerationSequence": null
        },
        {
          "id": "MoCha_4",
          "molecularSequenceNumber": "ProficiencyCompetencyControl_MoCha_4",
          "dateCreated": 1471545998742,
          "dateReceived": 1471546077455,
          "site": "MoCha",
          "siteIpAddress": "129.43.127.133",
          "status": "PENDING",
          "comment": null,
          "nextGenerationSequence": null
        },
        {
          "id": "MoCha_5",
          "molecularSequenceNumber": "ProficiencyCompetencyControl_MoCha_5",
          "dateCreated": 1471546003961,
          "dateReceived": 1484168988158,
          "site": "MoCha",
          "siteIpAddress": "129.43.127.133",
          "status": "PASSED",
          "comment": null,
          "nextGenerationSequence": null
        },
        {
          "id": "MoCha_6",
          "molecularSequenceNumber": "ProficiencyCompetencyControl_MoCha_6",
          "dateCreated": 1484168994658,
          "dateReceived": 1484169078924,
          "site": "MoCha",
          "siteIpAddress": "129.43.127.133",
          "status": "PENDING",
          "comment": null,
          "nextGenerationSequence": null
        },
        {
          "id": "MoCha_7",
          "molecularSequenceNumber": "ProficiencyCompetencyControl_MoCha_7",
          "dateCreated": 1491231374452,
          "dateReceived": null,
          "site": "MoCha",
          "siteIpAddress": "129.43.127.133",
          "status": null,
          "comment": null,
          "nextGenerationSequence": null
        },
        {
          "id": "MoCha_8",
          "molecularSequenceNumber": "ProficiencyCompetencyControl_MoCha_8",
          "dateCreated": 1491231385049,
          "dateReceived": null,
          "site": "MoCha",
          "siteIpAddress": "129.43.127.133",
          "status": null,
          "comment": null,
          "nextGenerationSequence": null
        },
        {
          "id": "MoCha_9",
          "molecularSequenceNumber": "ProficiencyCompetencyControl_MoCha_9",
          "dateCreated": 1491254788277,
          "dateReceived": null,
          "site": "MoCha",
          "siteIpAddress": "10.133.130.53",
          "status": null,
          "comment": null,
          "nextGenerationSequence": null
        }
      ]
    },
    {
      "siteName": "MGH",
      "siteIpAddress": "172.20.174.24",
      "sampleControls": [
        {
          "id": "MGH_1",
          "molecularSequenceNumber": "SampleControl_MGH_1",
          "dateCreated": 1446820738762,
          "dateReceived": null,
          "site": "MGH",
          "siteIpAddress": "172.20.174.24",
          "positiveControlVersion": 0,
          "positiveControlDateLoaded": null,
          "status": null,
          "comment": null,
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "MGH_6",
          "molecularSequenceNumber": "SampleControl_MGH_6",
          "dateCreated": 1458062481552,
          "dateReceived": null,
          "site": "MGH",
          "siteIpAddress": "172.20.174.24",
          "positiveControlVersion": 0,
          "positiveControlDateLoaded": null,
          "status": null,
          "comment": null,
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "MGH_2",
          "molecularSequenceNumber": "SampleControl_MGH_2",
          "dateCreated": 1450450851544,
          "dateReceived": 1450451186492,
          "site": "MGH",
          "siteIpAddress": "172.20.174.24",
          "positiveControlVersion": 1,
          "positiveControlDateLoaded": 1438358256124,
          "status": "FAILED",
          "comment": null,
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "MGH_3",
          "molecularSequenceNumber": "SampleControl_MGH_3",
          "dateCreated": 1450450858522,
          "dateReceived": 1450454802749,
          "site": "MGH",
          "siteIpAddress": "172.20.174.24",
          "positiveControlVersion": 1,
          "positiveControlDateLoaded": 1438358256124,
          "status": "REJECTED",
          "comment": "tsatasetsa",
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "MGH_4",
          "molecularSequenceNumber": "SampleControl_MGH_4",
          "dateCreated": 1456161336045,
          "dateReceived": 1458062971467,
          "site": "MGH",
          "siteIpAddress": "172.20.174.24",
          "positiveControlVersion": 1,
          "positiveControlDateLoaded": 1438358256124,
          "status": "REJECTED",
          "comment": "sfalsjfla;sf lsjfa;sfj;a dlasfa;dfjafa",
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "MGH_5",
          "molecularSequenceNumber": "SampleControl_MGH_5",
          "dateCreated": 1458062471730,
          "dateReceived": 1458063552293,
          "site": "MGH",
          "siteIpAddress": "172.20.174.24",
          "positiveControlVersion": 1,
          "positiveControlDateLoaded": 1438358256124,
          "status": "FAILED",
          "comment": null,
          "passed": false,
          "nextGenerationSequence": null
        }
      ],
      "ntcControls": [
        {
          "id": "MGH_5",
          "molecularSequenceNumber": "NtcControl_MGH_5",
          "dateCreated": 1458062492626,
          "dateReceived": 1458064149765,
          "site": "MGH",
          "siteIpAddress": "172.20.174.24",
          "status": null,
          "comment": null,
          "passed": true,
          "nextGenerationSequence": null
        },
        {
          "id": "MGH_1",
          "molecularSequenceNumber": "NtcControl_MGH_1",
          "dateCreated": 1446820762319,
          "dateReceived": 1446821112493,
          "site": "MGH",
          "siteIpAddress": "172.20.174.24",
          "status": null,
          "comment": "This is actually good.",
          "passed": true,
          "nextGenerationSequence": null
        },
        {
          "id": "MGH_2",
          "molecularSequenceNumber": "NtcControl_MGH_2",
          "dateCreated": 1450450866096,
          "dateReceived": 1450456634387,
          "site": "MGH",
          "siteIpAddress": "172.20.174.24",
          "status": null,
          "comment": "dgsdgs",
          "passed": true,
          "nextGenerationSequence": null
        },
        {
          "id": "MGH_3",
          "molecularSequenceNumber": "NtcControl_MGH_3",
          "dateCreated": 1450450874140,
          "dateReceived": 1450456959205,
          "site": "MGH",
          "siteIpAddress": "172.20.174.24",
          "status": null,
          "comment": null,
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "MGH_4",
          "molecularSequenceNumber": "NtcControl_MGH_4",
          "dateCreated": 1456161346821,
          "dateReceived": 1456161456537,
          "site": "MGH",
          "siteIpAddress": "172.20.174.24",
          "status": null,
          "comment": "sfafaf",
          "passed": true,
          "nextGenerationSequence": null
        },
        {
          "id": "MGH_6",
          "molecularSequenceNumber": "NtcControl_MGH_6",
          "dateCreated": 1458062502161,
          "dateReceived": 1458064906548,
          "site": "MGH",
          "siteIpAddress": "172.20.174.24",
          "status": null,
          "comment": "sasfasfasf ",
          "passed": true,
          "nextGenerationSequence": null
        }
      ],
      "proficiencyCompetencyControls": [
        {
          "id": "MGH_1",
          "molecularSequenceNumber": "ProficiencyCompetencyControl_MGH_1",
          "dateCreated": 1471543061582,
          "dateReceived": 1471545130321,
          "site": "MGH",
          "siteIpAddress": "172.20.174.24",
          "status": "PENDING",
          "comment": null,
          "nextGenerationSequence": null
        },
        {
          "id": "MGH_2",
          "molecularSequenceNumber": "ProficiencyCompetencyControl_MGH_2",
          "dateCreated": 1471543065790,
          "dateReceived": 1471545143796,
          "site": "MGH",
          "siteIpAddress": "172.20.174.24",
          "status": "PENDING",
          "comment": null,
          "nextGenerationSequence": null
        },
        {
          "id": "MGH_3",
          "molecularSequenceNumber": "ProficiencyCompetencyControl_MGH_3",
          "dateCreated": 1471543069898,
          "dateReceived": 1471545219989,
          "site": "MGH",
          "siteIpAddress": "172.20.174.24",
          "status": "PENDING",
          "comment": null,
          "nextGenerationSequence": null
        },
        {
          "id": "MGH_4",
          "molecularSequenceNumber": "ProficiencyCompetencyControl_MGH_4",
          "dateCreated": 1491254934869,
          "dateReceived": null,
          "site": "MGH",
          "siteIpAddress": "172.20.174.24",
          "status": null,
          "comment": null,
          "nextGenerationSequence": null
        }
      ]
    },
    {
      "siteName": "Yale",
      "siteIpAddress": "10.84.20.162",
      "sampleControls": [
        {
          "id": "Yale_1",
          "molecularSequenceNumber": "SampleControl_Yale_1",
          "dateCreated": 1446820770383,
          "dateReceived": 1454610348866,
          "site": "Yale",
          "siteIpAddress": "10.84.20.162",
          "positiveControlVersion": 1,
          "positiveControlDateLoaded": 1438358256124,
          "status": "FAILED",
          "comment": null,
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "Yale_2",
          "molecularSequenceNumber": "SampleControl_Yale_2",
          "dateCreated": 1454609818768,
          "dateReceived": 1454610867459,
          "site": "Yale",
          "siteIpAddress": "10.84.20.162",
          "positiveControlVersion": 1,
          "positiveControlDateLoaded": 1438358256124,
          "status": "REJECTED",
          "comment": "asfasfasfa",
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "Yale_3",
          "molecularSequenceNumber": "SampleControl_Yale_3",
          "dateCreated": 1456156465733,
          "dateReceived": 1456157104784,
          "site": "Yale",
          "siteIpAddress": "10.84.20.162",
          "positiveControlVersion": 1,
          "positiveControlDateLoaded": 1438358256124,
          "status": "REJECTED",
          "comment": "sfaetateatatatareaea",
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "Yale_4",
          "molecularSequenceNumber": "SampleControl_Yale_4",
          "dateCreated": 1456158997284,
          "dateReceived": 1456160505028,
          "site": "Yale",
          "siteIpAddress": "10.84.20.162",
          "positiveControlVersion": 1,
          "positiveControlDateLoaded": 1438358256124,
          "status": "REJECTED",
          "comment": "Manual rejection",
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "Yale_5",
          "molecularSequenceNumber": "SampleControl_Yale_5",
          "dateCreated": 1456159006206,
          "dateReceived": 1456160838470,
          "site": "Yale",
          "siteIpAddress": "10.84.20.162",
          "positiveControlVersion": 1,
          "positiveControlDateLoaded": 1438358256124,
          "status": "FAILED",
          "comment": null,
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "Yale_6",
          "molecularSequenceNumber": "SampleControl_Yale_6",
          "dateCreated": 1491254923348,
          "dateReceived": null,
          "site": "Yale",
          "siteIpAddress": "10.84.20.162",
          "positiveControlVersion": 0,
          "positiveControlDateLoaded": null,
          "status": null,
          "comment": null,
          "passed": false,
          "nextGenerationSequence": null
        }
      ],
      "ntcControls": [
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
      ],
      "proficiencyCompetencyControls": [
        {
          "id": "Yale_1",
          "molecularSequenceNumber": "ProficiencyCompetencyControl_Yale_1",
          "dateCreated": 1471543039017,
          "dateReceived": 1471544972327,
          "site": "Yale",
          "siteIpAddress": "10.84.20.162",
          "status": "PASSED",
          "comment": null,
          "nextGenerationSequence": null
        },
        {
          "id": "Yale_2",
          "molecularSequenceNumber": "ProficiencyCompetencyControl_Yale_2",
          "dateCreated": 1471543042997,
          "dateReceived": 1471545093614,
          "site": "Yale",
          "siteIpAddress": "10.84.20.162",
          "status": "REJECTED",
          "comment": "This is a test comment.",
          "nextGenerationSequence": null
        },
        {
          "id": "Yale_3",
          "molecularSequenceNumber": "ProficiencyCompetencyControl_Yale_3",
          "dateCreated": 1471543046990,
          "dateReceived": 1471545065707,
          "site": "Yale",
          "siteIpAddress": "10.84.20.162",
          "status": "PENDING",
          "comment": null,
          "nextGenerationSequence": null
        },
        {
          "id": "Yale_4",
          "molecularSequenceNumber": "ProficiencyCompetencyControl_Yale_4",
          "dateCreated": 1491254929626,
          "dateReceived": null,
          "site": "Yale",
          "siteIpAddress": "10.84.20.162",
          "status": null,
          "comment": null,
          "nextGenerationSequence": null
        }
      ]
    },
    {
      "siteName": "MDACC",
      "siteIpAddress": "10.110.130.21",
      "sampleControls": [
        {
          "id": "MDACC_1",
          "molecularSequenceNumber": "SampleControl_MDACC_1",
          "dateCreated": 1446820790381,
          "dateReceived": 1446820902400,
          "site": "MDACC",
          "siteIpAddress": "10.110.130.21",
          "positiveControlVersion": 1,
          "positiveControlDateLoaded": 1438358256124,
          "status": "REJECTED",
          "comment": "Something's not right",
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "MDACC_2",
          "molecularSequenceNumber": "SampleControl_MDACC_2",
          "dateCreated": 1450102192630,
          "dateReceived": 1450102439001,
          "site": "MDACC",
          "siteIpAddress": "10.110.130.21",
          "positiveControlVersion": 1,
          "positiveControlDateLoaded": 1438358256124,
          "status": "FAILED",
          "comment": null,
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "MDACC_3",
          "molecularSequenceNumber": "SampleControl_MDACC_3",
          "dateCreated": 1450102215376,
          "dateReceived": 1450102597712,
          "site": "MDACC",
          "siteIpAddress": "10.110.130.21",
          "positiveControlVersion": 1,
          "positiveControlDateLoaded": 1438358256124,
          "status": "REJECTED",
          "comment": "This is a test",
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "MDACC_4",
          "molecularSequenceNumber": "SampleControl_MDACC_4",
          "dateCreated": 1458243895005,
          "dateReceived": 1458244153904,
          "site": "MDACC",
          "siteIpAddress": "10.110.130.21",
          "positiveControlVersion": 1,
          "positiveControlDateLoaded": 1438358256124,
          "status": "REJECTED",
          "comment": "Testing",
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "MDACC_5",
          "molecularSequenceNumber": "SampleControl_MDACC_5",
          "dateCreated": 1458243902954,
          "dateReceived": 1458244204624,
          "site": "MDACC",
          "siteIpAddress": "10.110.130.21",
          "positiveControlVersion": 1,
          "positiveControlDateLoaded": 1438358256124,
          "status": "FAILED",
          "comment": null,
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "MDACC_6",
          "molecularSequenceNumber": "SampleControl_MDACC_6",
          "dateCreated": 1463513958871,
          "dateReceived": 1463515053999,
          "site": "MDACC",
          "siteIpAddress": "10.110.130.21",
          "positiveControlVersion": 1,
          "positiveControlDateLoaded": 1438358256124,
          "status": "FAILED",
          "comment": null,
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "MDACC_11",
          "molecularSequenceNumber": "SampleControl_MDACC_11",
          "dateCreated": 1464804885832,
          "dateReceived": null,
          "site": "MDACC",
          "siteIpAddress": "10.110.130.21",
          "positiveControlVersion": 0,
          "positiveControlDateLoaded": null,
          "status": null,
          "comment": null,
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "MDACC_12",
          "molecularSequenceNumber": "SampleControl_MDACC_12",
          "dateCreated": 1464804892244,
          "dateReceived": null,
          "site": "MDACC",
          "siteIpAddress": "10.110.130.21",
          "positiveControlVersion": 0,
          "positiveControlDateLoaded": null,
          "status": null,
          "comment": null,
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "MDACC_13",
          "molecularSequenceNumber": "SampleControl_MDACC_13",
          "dateCreated": 1464804898193,
          "dateReceived": null,
          "site": "MDACC",
          "siteIpAddress": "10.110.130.21",
          "positiveControlVersion": 0,
          "positiveControlDateLoaded": null,
          "status": null,
          "comment": null,
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "MDACC_14",
          "molecularSequenceNumber": "SampleControl_MDACC_14",
          "dateCreated": 1464804910808,
          "dateReceived": 1491335522538,
          "site": "MDACC",
          "siteIpAddress": "10.110.130.21",
          "positiveControlVersion": 4,
          "positiveControlDateLoaded": 1472833474832,
          "status": "FAILED",
          "comment": null,
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "MDACC_7",
          "molecularSequenceNumber": "SampleControl_MDACC_7",
          "dateCreated": 1464804860415,
          "dateReceived": 1464805122595,
          "site": "MDACC",
          "siteIpAddress": "10.110.130.21",
          "positiveControlVersion": 2,
          "positiveControlDateLoaded": 1464706967317,
          "status": "FAILED",
          "comment": null,
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "MDACC_8",
          "molecularSequenceNumber": "SampleControl_MDACC_8",
          "dateCreated": 1464804866443,
          "dateReceived": 1464805230480,
          "site": "MDACC",
          "siteIpAddress": "10.110.130.21",
          "positiveControlVersion": 2,
          "positiveControlDateLoaded": 1464706967317,
          "status": "FAILED",
          "comment": null,
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "MDACC_10",
          "molecularSequenceNumber": "SampleControl_MDACC_10",
          "dateCreated": 1464804879094,
          "dateReceived": 1464805762557,
          "site": "MDACC",
          "siteIpAddress": "10.110.130.21",
          "positiveControlVersion": 2,
          "positiveControlDateLoaded": 1464706967317,
          "status": "FAILED",
          "comment": null,
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "MDACC_9",
          "molecularSequenceNumber": "SampleControl_MDACC_9",
          "dateCreated": 1464804873046,
          "dateReceived": 1464805888370,
          "site": "MDACC",
          "siteIpAddress": "10.110.130.21",
          "positiveControlVersion": 2,
          "positiveControlDateLoaded": 1464706967317,
          "status": "FAILED",
          "comment": null,
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "MDACC_15",
          "molecularSequenceNumber": "SampleControl_MDACC_15",
          "dateCreated": 1491256052996,
          "dateReceived": null,
          "site": "MDACC",
          "siteIpAddress": "10.110.130.21",
          "positiveControlVersion": 0,
          "positiveControlDateLoaded": null,
          "status": null,
          "comment": null,
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "MDACC_16",
          "molecularSequenceNumber": "SampleControl_MDACC_16",
          "dateCreated": 1491256075193,
          "dateReceived": null,
          "site": "MDACC",
          "siteIpAddress": "10.110.130.21",
          "positiveControlVersion": 0,
          "positiveControlDateLoaded": null,
          "status": null,
          "comment": null,
          "passed": false,
          "nextGenerationSequence": null
        }
      ],
      "ntcControls": [
        {
          "id": "MDACC_3",
          "molecularSequenceNumber": "NtcControl_MDACC_3",
          "dateCreated": 1450102235509,
          "dateReceived": 1458244204984,
          "site": "MDACC",
          "siteIpAddress": "10.110.130.21",
          "status": null,
          "comment": null,
          "passed": true,
          "nextGenerationSequence": null
        },
        {
          "id": "MDACC_1",
          "molecularSequenceNumber": "NtcControl_MDACC_1",
          "dateCreated": 1446820801842,
          "dateReceived": 1450102801132,
          "site": "MDACC",
          "siteIpAddress": "10.110.130.21",
          "status": null,
          "comment": "Test",
          "passed": true,
          "nextGenerationSequence": null
        },
        {
          "id": "MDACC_2",
          "molecularSequenceNumber": "NtcControl_MDACC_2",
          "dateCreated": 1450102226404,
          "dateReceived": 1450102968577,
          "site": "MDACC",
          "siteIpAddress": "10.110.130.21",
          "status": null,
          "comment": null,
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "MDACC_4",
          "molecularSequenceNumber": "NtcControl_MDACC_4",
          "dateCreated": 1458243910505,
          "dateReceived": 1458244223579,
          "site": "MDACC",
          "siteIpAddress": "10.110.130.21",
          "status": null,
          "comment": null,
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "MDACC_5",
          "molecularSequenceNumber": "NtcControl_MDACC_5",
          "dateCreated": 1491256060808,
          "dateReceived": null,
          "site": "MDACC",
          "siteIpAddress": "10.110.130.21",
          "status": null,
          "comment": null,
          "passed": false,
          "nextGenerationSequence": null
        },
        {
          "id": "MDACC_6",
          "molecularSequenceNumber": "NtcControl_MDACC_6",
          "dateCreated": 1491256081929,
          "dateReceived": null,
          "site": "MDACC",
          "siteIpAddress": "10.110.130.21",
          "status": null,
          "comment": null,
          "passed": false,
          "nextGenerationSequence": null
        }
      ],
      "proficiencyCompetencyControls": [
        {
          "id": "MDACC_1",
          "molecularSequenceNumber": "ProficiencyCompetencyControl_MDACC_1",
          "dateCreated": 1471543083447,
          "dateReceived": 1471545246603,
          "site": "MDACC",
          "siteIpAddress": "10.110.130.21",
          "status": "PENDING",
          "comment": null,
          "nextGenerationSequence": null
        },
        {
          "id": "MDACC_2",
          "molecularSequenceNumber": "ProficiencyCompetencyControl_MDACC_2",
          "dateCreated": 1471543087043,
          "dateReceived": 1471545260967,
          "site": "MDACC",
          "siteIpAddress": "10.110.130.21",
          "status": "PENDING",
          "comment": null,
          "nextGenerationSequence": null
        },
        {
          "id": "MDACC_3",
          "molecularSequenceNumber": "ProficiencyCompetencyControl_MDACC_3",
          "dateCreated": 1471543091101,
          "dateReceived": 1471545341592,
          "site": "MDACC",
          "siteIpAddress": "10.110.130.21",
          "status": "PENDING",
          "comment": null,
          "nextGenerationSequence": null
        },
        {
          "id": "MDACC_4",
          "molecularSequenceNumber": "ProficiencyCompetencyControl_MDACC_4",
          "dateCreated": 1491256064474,
          "dateReceived": null,
          "site": "MDACC",
          "siteIpAddress": "10.110.130.21",
          "status": null,
          "comment": null,
          "nextGenerationSequence": null
        },
        {
          "id": "MDACC_5",
          "molecularSequenceNumber": "ProficiencyCompetencyControl_MDACC_5",
          "dateCreated": 1491256118711,
          "dateReceived": null,
          "site": "MDACC",
          "siteIpAddress": "10.110.130.21",
          "status": null,
          "comment": null,
          "nextGenerationSequence": null
        }
      ]
    },
    {
      "siteName": "Dartmouth",
      "siteIpAddress": "129.43.39.192",
      "sampleControls": [
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
      ],
      "ntcControls": [
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
      ],
      "proficiencyCompetencyControls": [
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
      ]
    }
  ];

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
