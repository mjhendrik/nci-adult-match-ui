import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BtComponent } from './bt.component';
import { AuthGuard } from './../shared/auth/auth.guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'bt', component: BtComponent, canActivate: [AuthGuard]  }
    ])
  ],
  exports: [RouterModule]
})
export class BtRoutingModule { }
