import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  recordsPerPageTA: number = 10;
  tableTADefaultSort: string = 'treatmentArmId';
  tableTAData: any[];
  errorMessage: string;

  gmt: GmtPipe;

  constructor(private treatmentArmApi: TreatmentArmApiService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.gmt = new GmtPipe();
    let itemList = this.route.snapshot.data['data'];
    this.tableTAData = itemList[0].map((x: any) => {
      x.dateCreated = this.gmt.transform(x.dateCreated);
      return x;
    });
  }

  dateStatusLog(statusLog: any, type: string, item: any): string {

    let keys = Object.keys(statusLog).map(x => {
      return parseInt(x);
    });

    const maxValue = keys.reduce((prev, curr) => {
      return curr > prev ? curr : prev;
    }, 0);

    let key = Object.keys(statusLog).filter((dateStatusLog: string) => {
      if (type === 'OPEN') return type.indexOf(statusLog[dateStatusLog]) !== -1;
      else return maxValue === parseInt(dateStatusLog) && type.indexOf(statusLog[dateStatusLog]) !== -1;
    });

    if (key.length === 0) return '-';

    if (type.indexOf(',') !== -1) item.dateClosedOrSuspended = this.gmt.transform(parseInt(key[0]));
    else item.dateOpen = this.gmt.transform(parseInt(key[0]));

    return this.gmt.transform(parseInt(key[0]));

  };

}
