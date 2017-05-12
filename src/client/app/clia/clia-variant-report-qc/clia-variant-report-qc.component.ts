import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { routerTransition } from './../../shared/router.animations';
import {
  CliaApiService,
  CliaVariantReportsQCInterface
} from '../clia-api.service';

/**
 * CliaVariantReportQcComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-clia-variant-report-qc',
  templateUrl: 'clia-variant-report-qc.component.html',
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})
export class CliaVariantReportQcComponent implements OnInit {

  molecular_id: any;
  analysis_id: any;
  total_variants: any;
  mapd: any;
  cellularity: any;
  torrent_variant_caller_version: any;
  oncomine_control_panel_summary: any[];
  copy_number_variants: any[];
  gene_fusions: any[];
  snv_indels: any[];

  sum: number = 0;

  dataAvailable: boolean;
  errorMessage: string;

  cliaType: string;
  tabType: string;
  cliaTypeName: string;
  tabTypeName: string;
  tabTypeHeaderName: string;

  constructor(private cliaApi: CliaApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.cliaType = this.route.snapshot.url[0].path;
    this.cliaType = this.cliaType.substring(this.cliaType.indexOf('_') + 1).trim();

    this.tabType = this.route.snapshot.url[1].path;
    this.tabType = this.tabType.substring(this.tabType.lastIndexOf('_') + 1).trim();

    if (this.cliaType === 'mocha') this.cliaTypeName = 'MoCha';
    if (this.cliaType === 'dartmouth') this.cliaTypeName = 'Dartmouth';
    if (this.cliaType === 'yale') this.cliaTypeName = 'Yale';
    if (this.cliaType === 'mgh') this.cliaTypeName = 'MGH';
    if (this.cliaType === 'mda') this.cliaTypeName = 'MD Anderson';

    if (this.tabType === 'ntc') {
      this.tabTypeHeaderName = 'No Template Quality Control Report';
      this.tabTypeName = 'No Template Control Variant Report';
    }

    if (this.tabType === 'pacc') {
      this.tabTypeHeaderName = 'Proficiency And Competency Quality Control Report';
      this.tabTypeName = 'Proficiency And Competency Control Variant Report';
    }

    if (this.tabType === 'pc') {
      this.tabTypeHeaderName = 'Positive Quality Control Report';
      this.tabTypeName = 'Positive Control Variant Report';
    }

    this.molecular_id = this.route.snapshot.params['id'];

    this.getData();
  }

  getData() {
    this.cliaApi.getCliaVariantReportQC(this.molecular_id)
      .subscribe((itemList: CliaVariantReportsQCInterface) => {
        this.molecular_id = itemList.molecular_id;
        this.analysis_id = itemList.analysis_id;
        this.total_variants = itemList.total_variants;
        this.mapd = itemList.mapd;
        this.cellularity = itemList.cellularity;
        this.torrent_variant_caller_version = itemList.torrent_variant_caller_version;
        this.dataAvailable = true;

        this.oncomine_control_panel_summary = itemList.oncomine_control_panel_summary;
        Object.keys(itemList.oncomine_control_panel_summary).forEach((key: any, i: number) => {
          console.log(itemList.oncomine_control_panel_summary[key]);
          this.sum += itemList.oncomine_control_panel_summary[key];
        });

        this.copy_number_variants = itemList.copy_number_variants;
        this.gene_fusions = itemList.gene_fusions;
        this.snv_indels = itemList.snv_indels;
      },
      error => this.errorMessage = <any>error
      );
  };

  downloadDnaBam(): void {
    this.cliaApi.downloadCliaDnaBam(this.molecular_id)
      .subscribe((itemList: any) => {
        let link = document.createElement('a');
        // link.download = name;
        link.href = itemList.s3_url; // TO_DO: get key
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
  };

  downloadDnaBai(): void {
    this.cliaApi.downloadCliaDnaBai(this.molecular_id)
      .subscribe((itemList: any) => {
        let link = document.createElement('a');
        // link.download = name;
        link.href = itemList.s3_url; // TO_DO: get key
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
  };

  downloadRnaBam(): void {
    this.cliaApi.downloadCliaRnaBam(this.molecular_id)
      .subscribe((itemList: any) => {
        let link = document.createElement('a');
        // link.download = name;
        link.href = itemList.s3_url; // TO_DO: get key
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
  };

  downloadRnaBai(): void {
    this.cliaApi.downloadCliaRnaBai(this.molecular_id)
      .subscribe((itemList: any) => {
        let link = document.createElement('a');
        // link.download = name;
        link.href = itemList.s3_url; // TO_DO: get key
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
  };

  downloadVcf(): void {
    this.cliaApi.downloadCliaVcf(this.molecular_id)
      .subscribe((itemList: any) => {
        let link = document.createElement('a');
        // link.download = name;
        link.href = itemList.s3_url; // TO_DO: get key
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
  };

}
