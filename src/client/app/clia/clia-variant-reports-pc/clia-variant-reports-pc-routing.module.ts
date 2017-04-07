import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CliaVariantReportsPcComponent } from './clia-variant-reports-pc.component';
import { AuthGuard } from './../../shared/auth/auth.guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'clia_variant_reports_pc', component: CliaVariantReportsPcComponent, canActivate: [AuthGuard] }
    ])
  ],
  exports: [RouterModule]
})
export class CliaVariantReportsPcRoutingModule { }
