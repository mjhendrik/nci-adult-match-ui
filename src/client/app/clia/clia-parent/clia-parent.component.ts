import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { routerTransition } from './../../shared/router.animations';
import { GmtPipe } from './../../shared/pipes/gmt.pipe';
import { CliaApiService } from './../clia-api.service';


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

  tablePCDefaultSort: string = 'date_molecular_id_created';
  tableNTCDefaultSort: string = 'date_molecular_id_created';
  tablePACCDefaultSort: string = 'date_molecular_id_created';

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
  control_type: string = 'positive';

  constructor(private cliaApi: CliaApiService, private route: ActivatedRoute) {

  }

  ngOnInit() {

    this.cliaType = this.route.snapshot.data['cliaType'];

    if (this.cliaType === 'mocha') this.cliaTypeName = 'MoCha';
    if (this.cliaType === 'dartmouth') this.cliaTypeName = 'Dartmouth';
    if (this.cliaType === 'yale') this.cliaTypeName = 'Yale';
    if (this.cliaType === 'mgh') this.cliaTypeName = 'MGH';
    if (this.cliaType === 'mda') this.cliaTypeName = 'MD Anderson';

    this.getDataPC();
    this.getDataNTC();
    this.getDataPACC();
    this.getDataIon();
    this.autoLoadDataIon();

  }

  getDataPC() {
    this.cliaApi.getCliaDetailsPC(this.cliaType)
      .subscribe(details => {

        let gmt = new GmtPipe();

        this.tablePCData = details.map(x => {
          x.date_molecular_id_created = gmt.transform(x.date_molecular_id_created);
          x.date_variant_received = gmt.transform(x.date_variant_received);
          return x;
        });

        this.tablePCData.splice(-1, 1);

      });
  };

  getDataNTC() {
    this.cliaApi.getCliaDetailsNTC(this.cliaType)
      .subscribe(details => {

        let gmt = new GmtPipe();

        this.tableNTCData = details.map(x => {
          x.date_molecular_id_created = gmt.transform(x.date_molecular_id_created);
          x.date_variant_received = gmt.transform(x.date_variant_received);
          return x;
        });

        this.tableNTCData.splice(-1, 1);

      });
  };

  getDataPACC() {
    this.cliaApi.getCliaDetailsPACC(this.cliaType)
      .subscribe(details => {

        let gmt = new GmtPipe();

        this.tablePACCData = details.map(x => {
          x.date_molecular_id_created = gmt.transform(x.date_molecular_id_created);
          x.date_variant_received = gmt.transform(x.date_variant_received);
          return x;
        });

        this.tablePACCData.splice(-1, 1);

      });
  };

  getDataIon() {
    this.cliaApi.getCliaIon(this.cliaType)
      .subscribe(details => {

        let gmt = new GmtPipe();

        this.ionReportersData = details.map(x => {
          x.lastContactDate = gmt.transform(x.lastContactDate);
          return x;
        });

      });
  };

  autoLoadDataIon() {
    setInterval(() => {

      this.cliaApi.getCliaIon(this.cliaType)
        .subscribe(details => {

          let gmt = new GmtPipe();

          this.ionReportersData = details.map(x => {
            x.lastContactDate = gmt.transform(x.lastContactDate);
            return x;
          });

        });

      this.timestamp = new Date();

    }, 1000 * 60);
  };

  setControlType(type: string): void {
    this.control_type = type;
  }

  generateMsn(): void {
    this.cliaApi.generateMsn(this.cliaType, this.control_type)
      .subscribe((itemList: any) => {
        if (this.control_type === 'positive') this.getDataPC();
        if (this.control_type === 'no_template') this.getDataNTC();
        if (this.control_type === 'proficiency_competency') this.getDataPACC();
      });
  };

}
