import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TreatmentArmDetailsComponent } from './treatment-arm-details.component';
import { AuthGuard } from './../../shared/auth/auth.guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'treatments/details', component: TreatmentArmDetailsComponent, canActivate: [AuthGuard] }
    ])
  ],
  exports: [RouterModule]
})
export class TreatmentArmDetailsRoutingModule { }
