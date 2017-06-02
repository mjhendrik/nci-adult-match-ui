import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TreatmentArmDetailsComponent } from './treatment-arm-details.component';
import { AuthGuard } from './../../shared/auth/auth.guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'treatments/details/:id', component: TreatmentArmDetailsComponent, canActivate: [AuthGuard] }
      // /:version
    ])
  ],
  exports: [RouterModule]
})
export class TreatmentArmDetailsRoutingModule { }
