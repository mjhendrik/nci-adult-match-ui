import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PatientVariantReportQcComponent } from './patient-variant-report-qc.component';
import { AuthGuard } from './../../shared/auth/auth.guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'patients/details/variant_reports/qc', component: PatientVariantReportQcComponent, canActivate: [AuthGuard] }
    ])
  ],
  exports: [RouterModule]
})
export class PatientVariantReportQcRoutingModule { }
