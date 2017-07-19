import {
  Component,
  OnInit
} from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { routerTransition } from './../../shared/router.animations';
import {
  PatientApiService
} from '../patient-api.service';

/**
 * AssignmentReportComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-assignment-report',
  templateUrl: 'assignment-report.component.html',
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})
export class AssignmentReportComponent implements OnInit {

  psn: string;
  variantReport: any;
  assignmentReport: any;
  moiSummary: any;
  assay: any[];
  snv: any[];
  indels: any[];
  assignmentReason: any;
  assignmentData: any[];
  assignmentHistory: any[];
  ocpSummary: any;
  dateAssigned: any;

  dataAvailable: boolean;
  errorMessage: string;

  constructor(private route: ActivatedRoute, private patientApi: PatientApiService) { }

  ngOnInit() {
    this.psn = this.route.snapshot.params['patientSequenceNumber'];
    this.dateAssigned = this.route.snapshot.params['dateAssigned'];
    this.getData(this.psn);
  }

  getData(psn: string) {
    this.patientApi.getPatientVariantReport(psn)
      .subscribe((itemList: any) => {
        let assignmentReport = itemList.patientAssignments;
        assignmentReport.map((x: any) => {
          if (x.dateAssigned.$date.toString() === this.dateAssigned)
            this.assignmentData = x;
        });
        // console.log(itemList.biopsies[0].nextGenerationSequences[0].ionReporterResults.molecularSequenceNumber);
        this.dataAvailable = true;
      },
      error => this.errorMessage = <any>error
      );
  }

}
