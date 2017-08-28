import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { routerTransition } from './../../shared/router.animations';
import { AssignmentReportData } from './assignment-report.module';

@Component({
  moduleId: module.id,
  selector: 'sd-assignment-report',
  templateUrl: 'assignment-report.component.html',
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})
export class AssignmentReportComponent implements OnInit, AssignmentReportData {
  psn: string;
  molecularSequenceNumber: any;
  analysisId: any;
  assignmentReport: any;
  dateAssigned: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    Object.assign(this, this.route.snapshot.data['data']);
  }
}
