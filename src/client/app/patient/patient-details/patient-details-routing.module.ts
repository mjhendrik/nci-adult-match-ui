import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PatientDetailsComponent } from './patient-details.component';
import { AuthGuard } from './../../shared/auth/auth.guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'patients/:patientSequenceNumber', component: PatientDetailsComponent, canActivate: [AuthGuard] },
      { path: 'patients/:patientSequenceNumber/:sequence', component: PatientDetailsComponent, canActivate: [AuthGuard] }
    ])
  ],
  exports: [RouterModule]
})
export class PatientDetailsRoutingModule { }
