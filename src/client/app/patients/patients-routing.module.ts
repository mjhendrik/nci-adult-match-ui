import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PatientsComponent } from './patients.component';
import { AuthGuard } from './../shared/auth/auth.guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'patients', component: PatientsComponent, canActivate: [AuthGuard] }
    ])
  ],
  exports: [RouterModule]
})
export class PatientsRoutingModule { }
