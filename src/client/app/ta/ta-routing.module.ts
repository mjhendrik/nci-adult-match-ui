import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TaComponent } from './ta.component';
import { AuthGuard } from './../shared/auth/auth.guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'ta', component: TaComponent, canActivate: [AuthGuard] }
    ])
  ],
  exports: [RouterModule]
})
export class TaRoutingModule { }
