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

  patientData: any = {
    "patientSequenceNumber": "10069",
    "gender": "MALE",
    "ethnicity": "WHITE",
    "currentPatientStatus": "ON_TREATMENT_ARM",
    "assignmentReason": "The patient and treatment arm match on non-hotspot variant [(ID: .,GENE: NF1,OVA: Deleterious,EXON: 35,FUNC: nonsense,PROTEIN:p.Arg1534Ter)].",
    "currentStep": "1",
    "treatmentArm": "EAY131-S1",
    "registrationDate": 1441393247753,
    "lastRejoinScanDate": 1456765487159,
    "concordance": "YES",
    "Diseases": null,
    "shortName": "Glioblastoma multiforme",
    "ctepCategory": "CNS Neoplasm (Primary Tumor)",
    "ctepSubCategory": "Astrocytoma, High Grade",
    "ctepTerm": "Glioblastoma multiforme",
    "medDRACode": "10018337"
  };

  summaryData: any = {
    "pendingVariant": true,
    "pendingVariantDays": 15,
    "pendingAssignment": true,
    "pendingAssignmentDays": 10,
    "activity": [
      {
        "status": "REJOIN_REQUESTED",
        "time": "08:41 AM",
        "icon": "bar-chart",
        "details": "EAY131-Q (2016-01-20)",
        "variantReport": true,
        "variantReportDetails": "February 25, 2016 6:27 PM GMT",
        "assignmentReport": false,
        "assignmentReportDetails": null
      },
      {
        "status": "OFF_TRIAL_NO_TA_AVAILABLE",
        "time": "06:30 AM",
        "icon": "user",
        "details": "November 6, 2015 5:39 PM GMT No candidate arm is available for this patient, notified the site",
        "variantReport": false,
        "variantReportDetails": null,
        "assignmentReport": false,
        "assignmentReportDetails": null
      },
      {
        "status": "PENDING_OFF_STUDY",
        "time": "03:11 AM",
        "icon": "user",
        "details": null,
        "variantReport": true,
        "variantReportDetails": null,
        "assignmentReport": true,
        "assignmentReportDetails": "November 6, 2015 5:39 PM GMT"
      },
      {
        "status": "PENDING_CONFIRMATION",
        "time": "Yesterday",
        "icon": "medkit",
        "details": null,
        "variantReport": true,
        "variantReportDetails": null,
        "assignmentReport": true,
        "assignmentReportDetails": "November 5, 2015 2:11 PM GMT"
      },
      {
        "status": "NOT_ELIGIBLE",
        "time": "Yesterday",
        "icon": "user",
        "details": "EAY131-Q (2015-08-06)",
        "variantReport": true,
        "variantReportDetails": null,
        "assignmentReport": true,
        "assignmentReportDetails": "November 5, 2015 2:11 PM GMT Treatment evaluation process completed, patient was ineligible."
      },
      {
        "status": "PENDING_APPROVAL",
        "time": "2 days ago",
        "icon": "medkit",
        "details": "EAY131-Q (2016-01-20)",
        "variantReport": true,
        "variantReportDetails": null,
        "assignmentReport": true,
        "assignmentReportDetails": "November 4, 2015 6:01 PM GMT"
      },
      {
        "status": "PENDING_CONFIRMATION",
        "time": "2 days ago",
        "icon": "medkit",
        "details": "EAY131-Q (2016-01-20)",
        "variantReport": true,
        "variantReportDetails": null,
        "assignmentReport": true,
        "assignmentReportDetails": "November 4, 2015 5:30 PM GMT"
      },
      {
        "status": "PENDING_VARIANT_REPORT",
        "time": "2 days ago",
        "icon": "bar-chart",
        "details": null,
        "variantReport": true,
        "variantReportDetails": "November 4, 2015 5:30 PM GMT",
        "assignmentReport": false,
        "assignmentReportDetails": null
      }
    ]
  };

  // TO_DO: should be made into an array of objects
  biopsyData: any = {
    "id": "T-16-000762",
    "specimenCollectionDate": 1471023653456,
    "specimenReceivedDate": 1471109213852,
    "specimenFailureDate": null,
    "pathologyStatus": null,
    "pathologyReceivedDate": null,
    "concordance": "YES",
    "comment": null,
    "assayHistory": [
      {
        "ihc": "RB",
        "orderDate": "Not Applicable",
        "resultDate": "Not Applicable",
        "result": "Not Applicable",
        "comment": "Patient does not have CCND1, CDK4 or CDK6 gene amplification to require RB assay."
      },
      {
        "ihc": "MSH2",
        "orderDate": "August 15, 2016 1:59 PM GMT",
        "resultDate": "August 17, 2016 3:11 AM GMT",
        "result": "POSITIVE",
        "comment": null
      },
      {
        "ihc": "MLH1",
        "orderDate": "August 15, 2016 1:59 PM GMT",
        "resultDate": "August 17, 2016 3:11 AM GMT",
        "result": "NEGATIVE",
        "comment": null
      },
      {
        "ihc": "PTEN",
        "orderDate": "August 15, 2016 1:59 PM GMT",
        "resultDate": "August 17, 2016 3:11 AM GMT",
        "result": "POSITIVE",
        "comment": null
      }
    ],
    "nucleicAcidSendout": [
      {
        "molecularSequenceNumber": "MSN17772",
        "destinationSite": "MoCha",
        "trackingNumber": "783854296970",
        "dnaConc": "51",
        "dnaVol": "10",
        "reportedDate": "August 17, 2016 11:58 PM GMT",
        "comment": null
      }
    ],
    "analysisId": "MSN17772_v1_92ad9833-e79a-4807-b1f3-6be88a0ab824",
    "variantStatus": "CONFIRMED ",
    "variantFileReceivedDate": "August 25, 2016 10:13 PM GMT",
    "variantRejected/ConfirmedDate": "August 26, 2016 3:28 PM GMT",
    "assignmentStatus": "CONFIRMED ",
    "assignmentGenerationDate": "August 1, 2016 9:48 PM GMT",
    "assignmentReceivedDate": "August 2, 2016 4:31 PM GMT",
    "assignmentLogic": "The patient and treatment arm match on variant identifier [COSM569]."
  };

}
