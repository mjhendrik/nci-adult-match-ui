import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PatientsDetailsComponent } from './patients-details.component';
import { AuthGuard } from './../../shared/auth/auth.guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'patients/details', component: PatientsDetailsComponent, canActivate: [AuthGuard] }
    ])
  ],
  exports: [RouterModule]
})
export class PatientsDetailsRoutingModule { }
