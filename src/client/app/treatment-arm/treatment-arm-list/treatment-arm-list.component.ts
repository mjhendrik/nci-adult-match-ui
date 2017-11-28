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
  tableTAData: any[] = [];
  dataAvailable: boolean = false; // use emit

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
          for (let i = 0; i < x.statusLog.length; i++) {
            if (x.statusLog[i].status === 'OPEN') x.dateOpen = this.gmt.transform(x.statusLog[i].date);
            if (x.statusLog[i].status === 'CLOSED' || x.statusLog[i].status === 'SUSPENDED') x.dateClosedOrSuspended = this.gmt.transform(x.statusLog[i].date);
          }
          return x;
        });
        this.dataAvailable = true; // use emit
      });
  };

}
