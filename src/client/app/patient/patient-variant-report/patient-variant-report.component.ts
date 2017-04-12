import { Component } from '@angular/core';

import { routerTransition } from './../../shared/router.animations';

/**
 * This class represents the lazy loaded PatientVariantReportComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-patient-variant-report',
  templateUrl: 'patient-variant-report.component.html',
  styleUrls: ['patient-variant-report.component.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})
export class PatientVariantReportComponent {

  scrollToAssignmentDetails(): void {
    setTimeout(() => window.scrollTo('assignment-details'), 1);
  }

  variantReport: any = {
    "patientSequenceNumber": "11276",
    "patientStatus": "PENDING_CONFIRMATION",
    "step": 0,
    "concordance": "YES",
    "variantReportStatus": "CONFIRMED",
    "variantReportDate": "August 26, 2016 3:28 PM GMT",
    "biopsySequenceNumber": "T-16-000762",
    "molecularSequenceNumber": "MSN17772",
    "analysisId": "MSN17772_v1_92ad9833-e79a-4807-b1f3-6be88a0ab824",
    "mapd": "0.317",
    "cellularity": "1.000000",
    "fileReceivedDate": "August 25, 2016 10:13 PM GMT",
    "torrentVariantCallerVersion": "5.0-9"
  };

  assignmentReport: any = {
    "status": "CONFIRMED",
    "generationDate": "August 26, 2016 3:28 PM GMT",
    "confirmationDate": "August 26, 2016 4:36 PM GMT",
    "senttoECOGDate": "August 26, 2016 4:36 PM GMT",
    "receivedfromECOGDate": "August 26, 2016 4:36 PM GMT",
    "selectedTreatmentArm": "EAY131-Z1D (2016-05-31)",
    "assignmentReason": "The patient contains no matching variant. The patient's IHC MLH1 result match the IHC MLH1 rule for the treatment arm [RES:NEGATIVE, VAR:EMPTY]. The variant's level of evidence for the treatment arm is 0.9. The patient was selected for this treatment arm because it has the highest level of evidence of 0.9."
  };

  moiSummary: any = {
    "variantReportaMOI": "p.L755S (COSM14060)",
    "totalaMOIs": 1,
    "totalMOIs": 2,
    "totalConfirmedaMOIs": 1,
    "totalConfirmedMOIs": 2
  };

  assay: any = [
    {
      "ihc": "PTEN",
      "result": "POSITIVE",
      "comment": null
    },
    {
      "ihc": "MLH1",
      "result": "NEGATIVE",
      "comment": null
    },
    {
      "ihc": "MSH2",
      "result": "POSITIVE",
      "comment": null
    }
  ];

  snv: any = [
    {
      "confirm": true,
      "id": "COSM14060",
      "aMoi": "CURRENT(I)",
      "chrom": "chr17",
      "position": "37880220",
      "reference": "T",
      "alternative": "C",
      "alleleFreq": "0.3195",
      "funcGene": "ERBB2",
      "oncomineVariantClass": "Hotspot",
      "exon": "19",
      "function": "missense",
      "hgvs": "c.2264T&gt&C",
      "readDepth": "942",
      "transcript": "NM_004448.3",
      "protein": "p.Leu755Ser"
    }
  ];

  indels: any = [
    {
      "confirm": true,
      "id": null,
      "aMoi": null,
      "chrom": "chr10",
      "position": "8115840 ",
      "reference": "CT",
      "alternative": null,
      "alleleFreq": "0.3720",
      "funcGene": "GATA3",
      "oncomineVariantClass": "Deleterious",
      "exon": "6",
      "function": "frameshiftDeletion",
      "hgvs": "c.1189_1190delCT",
      "readDepth": "1946",
      "transcript": "NM_001002295.1",
      "protein": "p.Ser398fs"
    }
  ];

  assignmentReason: any = {
    "noVariantMatch": [
      {
        "treatmentArm": "EAY131-U (2016-05-31)",
        "reason": "The patient contains no matching variant."
      },
      {
        "treatmentArm": "EAY131-F (2016-05-31)",
        "reason": "The patient contains no matching variant."
      },
      {
        "treatmentArm": "EAY131-H (2016-05-31)",
        "reason": "The patient contains no matching variant."
      },
      {
        "treatmentArm": "EAY131-R (2016-05-31)",
        "reason": "The patient contains no matching variant."
      },
      {
        "treatmentArm": "EAY131-E (2016-05-31)",
        "reason": "The patient contains no matching variant."
      },
      {
        "treatmentArm": "EAY131-A (2016-05-31)",
        "reason": "The patient contains no matching variant."
      },
      {
        "treatmentArm": "EAY131-V (2016-05-31)",
        "reason": "The patient contains no matching variant."
      },
      {
        "treatmentArm": "EAY131-S1 (2016-05-31)",
        "reason": "The patient contains no matching variant."
      },
      {
        "treatmentArm": "EAY131-N (2016-05-31)",
        "reason": "The patient contains no matching variant."
      },
      {
        "treatmentArm": "EAY131-T (2016-05-31)",
        "reason": "The patient contains no matching variant."
      },
      {
        "treatmentArm": "EAY131-X (2016-01-20)",
        "reason": "The patient contains no matching variant."
      },
      {
        "treatmentArm": "EAY131-S2 (2016-05-31)",
        "reason": "The patient contains no matching variant."
      },
      {
        "treatmentArm": "EAY131-C2 (2016-05-31)",
        "reason": "The patient contains no matching variant."
      },
      {
        "treatmentArm": "EAY131-Z1A (2016-05-31)",
        "reason": "The patient contains no matching variant."
      },
      {
        "treatmentArm": "EAY131-P (2016-01-20)",
        "reason": "The patient contains no matching variant."
      },
      {
        "treatmentArm": "EAY131-C1 (2016-05-31)",
        "reason": "The patient contains no matching variant."
      },
      {
        "treatmentArm": "EAY131-W (2016-05-31)",
        "reason": "The patient contains no matching variant."
      },
      {
        "treatmentArm": "EAY131-G (2016-05-31)",
        "reason": "The patient contains no matching variant."
      },
      {
        "treatmentArm": "EAY131-Y (2016-05-31)",
        "reason": "The patient contains no matching variant."
      }
    ],
    "recordBasedExclusion": [
      {
        "treatmentArm": "EAY131-Q (2016-05-31)",
        "reason": "The patient is excluded from this treatment arm because the patient has disease(s) Invasive breast carcinoma."
      },
      {
        "treatmentArm": "EAY131-Z1B (2016-05-31)",
        "reason": "The patient is excluded from this treatment arm because the patient has disease(s) Invasive breast carcinoma."
      },
      {
        "treatmentArm": "EAY131-I (2016-05-31)",
        "reason": "The patient is excluded from this treatment arm because the patient has disease(s) Invasive breast carcinoma."
      }
    ],
    "levelOfEvidenceTieBreaker": [
      {
        "treatmentArm": "EAY131-B (2016-05-31)",
        "reason": "The patient and treatment arm match on variant identifier [COSM14060]. The variant's level of evidence for the treatment arm is 2.0. The patient was not selected for this treatment arm because its level of evidence is 2.0 and is lower than the one chosen."
      }
    ],
    "selected": [
      {
        "treatmentArm": "EAY131-Z1D (2016-05-31)",
        "reason": "The patient and treatment arm match on variant identifier [COSM14060]. The variant's level of evidence for the treatment arm is 2.0. The patient was not selected for this treatment arm because its level of evidence is 2.0 and is lower than the one chosen. The patient contains no matching variant. The patient's IHC MLH1 result match the IHC MLH1 rule for the treatment arm [RES:NEGATIVE, VAR:EMPTY]. The variant's level of evidence for the treatment arm is 0.9. The patient was selected for this treatment arm because it has the highest level of evidence of 0.9."
      }
    ]
  };

  assignmentHistory: any = [
    {
      "status": "REJECTED",
      "generationDate": "August 26, 2016 3:28 PM GMT",
      "confirmationDate": "August 26, 2016 4:36 PM GMT",
      "sentToEcogDate": "August 26, 2016 4:36 PM GMT",
      "receivedFromEcogDate": "August 26, 2016 4:36 PM GMT"
    }
  ];

}
