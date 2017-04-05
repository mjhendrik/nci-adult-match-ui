import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CliaYaleComponent } from './clia-yale.component';
import { AuthGuard } from './../../shared/auth/auth.guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'clia_yale', component: CliaYaleComponent, canActivate: [AuthGuard] }
    ])
  ],
  exports: [RouterModule]
})
export class CliaYaleRoutingModule { }
