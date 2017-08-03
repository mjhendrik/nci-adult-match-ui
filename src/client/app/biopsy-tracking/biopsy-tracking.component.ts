import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { routerTransition } from './../shared/router.animations';
import { GmtPipe } from './../shared/pipes/gmt.pipe';
import { BiopsyTrackingApiService } from './biopsy-tracking-api.service';


/**
 * BiopsyTrackingListComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-biopsy-tracking',
  templateUrl: 'biopsy-tracking.component.html',
  styleUrls: ['biopsy-tracking.component.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})
export class BiopsyTrackingListComponent implements OnInit {

  searchtermBiopsyTrackingList: string = '';
  recordsPerPageBiopsyTrackingList: number = 10;
  tableBiopsyTrackingListDefaultSort: string = 'biopsySequenceNumber';
  tableBiopsyTrackingListData: any[];
  errorMessage: string;
  biopsyCount: number;
  biopsyTotal: number;
  previous: any;
  activePage: number = 1;
  page: number = this.activePage;
  size: number = this.recordsPerPageBiopsyTrackingList;
  sortOrder: string = 'asc';
  sortBy: string = this.tableBiopsyTrackingListDefaultSort;

  constructor(private biopsyTrackingApi: BiopsyTrackingApiService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.getBiopsyCount(this.route.snapshot.data['data'].count);
    this.biopsyCount = this.route.snapshot.data['data'].count;
    this.biopsyTotal = this.route.snapshot.data['data'].total;
    this.biopsyTableExtraction(this.route.snapshot.data['data'].data);
  }

  getData() {
    this.biopsyTrackingApi.getBiopsyTracking(this.page, this.size, this.sortOrder, this.sortBy, this.searchtermBiopsyTrackingList)
      .subscribe(itemList => {
        this.biopsyTableExtraction(itemList);
      },
      error => this.errorMessage = <any>error
      );
  }

  biopsyTableExtraction(itemList: any[]) {

    let gmt = new GmtPipe();

    this.tableBiopsyTrackingListData = [];

    for (let i = 0; i < itemList.length; i++) {

      let obj: any = {};

      for (let j = 0; j < itemList[i].biopsies.mdAndersonMessages.length; j++) {

        if (itemList[i].biopsies.mdAndersonMessages[j].message === 'SPECIMEN_RECEIVED') {

          if (itemList[i].biopsies.mdAndersonMessages[j].collectedDate)
            obj.specimenReceivedDate = itemList[i].biopsies.mdAndersonMessages[j].collectedDate;

          else obj.specimenReceivedDate = itemList[i].biopsies.mdAndersonMessages[j].reportedDate;

          obj.specimenReceivedDate = gmt.transform(obj.specimenReceivedDate);
          obj.biopsySequenceNumber = itemList[i].biopsies.mdAndersonMessages[j].biopsySequenceNumber;
          obj.patientSequenceNumber = itemList[i].biopsies.mdAndersonMessages[j].patientSequenceNumber;

        }

        if (itemList[i].biopsies.mdAndersonMessages[j].message === 'NUCLEIC_ACID_SENDOUT') {

          obj.dnaShippedDate = itemList[i].biopsies.mdAndersonMessages[j].reportedDate;
          obj.dnaShippedDate = gmt.transform(obj.dnaShippedDate);
          obj.molecularSequenceNumber = itemList[i].biopsies.mdAndersonMessages[j].molecularSequenceNumber;
          obj.destinationSite = itemList[i].biopsies.mdAndersonMessages[j].destinationSite;
          obj.trackingNumber = itemList[i].biopsies.mdAndersonMessages[j].trackingNumber;

        }

        if (itemList[i].biopsies.mdAndersonMessages[j].message === 'SPECIMEN_FAILURE') {
          obj.specimenFailureDate = itemList[i].biopsies.mdAndersonMessages[j].reportedDate;
          obj.specimenFailureDate = gmt.transform(obj.specimenFailureDate);
        }

        if (itemList[i].biopsies.mdAndersonMessages[j].message === 'PATHOLOGY_CONFIRMATION') {
          obj.pathologyReviewdate = itemList[i].biopsies.mdAndersonMessages[j].reportedDate;
          obj.pathologyReviewdate = gmt.transform(obj.pathologyReviewdate);
        }

      }

      this.tableBiopsyTrackingListData.push(obj);

    }

  }

  getBiopsyCount(list: any) {
    this.biopsyTrackingApi.getBiopsyCount('').subscribe((itemList: any) => {
      this.biopsyCount = itemList;
      this.getData();
      this.getBiopsyTotal();
    });
  }

  getBiopsyTotal() {
    this.biopsyTrackingApi.getBiopsyTotal()
      .subscribe(itemList => {
        this.biopsyTotal = itemList;
      },
      error => this.errorMessage = <any>error
      );
  }

  onSearchChanged(val: any) {
    if (this.searchtermBiopsyTrackingList !== val) {
      this.searchtermBiopsyTrackingList = val;
      this.previous = this.page + ',' + this.size + ',' + this.sortOrder + ',' + this.sortBy + ',' + this.searchtermBiopsyTrackingList;
      this.getBiopsyCount(this.route.snapshot.data['data'].data);
    }
    this.searchtermBiopsyTrackingList = val;
  }

  currentPageActive(evt: any): void {
    evt += ',' + this.searchtermBiopsyTrackingList;
    let params = evt.split(',');
    this.page = parseInt(params[0]);
    this.size = parseInt(params[1]);
    this.sortOrder = params[2];
    this.sortBy = params[3];
    if (this.previous !== evt && this.previous !== undefined)
      this.getBiopsyCount(this.route.snapshot.data['data'].data);
    this.previous = evt;
  }

  SortStatus(evt: any): void {
    evt += ',' + this.searchtermBiopsyTrackingList;
    let params = evt.split(',');
    this.page = parseInt(params[0]);
    this.size = parseInt(params[1]);
    this.sortOrder = params[2];
    this.sortBy = params[3];
    if (this.previous !== evt)
      this.getBiopsyCount(this.route.snapshot.data['data'].data);
    this.previous = evt;
  }

}
