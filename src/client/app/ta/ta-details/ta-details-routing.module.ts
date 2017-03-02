import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TaDetailsComponent } from './ta-details.component';
import { AuthGuard } from './../../shared/auth/auth.guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'treatments/details', component: TaDetailsComponent, canActivate: [AuthGuard] }
    ])
  ],
  exports: [RouterModule]
})
export class TaDetailsRoutingModule { }
