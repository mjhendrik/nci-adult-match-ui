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

  constructor(private biopsyTrackingApi: BiopsyTrackingApiService) {

  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    let gmt = new GmtPipe();
    this.biopsyTrackingApi.getBiopsyTracking()
      .subscribe(itemList => {

        for (let i = 0; i < itemList.length; i++) {

          for (let j = 0; j < itemList[i].biopsies.length; j++) {

            let obj: any = {};

            for (let k = 0; k < itemList[i].biopsies[j].mdAndersonMessages.length; k++) {

              if (itemList[i].biopsies[j].mdAndersonMessages[k].message === 'SPECIMEN_RECEIVED') {

                if (itemList[i].biopsies[j].mdAndersonMessages[k].collectedDate)
                  obj.specimenReceivedDate = itemList[i].biopsies[j].mdAndersonMessages[k].collectedDate;

                else obj.specimenReceivedDate = itemList[i].biopsies[j].mdAndersonMessages[k].reportedDate;

                obj.specimenReceivedDate = gmt.transform(obj.specimenReceivedDate);
                obj.biopsySequenceNumber = itemList[i].biopsies[j].mdAndersonMessages[k].biopsySequenceNumber;
                obj.patientSequenceNumber = itemList[i].biopsies[j].mdAndersonMessages[k].patientSequenceNumber;

              }

              if (itemList[i].biopsies[j].mdAndersonMessages[k].message === 'NUCLEIC_ACID_SENDOUT') {

                obj.dnaShippedDate = itemList[i].biopsies[j].mdAndersonMessages[k].reportedDate;
                obj.dnaShippedDate = gmt.transform(obj.dnaShippedDate);
                obj.molecularSequenceNumber = itemList[i].biopsies[j].mdAndersonMessages[k].molecularSequenceNumber;
                obj.destinationSite = itemList[i].biopsies[j].mdAndersonMessages[k].destinationSite;
                obj.trackingNumber = itemList[i].biopsies[j].mdAndersonMessages[k].trackingNumber;

              }

              if (itemList[i].biopsies[j].mdAndersonMessages[k].message === 'SPECIMEN_FAILURE') {
                obj.specimenFailureDate = itemList[i].biopsies[j].mdAndersonMessages[k].reportedDate;
                obj.specimenFailureDate = gmt.transform(obj.specimenFailureDate);
              }

              if (itemList[i].biopsies[j].mdAndersonMessages[k].message === 'PATHOLOGY_CONFIRMATION') {
                obj.pathologyReviewdate = itemList[i].biopsies[j].mdAndersonMessages[k].reportedDate;
                obj.pathologyReviewdate = gmt.transform(obj.pathologyReviewdate);
              }

            }

            this.tableBiopsyTrackingListData.push(obj);

          }

        }

        this.dataAvailable = true;

      },
      error => this.errorMessage = <any>error
      );
  }

}
