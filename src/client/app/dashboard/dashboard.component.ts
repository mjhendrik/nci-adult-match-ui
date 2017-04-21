import {
  Component,
  OnInit
} from '@angular/core';
import { routerTransition } from './../shared/router.animations';
import { GmtPipe } from './../shared/pipes/gmt.pipe';
import {
  DashboardApiService,
  DashboardInterface
} from './dashboard-api.service';


/**
 * DashboardComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})
export class DashboardComponent implements OnInit {

  searchtermVR: string = '';
  searchtermAR: string = '';
  searchtermPatientsAwaiting: string = '';

  recordsPerPageVR: number = 10;
  recordsPerPageAR: number = 10;
  recordsPerPagePatientsAwaiting: number = 10;

  tableVRDefaultSort: string = 'daysPending';
  tableARDefaultSort: string = 'hoursPending';
  tablePatientsAwaitingDefaultSort: string = 'date_verified';

  sortByAsc: string = 'asc';
  sortByDesc: string = 'desc';

  timestamp: any = new Date();

  overviewData: any;
  tableARData: any[];
  tableVRData: any[];
  tablePatientsAwaitingData: any[];
  dataAvailable: boolean;

  errorMessage: string;

  constructor(private dashboardApi: DashboardApiService) {

  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    let gmt = new GmtPipe();
    this.dashboardApi.getDashboard()
      .subscribe((itemList: DashboardInterface) => {

        this.overviewData = itemList.overviewData;

        this.dataAvailable = true;

        this.tableARData = itemList.tableARData.map(x => {
          x.dateAssigned = gmt.transform(x.dateAssigned);
          return x;
        });

        this.tableVRData = itemList.tableVRData.map(x => {
          x.specimenReceivedDate = gmt.transform(x.specimenReceivedDate);
          x.ngsDateReceived = gmt.transform(x.ngsDateReceived);
          return x;
        });

        this.tablePatientsAwaitingData = itemList.tablePatientsAwaitingData.map(x => {
          x.date_verified = gmt.transform(x.date_verified);
          return x;
        });

      },
      error => this.errorMessage = <any>error
      );
  }

}
