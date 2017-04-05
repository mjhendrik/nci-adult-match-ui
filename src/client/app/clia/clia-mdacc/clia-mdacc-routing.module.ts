import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CliaMdaccComponent } from './clia-mdacc.component';
import { AuthGuard } from './../../shared/auth/auth.guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'clia_mdacc', component: CliaMdaccComponent, canActivate: [AuthGuard] }
    ])
  ],
  exports: [RouterModule]
})
export class CliaMdaccRoutingModule { }
