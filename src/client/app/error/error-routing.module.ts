import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ErrorComponent } from './error.component';
import { AuthGuard } from './../shared/auth/auth.guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'error', component: ErrorComponent, canActivate: [AuthGuard] }
    ])
  ],
  exports: [RouterModule]
})
export class ErrorRoutingModule { }
