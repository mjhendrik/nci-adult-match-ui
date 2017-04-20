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
 * This class represents the lazy loaded CliaVariantReportQcComponent.
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
    this.tabType = this.route.snapshot.params.tabType;
    this.cliaType = this.route.snapshot.params.cliaType;

    if (this.cliaType === 'mocha') this.cliaTypeName = 'MoCha';
    if (this.cliaType === 'dartmouth') this.cliaTypeName = 'Dartmouth';
    if (this.cliaType === 'yale') this.cliaTypeName = 'Yale';
    if (this.cliaType === 'mgh') this.cliaTypeName = 'MGH';
    if (this.cliaType === 'mdacc') this.cliaTypeName = 'MD Anderson';

    if (this.tabType === 'ntc') {
      this.tabTypeHeaderName = 'No Template Quality Control Variant Report';
      this.tabTypeName = 'No Template Control Variant Report';
    }

    if (this.tabType === 'pacc') {
      this.tabTypeHeaderName = 'Proficiency And Competency Quality Control Variant Report';
      this.tabTypeName = 'Proficiency And Competency Control Variant Report';
    }

    if (this.tabType === 'pc') {
      this.tabTypeHeaderName = 'Positive Quality Control Variant Report';
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
