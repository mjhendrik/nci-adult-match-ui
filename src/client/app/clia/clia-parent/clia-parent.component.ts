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
 * This class represents the lazy loaded CliaParentComponent.
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

  recordsPerPagePC: number;
  recordsPerPageNTC: number;
  recordsPerPagePACC: number;

  tablePCDefaultSort: string;
  tableNTCDefaultSort: string;
  tablePACCDefaultSort: string;

  sortByAsc: string;
  sortByDesc: string;

  countContacted: number;
  countLost: number;

  timestamp: any = new Date();

  tablePCData: any[];
  tableNTCData: any[];
  tablePACCData: any[];
  ionReportersData: any[];

  cliaTypeName: string;

  constructor(private cliaApi: CliaApiService, private route: ActivatedRoute) {

  }

  ngOnInit() {

    this.cliaType = this.route.snapshot.data['cliatype'];

    this.recordsPerPagePC = 10;
    this.recordsPerPageNTC = 10;
    this.recordsPerPagePACC = 10;

    this.tablePCDefaultSort = 'dateCreated';
    this.tableNTCDefaultSort = 'dateCreated';
    this.tablePACCDefaultSort = 'dateCreated';

    this.sortByAsc = 'asc';
    this.sortByDesc = 'desc';

    this.countContacted = 0;
    this.countLost = 0;

    this.tablePCData = [];
    this.tableNTCData = [];
    this.tablePACCData = [];
    this.ionReportersData = [];

    let gmt = new GmtPipe();

    if (this.cliaType === 'mocha') this.cliaTypeName = 'MoCha';
    if (this.cliaType === 'dartmouth') this.cliaTypeName = 'Dartmouth';
    if (this.cliaType === 'yale') this.cliaTypeName = 'Yale';
    if (this.cliaType === 'mgh') this.cliaTypeName = 'MGH';
    if (this.cliaType === 'mdacc') this.cliaTypeName = 'MD Anderson';

    this.cliaApi.getCliaDetails(this.cliaType)
      .subscribe((details: CliaInterface) => {

        this.tablePCData = details.tablePCData;
        this.tableNTCData = details.tableNTCData;
        this.tablePACCData = details.tablePACCData;
        this.ionReportersData = details.ionReportersData;

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

        this.ionReportersData = this.ionReportersData.map(x => {
          x.lastContactDate = gmt.transform(x.lastContactDate);
          return x;
        });

        this.countIonReporters();

      });

  }

  countIonReporters(): any {
    for (let i = 0; i < this.ionReportersData.length; i++) {
      if (this.ionReportersData[i].status.indexOf('Contacted') !== -1) this.countContacted++;
      else this.countLost++;
    }
  }

}
