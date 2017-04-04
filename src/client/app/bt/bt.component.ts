import {
  Component,
  OnInit
} from '@angular/core';

import { routerTransition } from './../shared/router.animations';
import { GMTFilter } from './../shared/pipes/gmt';


/**
 * This class represents the lazy loaded BTComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-bt',
  templateUrl: 'bt.component.html',
  styleUrls: ['bt.component.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})
export class BtComponent implements OnInit {

  searchtermBT: string = '';
  recordsPerPageBT: number;
  tableBTDefaultSort: string;

  constructor() {

  }

  ngOnInit() {
    this.recordsPerPageBT = 100;
    this.tableBTDefaultSort = 'biopsySequenceNumber';

    let gmt = new GMTFilter();

    for (let i = 0; i < this.tableBTData.length; i++) {
      this.tableBTData[i].specimenReceivedDate = gmt.transform(this.tableBTData[i].specimenReceivedDate);
    }

    for (let i = 0; i < this.tableBTData.length; i++) {
      this.tableBTData[i].specimenFailureDate = gmt.transform(this.tableBTData[i].specimenFailureDate);
    }

    for (let i = 0; i < this.tableBTData.length; i++) {
      this.tableBTData[i].pathologyReviewdate = gmt.transform(this.tableBTData[i].pathologyReviewdate);
    }

    for (let i = 0; i < this.tableBTData.length; i++) {
      this.tableBTData[i].dnaShippedDate = gmt.transform(this.tableBTData[i].dnaShippedDate);
    }

  }

  tableBTData: any = [
    {
      "biopsySequenceNumber": "T-16-000008",
      "specimenReceivedDate": 1462468345727,
      "specimenFailureDate": null,
      "pathologyReviewdate": null,
      "patientSequenceNumber": "10402",
      "molecularSequenceNumber": "MSN2105",
      "lab": "MoCha",
      "dnaShippedDate": 1462550578015,
      "trackingNumber": "794692795960"
    },
    {
      "biopsySequenceNumber": "T-16-000031",
      "specimenReceivedDate": 1472571582893,
      "specimenFailureDate": 1479758775743,
      "pathologyReviewdate": null,
      "patientSequenceNumber": "10621",
      "molecularSequenceNumber": null,
      "lab": null,
      "dnaShippedDate": null,
      "trackingNumber": null
    },
    {
      "biopsySequenceNumber": "T-16-000044",
      "specimenReceivedDate": 1479758761054,
      "specimenFailureDate": 1479760274770,
      "pathologyReviewdate": null,
      "patientSequenceNumber": "10621",
      "molecularSequenceNumber": null,
      "lab": null,
      "dnaShippedDate": null,
      "trackingNumber": null
    },
    {
      "biopsySequenceNumber": "T-16-000045",
      "specimenReceivedDate": 1479760227067,
      "specimenFailureDate": null,
      "pathologyReviewdate": null,
      "patientSequenceNumber": "10621",
      "molecularSequenceNumber": null,
      "lab": null,
      "dnaShippedDate": null,
      "trackingNumber": null
    },
    {
      "biopsySequenceNumber": "T-16-000046",
      "specimenReceivedDate": 1479828440026,
      "specimenFailureDate": null,
      "pathologyReviewdate": null,
      "patientSequenceNumber": "10625",
      "molecularSequenceNumber": null,
      "lab": null,
      "dnaShippedDate": null,
      "trackingNumber": null
    },
    {
      "biopsySequenceNumber": "T-16-000011",
      "specimenReceivedDate": 1463784009913,
      "specimenFailureDate": null,
      "pathologyReviewdate": null,
      "patientSequenceNumber": "10405",
      "molecularSequenceNumber": "MSN2303",
      "lab": "MDACC",
      "dnaShippedDate": 1487788581573,
      "trackingNumber": "Local"
    },
    {
      "biopsySequenceNumber": "T-16-000011",
      "specimenReceivedDate": 1463784009913,
      "specimenFailureDate": null,
      "pathologyReviewdate": null,
      "patientSequenceNumber": "10405",
      "molecularSequenceNumber": "MSN2147",
      "lab": "Yale",
      "dnaShippedDate": 1464404342001,
      "trackingNumber": "783229236496"
    },
    {
      "biopsySequenceNumber": "T-16-000009",
      "specimenReceivedDate": 1462471544847,
      "specimenFailureDate": 1462552677667,
      "pathologyReviewdate": null,
      "patientSequenceNumber": "10403",
      "molecularSequenceNumber": null,
      "lab": null,
      "dnaShippedDate": null,
      "trackingNumber": null
    },
    {
      "biopsySequenceNumber": "T-16-000017",
      "specimenReceivedDate": 1464039237037,
      "specimenFailureDate": null,
      "pathologyReviewdate": null,
      "patientSequenceNumber": "10403",
      "molecularSequenceNumber": "MSN2188",
      "lab": "MoCha",
      "dnaShippedDate": 1464403380717,
      "trackingNumber": "794601887385"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1489493589071,
      "patientSequenceNumber": "10373",
      "molecularSequenceNumber": "10373_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1489498399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1489493589071,
      "patientSequenceNumber": "10645",
      "molecularSequenceNumber": "10645_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1489498399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "T-16-000006",
      "specimenReceivedDate": 1461881402041,
      "specimenFailureDate": null,
      "pathologyReviewdate": null,
      "patientSequenceNumber": "10400",
      "molecularSequenceNumber": "MSN2089",
      "lab": "MGH",
      "dnaShippedDate": 1461886922036,
      "trackingNumber": "794689815384"
    },
    {
      "biopsySequenceNumber": "T-16-000010",
      "specimenReceivedDate": 1462907743037,
      "specimenFailureDate": null,
      "pathologyReviewdate": null,
      "patientSequenceNumber": "10404",
      "molecularSequenceNumber": null,
      "lab": null,
      "dnaShippedDate": null,
      "trackingNumber": null
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1489493589071,
      "patientSequenceNumber": "10636",
      "molecularSequenceNumber": "10636_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1489498399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "T-16-000007",
      "specimenReceivedDate": 1462310479002,
      "specimenFailureDate": null,
      "pathologyReviewdate": null,
      "patientSequenceNumber": "10401",
      "molecularSequenceNumber": "MSN2097D",
      "lab": "MGH",
      "dnaShippedDate": 1462490909913,
      "trackingNumber": "794692143153"
    },
    {
      "biopsySequenceNumber": "N-15-00007",
      "specimenReceivedDate": 1449922209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1449922389071,
      "patientSequenceNumber": "10377",
      "molecularSequenceNumber": "10377_127",
      "lab": "Boston",
      "dnaShippedDate": 1449927199419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1449922209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1449922389071,
      "patientSequenceNumber": "10376",
      "molecularSequenceNumber": "10376_123",
      "lab": "Boston",
      "dnaShippedDate": 1449927199419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "BSN-2008",
      "specimenReceivedDate": 1449922209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1449922389071,
      "patientSequenceNumber": "20008",
      "molecularSequenceNumber": "20008_MSN",
      "lab": "Boston",
      "dnaShippedDate": 1449927199419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "BSN-2001",
      "specimenReceivedDate": 1449922209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1449922389071,
      "patientSequenceNumber": "20001",
      "molecularSequenceNumber": "20001_MSN",
      "lab": "Boston",
      "dnaShippedDate": 1449927199419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "BSN-2002",
      "specimenReceivedDate": 1449922209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1449922389071,
      "patientSequenceNumber": "20002",
      "molecularSequenceNumber": "20002_MSN",
      "lab": "Boston",
      "dnaShippedDate": 1449927199419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "BSN-2003",
      "specimenReceivedDate": 1449922209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1449922389071,
      "patientSequenceNumber": "20003",
      "molecularSequenceNumber": "20003_MSN",
      "lab": "Boston",
      "dnaShippedDate": 1449927199419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "BSN-2004",
      "specimenReceivedDate": 1449922209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1449922389071,
      "patientSequenceNumber": "20004",
      "molecularSequenceNumber": "20004_MSN",
      "lab": "Boston",
      "dnaShippedDate": 1449927199419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "BSN-2005",
      "specimenReceivedDate": 1449922209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1449922389071,
      "patientSequenceNumber": "20005",
      "molecularSequenceNumber": "20005_MSN",
      "lab": "Boston",
      "dnaShippedDate": 1449927199419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "BSN-2006",
      "specimenReceivedDate": 1449922209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1449922389071,
      "patientSequenceNumber": "20006",
      "molecularSequenceNumber": "20006_MSN",
      "lab": "Boston",
      "dnaShippedDate": 1449927199419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "BSN-2007",
      "specimenReceivedDate": 1449922209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1449922389071,
      "patientSequenceNumber": "20007",
      "molecularSequenceNumber": "20007_MSN",
      "lab": "Boston",
      "dnaShippedDate": 1449927199419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "BSN-2009",
      "specimenReceivedDate": 1449922209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1449922389071,
      "patientSequenceNumber": "20009",
      "molecularSequenceNumber": "20009_MSN",
      "lab": "Boston",
      "dnaShippedDate": 1449927199419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "BSN-2010",
      "specimenReceivedDate": 1449922209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1449922389071,
      "patientSequenceNumber": "20010",
      "molecularSequenceNumber": "20010_MSN",
      "lab": "Boston",
      "dnaShippedDate": 1449927199419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1489493589071,
      "patientSequenceNumber": "10640",
      "molecularSequenceNumber": "10640_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1489498399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1489493589071,
      "patientSequenceNumber": "10641",
      "molecularSequenceNumber": "10641_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1489498399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1489493589071,
      "patientSequenceNumber": "10642",
      "molecularSequenceNumber": "10642_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1489498399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1489493589071,
      "patientSequenceNumber": "10643",
      "molecularSequenceNumber": "10643_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1489498399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1489493589071,
      "patientSequenceNumber": "10644",
      "molecularSequenceNumber": "10644_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1489498399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1489493589071,
      "patientSequenceNumber": "10649",
      "molecularSequenceNumber": "10649_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1489498399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1489493589071,
      "patientSequenceNumber": "10647",
      "molecularSequenceNumber": "10647_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1489498399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1489493589071,
      "patientSequenceNumber": "10648",
      "molecularSequenceNumber": "10648_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1489498399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1489493589071,
      "patientSequenceNumber": "10374",
      "molecularSequenceNumber": "10374_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1489498399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1489493589071,
      "patientSequenceNumber": "10639",
      "molecularSequenceNumber": "10639_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1489498399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1489493589071,
      "patientSequenceNumber": "10646",
      "molecularSequenceNumber": "10646_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1489498399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1489493589071,
      "patientSequenceNumber": "10637",
      "molecularSequenceNumber": "10637_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1489498399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1489493589071,
      "patientSequenceNumber": "10638",
      "molecularSequenceNumber": "10638_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1489498399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1489493589071,
      "patientSequenceNumber": "10657",
      "molecularSequenceNumber": "10657_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1489498399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1489493589071,
      "patientSequenceNumber": "10656",
      "molecularSequenceNumber": "10656_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1489498399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1489493589071,
      "patientSequenceNumber": "10372",
      "molecularSequenceNumber": "10372_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1489498399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1489493589071,
      "patientSequenceNumber": "10678",
      "molecularSequenceNumber": "10678_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1489498399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1489493589071,
      "patientSequenceNumber": "10679",
      "molecularSequenceNumber": "10679_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1489498399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1489493589071,
      "patientSequenceNumber": "10680",
      "molecularSequenceNumber": "10680_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1489498399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1489493589071,
      "patientSequenceNumber": "10681",
      "molecularSequenceNumber": "10681_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1489498399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1489493589071,
      "patientSequenceNumber": "10682",
      "molecularSequenceNumber": "10682_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1489498399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1489493589071,
      "patientSequenceNumber": "10683",
      "molecularSequenceNumber": "10683_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1489498399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1489493589071,
      "patientSequenceNumber": "10684",
      "molecularSequenceNumber": "10684_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1489498399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1489493589071,
      "patientSequenceNumber": "10685",
      "molecularSequenceNumber": "10685_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1489498399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1489493589071,
      "patientSequenceNumber": "10686",
      "molecularSequenceNumber": "10686_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1489498399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1489493589071,
      "patientSequenceNumber": "10687",
      "molecularSequenceNumber": "10687_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1489498399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1489493589071,
      "patientSequenceNumber": "10708",
      "molecularSequenceNumber": "10708_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1489498399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1489493589071,
      "patientSequenceNumber": "10709",
      "molecularSequenceNumber": "10709_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1489498399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1489493589071,
      "patientSequenceNumber": "10711",
      "molecularSequenceNumber": "10711_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1489498399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1489493589071,
      "patientSequenceNumber": "10712",
      "molecularSequenceNumber": "10712_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1489498399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1489493589071,
      "patientSequenceNumber": "10713",
      "molecularSequenceNumber": "10713_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1489498399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1489493589071,
      "patientSequenceNumber": "10714",
      "molecularSequenceNumber": "10714_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1489498399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1489493589071,
      "patientSequenceNumber": "10715",
      "molecularSequenceNumber": "10715_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1489498399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1489493589071,
      "patientSequenceNumber": "10716",
      "molecularSequenceNumber": "10716_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1489498399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "BSN-10736",
      "specimenReceivedDate": 1478063133216,
      "specimenFailureDate": null,
      "pathologyReviewdate": null,
      "patientSequenceNumber": "10736",
      "molecularSequenceNumber": "MSN-10736",
      "lab": "Boston",
      "dnaShippedDate": 1478066733216,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "BSN-10737",
      "specimenReceivedDate": 1478149533216,
      "specimenFailureDate": null,
      "pathologyReviewdate": null,
      "patientSequenceNumber": "10737",
      "molecularSequenceNumber": "MSN-10737",
      "lab": "Boston",
      "dnaShippedDate": 1478153133216,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "BSN-10738",
      "specimenReceivedDate": 1478235933216,
      "specimenFailureDate": null,
      "pathologyReviewdate": null,
      "patientSequenceNumber": "10738",
      "molecularSequenceNumber": "MSN-10738",
      "lab": "Boston",
      "dnaShippedDate": 1478239533216,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "BSN-10739",
      "specimenReceivedDate": 1478235933216,
      "specimenFailureDate": null,
      "pathologyReviewdate": null,
      "patientSequenceNumber": "10739",
      "molecularSequenceNumber": "MSN-10739",
      "lab": "Boston",
      "dnaShippedDate": 1478239533216,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "BSN-10740",
      "specimenReceivedDate": 1478235933216,
      "specimenFailureDate": null,
      "pathologyReviewdate": null,
      "patientSequenceNumber": "10740",
      "molecularSequenceNumber": "MSN-10740",
      "lab": "Boston",
      "dnaShippedDate": 1478239533216,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "BSN-10741",
      "specimenReceivedDate": 1478235933216,
      "specimenFailureDate": null,
      "pathologyReviewdate": null,
      "patientSequenceNumber": "10741",
      "molecularSequenceNumber": "MSN-10741",
      "lab": "Boston",
      "dnaShippedDate": 1478239533216,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "BSN-10742",
      "specimenReceivedDate": 1478235933216,
      "specimenFailureDate": null,
      "pathologyReviewdate": null,
      "patientSequenceNumber": "10742",
      "molecularSequenceNumber": "MSN-10742",
      "lab": "Boston",
      "dnaShippedDate": 1478239533216,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "BSN-10747",
      "specimenReceivedDate": 1479963933216,
      "specimenFailureDate": null,
      "pathologyReviewdate": null,
      "patientSequenceNumber": "10747",
      "molecularSequenceNumber": "MSN-10747",
      "lab": "Boston",
      "dnaShippedDate": 1479967533216,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "BSN-10748",
      "specimenReceivedDate": 1479963933216,
      "specimenFailureDate": null,
      "pathologyReviewdate": null,
      "patientSequenceNumber": "10748",
      "molecularSequenceNumber": "MSN-10748",
      "lab": "Boston",
      "dnaShippedDate": 1479967533216,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1489493589071,
      "patientSequenceNumber": "10749",
      "molecularSequenceNumber": "10749_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1489498399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1489493589071,
      "patientSequenceNumber": "10750",
      "molecularSequenceNumber": "10750_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1489498399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1489493589071,
      "patientSequenceNumber": "10751",
      "molecularSequenceNumber": "10751_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1489498399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1489493589071,
      "patientSequenceNumber": "10757",
      "molecularSequenceNumber": "10757_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1489498399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1489493589071,
      "patientSequenceNumber": "10758",
      "molecularSequenceNumber": "10758_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1489498399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1489493589071,
      "patientSequenceNumber": "10759",
      "molecularSequenceNumber": "10759_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1489498399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1489493589071,
      "patientSequenceNumber": "10760",
      "molecularSequenceNumber": "10760_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1489498399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1489493589071,
      "patientSequenceNumber": "10761",
      "molecularSequenceNumber": "10761_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1489498399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1489493589071,
      "patientSequenceNumber": "10762",
      "molecularSequenceNumber": "10762_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1489498399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1489493589071,
      "patientSequenceNumber": "10763",
      "molecularSequenceNumber": "10763_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1489498399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1489493589071,
      "patientSequenceNumber": "10764",
      "molecularSequenceNumber": "10764_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1489498399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1489493589071,
      "patientSequenceNumber": "10765",
      "molecularSequenceNumber": "10765_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1489498399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1489493589071,
      "patientSequenceNumber": "10766",
      "molecularSequenceNumber": "10766_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1489498399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1489493589071,
      "patientSequenceNumber": "10767",
      "molecularSequenceNumber": "10767_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1489498399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1489493589071,
      "patientSequenceNumber": "10768",
      "molecularSequenceNumber": "10768_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1489498399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1489493589071,
      "patientSequenceNumber": "10769",
      "molecularSequenceNumber": "10769_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1489498399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1518610209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1521029589071,
      "patientSequenceNumber": "10812",
      "molecularSequenceNumber": "10812_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1521034399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1518610209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1521029589071,
      "patientSequenceNumber": "10814",
      "molecularSequenceNumber": "10814_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1521034399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1518610209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1521029589071,
      "patientSequenceNumber": "10815",
      "molecularSequenceNumber": "10815_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1521034399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1518610209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1521029589071,
      "patientSequenceNumber": "10816",
      "molecularSequenceNumber": "10816_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1521034399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1521029589071,
      "patientSequenceNumber": "10817",
      "molecularSequenceNumber": "10817_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1521034399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1521029589071,
      "patientSequenceNumber": "10818",
      "molecularSequenceNumber": "10818_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1521034399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1521029589071,
      "patientSequenceNumber": "10819",
      "molecularSequenceNumber": "10819_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1521034399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1521029589071,
      "patientSequenceNumber": "10820",
      "molecularSequenceNumber": "10820_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1521034399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1521029589071,
      "patientSequenceNumber": "10821",
      "molecularSequenceNumber": "10821_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1521034399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1521029589071,
      "patientSequenceNumber": "10824",
      "molecularSequenceNumber": "10824_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1521034399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1521029589071,
      "patientSequenceNumber": "10825",
      "molecularSequenceNumber": "10825_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1521034399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1521029589071,
      "patientSequenceNumber": "10826",
      "molecularSequenceNumber": "10826_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1521034399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1521029589071,
      "patientSequenceNumber": "10827",
      "molecularSequenceNumber": "10827_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1521034399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1521029589071,
      "patientSequenceNumber": "10828",
      "molecularSequenceNumber": "10828_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1521034399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1521029589071,
      "patientSequenceNumber": "10829",
      "molecularSequenceNumber": "10829_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1521034399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1521029589071,
      "patientSequenceNumber": "10830",
      "molecularSequenceNumber": "10830_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1521034399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1521029589071,
      "patientSequenceNumber": "10831",
      "molecularSequenceNumber": "10831_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1521034399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1521029589071,
      "patientSequenceNumber": "10832",
      "molecularSequenceNumber": "10832_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1521034399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1521029589071,
      "patientSequenceNumber": "10833",
      "molecularSequenceNumber": "10833_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1521034399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1521029589071,
      "patientSequenceNumber": "10834",
      "molecularSequenceNumber": "10834_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1521034399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1521029589071,
      "patientSequenceNumber": "10835",
      "molecularSequenceNumber": "10835_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1521034399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1521029589071,
      "patientSequenceNumber": "10836",
      "molecularSequenceNumber": "10836_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1521034399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "N-15-00005",
      "specimenReceivedDate": 1487074209071,
      "specimenFailureDate": null,
      "pathologyReviewdate": 1521029589071,
      "patientSequenceNumber": "10837",
      "molecularSequenceNumber": "10837_1000_N-15-00005",
      "lab": "Boston",
      "dnaShippedDate": 1521034399419,
      "trackingNumber": "987654321"
    },
    {
      "biopsySequenceNumber": "BSN-3366",
      "specimenReceivedDate": 1489035933216,
      "specimenFailureDate": null,
      "pathologyReviewdate": null,
      "patientSequenceNumber": "3366",
      "molecularSequenceNumber": "MSN-3366",
      "lab": "MoCha",
      "dnaShippedDate": 1489039533216,
      "trackingNumber": "987654321"
    }
  ]

}
