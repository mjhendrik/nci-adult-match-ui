import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CliaVariantReportsPaccComponent } from './clia-variant-reports-pacc.component';
import { AuthGuard } from './../../shared/auth/auth.guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'clia_variant_reports_pacc/:id', component: CliaVariantReportsPaccComponent, canActivate: [AuthGuard] }
    ])
  ],
  exports: [RouterModule]
})
export class CliaVariantReportsPaccRoutingModule { }
