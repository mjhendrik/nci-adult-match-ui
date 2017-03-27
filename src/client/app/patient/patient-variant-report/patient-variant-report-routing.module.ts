import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PatientVariantReportComponent } from './patient-variant-report.component';
import { AuthGuard } from './../../shared/auth/auth.guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'patients/variant_report', component: PatientVariantReportComponent, canActivate: [AuthGuard] }
    ])
  ],
  exports: [RouterModule]
})
export class PatientVariantReportRoutingModule { }
