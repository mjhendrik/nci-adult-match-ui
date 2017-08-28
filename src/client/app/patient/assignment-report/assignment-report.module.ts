import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignmentReportComponent } from './assignment-report.component';
import { AssignmentReportRoutingModule } from './assignment-report-routing.module';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from '../../shared/datatables/index';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { DirectivesModule } from '../../shared/directives/directives.module';
import { PatientApiService } from '../patient-api.service';
import { AssignmentReasonTableModule } from './../assignment-reason-table/assignment-reason-table.module';

export interface AssignmentReportData {
  psn: string;
  molecularSequenceNumber: any;
  analysisId: any;
  assignmentReport: any;
  dateAssigned: any;
}

@NgModule({
  imports: [
    CommonModule,
    AssignmentReportRoutingModule,
    AssignmentReasonTableModule,
    FormsModule,
    DataTableModule,
    PipesModule,
    DirectivesModule
  ],
  declarations: [AssignmentReportComponent],
  exports: [AssignmentReportComponent],
  providers: [PatientApiService]
})
export class AssignmentReportModule { }
