import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { routerTransition } from './../../shared/router.animations';
import { SampleControlApiService } from '../sample-control-api.service';
import { CliaVariantReportsNTCViewData } from '../clia-data-interfaces';
import { UserProfileService } from '../../shared/user-profile/user-profile.service';


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
  isReviewer: boolean = false;

  constructor(private api: SampleControlApiService,
    private route: ActivatedRoute,
    private profile: UserProfileService) {
  }

  ngOnInit() {

    this.ntcType = this.route.snapshot.url[0].path;
    this.ntcType = this.ntcType.substring(this.ntcType.indexOf('_') + 1).trim();

    if (this.ntcType === 'mocha') this.cliaTypeName = 'MoCha';
    if (this.ntcType === 'dartmouth') this.cliaTypeName = 'Dartmouth';
    if (this.ntcType === 'yale') this.cliaTypeName = 'Yale';
    if (this.ntcType === 'mgh') this.cliaTypeName = 'MGH';
    if (this.ntcType === 'mda') this.cliaTypeName = 'MD Anderson';

    this.molecular_id = this.route.snapshot.params['id'];

    this.getData(this.route.snapshot.data['data'].data);

    const roles = this.profile.roles().filter(x => {
      return x.indexOf('_VARIANT_REPORT_REVIEWER') !== -1 || x === 'ADMIN';
    });

    if (roles.indexOf('ADMIN') !== -1 || roles.join().toLowerCase().indexOf(this.ntcType) !== -1) {
      this.isReviewer = true;
    }
  }

  getData(itemList: CliaVariantReportsNTCViewData) {
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
  };

  downloadDnaBam(): void {
    this.api.downloadCliaDnaBam(this.molecular_id)
      .subscribe((itemList: any) => {
        let link = document.createElement('a');
        // link.download = name;
        link.href = itemList.s3_download_file_url;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
  };

  downloadDnaBai(): void {
    this.api.downloadCliaDnaBai(this.molecular_id)
      .subscribe((itemList: any) => {
        let link = document.createElement('a');
        // link.download = name;
        link.href = itemList.s3_download_file_url;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
  };

  downloadRnaBam(): void {
    this.api.downloadCliaRnaBam(this.molecular_id)
      .subscribe((itemList: any) => {
        let link = document.createElement('a');
        // link.download = name;
        link.href = itemList.s3_download_file_url;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
  };

  downloadRnaBai(): void {
    this.api.downloadCliaRnaBai(this.molecular_id)
      .subscribe((itemList: any) => {
        let link = document.createElement('a');
        // link.download = name;
        link.href = itemList.s3_download_file_url;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
  };

  downloadVcf(): void {
    this.api.downloadCliaVcf(this.molecular_id)
      .subscribe((itemList: any) => {
        let link = document.createElement('a');
        // link.download = name;
        link.href = itemList.s3_download_file_url;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
  };

  confirmReport(): void {
    this.api.confirmReport(this.molecular_id, 'ntc_control');
  };

}
