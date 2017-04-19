import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { routerTransition } from './../../shared/router.animations';
import {
  CliaApiService,
  CliaVariantReportsPCInterface
} from './../clia-api.service';


/**
 * This class represents the lazy loaded CLIAVariantReportsPcComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-clia-variant-reports-pc',
  templateUrl: 'clia-variant-reports-pc.component.html',
  styleUrls: ['clia-variant-reports-pc.component.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})
export class CliaVariantReportsPcComponent implements OnInit {

  variantReportPC: any;
  lengendPCs: any[];
  tablePCsData: any[];
  dataAvailable: boolean;
  errorMessage: string;
  pcType: string;

  constructor(private cliaApi: CliaApiService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.pcType = this.route.snapshot.params.id;
    this.getData();
  }

  getData() {
    this.cliaApi.getCliaVariantReportsPC(this.pcType)
      .subscribe((itemList: CliaVariantReportsPCInterface) => {
        this.variantReportPC = itemList.variantReportPC;
        this.dataAvailable = true;
        this.lengendPCs = itemList.lengendPCs;
        this.tablePCsData = itemList.tablePCsData;
      },
      error => this.errorMessage = <any>error
      );
  }

}
