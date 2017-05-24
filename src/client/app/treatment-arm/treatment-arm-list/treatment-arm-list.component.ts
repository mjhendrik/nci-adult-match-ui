import {
  Component,
  OnInit
} from '@angular/core';

import { routerTransition } from './../../shared/router.animations';
import { GmtPipe } from './../../shared/pipes/gmt.pipe';
import { TreatmentArmApiService } from '../treatment-arm-api.service';


/**
 * TreatmentArmListComponent.
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

  gmt: GmtPipe;

  constructor(private treatmentArmApi: TreatmentArmApiService) {

  }

  ngOnInit() {
    this.gmt = new GmtPipe();
    this.getData();
  }

  getData() {

    this.treatmentArmApi.getTreatmentArmList()
      .subscribe(itemList => {

        this.tableTAData = itemList.map(x => {
          x.dateCreated = this.gmt.transform(x.dateCreated);
          return x;
        });

      },
      error => this.errorMessage = <any>error
      );
  };

  dateStatusLog(statusLog: any, type: string): string {

    let key = Object.keys(statusLog).filter((dateStatusLog: string) => {
      return Math.max(parseInt(dateStatusLog)) && type.indexOf(statusLog[dateStatusLog]) !== -1;
    });

    if (key.length === 0) return '-';

    return this.gmt.transform(parseInt(key[0]));

  };

}
