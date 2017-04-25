import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { routerTransition } from './../../shared/router.animations';
import {
  CliaApiService,
  CliaVariantReportsNTCInterface
} from './../clia-api.service';


/**
 * CLIAVariantReportsNtcComponent.
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
  ntcType: string;
  cliaTypeName: string;

  constructor(private cliaApi: CliaApiService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.ntcType = this.route.snapshot.url[0].path;
    this.ntcType = this.ntcType.substring(this.ntcType.indexOf('_') + 1).trim();

    if (this.ntcType === 'mocha') this.cliaTypeName = 'MoCha';
    if (this.ntcType === 'dartmouth') this.cliaTypeName = 'Dartmouth';
    if (this.ntcType === 'yale') this.cliaTypeName = 'Yale';
    if (this.ntcType === 'mgh') this.cliaTypeName = 'MGH';
    if (this.ntcType === 'mda') this.cliaTypeName = 'MD Anderson';

    this.getData();
  }

  getData() {
    this.cliaApi.getCliaVariantReportsNTC(this.ntcType)
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
