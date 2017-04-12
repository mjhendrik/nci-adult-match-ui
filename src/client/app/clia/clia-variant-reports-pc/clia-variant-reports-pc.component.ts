import { Component } from '@angular/core';

import { routerTransition } from './../../shared/router.animations';
import { GmtPipe } from './../../shared/pipes/gmt.pipe';


/**
 * This class represents the lazy loaded CLIAVariantReportsPcComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-clia-variant-reports-pc',
  templateUrl: 'clia-variant-reports-pc.component.html',
  styleUrls: ['clia-variant-reports-pc.component.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' },
  providers: [GmtPipe]
})
export class CliaVariantReportsPcComponent {

  variantReportPC: any = {
    "molecularSequenceNumber": "NtcControl_MoCha_8",
    "analysisId": "Curl-3",
    "totalVariants": 8,
    "mapd": "0.317",
    "cellularity": "1.000000",
    "positiveControlVersion": "2",
    "positiveControlLoadedDate": 1464706926145,
    "fileReceivedDate": 1445435466985,
    "torrentVariantCallerVersion": "tvc 4.4-8",
    "status": "PASSED"
  };

  lengendPCs: any = [
    {
      "variantType": "Indel",
      "matchingCriteria": "Chromosone, Position, Reference and Alternative."
    },
    {
      "variantType": "SNV",
      "matchingCriteria": "Chromosone, Position, Reference and Alternative."
    },
    {
      "variantType": "CNV",
      "matchingCriteria": "Gene"
    },
    {
      "variantType": "Fusion",
      "matchingCriteria": "HGVS"
    }
  ];

  tablePCsData: any = [
    {
      "variantType": "SNV",
      "geneName": "PIK3CA",
      "chromosome": "chr3",
      "position": "178916946",
      "identifier": "COSM12580",
      "reference": "G",
      "alternative": "C",
      "protein": "p.Lys111Asn",
      "dna": "c.333G>C",
      "function": null,
      "hasMatchingVariant": true
    },
    {
      "variantType": "SNV",
      "geneName": "BRAF",
      "chromosome": "chr7",
      "position": "140453136",
      "identifier": "COSM476",
      "reference": "A",
      "alternative": "T",
      "protein": "p.V600E",
      "dna": "c.1799T>A",
      "function": "missense",
      "hasMatchingVariant": true
    },
    {
      "variantType": "SNV",
      "geneName": "BRCA2",
      "chromosome": "chr13",
      "position": "32968850",
      "identifier": ".",
      "reference": "C",
      "alternative": "A",
      "protein": "p.Ser3094Ter",
      "dna": "c.9281C>A",
      "function": null,
      "hasMatchingVariant": true
    },
    {
      "variantType": "Indel",
      "geneName": "PTEN",
      "chromosome": "chr10",
      "position": "89717716",
      "identifier": ".",
      "reference": "-",
      "alternative": "A",
      "protein": "p.Pro248fs",
      "dna": "c.741_742insA",
      "function": null,
      "hasMatchingVariant": true
    },
    {
      "variantType": "Indel",
      "geneName": "RB1",
      "chromosome": "chr13",
      "position": "48916816",
      "identifier": null,
      "reference": "ACTT",
      "alternative": "-",
      "protein": "p.T116fs*8",
      "dna": "c.346_349delACTT",
      "function": null,
      "hasMatchingVariant": true
    },
    {
      "variantType": "Indel",
      "geneName": "TP53",
      "chromosome": "chr17",
      "position": "7574003",
      "identifier": ".",
      "reference": "G",
      "alternative": "-",
      "protein": "p.R342fs*3",
      "dna": "c.1023delC",
      "function": null,
      "hasMatchingVariant": true
    },
    {
      "variantType": "CNV",
      "geneName": "ERBB2",
      "chromosome": "chr17",
      "position": null,
      "identifier": null,
      "reference": null,
      "alternative": null,
      "protein": null,
      "dna": null,
      "function": null,
      "hasMatchingVariant": true
    },
    {
      "variantType": "CNV",
      "geneName": "RPS6KB1",
      "chromosome": "chr17",
      "position": null,
      "identifier": null,
      "reference": null,
      "alternative": null,
      "protein": null,
      "dna": null,
      "function": null,
      "hasMatchingVariant": true
    },
    {
      "variantType": "CNV",
      "geneName": "ZNF217",
      "chromosome": "chr20",
      "position": null,
      "identifier": null,
      "reference": null,
      "alternative": null,
      "protein": null,
      "dna": null,
      "function": null,
      "hasMatchingVariant": true
    },
    {
      "variantType": "Fusion",
      "geneName": "ALK",
      "chromosome": null,
      "position": null,
      "identifier": "AB374361",
      "reference": null,
      "alternative": "EML4-ALK.E6aA20",
      "protein": null,
      "dna": "EML4-ALK",
      "function": null,
      "hasMatchingVariant": true
    },
    {
      "variantType": "Fusion",
      "geneName": "ALK",
      "chromosome": null,
      "position": null,
      "identifier": "AB374362",
      "reference": null,
      "alternative": "EML4-ALK.E6bA20",
      "protein": null,
      "dna": "EML4-ALK",
      "function": null,
      "hasMatchingVariant": true
    },
    {
      "variantType": "Fusion",
      "geneName": "ALK",
      "chromosome": null,
      "position": null,
      "identifier": null,
      "reference": null,
      "alternative": "ALK-PTPN3.A11P3",
      "protein": null,
      "dna": "ALK-PTPN3",
      "function": null,
      "hasMatchingVariant": true
    },
    {
      "variantType": "Fusion",
      "geneName": "MET",
      "chromosome": null,
      "position": null,
      "identifier": null,
      "reference": null,
      "alternative": "MET-MET.M13M15",
      "protein": null,
      "dna": "MET-MET",
      "function": null,
      "hasMatchingVariant": true
    }
  ];

}
