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
 * This class represents the lazy loaded CLIAVariantReportsPaccComponent.
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


  constructor(private cliaApi: CliaApiService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.paccType = this.route.snapshot.params.id;
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
