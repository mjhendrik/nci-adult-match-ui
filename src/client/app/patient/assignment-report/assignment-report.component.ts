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
  assignmentData: any;
  dateAssigned: any;
  analysisId: any;
  molecularSequenceNumber: any;
  assignmentReason: any[];

  constructor(private route: ActivatedRoute, private patientApi: PatientApiService) { }

  ngOnInit() {
    this.psn = this.route.snapshot.params['patientSequenceNumber'];
    this.dateAssigned = this.route.snapshot.params['dateAssigned'];
    this.getData(this.psn);
  }

  getData(psn: string) {
    this.patientApi.getPatientDetails(psn)
      .subscribe((patient: any) => {
        let assignmentReport = patient.patientAssignments;
        assignmentReport.map((x: any) => {
          if (x.dateAssigned.$date.toString() === this.dateAssigned)
            this.assignmentData = x;
        });
        this.analysisId = patient.biopsies[0].nextGenerationSequences[0].ionReporterResults.jobName;
        this.molecularSequenceNumber = patient.biopsies[0].nextGenerationSequences[0].ionReporterResults.molecularSequenceNumber;
        this.dataAvailable = true;
        this.groupReason(this.assignmentData.patientAssignmentLogic);
      },
      error => this.errorMessage = <any>error
      );
  }

  groupReason(patientAssignmentLogic: any): any {

    let groupedAssignmentReason = patientAssignmentLogic.reduce(function (total: any, ele: any, ndx: any, ary: any) {
      var category = ele.patientAssignmentReasonCategory;
      if (!total[category]) {
        total[category] = {
          items: []
        };
      }
      total[category].items.push(ary[ndx]);
      return total;
    }, {});

    let groupedPatientAssignmentLogic: any[] = [];

    Object.keys(groupedAssignmentReason).map((x: any, index: number) => {
      groupedPatientAssignmentLogic[index] = {
        name: x,
        items: groupedAssignmentReason[x].items
      };
    });

    this.assignmentReason = groupedPatientAssignmentLogic;

  }

}
