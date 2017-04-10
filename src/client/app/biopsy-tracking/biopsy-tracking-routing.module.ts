import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BiopsyTrackingListComponent } from './biopsy-tracking.component';
import { AuthGuard } from './../shared/auth/auth.guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'tracking', component: BiopsyTrackingListComponent, canActivate: [AuthGuard] }
    ])
  ],
  exports: [RouterModule]
})
export class BiopsyTrackingListRoutingModule { }
