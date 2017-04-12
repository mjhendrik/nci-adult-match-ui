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

}
