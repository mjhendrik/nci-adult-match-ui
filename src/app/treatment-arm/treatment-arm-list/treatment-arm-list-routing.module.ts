import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TreatmentArmListComponent } from './treatment-arm-list.component';
import { AuthGuard } from './../../shared/auth/auth.guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'treatments', component: TreatmentArmListComponent, canActivate: [AuthGuard] }
    ])
  ],
  exports: [RouterModule]
})
export class TreatmentArmListRoutingModule { }
