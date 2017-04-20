import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AssignmentReportComponent } from './assignment-report.component';
import { AuthGuard } from './../../shared/auth/auth.guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'patients/details/variant_report/assignment', component: AssignmentReportComponent, canActivate: [AuthGuard] }
    ])
  ],
  exports: [RouterModule]
})
export class AssignmentReportRoutingModule { }
