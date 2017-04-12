import { Component } from '@angular/core';

import { routerTransition } from './../../shared/router.animations';


/**
 * This class represents the lazy loaded CLIAVariantReportsNtcComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-clia-variant-reports-ntc',
  templateUrl: 'clia-variant-reports-ntc.component.html',
  styleUrls: ['clia-variant-reports-ntc.component.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})
export class CliaVariantReportsNtcComponent {

  variantReportNTC: any = {
    "molecularSequenceNumber": "NtcControl_MoCha_8",
    "analysisId": "Curl-3",
    "totalVariants": 8,
    "mapd": "0.317",
    "cellularity": "1.000000",
    "fileReceivedDate": 1445435466985,
    "torrentVariantCallerVersion": "tvc 4.4-8",
    "status": "PASSED",
    "comment": "Accepted!"
  };

  snv: any = [
    {
      "id": "COSM14060",
      "chrom": "chr17",
      "position": "37880220",
      "reference": "T",
      "alternative": "C",
      "alleleFreq": "0.3195",
      "funcGene": "ERBB2",
      "oncomineVariantClass": "Hotspot",
      "function": "missense",
      "hgvs": "c.2264T&gt&C",
      "readDepth": "942",
      "transcript": "NM_004448.3",
      "protein": "p.Leu755Ser"
    }
  ];

  indels: any = [
    {
      "id": null,
      "chrom": "chr10",
      "position": "8115840 ",
      "reference": "CT",
      "alternative": null,
      "alleleFreq": "0.3720",
      "funcGene": "GATA3",
      "oncomineVariantClass": "Deleterious",
      "function": "frameshiftDeletion",
      "hgvs": "c.1189_1190delCT",
      "readDepth": "1946",
      "transcript": "NM_001002295.1",
      "protein": "p.Ser398fs"
    }
  ];

}
