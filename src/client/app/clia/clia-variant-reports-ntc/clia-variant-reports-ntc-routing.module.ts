import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CliaVariantReportsNtcComponent } from './clia-variant-reports-ntc.component';
import { AuthGuard } from './../../shared/auth/auth.guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'clia_mgh/variant_reports_ntc/:id', component: CliaVariantReportsNtcComponent, canActivate: [AuthGuard] },
      { path: 'clia_dartmount/variant_reports_ntc/:id', component: CliaVariantReportsNtcComponent, canActivate: [AuthGuard] },
      { path: 'clia_mocha/variant_reports_ntc/:id', component: CliaVariantReportsNtcComponent, canActivate: [AuthGuard] },
      { path: 'clia_yale/variant_reports_ntc/:id', component: CliaVariantReportsNtcComponent, canActivate: [AuthGuard] },
      { path: 'clia_mda/variant_reports_ntc/:id', component: CliaVariantReportsNtcComponent, canActivate: [AuthGuard] }
    ])
  ],
  exports: [RouterModule]
})
export class CliaVariantReportsNtcRoutingModule { }
