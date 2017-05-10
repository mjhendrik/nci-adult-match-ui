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

  molecular_id: any;
  analysis_id: any;
  total_variants: any;
  mapd: any;
  cellularity: any;
  date_variant_received: any;
  torrent_variant_caller_version: any;
  report_status: any;
  copy_number_variants: any[];
  gene_fusions: any[];
  snv_indels: any[];
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
        this.molecular_id = itemList.molecular_id;
        this.analysis_id = itemList.analysis_id;
        this.total_variants = itemList.total_variants;
        this.mapd = itemList.mapd;
        this.cellularity = itemList.cellularity;
        this.date_variant_received = itemList.date_variant_received;
        this.torrent_variant_caller_version = itemList.torrent_variant_caller_version;
        this.report_status = itemList.report_status;
        this.dataAvailable = true;
        this.copy_number_variants = itemList.copy_number_variants;
        this.gene_fusions = itemList.gene_fusions;
        this.snv_indels = itemList.snv_indels;
      },
      error => this.errorMessage = <any>error
      );
  }

}
