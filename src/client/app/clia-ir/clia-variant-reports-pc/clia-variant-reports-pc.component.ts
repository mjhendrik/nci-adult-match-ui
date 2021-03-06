import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { routerTransition } from './../../shared/router.animations';
import { SampleControlApiService } from '../sample-control-api.service';
import { CliaVariantReportsPCViewData } from '../clia-data-interfaces';
import { UserProfileService } from '../../shared/user-profile/user-profile.service';

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

  molecular_id: any;
  analysis_id: any;
  total_variants: any;
  mapd: any;
  cellularity: any;
  positive_control_version: any;
  date_molecular_id_created: any;
  date_variant_received: any;
  torrent_variant_caller_version: any;
  report_status: any;
  false_positive_variants: any[];
  positive_variants: any[];
  errorMessage: string;
  pcType: string;
  cliaTypeName: string;
  isReviewer: boolean = false;

  constructor(private api: SampleControlApiService,
    private route: ActivatedRoute,
    private profile: UserProfileService) {
  }

  ngOnInit() {

    this.pcType = this.route.snapshot.url[0].path;
    this.pcType = this.pcType.substring(this.pcType.indexOf('_') + 1).trim();

    if (this.pcType === 'mocha') this.cliaTypeName = 'MoCha';
    if (this.pcType === 'dartmouth') this.cliaTypeName = 'Dartmouth';
    if (this.pcType === 'yale') this.cliaTypeName = 'Yale';
    if (this.pcType === 'mgh') this.cliaTypeName = 'MGH';
    if (this.pcType === 'mda') this.cliaTypeName = 'MD Anderson';

    this.molecular_id = this.route.snapshot.params['id'];

    this.getData(this.route.snapshot.data['data'].data);

    const roles = this.profile.roles().filter(x => {
      return x.indexOf('_VARIANT_REPORT_REVIEWER') !== -1 || x === 'ADMIN';
    });

    if (roles.indexOf('ADMIN') !== -1 || roles.join().toLowerCase().indexOf(this.pcType) !== -1) {
      this.isReviewer = true;
    }

  }

  getData(itemList: CliaVariantReportsPCViewData) {
    this.molecular_id = itemList.molecular_id;
    this.analysis_id = itemList.analysis_id;
    this.total_variants = itemList.total_variants;
    this.mapd = itemList.mapd;
    this.cellularity = itemList.cellularity;
    this.positive_control_version = itemList.positive_control_version;
    this.date_molecular_id_created = itemList.date_molecular_id_created;
    this.date_variant_received = itemList.date_variant_received;
    this.torrent_variant_caller_version = itemList.torrent_variant_caller_version;
    this.report_status = itemList.report_status;
    this.false_positive_variants = itemList.false_positive_variants;
    this.positive_variants = itemList.positive_variants;
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

  rejectReport(): void {
    this.api.rejectReport(this.molecular_id, 'sample_control')
      .subscribe((itemList: any) => {
        console.info('Report Rejected');
      });
  };

}
