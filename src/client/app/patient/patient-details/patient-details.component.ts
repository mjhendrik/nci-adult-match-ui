import {
  Component,
  OnInit
} from '@angular/core';

import { routerTransition } from './../../shared/router.animations';
import { GmtPipe } from './../../shared/pipes/gmt.pipe';
import { PatientApiService } from '../patient-api.service';

/**
 * This class represents the lazy loaded PatientDetailsComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-patient-details',
  templateUrl: 'patient-details.component.html',
  styleUrls: ['patient-details.component.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' },
  providers: [GmtPipe]
})
export class PatientDetailsComponent implements OnInit {

  searchTerm: string = '';
  recordsPerPagePatients: number = 100;
  tablePatientsDefaultSort: string = 'patientSequenceNumber';
  tablePatientsData: any[];
  errorMessage: string;

  constructor(private patientApi: PatientApiService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    let gmt = new GmtPipe();
    this.patientApi.getPatientList()
      .subscribe(itemList => {
        this.tablePatientsData = itemList.map(x => {
          x.registrationDate = gmt.transform(x.registrationDate);
          x.offTrialDate = gmt.transform(x.offTrialDate);
          return x;
        });
      },
      error => this.errorMessage = <any>error
      );
  }

  data1: any = [
    {
      "dateCreated": 1491319369013,
      "biopsySequenceNumber": "BSN-3322",
      "concordance": null,
      "nextGenerationSequences": [
        {
          "ngsRunNumber": "0",
          "dateReceived": 1491319723041,
          "dateVerified": null,
          "status": "PENDING",
          "ionReporterResults": {
            "status": null,
            "message": null,
            "jobName": "Sample-1744-18-RNA_3c4f8194-ed16-41ad-a9c7-059c27642cdf",
            "molecularSequenceNumber": "Sample-1744-18-DNA",
            "ionReporterId": "IR_KTBOF",
            "ionReporterUrl": null,
            "singleNucleotideVariantsFileName": null,
            "indelVariantsFileName": null,
            "copyNumberVariantsFileName": null,
            "geneFusionsFileName": null,
            "nonHotspotRulesFileName": null,
            "dnaBamFilePath": "s3://IR_KTBOF/Sample-1744-18-DNA/Sample-1744-18-RNA_3c4f8194-ed16-41ad-a9c7-059c27642cdf/1_Sample-1744-18-DNA_IonXpress_015_rawlib.bam",
            "rnaBamFilePath": "s3://IR_KTBOF/Sample-1744-18-DNA/Sample-1744-18-RNA_3c4f8194-ed16-41ad-a9c7-059c27642cdf/1_Sample-1744-18-RNA_IonXpress_056_rawlib_merged.bam",
            "vcfFilePath": "s3://IR_KTBOF/Sample-1744-18-DNA/Sample-1744-18-RNA_3c4f8194-ed16-41ad-a9c7-059c27642cdf/Sample-1744-18-DNA_Sample-1744-18-RNA_Non-Filtered_2017-04-04_08:27:29.vcf",
            "qcFilePath": null,
            "variantReport": {
              "singleNucleotideVariants": [
                {
                  "type": "snv",
                  "metadata": {
                    "id": "65eecf29-73ac-41d6-8f9c-227174b78930",
                    "comment": null
                  },
                  "publicMedIds": null,
                  "geneName": "",
                  "chromosome": "chr4",
                  "position": "153249384",
                  "identifier": "COSM22965",
                  "reference": "C",
                  "alternative": "T",
                  "filter": "PASS",
                  "svType": "",
                  "description": null,
                  "protein": "p.Arg465His",
                  "transcript": "NM_033632.3",
                  "hgvs": "c.1394G>A",
                  "location": "exonic",
                  "readDepth": 1997,
                  "rare": false,
                  "alleleFrequency": 0.533801,
                  "flowAlternativeAlleleObservationCount": "1066",
                  "flowReferenceAlleleObservations": "931",
                  "referenceAlleleObservations": 1048,
                  "alternativeAlleleObservationCount": 1196,
                  "variantClass": null,
                  "levelOfEvidence": null,
                  "inclusion": true,
                  "armSpecific": false,
                  "gene": "FBXW7",
                  "oncominevariantclass": "Hotspot",
                  "exon": "9",
                  "function": "missense",
                  "proteinMatch": null,
                  "confirmed": false,
                  "matchingId": "COSM22965"
                }
              ],
              "indels": [

              ],
              "copyNumberVariants": [

              ],
              "geneFusions": [

              ],
              "unifiedGeneFusions": [

              ],
              "nonHotspotRules": [

              ],
              "createdDate": 1491319722107
            },
            "dnaBaiFilePath": null,
            "rnaBaiFilePath": null
          },
          "tvcVersion": "5.2-25",
          "oncomineVariantAnnotationToolVersion": "2.3.11",
          "confirmed": false
        }
      ],
      "assayMessages": [

      ],
      "pathologyReportMessages": [

      ],
      "mdAndersonMessages": [
        {
          "studyId": null,
          "patientSequenceNumber": "3322",
          "biopsySequenceNumber": "BSN-3322",
          "reportedDate": 1489035933216,
          "collectedDate": null,
          "status": null,
          "comment": null,
          "message": "SPECIMEN_RECEIVED"
        },
        {
          "studyId": null,
          "patientSequenceNumber": "3322",
          "biopsySequenceNumber": "BSN-3322",
          "reportedDate": 1491199533216,
          "collectedDate": null,
          "status": null,
          "comment": null,
          "message": "NUCLEIC_ACID_SENDOUT",
          "molecularSequenceNumber": "Sample-1744-18-DNA",
          "destinationSite": "Dartmouth",
          "trackingNumber": "987654321",
          "dnaConcentration": "0.55",
          "dnaVolume": "36",
          "cDnaConcentration": "",
          "cDnaVolume": ""
        }
      ],
      "failure": false,
      "associatedPatientStatus": "REGISTRATION",
      "confirmed": false,
      "assayMessagesWithResult": [

      ],
      "rbAssayRequired": false
    }
  ];

  data2: any = {
    "id": null,
    "patientSequenceNumber": "3322",
    "gender": "UNKNOWN",
    "ethnicity": "UNKNOWN",
    "races": [

    ],
    "patientRejoinTriggers": [

    ],
    "patientTriggers": [

    ],
    "biopsies": [

    ],
    "currentStepNumber": "0",
    "currentTreatmentArm": null,
    "currentPatientAssignmentLogic": null,
    "currentPatientStatus": "REGISTRATION",
    "patientAssignments": [

    ],
    "diseases": [

    ],
    "concordance": "U",
    "priorDrugs": [

    ],
    "exclusionCriterias": [

    ],
    "registrationDate": 1489035600216,
    "formattedPatientHistoryRows": [
      {
        "patientSequenceNumber": "3322",
        "confirmedBiopsySequenceNumber": null,
        "patientStatus": "REGISTRATION",
        "stepNumber": "0",
        "biopsies": [
          {
            "biopsySequenceNumber": "BSN-3322",
            "dateCreated": 1491319369013
          }
        ],
        "confirmedMolecularSequenceNumber": null,
        "confirmedJobName": null,
        "dateCreated": 1489035600216,
        "treatmentArmId": null,
        "treatmentArmVersion": null,
        "patientRejoinTriggers": null,
        "dateAssigned": null,
        "dateConfirmed": null,
        "dateRejected": null,
        "dateSentToECOG": null,
        "dateReceivedByECOG": null,
        "comment": "Patient registration for uploader test"
      }
    ],
    "outsideAssayConfirmationReportData": {
      "patientStatus": null,
      "stepNumber": null,
      "biopsySequenceNumber": null,
      "molecularSequenceNumber": null,
      "jobName": null,
      "dateAssigned": null,
      "dateConfirmed": null,
      "dateSentToECOG": null,
      "dateReceivedByECOG": null
    },
    "latestBiopsy": null,
    "successfulBiopsies": [

    ]
  };

}
