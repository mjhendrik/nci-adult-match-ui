import {
  Component,
  OnInit
} from '@angular/core';

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
  recordsPerPageBiopsyTrackingList: number = 100;
  tableBiopsyTrackingListDefaultSort: string = 'biopsySequenceNumber';
  tableBiopsyTrackingListData: any[] = [];
  errorMessage: string;
  dataAvailable: boolean = false;
  biopsyCount: number;
  previous: any;
  previousSort: any;
  activePage: number = 1;
  page: number = this.activePage;
  size: number = this.recordsPerPageBiopsyTrackingList;
  sortOrder: string = 'asc';
  sortBy: string = this.tableBiopsyTrackingListDefaultSort;

  constructor(private biopsyTrackingApi: BiopsyTrackingApiService) {

  }

  ngOnInit() {
    this.getBiopsyCount();
  }

  getData() {
    let gmt = new GmtPipe();
    this.biopsyTrackingApi.getBiopsyTracking(this.page, this.size, this.sortOrder, this.sortBy, this.searchtermBiopsyTrackingList)
      .subscribe(itemList => {

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

        this.dataAvailable = true;

      },
      error => this.errorMessage = <any>error
      );
  }

  getBiopsyCount() {
    this.biopsyTrackingApi.getBiopsyCount(this.searchtermBiopsyTrackingList)
      .subscribe(itemList => {
        this.biopsyCount = itemList;
        this.getData();
      },
      error => this.errorMessage = <any>error
      );
  }

  currentPageActive(evt: any): void {
    evt += ',' + this.searchtermBiopsyTrackingList;
    let params = evt.split(',');
    this.page = parseInt(params[0]);
    this.size = parseInt(params[1]);
    this.sortOrder = params[2];
    this.sortBy = params[3];
    if (this.previous !== evt)
      this.getBiopsyCount();
    this.previous = evt;
  }

  SortStatus(evt: any): void {
    if (this.previousSort !== evt)
      this.getBiopsyCount();
    this.previousSort = evt;
  }

}
