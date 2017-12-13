import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PatientListComponent } from './patient-list.component';
import { AuthGuard } from './../../shared/auth/auth.guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'patients', component: PatientListComponent, canActivate: [AuthGuard] }
    ])
  ],
  exports: [RouterModule]
})
export class PatientListRoutingModule { }
