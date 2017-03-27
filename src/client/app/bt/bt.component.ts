import {
  Component,
  OnInit
} from '@angular/core';

import { routerTransition } from './../shared/router.animations';

/**
 * This class represents the lazy loaded BTComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-bt',
  templateUrl: 'bt.component.html',
  styleUrls: ['bt.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class BtComponent implements OnInit {

  searchtermTA: string = '';
  recordsPerPageTA: number;
  tableTADefaultSort: string;

  constructor() {

  }

  ngOnInit() {
    this.recordsPerPageTA = 100;
    this.tableTADefaultSort = 'treatmentArmId';

    for (let i = 0; i < this.tableTAData.length; i++) {
      this.tableTAData[i].dateSuspendedOrClosed = this.tableTAData[i].dateClosed == null ? this.tableTAData[i].dateSuspended : this.tableTAData[i].dateClosed;
    }

  }

  tableTAData: any = [
    {
      "treatmentArmId": "EAY131-S1",
      "treatmentArmName": "Trametinib in  NF1 mutation",
      "currentPatients": 0,
      "formerPatients": 0,
      "notEnrolledPatients": 0,
      "pendingPatients": 0,
      "treatmentArmStatus": "OPEN",
      "dateCreated": 1464806156852,
      "dateOpened": 1454562000000,
      "dateClosed": null,
      "dateSuspended": null
    },
    {
      "treatmentArmId": "EAY131-S2",
      "treatmentArmName": "Trametinib in  GNAQ or GNA11 mutation",
      "currentPatients": 0,
      "formerPatients": 0,
      "notEnrolledPatients": 0,
      "pendingPatients": 0,
      "treatmentArmStatus": "OPEN",
      "dateCreated": 1464806161538,
      "dateOpened": 1454562000000,
      "dateClosed": null,
      "dateSuspended": null
    },
    {
      "treatmentArmId": "EAY131-IX1",
      "treatmentArmName": "GDC-0032 in PIK3CA mutation",
      "currentPatients": 2,
      "formerPatients": 0,
      "notEnrolledPatients": 1,
      "pendingPatients": 0,
      "treatmentArmStatus": "SUSPENDED",
      "dateCreated": 1485544254420,
      "dateOpened": 1479790800000,
      "dateClosed": null,
      "dateSuspended": 1479790800001
    },
    {
      "treatmentArmId": "EAY131-A",
      "treatmentArmName": "Afatinib in EGFR activating",
      "currentPatients": 1,
      "formerPatients": 0,
      "notEnrolledPatients": 0,
      "pendingPatients": 0,
      "treatmentArmStatus": "OPEN",
      "dateCreated": 1479497898489,
      "dateOpened": 1439352000000,
      "dateClosed": null,
      "dateSuspended": null
    },
    {
      "treatmentArmId": "EAY131-B",
      "treatmentArmName": "Afatinib-Her2 activating mutation",
      "currentPatients": 0,
      "formerPatients": 0,
      "notEnrolledPatients": 0,
      "pendingPatients": 0,
      "treatmentArmStatus": "OPEN",
      "dateCreated": 1479497907369,
      "dateOpened": 1439352000000,
      "dateClosed": null,
      "dateSuspended": null
    },
    {
      "treatmentArmId": "EAY131-E",
      "treatmentArmName": "AZD9291 in TKI resistance EGFR T790M mutation",
      "currentPatients": 0,
      "formerPatients": 0,
      "notEnrolledPatients": 0,
      "pendingPatients": 0,
      "treatmentArmStatus": "OPEN",
      "dateCreated": 1479497920020,
      "dateOpened": 1439352000000,
      "dateClosed": null,
      "dateSuspended": null
    },
    {
      "treatmentArmId": "EAY131-F",
      "treatmentArmName": "Crizotinib in ALK translocation",
      "currentPatients": 6,
      "formerPatients": 0,
      "notEnrolledPatients": 1,
      "pendingPatients": 4,
      "treatmentArmStatus": "OPEN",
      "dateCreated": 1479497926327,
      "dateOpened": 1439352000000,
      "dateClosed": null,
      "dateSuspended": null
    },
    {
      "treatmentArmId": "EAY131-Z1A",
      "treatmentArmName": "NRAS Binimetinib Arm",
      "currentPatients": 0,
      "formerPatients": 0,
      "notEnrolledPatients": 0,
      "pendingPatients": 1,
      "treatmentArmStatus": "REACTIVATED",
      "dateCreated": 1484074930780,
      "dateOpened": 1464191152540,
      "dateClosed": null,
      "dateSuspended": 1464191152541
    },
    {
      "treatmentArmId": "EAY131-I",
      "treatmentArmName": "GDC-0032 in PIK3CA mutation",
      "currentPatients": 1,
      "formerPatients": 0,
      "notEnrolledPatients": 0,
      "pendingPatients": 0,
      "treatmentArmStatus": "CLOSED",
      "dateCreated": 1479497946995,
      "dateOpened": 1454562000000,
      "dateClosed": 1483246800000,
      "dateSuspended": null
    },
    {
      "treatmentArmId": "EAY131-G",
      "treatmentArmName": "Crizotinib-ROS1 translocation",
      "currentPatients": 0,
      "formerPatients": 0,
      "notEnrolledPatients": 0,
      "pendingPatients": 1,
      "treatmentArmStatus": "OPEN",
      "dateCreated": 1479497931808,
      "dateOpened": 1439352000000,
      "dateClosed": null,
      "dateSuspended": null
    },
    {
      "treatmentArmId": "EAY131-H",
      "treatmentArmName": "Trametinib/Dabrafenib in BRAF V600E/K",
      "currentPatients": 0,
      "formerPatients": 0,
      "notEnrolledPatients": 1,
      "pendingPatients": 1,
      "treatmentArmStatus": "OPEN",
      "dateCreated": 1479497940294,
      "dateOpened": 1439352000000,
      "dateClosed": null,
      "dateSuspended": null
    },
    {
      "treatmentArmId": "EAY131-N",
      "treatmentArmName": "GSK-236771 in tumor with PTEN mutation and PTEN IHC+",
      "currentPatients": 1,
      "formerPatients": 0,
      "notEnrolledPatients": 0,
      "pendingPatients": 1,
      "treatmentArmStatus": "SUSPENDED",
      "dateCreated": 1479756484184,
      "dateOpened": 1479756484363,
      "dateClosed": null,
      "dateSuspended": 1479272400000
    },
    {
      "treatmentArmId": "EAY131-R",
      "treatmentArmName": "Trametinib B-RAF other than V600K/E",
      "currentPatients": 0,
      "formerPatients": 0,
      "notEnrolledPatients": 0,
      "pendingPatients": 0,
      "treatmentArmStatus": "OPEN",
      "dateCreated": 1485543679388,
      "dateOpened": 1439352000000,
      "dateClosed": null,
      "dateSuspended": null
    },
    {
      "treatmentArmId": "EAY131-Q",
      "treatmentArmName": "TDM1 in HER2 Amplification",
      "currentPatients": 4,
      "formerPatients": 0,
      "notEnrolledPatients": 0,
      "pendingPatients": 6,
      "treatmentArmStatus": "OPEN",
      "dateCreated": 1484074970215,
      "dateOpened": 1439352000000,
      "dateClosed": null,
      "dateSuspended": null
    },
    {
      "treatmentArmId": "EAY131-Z1B",
      "treatmentArmName": "CCND1/2/3 Palbociclib Arm",
      "currentPatients": 0,
      "formerPatients": 0,
      "notEnrolledPatients": 0,
      "pendingPatients": 1,
      "treatmentArmStatus": "OPEN",
      "dateCreated": 1479857999528,
      "dateOpened": 1464667200000,
      "dateClosed": null,
      "dateSuspended": null
    },
    {
      "treatmentArmId": "EAY131-P",
      "treatmentArmName": "GSK2636771 in tumor with PTEN -IHC",
      "currentPatients": 1,
      "formerPatients": 0,
      "notEnrolledPatients": 0,
      "pendingPatients": 1,
      "treatmentArmStatus": "OPEN",
      "dateCreated": 1479743345993,
      "dateOpened": 1454562000000,
      "dateClosed": null,
      "dateSuspended": null
    },
    {
      "treatmentArmId": "EAY131-Z1D",
      "treatmentArmName": "Mismatch Repair Genes Nivolumab Arm",
      "currentPatients": 0,
      "formerPatients": 0,
      "notEnrolledPatients": 0,
      "pendingPatients": 2,
      "treatmentArmStatus": "OPEN",
      "dateCreated": 1484074944500,
      "dateOpened": 1464667200000,
      "dateClosed": null,
      "dateSuspended": null
    },
    {
      "treatmentArmId": "EAY131-V",
      "treatmentArmName": "Sunitinib in cKIT mutation",
      "currentPatients": 0,
      "formerPatients": 0,
      "notEnrolledPatients": 0,
      "pendingPatients": 0,
      "treatmentArmStatus": "OPEN",
      "dateCreated": 1481820735313,
      "dateOpened": 1439352000000,
      "dateClosed": null,
      "dateSuspended": null
    },
    {
      "treatmentArmId": "EAY131-U",
      "treatmentArmName": "VS-6063( defactinib) in tumor with NF2 loss",
      "currentPatients": 0,
      "formerPatients": 0,
      "notEnrolledPatients": 0,
      "pendingPatients": 1,
      "treatmentArmStatus": "OPEN",
      "dateCreated": 1464806167827,
      "dateOpened": 1439352000000,
      "dateClosed": null,
      "dateSuspended": null
    },
    {
      "treatmentArmId": "EAY131-T",
      "treatmentArmName": "Vismodegib in Smoothened or Patched I mutations",
      "currentPatients": 0,
      "formerPatients": 0,
      "notEnrolledPatients": 0,
      "pendingPatients": 1,
      "treatmentArmStatus": "OPEN",
      "dateCreated": 1465580027324,
      "dateOpened": 1454562000000,
      "dateClosed": null,
      "dateSuspended": null
    },
    {
      "treatmentArmId": "EAY131-Z1DX1",
      "treatmentArmName": "Mismatch Repair Genes Nivolumab Arm",
      "currentPatients": 0,
      "formerPatients": 0,
      "notEnrolledPatients": 0,
      "pendingPatients": 0,
      "treatmentArmStatus": "PENDING",
      "dateCreated": 1484084269355,
      "dateOpened": null,
      "dateClosed": null,
      "dateSuspended": null
    },
    {
      "treatmentArmId": "EAY131-Y",
      "treatmentArmName": "AKT AZD5363 Arm",
      "currentPatients": 0,
      "formerPatients": 0,
      "notEnrolledPatients": 0,
      "pendingPatients": 1,
      "treatmentArmStatus": "PENDING",
      "dateCreated": 1485544508005,
      "dateOpened": null,
      "dateClosed": null,
      "dateSuspended": null
    },
    {
      "treatmentArmId": "EAY131-X",
      "treatmentArmName": "Dasatinib in DDR2 mutations",
      "currentPatients": 1,
      "formerPatients": 0,
      "notEnrolledPatients": 0,
      "pendingPatients": 1,
      "treatmentArmStatus": "OPEN",
      "dateCreated": 1461081860184,
      "dateOpened": 1456376400000,
      "dateClosed": null,
      "dateSuspended": null
    },
    {
      "treatmentArmId": "EAY131-W",
      "treatmentArmName": "FGFR AZD4547 Arm",
      "currentPatients": 1,
      "formerPatients": 0,
      "notEnrolledPatients": 1,
      "pendingPatients": 2,
      "treatmentArmStatus": "CLOSED",
      "dateCreated": 1485544746085,
      "dateOpened": 1464667200000,
      "dateClosed": 1481691600000,
      "dateSuspended": null
    },
    {
      "treatmentArmId": "EAY131-QX1",
      "treatmentArmName": "TDM1 in HER2 Amplification",
      "currentPatients": 0,
      "formerPatients": 0,
      "notEnrolledPatients": 0,
      "pendingPatients": 0,
      "treatmentArmStatus": "PENDING",
      "dateCreated": 1484168695684,
      "dateOpened": null,
      "dateClosed": null,
      "dateSuspended": null
    },
    {
      "treatmentArmId": "EAY131-C1",
      "treatmentArmName": "MET Crizotinib Arm/MET Amplification",
      "currentPatients": 1,
      "formerPatients": 0,
      "notEnrolledPatients": 0,
      "pendingPatients": 0,
      "treatmentArmStatus": "OPEN",
      "dateCreated": 1479243585685,
      "dateOpened": 1464667200000,
      "dateClosed": null,
      "dateSuspended": null
    },
    {
      "treatmentArmId": "EAY131-WX1",
      "treatmentArmName": "FGFR AZD4547 Arm",
      "currentPatients": 2,
      "formerPatients": 0,
      "notEnrolledPatients": 0,
      "pendingPatients": 0,
      "treatmentArmStatus": "SUSPENDED",
      "dateCreated": 1485544627335,
      "dateOpened": 1479790800000,
      "dateClosed": null,
      "dateSuspended": 1479790800001
    },
    {
      "treatmentArmId": "EAY131-C2",
      "treatmentArmName": "MET Crizotinib Arm/MET exon 14 skipping",
      "currentPatients": 1,
      "formerPatients": 0,
      "notEnrolledPatients": 0,
      "pendingPatients": 0,
      "treatmentArmStatus": "OPEN",
      "dateCreated": 1479497912984,
      "dateOpened": 1464667200000,
      "dateClosed": null,
      "dateSuspended": null
    },
    {
      "treatmentArmId": "EAY131-Z1AX1",
      "treatmentArmName": "NRAS Binimetinib Arm",
      "currentPatients": 0,
      "formerPatients": 0,
      "notEnrolledPatients": 0,
      "pendingPatients": 0,
      "treatmentArmStatus": "PENDING",
      "dateCreated": 1484281207945,
      "dateOpened": null,
      "dateClosed": null,
      "dateSuspended": null
    }
  ]

  tableBTData: any = [
    {
      "patientSequenceNumber": "10402",
      "biopsies": [
        {
          "biopsySequenceNumber": "T-16-000008",
          "specimenReceivedDate": 1462468345727,
          "specimenFailureDate": null,
          "ptenOrderDate": 1463179457963,
          "ptenResultDate": 1463180173007,
          "pathologyReviewdate": null,
          "samples": [
            {
              "molecularSequenceNumber": "MSN2105",
              "lab": "MoCha",
              "dnaShippedDate": 1462550578015,
              "trackingNumber": "794692795960"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10402",
              "biopsySequenceNumber": "T-16-000008",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INACTIVATED"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10402",
              "biopsySequenceNumber": "T-16-000008",
              "biomarker": "MSH2",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INACTIVATED"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10402",
              "biopsySequenceNumber": "T-16-000008",
              "biomarker": "MLH1",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INACTIVATED"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10402",
              "biopsySequenceNumber": "T-16-000008",
              "biomarker": "PTEN",
              "result": "INDETERMINATE",
              "orderedDate": 1462468472003,
              "reportedDate": 1462468864000,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10621",
      "biopsies": [
        {
          "biopsySequenceNumber": "T-16-000031",
          "specimenReceivedDate": 1472571582893,
          "specimenFailureDate": 1479758775743,
          "ptenOrderDate": 1472578078094,
          "ptenResultDate": 1472578665052,
          "pathologyReviewdate": null,
          "samples": [
            
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10621",
              "biopsySequenceNumber": "T-16-000031",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10621",
              "biopsySequenceNumber": "T-16-000031",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1472578078097,
              "reportedDate": 1472578665052,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10621",
              "biopsySequenceNumber": "T-16-000031",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1472578078953,
              "reportedDate": 1472578665052,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10621",
              "biopsySequenceNumber": "T-16-000031",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1472578078094,
              "reportedDate": 1472578665052,
              "requestedDate": null,
              "comment": null
            }
          ]
        },
        {
          "biopsySequenceNumber": "T-16-000044",
          "specimenReceivedDate": 1479758761054,
          "specimenFailureDate": 1479760274770,
          "ptenOrderDate": null,
          "ptenResultDate": null,
          "pathologyReviewdate": null,
          "samples": [
            
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10621",
              "biopsySequenceNumber": "T-16-000044",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": null
            }
          ]
        },
        {
          "biopsySequenceNumber": "T-16-000045",
          "specimenReceivedDate": 1479760227067,
          "specimenFailureDate": null,
          "ptenOrderDate": 1479760535008,
          "ptenResultDate": 1479760595008,
          "pathologyReviewdate": null,
          "samples": [
            
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10621",
              "biopsySequenceNumber": "T-16-000045",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10621",
              "biopsySequenceNumber": "T-16-000045",
              "biomarker": "MSH2",
              "result": "INDETERMINATE",
              "orderedDate": 1479760535008,
              "reportedDate": 1479760595008,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10621",
              "biopsySequenceNumber": "T-16-000045",
              "biomarker": "MLH1",
              "result": "INDETERMINATE",
              "orderedDate": 1479760535008,
              "reportedDate": 1479760595008,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10621",
              "biopsySequenceNumber": "T-16-000045",
              "biomarker": "PTEN",
              "result": "INDETERMINATE",
              "orderedDate": 1479760535008,
              "reportedDate": 1479760595008,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10625",
      "biopsies": [
        {
          "biopsySequenceNumber": "T-16-000046",
          "specimenReceivedDate": 1479828440026,
          "specimenFailureDate": null,
          "ptenOrderDate": 1479831136083,
          "ptenResultDate": 1479831196083,
          "pathologyReviewdate": null,
          "samples": [
            
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10625",
              "biopsySequenceNumber": "T-16-000046",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10625",
              "biopsySequenceNumber": "T-16-000046",
              "biomarker": "MSH2",
              "result": null,
              "orderedDate": 1479831016083,
              "reportedDate": null,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10625",
              "biopsySequenceNumber": "T-16-000046",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1479831136083,
              "reportedDate": 1479831196083,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10625",
              "biopsySequenceNumber": "T-16-000046",
              "biomarker": "MLH1",
              "result": null,
              "orderedDate": 1479831016083,
              "reportedDate": null,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10625",
              "biopsySequenceNumber": "T-16-000046",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1479831136083,
              "reportedDate": 1479831196083,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10625",
              "biopsySequenceNumber": "T-16-000046",
              "biomarker": "PTEN",
              "result": null,
              "orderedDate": 1479831016083,
              "reportedDate": null,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10625",
              "biopsySequenceNumber": "T-16-000046",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1479831136083,
              "reportedDate": 1479831196083,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10405",
      "biopsies": [
        {
          "biopsySequenceNumber": "T-16-000011",
          "specimenReceivedDate": 1463784009913,
          "specimenFailureDate": null,
          "ptenOrderDate": 1464030107073,
          "ptenResultDate": 1464030278097,
          "pathologyReviewdate": null,
          "samples": [
            {
              "molecularSequenceNumber": "MSN2147",
              "lab": "Yale",
              "dnaShippedDate": 1464404342001,
              "trackingNumber": "783229236496"
            },
            {
              "molecularSequenceNumber": "MSN2303",
              "lab": "MDACC",
              "dnaShippedDate": 1487788581573,
              "trackingNumber": "Local"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10405",
              "biopsySequenceNumber": "T-16-000011",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INACTIVATED"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10405",
              "biopsySequenceNumber": "T-16-000011",
              "biomarker": "MSH2",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INACTIVATED"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10405",
              "biopsySequenceNumber": "T-16-000011",
              "biomarker": "MLH1",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INACTIVATED"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10405",
              "biopsySequenceNumber": "T-16-000011",
              "biomarker": "PTEN",
              "result": "INDETERMINATE",
              "orderedDate": 1464030107073,
              "reportedDate": 1464030278097,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10403",
      "biopsies": [
        {
          "biopsySequenceNumber": "T-16-000009",
          "specimenReceivedDate": 1462471544847,
          "specimenFailureDate": 1462552677667,
          "ptenOrderDate": 1462471656068,
          "ptenResultDate": 1462474517072,
          "pathologyReviewdate": null,
          "samples": [
            
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10403",
              "biopsySequenceNumber": "T-16-000009",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INACTIVATED"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10403",
              "biopsySequenceNumber": "T-16-000009",
              "biomarker": "MSH2",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INACTIVATED"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10403",
              "biopsySequenceNumber": "T-16-000009",
              "biomarker": "MLH1",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INACTIVATED"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10403",
              "biopsySequenceNumber": "T-16-000009",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1462471645057,
              "reportedDate": 1462473878663,
              "requestedDate": null,
              "comment": null
            }
          ]
        },
        {
          "biopsySequenceNumber": "T-16-000017",
          "specimenReceivedDate": 1464039237037,
          "specimenFailureDate": null,
          "ptenOrderDate": 1464041146086,
          "ptenResultDate": null,
          "pathologyReviewdate": null,
          "samples": [
            {
              "molecularSequenceNumber": "MSN2188",
              "lab": "MoCha",
              "dnaShippedDate": 1464403380717,
              "trackingNumber": "794601887385"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10403",
              "biopsySequenceNumber": "T-16-000017",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INACTIVATED"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10403",
              "biopsySequenceNumber": "T-16-000017",
              "biomarker": "MSH2",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INACTIVATED"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10403",
              "biopsySequenceNumber": "T-16-000017",
              "biomarker": "MLH1",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INACTIVATED"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10403",
              "biopsySequenceNumber": "T-16-000017",
              "biomarker": "PTEN",
              "result": null,
              "orderedDate": 1464041146086,
              "reportedDate": null,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10373",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1497460269071,
          "ptenResultDate": 1497460329071,
          "pathologyReviewdate": 1489493589071,
          "samples": [
            {
              "molecularSequenceNumber": "10373_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1489498399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10373",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": "NEGATIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10373",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10373",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10373",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1489511469071,
              "reportedDate": 1489511529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10645",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1497460269071,
          "ptenResultDate": 1497460329071,
          "pathologyReviewdate": 1489493589071,
          "samples": [
            {
              "molecularSequenceNumber": "10645_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1489498399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10645",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10645",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10645",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10645",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1489511469071,
              "reportedDate": 1489511529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10400",
      "biopsies": [
        {
          "biopsySequenceNumber": "T-16-000006",
          "specimenReceivedDate": 1461881402041,
          "specimenFailureDate": null,
          "ptenOrderDate": 1462216901052,
          "ptenResultDate": 1463669752033,
          "pathologyReviewdate": null,
          "samples": [
            {
              "molecularSequenceNumber": "MSN2089",
              "lab": "MGH",
              "dnaShippedDate": 1461886922036,
              "trackingNumber": "794689815384"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10400",
              "biopsySequenceNumber": "T-16-000006",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INACTIVATED"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10400",
              "biopsySequenceNumber": "T-16-000006",
              "biomarker": "MSH2",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INACTIVATED"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10400",
              "biopsySequenceNumber": "T-16-000006",
              "biomarker": "MLH1",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INACTIVATED"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10400",
              "biopsySequenceNumber": "T-16-000006",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1461883155017,
              "reportedDate": 1463176154018,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10404",
      "biopsies": [
        {
          "biopsySequenceNumber": "T-16-000010",
          "specimenReceivedDate": 1462907743037,
          "specimenFailureDate": null,
          "ptenOrderDate": 1464028402075,
          "ptenResultDate": 1464028978019,
          "pathologyReviewdate": null,
          "samples": [
            
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10404",
              "biopsySequenceNumber": "T-16-000010",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INACTIVATED"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10404",
              "biopsySequenceNumber": "T-16-000010",
              "biomarker": "MSH2",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INACTIVATED"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10404",
              "biopsySequenceNumber": "T-16-000010",
              "biomarker": "MLH1",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INACTIVATED"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10404",
              "biopsySequenceNumber": "T-16-000010",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1464028402075,
              "reportedDate": 1464028978019,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10636",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1497460269071,
          "ptenResultDate": 1497460329071,
          "pathologyReviewdate": 1489493589071,
          "samples": [
            {
              "molecularSequenceNumber": "10636_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1489498399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10636",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10636",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10636",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10636",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1489511469071,
              "reportedDate": 1489511529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10401",
      "biopsies": [
        {
          "biopsySequenceNumber": "T-16-000007",
          "specimenReceivedDate": 1462310479002,
          "specimenFailureDate": null,
          "ptenOrderDate": 1462548155004,
          "ptenResultDate": 1462548476703,
          "pathologyReviewdate": null,
          "samples": [
            {
              "molecularSequenceNumber": "MSN2097D",
              "lab": "MGH",
              "dnaShippedDate": 1462490909913,
              "trackingNumber": "794692143153"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10401",
              "biopsySequenceNumber": "T-16-000007",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INACTIVATED"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10401",
              "biopsySequenceNumber": "T-16-000007",
              "biomarker": "MSH2",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INACTIVATED"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10401",
              "biopsySequenceNumber": "T-16-000007",
              "biomarker": "MLH1",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INACTIVATED"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10401",
              "biopsySequenceNumber": "T-16-000007",
              "biomarker": "PTEN",
              "result": "NEGATIVE",
              "orderedDate": 1462465516048,
              "reportedDate": 1462467452013,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10377",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00007",
          "specimenReceivedDate": 1449922209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1449940269071,
          "ptenResultDate": 1449940329071,
          "pathologyReviewdate": 1449922389071,
          "samples": [
            {
              "molecularSequenceNumber": "10377_127",
              "lab": "Boston",
              "dnaShippedDate": 1449927199419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10377",
              "biopsySequenceNumber": "N-15-00007",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INACTIVATED"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10377",
              "biopsySequenceNumber": "N-15-00007",
              "biomarker": "MSH2",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INACTIVATED"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10377",
              "biopsySequenceNumber": "N-15-00007",
              "biomarker": "MLH1",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INACTIVATED"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10377",
              "biopsySequenceNumber": "N-15-00007",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1449940269071,
              "reportedDate": 1449940329071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10376",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1449922209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1449940269071,
          "ptenResultDate": 1449940329071,
          "pathologyReviewdate": 1449922389071,
          "samples": [
            {
              "molecularSequenceNumber": "10376_123",
              "lab": "Boston",
              "dnaShippedDate": 1449927199419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10376",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INACTIVATED"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10376",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INACTIVATED"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10376",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INACTIVATED"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10376",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1449940269071,
              "reportedDate": 1449940329071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "20008",
      "biopsies": [
        {
          "biopsySequenceNumber": "BSN-2008",
          "specimenReceivedDate": 1449922209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1449940269071,
          "ptenResultDate": 1449940329071,
          "pathologyReviewdate": 1449922389071,
          "samples": [
            {
              "molecularSequenceNumber": "20008_MSN",
              "lab": "Boston",
              "dnaShippedDate": 1449927199419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "20008",
              "biopsySequenceNumber": "BSN-2008",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INACTIVATED"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "20008",
              "biopsySequenceNumber": "BSN-2008",
              "biomarker": "MSH2",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INACTIVATED"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "20008",
              "biopsySequenceNumber": "BSN-2008",
              "biomarker": "MLH1",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INACTIVATED"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "20008",
              "biopsySequenceNumber": "BSN-2008",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1449940269071,
              "reportedDate": 1449940329071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "20001",
      "biopsies": [
        {
          "biopsySequenceNumber": "BSN-2001",
          "specimenReceivedDate": 1449922209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1449940269071,
          "ptenResultDate": 1449940329071,
          "pathologyReviewdate": 1449922389071,
          "samples": [
            {
              "molecularSequenceNumber": "20001_MSN",
              "lab": "Boston",
              "dnaShippedDate": 1449927199419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "20001",
              "biopsySequenceNumber": "BSN-2001",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INACTIVATED"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "20001",
              "biopsySequenceNumber": "BSN-2001",
              "biomarker": "MSH2",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INACTIVATED"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "20001",
              "biopsySequenceNumber": "BSN-2001",
              "biomarker": "MLH1",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INACTIVATED"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "20001",
              "biopsySequenceNumber": "BSN-2001",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1449940269071,
              "reportedDate": 1449940329071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "20002",
      "biopsies": [
        {
          "biopsySequenceNumber": "BSN-2002",
          "specimenReceivedDate": 1449922209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1449940269071,
          "ptenResultDate": 1449940329071,
          "pathologyReviewdate": 1449922389071,
          "samples": [
            {
              "molecularSequenceNumber": "20002_MSN",
              "lab": "Boston",
              "dnaShippedDate": 1449927199419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "20002",
              "biopsySequenceNumber": "BSN-2002",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INACTIVATED"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "20002",
              "biopsySequenceNumber": "BSN-2002",
              "biomarker": "MSH2",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INACTIVATED"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "20002",
              "biopsySequenceNumber": "BSN-2002",
              "biomarker": "MLH1",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INACTIVATED"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "20002",
              "biopsySequenceNumber": "BSN-2002",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1449940269071,
              "reportedDate": 1449940329071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "20003",
      "biopsies": [
        {
          "biopsySequenceNumber": "BSN-2003",
          "specimenReceivedDate": 1449922209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1449940269071,
          "ptenResultDate": 1449940329071,
          "pathologyReviewdate": 1449922389071,
          "samples": [
            {
              "molecularSequenceNumber": "20003_MSN",
              "lab": "Boston",
              "dnaShippedDate": 1449927199419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "20003",
              "biopsySequenceNumber": "BSN-2003",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INACTIVATED"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "20003",
              "biopsySequenceNumber": "BSN-2003",
              "biomarker": "MSH2",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INACTIVATED"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "20003",
              "biopsySequenceNumber": "BSN-2003",
              "biomarker": "MLH1",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INACTIVATED"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "20003",
              "biopsySequenceNumber": "BSN-2003",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1449940269071,
              "reportedDate": 1449940329071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "20004",
      "biopsies": [
        {
          "biopsySequenceNumber": "BSN-2004",
          "specimenReceivedDate": 1449922209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1449940269071,
          "ptenResultDate": 1449940329071,
          "pathologyReviewdate": 1449922389071,
          "samples": [
            {
              "molecularSequenceNumber": "20004_MSN",
              "lab": "Boston",
              "dnaShippedDate": 1449927199419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "20004",
              "biopsySequenceNumber": "BSN-2004",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INACTIVATED"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "20004",
              "biopsySequenceNumber": "BSN-2004",
              "biomarker": "MSH2",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INACTIVATED"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "20004",
              "biopsySequenceNumber": "BSN-2004",
              "biomarker": "MLH1",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INACTIVATED"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "20004",
              "biopsySequenceNumber": "BSN-2004",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1449940269071,
              "reportedDate": 1449940329071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "20005",
      "biopsies": [
        {
          "biopsySequenceNumber": "BSN-2005",
          "specimenReceivedDate": 1449922209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1449940269071,
          "ptenResultDate": 1449940329071,
          "pathologyReviewdate": 1449922389071,
          "samples": [
            {
              "molecularSequenceNumber": "20005_MSN",
              "lab": "Boston",
              "dnaShippedDate": 1449927199419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "20005",
              "biopsySequenceNumber": "BSN-2005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INACTIVATED"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "20005",
              "biopsySequenceNumber": "BSN-2005",
              "biomarker": "MSH2",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INACTIVATED"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "20005",
              "biopsySequenceNumber": "BSN-2005",
              "biomarker": "MLH1",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INACTIVATED"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "20005",
              "biopsySequenceNumber": "BSN-2005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1449940269071,
              "reportedDate": 1449940329071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "20006",
      "biopsies": [
        {
          "biopsySequenceNumber": "BSN-2006",
          "specimenReceivedDate": 1449922209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1449940269071,
          "ptenResultDate": 1449940329071,
          "pathologyReviewdate": 1449922389071,
          "samples": [
            {
              "molecularSequenceNumber": "20006_MSN",
              "lab": "Boston",
              "dnaShippedDate": 1449927199419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "20006",
              "biopsySequenceNumber": "BSN-2006",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INACTIVATED"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "20006",
              "biopsySequenceNumber": "BSN-2006",
              "biomarker": "MSH2",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INACTIVATED"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "20006",
              "biopsySequenceNumber": "BSN-2006",
              "biomarker": "MLH1",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INACTIVATED"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "20006",
              "biopsySequenceNumber": "BSN-2006",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1449940269071,
              "reportedDate": 1449940329071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "20007",
      "biopsies": [
        {
          "biopsySequenceNumber": "BSN-2007",
          "specimenReceivedDate": 1449922209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1449940269071,
          "ptenResultDate": 1449940329071,
          "pathologyReviewdate": 1449922389071,
          "samples": [
            {
              "molecularSequenceNumber": "20007_MSN",
              "lab": "Boston",
              "dnaShippedDate": 1449927199419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "20007",
              "biopsySequenceNumber": "BSN-2007",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INACTIVATED"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "20007",
              "biopsySequenceNumber": "BSN-2007",
              "biomarker": "MSH2",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INACTIVATED"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "20007",
              "biopsySequenceNumber": "BSN-2007",
              "biomarker": "MLH1",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INACTIVATED"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "20007",
              "biopsySequenceNumber": "BSN-2007",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1449940269071,
              "reportedDate": 1449940329071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "20009",
      "biopsies": [
        {
          "biopsySequenceNumber": "BSN-2009",
          "specimenReceivedDate": 1449922209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1449940269071,
          "ptenResultDate": 1449940329071,
          "pathologyReviewdate": 1449922389071,
          "samples": [
            {
              "molecularSequenceNumber": "20009_MSN",
              "lab": "Boston",
              "dnaShippedDate": 1449927199419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "20009",
              "biopsySequenceNumber": "BSN-2009",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INACTIVATED"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "20009",
              "biopsySequenceNumber": "BSN-2009",
              "biomarker": "MSH2",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INACTIVATED"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "20009",
              "biopsySequenceNumber": "BSN-2009",
              "biomarker": "MLH1",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INACTIVATED"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "20009",
              "biopsySequenceNumber": "BSN-2009",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1449940269071,
              "reportedDate": 1449940329071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "20010",
      "biopsies": [
        {
          "biopsySequenceNumber": "BSN-2010",
          "specimenReceivedDate": 1449922209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1449940269071,
          "ptenResultDate": 1449940329071,
          "pathologyReviewdate": 1449922389071,
          "samples": [
            {
              "molecularSequenceNumber": "20010_MSN",
              "lab": "Boston",
              "dnaShippedDate": 1449927199419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "20010",
              "biopsySequenceNumber": "BSN-2010",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INACTIVATED"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "20010",
              "biopsySequenceNumber": "BSN-2010",
              "biomarker": "MSH2",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INACTIVATED"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "20010",
              "biopsySequenceNumber": "BSN-2010",
              "biomarker": "MLH1",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INACTIVATED"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "20010",
              "biopsySequenceNumber": "BSN-2010",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1449940269071,
              "reportedDate": 1449940329071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10640",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1497460269071,
          "ptenResultDate": 1497460329071,
          "pathologyReviewdate": 1489493589071,
          "samples": [
            {
              "molecularSequenceNumber": "10640_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1489498399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10640",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10640",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10640",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10640",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1489511469071,
              "reportedDate": 1489511529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10641",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1497460269071,
          "ptenResultDate": 1497460329071,
          "pathologyReviewdate": 1489493589071,
          "samples": [
            {
              "molecularSequenceNumber": "10641_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1489498399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10641",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10641",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10641",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10641",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1489511469071,
              "reportedDate": 1489511529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10642",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1497460269071,
          "ptenResultDate": 1497460329071,
          "pathologyReviewdate": 1489493589071,
          "samples": [
            {
              "molecularSequenceNumber": "10642_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1489498399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10642",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10642",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10642",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10642",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1489511469071,
              "reportedDate": 1489511529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10643",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1497460269071,
          "ptenResultDate": 1497460329071,
          "pathologyReviewdate": 1489493589071,
          "samples": [
            {
              "molecularSequenceNumber": "10643_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1489498399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10643",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10643",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10643",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10643",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1489511469071,
              "reportedDate": 1489511529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10644",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1497460269071,
          "ptenResultDate": 1497460329071,
          "pathologyReviewdate": 1489493589071,
          "samples": [
            {
              "molecularSequenceNumber": "10644_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1489498399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10644",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10644",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10644",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10644",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1489511469071,
              "reportedDate": 1489511529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10649",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1497460269071,
          "ptenResultDate": 1497460329071,
          "pathologyReviewdate": 1489493589071,
          "samples": [
            {
              "molecularSequenceNumber": "10649_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1489498399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10649",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10649",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10649",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10649",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1489511469071,
              "reportedDate": 1489511529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10647",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1497460269071,
          "ptenResultDate": 1497460329071,
          "pathologyReviewdate": 1489493589071,
          "samples": [
            {
              "molecularSequenceNumber": "10647_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1489498399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10647",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10647",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10647",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10647",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1489511469071,
              "reportedDate": 1489511529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10648",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1497460269071,
          "ptenResultDate": 1497460329071,
          "pathologyReviewdate": 1489493589071,
          "samples": [
            {
              "molecularSequenceNumber": "10648_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1489498399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10648",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10648",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "NEGATIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10648",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "NEGATIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10648",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1489511469071,
              "reportedDate": 1489511529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10374",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1497460269071,
          "ptenResultDate": 1497460329071,
          "pathologyReviewdate": 1489493589071,
          "samples": [
            {
              "molecularSequenceNumber": "10374_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1489498399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10374",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10374",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10374",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "NEGATIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10374",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1489511469071,
              "reportedDate": 1489511529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10639",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1497460269071,
          "ptenResultDate": 1497460329071,
          "pathologyReviewdate": 1489493589071,
          "samples": [
            {
              "molecularSequenceNumber": "10639_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1489498399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10639",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10639",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10639",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10639",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1489511469071,
              "reportedDate": 1489511529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10646",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1497460269071,
          "ptenResultDate": 1497460329071,
          "pathologyReviewdate": 1489493589071,
          "samples": [
            {
              "molecularSequenceNumber": "10646_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1489498399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10646",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10646",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10646",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10646",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1489511469071,
              "reportedDate": 1489511529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10637",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1497460269071,
          "ptenResultDate": 1497460329071,
          "pathologyReviewdate": 1489493589071,
          "samples": [
            {
              "molecularSequenceNumber": "10637_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1489498399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10637",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10637",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10637",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10637",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1489511469071,
              "reportedDate": 1489511529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10638",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1497460269071,
          "ptenResultDate": 1497460329071,
          "pathologyReviewdate": 1489493589071,
          "samples": [
            {
              "molecularSequenceNumber": "10638_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1489498399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10638",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10638",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10638",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10638",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1489511469071,
              "reportedDate": 1489511529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10657",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1497460269071,
          "ptenResultDate": 1497460329071,
          "pathologyReviewdate": 1489493589071,
          "samples": [
            {
              "molecularSequenceNumber": "10657_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1489498399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10657",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10657",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10657",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10657",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1489511469071,
              "reportedDate": 1489511529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10656",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1497460269071,
          "ptenResultDate": 1497460329071,
          "pathologyReviewdate": 1489493589071,
          "samples": [
            {
              "molecularSequenceNumber": "10656_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1489498399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10656",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10656",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10656",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10656",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1489511469071,
              "reportedDate": 1489511529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10372",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1497460269071,
          "ptenResultDate": 1497460329071,
          "pathologyReviewdate": 1489493589071,
          "samples": [
            {
              "molecularSequenceNumber": "10372_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1489498399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10372",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10372",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10372",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10372",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1489511469071,
              "reportedDate": 1489511529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10678",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1497460269071,
          "ptenResultDate": 1497460329071,
          "pathologyReviewdate": 1489493589071,
          "samples": [
            {
              "molecularSequenceNumber": "10678_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1489498399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10678",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10678",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10678",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10678",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1489511469071,
              "reportedDate": 1489511529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10679",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1497460269071,
          "ptenResultDate": 1497460329071,
          "pathologyReviewdate": 1489493589071,
          "samples": [
            {
              "molecularSequenceNumber": "10679_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1489498399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10679",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10679",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10679",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10679",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1489511469071,
              "reportedDate": 1489511529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10680",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1497460269071,
          "ptenResultDate": 1497460329071,
          "pathologyReviewdate": 1489493589071,
          "samples": [
            {
              "molecularSequenceNumber": "10680_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1489498399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10680",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10680",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10680",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10680",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1489511469071,
              "reportedDate": 1489511529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10681",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1497460269071,
          "ptenResultDate": 1497460329071,
          "pathologyReviewdate": 1489493589071,
          "samples": [
            {
              "molecularSequenceNumber": "10681_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1489498399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10681",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10681",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10681",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10681",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1489511469071,
              "reportedDate": 1489511529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10682",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1497460269071,
          "ptenResultDate": 1497460329071,
          "pathologyReviewdate": 1489493589071,
          "samples": [
            {
              "molecularSequenceNumber": "10682_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1489498399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10682",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10682",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10682",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10682",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1489511469071,
              "reportedDate": 1489511529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10683",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1497460269071,
          "ptenResultDate": 1497460329071,
          "pathologyReviewdate": 1489493589071,
          "samples": [
            {
              "molecularSequenceNumber": "10683_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1489498399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10683",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10683",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10683",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10683",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1489511469071,
              "reportedDate": 1489511529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10684",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1497460269071,
          "ptenResultDate": 1497460329071,
          "pathologyReviewdate": 1489493589071,
          "samples": [
            {
              "molecularSequenceNumber": "10684_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1489498399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10684",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10684",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10684",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10684",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1489511469071,
              "reportedDate": 1489511529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10685",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1497460269071,
          "ptenResultDate": 1497460329071,
          "pathologyReviewdate": 1489493589071,
          "samples": [
            {
              "molecularSequenceNumber": "10685_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1489498399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10685",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10685",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10685",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10685",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1489511469071,
              "reportedDate": 1489511529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10686",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1497460269071,
          "ptenResultDate": 1497460329071,
          "pathologyReviewdate": 1489493589071,
          "samples": [
            {
              "molecularSequenceNumber": "10686_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1489498399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10686",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10686",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10686",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10686",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1489511469071,
              "reportedDate": 1489511529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10687",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1497460269071,
          "ptenResultDate": 1497460329071,
          "pathologyReviewdate": 1489493589071,
          "samples": [
            {
              "molecularSequenceNumber": "10687_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1489498399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10687",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10687",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10687",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10687",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1489511469071,
              "reportedDate": 1489511529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10708",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1497460269071,
          "ptenResultDate": 1497460329071,
          "pathologyReviewdate": 1489493589071,
          "samples": [
            {
              "molecularSequenceNumber": "10708_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1489498399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10708",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10708",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "NEGATIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10708",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "NEGATIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10708",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "NEGATIVE",
              "orderedDate": 1489511469071,
              "reportedDate": 1489511529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10709",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1497460269071,
          "ptenResultDate": 1497460329071,
          "pathologyReviewdate": 1489493589071,
          "samples": [
            {
              "molecularSequenceNumber": "10709_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1489498399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10709",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10709",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10709",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10709",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1489511469071,
              "reportedDate": 1489511529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10710",
      "biopsies": [
        
      ]
    },
    {
      "patientSequenceNumber": "10711",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1497460269071,
          "ptenResultDate": 1497460329071,
          "pathologyReviewdate": 1489493589071,
          "samples": [
            {
              "molecularSequenceNumber": "10711_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1489498399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10711",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10711",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10711",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10711",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1489511469071,
              "reportedDate": 1489511529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10712",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1497460269071,
          "ptenResultDate": 1497460329071,
          "pathologyReviewdate": 1489493589071,
          "samples": [
            {
              "molecularSequenceNumber": "10712_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1489498399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10712",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10712",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10712",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10712",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1489511469071,
              "reportedDate": 1489511529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10713",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1497460269071,
          "ptenResultDate": 1497460329071,
          "pathologyReviewdate": 1489493589071,
          "samples": [
            {
              "molecularSequenceNumber": "10713_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1489498399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10713",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10713",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10713",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10713",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1489511469071,
              "reportedDate": 1489511529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10714",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1497460269071,
          "ptenResultDate": 1497460329071,
          "pathologyReviewdate": 1489493589071,
          "samples": [
            {
              "molecularSequenceNumber": "10714_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1489498399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10714",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10714",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10714",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10714",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1489511469071,
              "reportedDate": 1489511529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10715",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1497460269071,
          "ptenResultDate": 1497460329071,
          "pathologyReviewdate": 1489493589071,
          "samples": [
            {
              "molecularSequenceNumber": "10715_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1489498399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10715",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10715",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10715",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10715",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1489511469071,
              "reportedDate": 1489511529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10716",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1497460269071,
          "ptenResultDate": 1497460329071,
          "pathologyReviewdate": 1489493589071,
          "samples": [
            {
              "molecularSequenceNumber": "10716_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1489498399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10716",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10716",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10716",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10716",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1489511469071,
              "reportedDate": 1489511529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10736",
      "biopsies": [
        {
          "biopsySequenceNumber": "BSN-10736",
          "specimenReceivedDate": 1478063133216,
          "specimenFailureDate": null,
          "ptenOrderDate": 1478068533216,
          "ptenResultDate": 1478070033216,
          "pathologyReviewdate": null,
          "samples": [
            {
              "molecularSequenceNumber": "MSN-10736",
              "lab": "Boston",
              "dnaShippedDate": 1478066733216,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10736",
              "biopsySequenceNumber": "BSN-10736",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10736",
              "biopsySequenceNumber": "BSN-10736",
              "biomarker": "MSH2",
              "result": "INDETERMINATE",
              "orderedDate": 1478068533216,
              "reportedDate": 1478070033216,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10736",
              "biopsySequenceNumber": "BSN-10736",
              "biomarker": "MLH1",
              "result": "INDETERMINATE",
              "orderedDate": 1478068533216,
              "reportedDate": 1478070033216,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10736",
              "biopsySequenceNumber": "BSN-10736",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1478068533216,
              "reportedDate": 1478070033216,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10737",
      "biopsies": [
        {
          "biopsySequenceNumber": "BSN-10737",
          "specimenReceivedDate": 1478149533216,
          "specimenFailureDate": null,
          "ptenOrderDate": 1478154933216,
          "ptenResultDate": 1478156433216,
          "pathologyReviewdate": null,
          "samples": [
            {
              "molecularSequenceNumber": "MSN-10737",
              "lab": "Boston",
              "dnaShippedDate": 1478153133216,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10737",
              "biopsySequenceNumber": "BSN-10737",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10737",
              "biopsySequenceNumber": "BSN-10737",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1478154933216,
              "reportedDate": 1478156433216,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10737",
              "biopsySequenceNumber": "BSN-10737",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1478154933216,
              "reportedDate": 1478156433216,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10737",
              "biopsySequenceNumber": "BSN-10737",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1478154933216,
              "reportedDate": 1478156433216,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10738",
      "biopsies": [
        {
          "biopsySequenceNumber": "BSN-10738",
          "specimenReceivedDate": 1478235933216,
          "specimenFailureDate": null,
          "ptenOrderDate": 1478241333216,
          "ptenResultDate": 1478242833216,
          "pathologyReviewdate": null,
          "samples": [
            {
              "molecularSequenceNumber": "MSN-10738",
              "lab": "Boston",
              "dnaShippedDate": 1478239533216,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10738",
              "biopsySequenceNumber": "BSN-10738",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10738",
              "biopsySequenceNumber": "BSN-10738",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1478241333216,
              "reportedDate": 1478242833216,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10738",
              "biopsySequenceNumber": "BSN-10738",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1478241333216,
              "reportedDate": 1478242833216,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10738",
              "biopsySequenceNumber": "BSN-10738",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1478241333216,
              "reportedDate": 1478242833216,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10739",
      "biopsies": [
        {
          "biopsySequenceNumber": "BSN-10739",
          "specimenReceivedDate": 1478235933216,
          "specimenFailureDate": null,
          "ptenOrderDate": 1478241333216,
          "ptenResultDate": 1478242833216,
          "pathologyReviewdate": null,
          "samples": [
            {
              "molecularSequenceNumber": "MSN-10739",
              "lab": "Boston",
              "dnaShippedDate": 1478239533216,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10739",
              "biopsySequenceNumber": "BSN-10739",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10739",
              "biopsySequenceNumber": "BSN-10739",
              "biomarker": "MSH2",
              "result": "INDETERMINATE",
              "orderedDate": 1478241333216,
              "reportedDate": 1478242833216,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10739",
              "biopsySequenceNumber": "BSN-10739",
              "biomarker": "MLH1",
              "result": "INDETERMINATE",
              "orderedDate": 1478241333216,
              "reportedDate": 1478242833216,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10739",
              "biopsySequenceNumber": "BSN-10739",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1478241333216,
              "reportedDate": 1478242833216,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10740",
      "biopsies": [
        {
          "biopsySequenceNumber": "BSN-10740",
          "specimenReceivedDate": 1478235933216,
          "specimenFailureDate": null,
          "ptenOrderDate": 1478241333216,
          "ptenResultDate": 1478242833216,
          "pathologyReviewdate": null,
          "samples": [
            {
              "molecularSequenceNumber": "MSN-10740",
              "lab": "Boston",
              "dnaShippedDate": 1478239533216,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10740",
              "biopsySequenceNumber": "BSN-10740",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10740",
              "biopsySequenceNumber": "BSN-10740",
              "biomarker": "MSH2",
              "result": "INDETERMINATE",
              "orderedDate": 1478241333216,
              "reportedDate": 1478242833216,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10740",
              "biopsySequenceNumber": "BSN-10740",
              "biomarker": "MLH1",
              "result": "INDETERMINATE",
              "orderedDate": 1478241333216,
              "reportedDate": 1478242833216,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10740",
              "biopsySequenceNumber": "BSN-10740",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1478241333216,
              "reportedDate": 1478242833216,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10741",
      "biopsies": [
        {
          "biopsySequenceNumber": "BSN-10741",
          "specimenReceivedDate": 1478235933216,
          "specimenFailureDate": null,
          "ptenOrderDate": 1478241333216,
          "ptenResultDate": 1478242833216,
          "pathologyReviewdate": null,
          "samples": [
            {
              "molecularSequenceNumber": "MSN-10741",
              "lab": "Boston",
              "dnaShippedDate": 1478239533216,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10741",
              "biopsySequenceNumber": "BSN-10741",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10741",
              "biopsySequenceNumber": "BSN-10741",
              "biomarker": "MSH2",
              "result": "INDETERMINATE",
              "orderedDate": 1478241333216,
              "reportedDate": 1478242833216,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10741",
              "biopsySequenceNumber": "BSN-10741",
              "biomarker": "MLH1",
              "result": "INDETERMINATE",
              "orderedDate": 1478241333216,
              "reportedDate": 1478242833216,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10741",
              "biopsySequenceNumber": "BSN-10741",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1478241333216,
              "reportedDate": 1478242833216,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10742",
      "biopsies": [
        {
          "biopsySequenceNumber": "BSN-10742",
          "specimenReceivedDate": 1478235933216,
          "specimenFailureDate": null,
          "ptenOrderDate": 1478241333216,
          "ptenResultDate": 1478242833216,
          "pathologyReviewdate": null,
          "samples": [
            {
              "molecularSequenceNumber": "MSN-10742",
              "lab": "Boston",
              "dnaShippedDate": 1478239533216,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10742",
              "biopsySequenceNumber": "BSN-10742",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10742",
              "biopsySequenceNumber": "BSN-10742",
              "biomarker": "MSH2",
              "result": "INDETERMINATE",
              "orderedDate": 1478241333216,
              "reportedDate": 1478242833216,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10742",
              "biopsySequenceNumber": "BSN-10742",
              "biomarker": "MLH1",
              "result": "INDETERMINATE",
              "orderedDate": 1478241333216,
              "reportedDate": 1478242833216,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10742",
              "biopsySequenceNumber": "BSN-10742",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1478241333216,
              "reportedDate": 1478242833216,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10747",
      "biopsies": [
        {
          "biopsySequenceNumber": "BSN-10747",
          "specimenReceivedDate": 1479963933216,
          "specimenFailureDate": null,
          "ptenOrderDate": 1479969333216,
          "ptenResultDate": 1479970833216,
          "pathologyReviewdate": null,
          "samples": [
            {
              "molecularSequenceNumber": "MSN-10747",
              "lab": "Boston",
              "dnaShippedDate": 1479967533216,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10747",
              "biopsySequenceNumber": "BSN-10747",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10747",
              "biopsySequenceNumber": "BSN-10747",
              "biomarker": "MSH2",
              "result": "INDETERMINATE",
              "orderedDate": 1479969333216,
              "reportedDate": 1479970833216,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10747",
              "biopsySequenceNumber": "BSN-10747",
              "biomarker": "MLH1",
              "result": "INDETERMINATE",
              "orderedDate": 1479969333216,
              "reportedDate": 1479970833216,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10747",
              "biopsySequenceNumber": "BSN-10747",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1479969333216,
              "reportedDate": 1479970833216,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10748",
      "biopsies": [
        {
          "biopsySequenceNumber": "BSN-10748",
          "specimenReceivedDate": 1479963933216,
          "specimenFailureDate": null,
          "ptenOrderDate": 1479969333216,
          "ptenResultDate": 1479970833216,
          "pathologyReviewdate": null,
          "samples": [
            {
              "molecularSequenceNumber": "MSN-10748",
              "lab": "Boston",
              "dnaShippedDate": 1479967533216,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10748",
              "biopsySequenceNumber": "BSN-10748",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10748",
              "biopsySequenceNumber": "BSN-10748",
              "biomarker": "MSH2",
              "result": "INDETERMINATE",
              "orderedDate": 1479969333216,
              "reportedDate": 1479970833216,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10748",
              "biopsySequenceNumber": "BSN-10748",
              "biomarker": "MLH1",
              "result": "INDETERMINATE",
              "orderedDate": 1479969333216,
              "reportedDate": 1479970833216,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10748",
              "biopsySequenceNumber": "BSN-10748",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1479969333216,
              "reportedDate": 1479970833216,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10749",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1497460269071,
          "ptenResultDate": 1497460329071,
          "pathologyReviewdate": 1489493589071,
          "samples": [
            {
              "molecularSequenceNumber": "10749_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1489498399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10749",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10749",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10749",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10749",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1489511469071,
              "reportedDate": 1489511529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10750",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1497460269071,
          "ptenResultDate": 1497460329071,
          "pathologyReviewdate": 1489493589071,
          "samples": [
            {
              "molecularSequenceNumber": "10750_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1489498399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10750",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10750",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10750",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10750",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1489511469071,
              "reportedDate": 1489511529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10751",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1497460269071,
          "ptenResultDate": 1497460329071,
          "pathologyReviewdate": 1489493589071,
          "samples": [
            {
              "molecularSequenceNumber": "10751_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1489498399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10751",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10751",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10751",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10751",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1489511469071,
              "reportedDate": 1489511529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10757",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1497460269071,
          "ptenResultDate": 1497460329071,
          "pathologyReviewdate": 1489493589071,
          "samples": [
            {
              "molecularSequenceNumber": "10757_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1489498399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10757",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10757",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10757",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10757",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1489511469071,
              "reportedDate": 1489511529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10758",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1497460269071,
          "ptenResultDate": 1497460329071,
          "pathologyReviewdate": 1489493589071,
          "samples": [
            {
              "molecularSequenceNumber": "10758_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1489498399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10758",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10758",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10758",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10758",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1489511469071,
              "reportedDate": 1489511529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10759",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1497460269071,
          "ptenResultDate": 1497460329071,
          "pathologyReviewdate": 1489493589071,
          "samples": [
            {
              "molecularSequenceNumber": "10759_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1489498399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10759",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10759",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10759",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10759",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1489511469071,
              "reportedDate": 1489511529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10760",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1497460269071,
          "ptenResultDate": 1497460329071,
          "pathologyReviewdate": 1489493589071,
          "samples": [
            {
              "molecularSequenceNumber": "10760_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1489498399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10760",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10760",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10760",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10760",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "NEGATIVE",
              "orderedDate": 1489511469071,
              "reportedDate": 1489511529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10761",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1497460269071,
          "ptenResultDate": 1497460329071,
          "pathologyReviewdate": 1489493589071,
          "samples": [
            {
              "molecularSequenceNumber": "10761_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1489498399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10761",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10761",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10761",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10761",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1489511469071,
              "reportedDate": 1489511529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10762",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1497460269071,
          "ptenResultDate": 1497460329071,
          "pathologyReviewdate": 1489493589071,
          "samples": [
            {
              "molecularSequenceNumber": "10762_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1489498399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10762",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10762",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10762",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10762",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1489511469071,
              "reportedDate": 1489511529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10763",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1497460269071,
          "ptenResultDate": 1497460329071,
          "pathologyReviewdate": 1489493589071,
          "samples": [
            {
              "molecularSequenceNumber": "10763_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1489498399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10763",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10763",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10763",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10763",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1489511469071,
              "reportedDate": 1489511529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10764",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1497460269071,
          "ptenResultDate": 1497460329071,
          "pathologyReviewdate": 1489493589071,
          "samples": [
            {
              "molecularSequenceNumber": "10764_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1489498399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10764",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10764",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10764",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10764",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1489511469071,
              "reportedDate": 1489511529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10765",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1497460269071,
          "ptenResultDate": 1497460329071,
          "pathologyReviewdate": 1489493589071,
          "samples": [
            {
              "molecularSequenceNumber": "10765_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1489498399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10765",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10765",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10765",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10765",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1489511469071,
              "reportedDate": 1489511529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10766",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1497460269071,
          "ptenResultDate": 1497460329071,
          "pathologyReviewdate": 1489493589071,
          "samples": [
            {
              "molecularSequenceNumber": "10766_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1489498399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10766",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10766",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10766",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10766",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "NEGATIVE",
              "orderedDate": 1489511469071,
              "reportedDate": 1489511529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10767",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1497460269071,
          "ptenResultDate": 1497460329071,
          "pathologyReviewdate": 1489493589071,
          "samples": [
            {
              "molecularSequenceNumber": "10767_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1489498399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10767",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10767",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10767",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10767",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1489511469071,
              "reportedDate": 1489511529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10768",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1497460269071,
          "ptenResultDate": 1497460329071,
          "pathologyReviewdate": 1489493589071,
          "samples": [
            {
              "molecularSequenceNumber": "10768_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1489498399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10768",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10768",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10768",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10768",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1489511469071,
              "reportedDate": 1489511529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10769",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1497460269071,
          "ptenResultDate": 1497460329071,
          "pathologyReviewdate": 1489493589071,
          "samples": [
            {
              "molecularSequenceNumber": "10769_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1489498399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10769",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10769",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10769",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1497460269071,
              "reportedDate": 1497460329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10769",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1489511469071,
              "reportedDate": 1489511529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10812",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1518610209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1528996269071,
          "ptenResultDate": 1528996329071,
          "pathologyReviewdate": 1521029589071,
          "samples": [
            {
              "molecularSequenceNumber": "10812_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1521034399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10812",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10812",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1528996269071,
              "reportedDate": 1528996329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10812",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1528996269071,
              "reportedDate": 1528996329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10812",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1521047469071,
              "reportedDate": 1521047529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10814",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1518610209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1528996269071,
          "ptenResultDate": 1528996329071,
          "pathologyReviewdate": 1521029589071,
          "samples": [
            {
              "molecularSequenceNumber": "10814_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1521034399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10814",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10814",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1528996269071,
              "reportedDate": 1528996329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10814",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1528996269071,
              "reportedDate": 1528996329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10814",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1521047469071,
              "reportedDate": 1521047529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10815",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1518610209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1528996269071,
          "ptenResultDate": 1528996329071,
          "pathologyReviewdate": 1521029589071,
          "samples": [
            {
              "molecularSequenceNumber": "10815_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1521034399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10815",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10815",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1528996269071,
              "reportedDate": 1528996329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10815",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1528996269071,
              "reportedDate": 1528996329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10815",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1521047469071,
              "reportedDate": 1521047529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10816",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1518610209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1528996269071,
          "ptenResultDate": 1528996329071,
          "pathologyReviewdate": 1521029589071,
          "samples": [
            {
              "molecularSequenceNumber": "10816_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1521034399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10816",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10816",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1528996269071,
              "reportedDate": 1528996329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10816",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1528996269071,
              "reportedDate": 1528996329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10816",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1521047469071,
              "reportedDate": 1521047529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10817",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1528996269071,
          "ptenResultDate": 1528996329071,
          "pathologyReviewdate": 1521029589071,
          "samples": [
            {
              "molecularSequenceNumber": "10817_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1521034399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10817",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10817",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1528996269071,
              "reportedDate": 1528996329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10817",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1528996269071,
              "reportedDate": 1528996329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10817",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1488388269071,
              "reportedDate": 1521047529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10818",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1528996269071,
          "ptenResultDate": 1528996329071,
          "pathologyReviewdate": 1521029589071,
          "samples": [
            {
              "molecularSequenceNumber": "10818_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1521034399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10818",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10818",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1528996269071,
              "reportedDate": 1528996329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10818",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1528996269071,
              "reportedDate": 1528996329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10818",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1488388269071,
              "reportedDate": 1521047529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10819",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1528996269071,
          "ptenResultDate": 1528996329071,
          "pathologyReviewdate": 1521029589071,
          "samples": [
            {
              "molecularSequenceNumber": "10819_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1521034399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10819",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10819",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1528996269071,
              "reportedDate": 1528996329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10819",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1528996269071,
              "reportedDate": 1528996329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10819",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1488388269071,
              "reportedDate": 1521047529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10820",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1528996269071,
          "ptenResultDate": 1528996329071,
          "pathologyReviewdate": 1521029589071,
          "samples": [
            {
              "molecularSequenceNumber": "10820_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1521034399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10820",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": "POSITIVE",
              "orderedDate": 1528996269071,
              "reportedDate": 1528996329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10820",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1528996269071,
              "reportedDate": 1528996329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10820",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1528996269071,
              "reportedDate": 1528996329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10820",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1488388269071,
              "reportedDate": 1521047529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10821",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1528996269071,
          "ptenResultDate": 1528996329071,
          "pathologyReviewdate": 1521029589071,
          "samples": [
            {
              "molecularSequenceNumber": "10821_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1521034399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10821",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10821",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "NEGATIVE",
              "orderedDate": 1528996269071,
              "reportedDate": 1528996329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10821",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "NEGATIVE",
              "orderedDate": 1528996269071,
              "reportedDate": 1528996329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10821",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1488388269071,
              "reportedDate": 1521047529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10824",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1528996269071,
          "ptenResultDate": 1528996329071,
          "pathologyReviewdate": 1521029589071,
          "samples": [
            {
              "molecularSequenceNumber": "10824_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1521034399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10824",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10824",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1528996269071,
              "reportedDate": 1528996329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10824",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1528996269071,
              "reportedDate": 1528996329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10824",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1488388269071,
              "reportedDate": 1521047529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10825",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1528996269071,
          "ptenResultDate": 1528996329071,
          "pathologyReviewdate": 1521029589071,
          "samples": [
            {
              "molecularSequenceNumber": "10825_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1521034399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10825",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10825",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1528996269071,
              "reportedDate": 1528996329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10825",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1528996269071,
              "reportedDate": 1528996329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10825",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1488388269071,
              "reportedDate": 1521047529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10826",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1528996269071,
          "ptenResultDate": 1528996329071,
          "pathologyReviewdate": 1521029589071,
          "samples": [
            {
              "molecularSequenceNumber": "10826_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1521034399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10826",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10826",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1528996269071,
              "reportedDate": 1528996329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10826",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1528996269071,
              "reportedDate": 1528996329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10826",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1488388269071,
              "reportedDate": 1521047529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10827",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1528996269071,
          "ptenResultDate": 1528996329071,
          "pathologyReviewdate": 1521029589071,
          "samples": [
            {
              "molecularSequenceNumber": "10827_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1521034399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10827",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10827",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1528996269071,
              "reportedDate": 1528996329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10827",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1528996269071,
              "reportedDate": 1528996329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10827",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1488388269071,
              "reportedDate": 1521047529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10828",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1528996269071,
          "ptenResultDate": 1528996329071,
          "pathologyReviewdate": 1521029589071,
          "samples": [
            {
              "molecularSequenceNumber": "10828_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1521034399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10828",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": "POSITIVE",
              "orderedDate": 1528996269071,
              "reportedDate": 1528996329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10828",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1528996269071,
              "reportedDate": 1528996329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10828",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1528996269071,
              "reportedDate": 1528996329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10828",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1488388269071,
              "reportedDate": 1521047529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10829",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1528996269071,
          "ptenResultDate": 1528996329071,
          "pathologyReviewdate": 1521029589071,
          "samples": [
            {
              "molecularSequenceNumber": "10829_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1521034399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10829",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10829",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1528996269071,
              "reportedDate": 1528996329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10829",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1528996269071,
              "reportedDate": 1528996329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10829",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1488388269071,
              "reportedDate": 1521047529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10830",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1528996269071,
          "ptenResultDate": 1528996329071,
          "pathologyReviewdate": 1521029589071,
          "samples": [
            {
              "molecularSequenceNumber": "10830_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1521034399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10830",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10830",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1528996269071,
              "reportedDate": 1528996329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10830",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1528996269071,
              "reportedDate": 1528996329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10830",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1488388269071,
              "reportedDate": 1521047529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10831",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1528996269071,
          "ptenResultDate": 1528996329071,
          "pathologyReviewdate": 1521029589071,
          "samples": [
            {
              "molecularSequenceNumber": "10831_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1521034399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10831",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10831",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1528996269071,
              "reportedDate": 1528996329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10831",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1528996269071,
              "reportedDate": 1528996329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10831",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1488388269071,
              "reportedDate": 1521047529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10832",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1528996269071,
          "ptenResultDate": 1528996329071,
          "pathologyReviewdate": 1521029589071,
          "samples": [
            {
              "molecularSequenceNumber": "10832_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1521034399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10832",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": "POSITIVE",
              "orderedDate": 1528996269071,
              "reportedDate": 1528996329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10832",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1528996269071,
              "reportedDate": 1528996329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10832",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1528996269071,
              "reportedDate": 1528996329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10832",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1488388269071,
              "reportedDate": 1521047529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10833",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1528996269071,
          "ptenResultDate": 1528996329071,
          "pathologyReviewdate": 1521029589071,
          "samples": [
            {
              "molecularSequenceNumber": "10833_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1521034399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10833",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10833",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1528996269071,
              "reportedDate": 1528996329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10833",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1528996269071,
              "reportedDate": 1528996329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10833",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1488388269071,
              "reportedDate": 1521047529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10834",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1528996269071,
          "ptenResultDate": 1528996329071,
          "pathologyReviewdate": 1521029589071,
          "samples": [
            {
              "molecularSequenceNumber": "10834_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1521034399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10834",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10834",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1528996269071,
              "reportedDate": 1528996329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10834",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1528996269071,
              "reportedDate": 1528996329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10834",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1488388269071,
              "reportedDate": 1521047529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10835",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1528996269071,
          "ptenResultDate": 1528996329071,
          "pathologyReviewdate": 1521029589071,
          "samples": [
            {
              "molecularSequenceNumber": "10835_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1521034399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10835",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10835",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1528996269071,
              "reportedDate": 1528996329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10835",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1528996269071,
              "reportedDate": 1528996329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10835",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1488388269071,
              "reportedDate": 1521047529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10836",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1528996269071,
          "ptenResultDate": 1528996329071,
          "pathologyReviewdate": 1521029589071,
          "samples": [
            {
              "molecularSequenceNumber": "10836_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1521034399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10836",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": "INAPPLICABLE"
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10836",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1528996269071,
              "reportedDate": 1528996329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10836",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1528996269071,
              "reportedDate": 1528996329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10836",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1488388269071,
              "reportedDate": 1521047529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "10837",
      "biopsies": [
        {
          "biopsySequenceNumber": "N-15-00005",
          "specimenReceivedDate": 1487074209071,
          "specimenFailureDate": null,
          "ptenOrderDate": 1528996269071,
          "ptenResultDate": 1528996329071,
          "pathologyReviewdate": 1521029589071,
          "samples": [
            {
              "molecularSequenceNumber": "10837_1000_N-15-00005",
              "lab": "Boston",
              "dnaShippedDate": 1521034399419,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "10837",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "RB",
              "result": "POSITIVE",
              "orderedDate": 1528996269071,
              "reportedDate": 1528996329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10837",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MSH2",
              "result": "POSITIVE",
              "orderedDate": 1528996269071,
              "reportedDate": 1528996329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10837",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "MLH1",
              "result": "POSITIVE",
              "orderedDate": 1528996269071,
              "reportedDate": 1528996329071,
              "requestedDate": null,
              "comment": null
            },
            {
              "studyId": null,
              "patientSequenceNumber": "10837",
              "biopsySequenceNumber": "N-15-00005",
              "biomarker": "PTEN",
              "result": "POSITIVE",
              "orderedDate": 1488388269071,
              "reportedDate": 1521047529071,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    },
    {
      "patientSequenceNumber": "3366",
      "biopsies": [
        {
          "biopsySequenceNumber": "BSN-3366",
          "specimenReceivedDate": 1489035933216,
          "specimenFailureDate": null,
          "ptenOrderDate": null,
          "ptenResultDate": null,
          "pathologyReviewdate": null,
          "samples": [
            {
              "molecularSequenceNumber": "MSN-3366",
              "lab": "MoCha",
              "dnaShippedDate": 1489039533216,
              "trackingNumber": "987654321"
            }
          ],
          "assays": [
            {
              "studyId": null,
              "patientSequenceNumber": "3366",
              "biopsySequenceNumber": "BSN-3366",
              "biomarker": "RB",
              "result": null,
              "orderedDate": null,
              "reportedDate": null,
              "requestedDate": null,
              "comment": null
            }
          ]
        }
      ]
    }
  ]

}
