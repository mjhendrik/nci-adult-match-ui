import { Component, OnInit } from '@angular/core';

import { routerTransition } from './../shared/router.animations';
import { GMTFilter } from './../shared/pipes/gmt';


/**
 * This class represents the lazy loaded TAComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-ta',
  templateUrl: 'ta.component.html',
  styleUrls: ['ta.component.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' },
  providers: [GMTFilter]
})
export class TaComponent implements OnInit {

  searchterm4: string = '';
  recordsPerPage4: number;
  table4DefaultSort: string;

  constructor() {

  }

  ngOnInit() {
    this.recordsPerPage4 = 100;
    this.table4DefaultSort = 'treatmentArmId';

    for (let i = 0; i < this.table4Data.length; i++) {
      this.table4Data[i].dateSuspendedOrClosed = this.table4Data[i].dateClosed == null ? this.table4Data[i].dateSuspended : this.table4Data[i].dateClosed;
    }

    let gmt = new GMTFilter();

    for (let i = 0; i < this.table4Data.length; i++) {
      this.table4Data[i].dateCreated = gmt.transform(this.table4Data[i].dateCreated);
    }

    for (let i = 0; i < this.table4Data.length; i++) {
      this.table4Data[i].dateOpened = gmt.transform(this.table4Data[i].dateOpened);
    }

    for (let i = 0; i < this.table4Data.length; i++) {
      this.table4Data[i].dateSuspendedOrClosed = gmt.transform(this.table4Data[i].dateSuspendedOrClosed);
    }

  }

  table4Data: any = [
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
}
