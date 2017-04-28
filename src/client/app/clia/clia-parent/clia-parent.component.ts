import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { routerTransition } from './../../shared/router.animations';
import { GmtPipe } from './../../shared/pipes/gmt.pipe';
import {
  CliaApiService,
  CliaInterface
} from './../clia-api.service';


/**
 * CliaParentComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-clia-parent',
  templateUrl: 'clia-parent.component.html',
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' },
  providers: [GmtPipe]
})
export class CliaParentComponent implements OnInit {

  @Input('cliaType') cliaType: string;

  searchtermPC: string = '';
  searchtermNTC: string = '';
  searchtermPACC: string = '';

  recordsPerPagePC: number = 10;
  recordsPerPageNTC: number = 10;
  recordsPerPagePACC: number = 10;

  tablePCDefaultSort: string = 'dateCreated';
  tableNTCDefaultSort: string = 'dateCreated';
  tablePACCDefaultSort: string = 'dateCreated';

  sortByAsc: string = 'asc';
  sortByDesc: string = 'desc';

  countContacted: number = 0;
  countLost: number = 0;

  timestamp: any = new Date();

  tablePCData: any[] = [];
  tableNTCData: any[] = [];
  tablePACCData: any[] = [];

  ionReportersData: any[] = [];

  cliaTypeName: string;

  constructor(private cliaApi: CliaApiService, private route: ActivatedRoute) {

  }

  ngOnInit() {

    this.cliaType = this.route.snapshot.data['cliaType'];

    let gmt = new GmtPipe();

    if (this.cliaType === 'mocha') this.cliaTypeName = 'MoCha';
    if (this.cliaType === 'dartmouth') this.cliaTypeName = 'Dartmouth';
    if (this.cliaType === 'yale') this.cliaTypeName = 'Yale';
    if (this.cliaType === 'mgh') this.cliaTypeName = 'MGH';
    if (this.cliaType === 'mda') this.cliaTypeName = 'MD Anderson';

    this.cliaApi.getCliaDetails(this.cliaType)
      .subscribe((details: CliaInterface) => {

        this.tablePCData = details.tablePCData;
        this.tableNTCData = details.tableNTCData;
        this.tablePACCData = details.tablePACCData;

        this.tablePCData = this.tablePCData.map(x => {
          x.dateCreated = gmt.transform(x.dateCreated);
          x.dateReceived = gmt.transform(x.dateReceived);
          return x;
        });

        this.tableNTCData = this.tableNTCData.map(x => {
          x.dateCreated = gmt.transform(x.dateCreated);
          x.dateReceived = gmt.transform(x.dateReceived);
          return x;
        });

        this.tablePACCData = this.tablePACCData.map(x => {
          x.dateCreated = gmt.transform(x.dateCreated);
          x.dateReceived = gmt.transform(x.dateReceived);
          return x;
        });

      });

    this.cliaApi.getCliaIon(this.cliaType)
      .subscribe(details => {
        this.ionReportersData = details.map(x => {
          x.lastContactDate = gmt.transform(x.lastContactDate);
          return x;
        });
      });

  }

  // setInterval(() => {
  //   this.cliaApi.getCliaIon(this.cliaType)
  //     .subscribe(details => {
  //       this.ionReportersData = details.map(x => {
  //         x.lastContactDate = gmt.transform(x.lastContactDate);
  //         return x;
  //       });
  //     });
  // }, 1000 * 30);

  // setInterval(function () {
  //   this.cliaApi.getCliaIon(this.cliaType)
  //     .subscribe(details => {
  //       this.ionReportersData = details.map(x => {
  //         x.lastContactDate = gmt.transform(x.lastContactDate);
  //         return x;
  //       });
  //     });
  // }, 30000;);

}
