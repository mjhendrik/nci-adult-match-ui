import {
  Component,
  OnInit
} from '@angular/core';

import { routerTransition } from './../../shared/router.animations';
import { GmtPipe } from './../../shared/pipes/gmt.pipe';
import { TreatmentArmApiService } from '../treatment-arm-api.service';


/**
 * This class represents the lazy loaded TreatmentArmListComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-treatment-arm-list',
  templateUrl: 'treatment-arm-list.component.html',
  styleUrls: ['treatment-arm-list.component.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})
export class TreatmentArmListComponent implements OnInit {

  searchtermTA: string = '';
  recordsPerPageTA: number = 100;
  tableTADefaultSort: string = 'treatmentArmId';
  tableTAData: any[];
  errorMessage: string;

  constructor(private treatmentArmApi: TreatmentArmApiService) {

  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    let gmt = new GmtPipe();
    this.treatmentArmApi.getTreatmentArmList()
      .subscribe(itemList => {

        this.tableTAData = itemList.map(x => {
          x.dateCreated = gmt.transform(x.dateCreated);
          x.dateOpened = gmt.transform(x.dateOpened);
          x.dateSuspendedOrClosed = gmt.transform(x.dateSuspendedOrClosed);
          return x;
        });

        for (let i = 0; i < this.tableTAData.length; i++) {
          this.tableTAData[i].dateSuspendedOrClosed = this.tableTAData[i].dateClosed == null ? this.tableTAData[i].dateSuspended : this.tableTAData[i].dateClosed;
        }

      },
      error => this.errorMessage = <any>error
      );
  }

}
