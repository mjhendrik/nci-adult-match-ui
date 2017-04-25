import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CliaVariantReportQcComponent } from './clia-variant-report-qc.component';
import { AuthGuard } from './../../shared/auth/auth.guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'clia_mocha/variant_reports_pc/qc', component: CliaVariantReportQcComponent, canActivate: [AuthGuard] },
      { path: 'clia_mgh/variant_reports_pc/qc', component: CliaVariantReportQcComponent, canActivate: [AuthGuard] },
      { path: 'clia_dartmount/variant_reports_pc/qc', component: CliaVariantReportQcComponent, canActivate: [AuthGuard] },
      { path: 'clia_yale/variant_reports_pc/qc', component: CliaVariantReportQcComponent, canActivate: [AuthGuard] },
      { path: 'clia_mda/variant_reports_pc/qc', component: CliaVariantReportQcComponent, canActivate: [AuthGuard] },
      { path: 'clia_mocha/variant_reports_ntc/qc', component: CliaVariantReportQcComponent, canActivate: [AuthGuard] },
      { path: 'clia_mgh/variant_reports_ntc/qc', component: CliaVariantReportQcComponent, canActivate: [AuthGuard] },
      { path: 'clia_dartmount/variant_reports_ntc/qc', component: CliaVariantReportQcComponent, canActivate: [AuthGuard] },
      { path: 'clia_yale/variant_reports_ntc/qc', component: CliaVariantReportQcComponent, canActivate: [AuthGuard] },
      { path: 'clia_mda/variant_reports_ntc/qc', component: CliaVariantReportQcComponent, canActivate: [AuthGuard] },
      { path: 'clia_mocha/variant_reports_pacc/qc', component: CliaVariantReportQcComponent, canActivate: [AuthGuard] },
      { path: 'clia_mgh/variant_reports_pacc/qc', component: CliaVariantReportQcComponent, canActivate: [AuthGuard] },
      { path: 'clia_dartmount/variant_reports_pacc/qc', component: CliaVariantReportQcComponent, canActivate: [AuthGuard] },
      { path: 'clia_yale/variant_reports_pacc/qc', component: CliaVariantReportQcComponent, canActivate: [AuthGuard] },
      { path: 'clia_mda/variant_reports_pacc/qc', component: CliaVariantReportQcComponent, canActivate: [AuthGuard] }
    ])
  ],
  exports: [RouterModule]
})
export class CliaVariantReportQcRoutingModule { }
