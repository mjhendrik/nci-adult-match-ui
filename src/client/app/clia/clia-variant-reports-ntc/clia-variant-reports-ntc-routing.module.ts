import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CliaVariantReportsNtcComponent } from './clia-variant-reports-ntc.component';
import { AuthGuard } from './../../shared/auth/auth.guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'clia_variant_reports_ntc', component: CliaVariantReportsNtcComponent, canActivate: [AuthGuard] }
    ])
  ],
  exports: [RouterModule]
})
export class CliaVariantReportsNtcRoutingModule { }