import {
  Component,
  OnInit
} from '@angular/core';

import { routerTransition } from './../../shared/router.animations';
import {
  CliaApiService,
  CliaVariantReportsNTCInterface
} from './../clia-api.service';


/**
 * This class represents the lazy loaded CLIAVariantReportsNtcComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-clia-variant-reports-ntc',
  templateUrl: 'clia-variant-reports-ntc.component.html',
  styleUrls: ['clia-variant-reports-ntc.component.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})
export class CliaVariantReportsNtcComponent implements OnInit {

  variantReportNTC: any;
  snv: any[];
  indels: any[];
  dataAvailable: boolean;
  errorMessage: string;

  constructor(private cliaApi: CliaApiService) {

  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.cliaApi.getCliaVariantReportsNTC()
      .subscribe((itemList: CliaVariantReportsNTCInterface) => {
        this.variantReportNTC = itemList.variantReportNTC;
        this.dataAvailable = true;
        this.snv = itemList.snv;
        this.indels = itemList.indels;
      },
      error => this.errorMessage = <any>error
      );
  }

}
