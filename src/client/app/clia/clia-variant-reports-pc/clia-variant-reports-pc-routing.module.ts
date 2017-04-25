import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CliaVariantReportsPcComponent } from './clia-variant-reports-pc.component';
import { AuthGuard } from './../../shared/auth/auth.guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'clia_mgh/variant_reports_pc', component: CliaVariantReportsPcComponent, canActivate: [AuthGuard] },
      { path: 'clia_dartmount/variant_reports_pc', component: CliaVariantReportsPcComponent, canActivate: [AuthGuard] },
      { path: 'clia_mocha/variant_reports_pc', component: CliaVariantReportsPcComponent, canActivate: [AuthGuard] },
      { path: 'clia_yale/variant_reports_pc', component: CliaVariantReportsPcComponent, canActivate: [AuthGuard] },
      { path: 'clia_mda/variant_reports_pc', component: CliaVariantReportsPcComponent, canActivate: [AuthGuard] }
    ])
  ],
  exports: [RouterModule]
})
export class CliaVariantReportsPcRoutingModule { }
