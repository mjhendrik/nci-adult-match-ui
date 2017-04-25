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
  variantReport: any;
  assignmentReport: any;
  moiSummary: any;
  assay: any[];
  snv: any[];
  indels: any[];
  assignmentReason: any;
  assignmentHistory: any[];
  ocpSummary: any;

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

    this.getData();
  }

  getData() {
    this.cliaApi.getCliaVariantReportQC(this.tabType, this.cliaType)
      .subscribe((itemList: CliaVariantReportsQCInterface) => {
        this.variantReport = itemList.variantReport;
        this.assignmentReport = itemList.assignmentReport;
        this.moiSummary = itemList.moiSummary;
        this.assay = itemList.assay;
        this.snv = itemList.snv;
        this.indels = itemList.indels;
        this.assignmentReason = itemList.assignmentReason;
        this.assignmentHistory = itemList.assignmentHistory;
        this.ocpSummary = itemList.ocpSummary;
        this.dataAvailable = true;
      },
      error => this.errorMessage = <any>error
      );
  }
}
