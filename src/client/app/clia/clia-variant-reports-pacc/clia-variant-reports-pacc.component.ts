import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { routerTransition } from './../../shared/router.animations';
import {
  CliaApiService,
  CliaVariantReportsPACCInterface
} from './../clia-api.service';


/**
 * CLIAVariantReportsPaccComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-clia-variant-reports-pacc',
  templateUrl: 'clia-variant-reports-pacc.component.html',
  styleUrls: ['clia-variant-reports-pacc.component.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})
export class CliaVariantReportsPaccComponent implements OnInit {

  variantReportPACC: any;
  snv: any[];
  indels: any[];
  dataAvailable: boolean;
  errorMessage: string;
  paccType: string;
  cliaTypeName: string;


  constructor(private cliaApi: CliaApiService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.paccType = this.route.snapshot.url[0].path;
    this.paccType = this.paccType.substring(this.paccType.indexOf('_') + 1).trim();

    if (this.paccType === 'mocha') this.cliaTypeName = 'MoCha';
    if (this.paccType === 'dartmouth') this.cliaTypeName = 'Dartmouth';
    if (this.paccType === 'yale') this.cliaTypeName = 'Yale';
    if (this.paccType === 'mgh') this.cliaTypeName = 'MGH';
    if (this.paccType === 'mda') this.cliaTypeName = 'MD Anderson';

    this.getData();
  }

  getData() {
    this.cliaApi.getCliaVariantReportsPACC(this.paccType)
      .subscribe((itemList: CliaVariantReportsPACCInterface) => {
        this.variantReportPACC = itemList.variantReportPACC;
        this.dataAvailable = true;
        this.snv = itemList.snv;
        this.indels = itemList.indels;
      },
      error => this.errorMessage = <any>error
      );
  }

}
