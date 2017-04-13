import {
  Component,
  OnInit
} from '@angular/core';

import { routerTransition } from './../shared/router.animations';
import { GmtPipe } from './../shared/pipes/gmt.pipe';
import { BiopsyTrackingApiService } from './biopsy-tracking-api.service';


/**
 * This class represents the lazy loaded BiopsyTrackingListComponent.
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

  constructor(private biopsyTrackingApi: BiopsyTrackingApiService) {

  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    let gmt = new GmtPipe();
    this.biopsyTrackingApi.getBiopsyTracking()
      .subscribe(itemList => {
        this.tableBiopsyTrackingListData = itemList.map(x => {
          x.specimenReceivedDate = gmt.transform(x.specimenReceivedDate);
          x.specimenFailureDate = gmt.transform(x.specimenFailureDate);
          x.pathologyReviewdate = gmt.transform(x.pathologyReviewdate);
          x.dnaShippedDate = gmt.transform(x.dnaShippedDate);
          return x;
        });
      },
      error => this.errorMessage = <any>error
      );
  }

}
