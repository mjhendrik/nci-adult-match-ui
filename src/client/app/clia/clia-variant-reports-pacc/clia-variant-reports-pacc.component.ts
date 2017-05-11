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

    this.molecular_id = this.route.snapshot.params['id'];

    this.getData();
  }

  getData() {
    this.cliaApi.getCliaVariantReportsPACC(this.molecular_id)
      .subscribe((itemList: CliaVariantReportsPACCInterface) => {
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
  };

  downloadDnaBam(): void {
    this.cliaApi.downloadCliaDnaBam(this.molecular_id);
  };

  downloadRnaBam(): void {
    this.cliaApi.downloadCliaRnaBam(this.molecular_id);
  };

  downloadVcf(): void {
    this.cliaApi.downloadCliaVcf(this.molecular_id);
  };

}
