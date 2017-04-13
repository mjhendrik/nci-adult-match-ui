import {
  Component,
  OnInit
} from '@angular/core';

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

  constructor(private cliaApi: CliaApiService) {

  }

  ngOnInit() {
    this.getData();
    this.dataAvailable = false;
  }

  getData() {
    this.cliaApi.getCliaVariantReportsPC()
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
