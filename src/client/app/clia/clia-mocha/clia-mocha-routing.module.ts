import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CliaMochaComponent } from './clia-mocha.component';
import { AuthGuard } from './../../shared/auth/auth.guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'clia_mocha', component: CliaMochaComponent, canActivate: [AuthGuard] }
    ])
  ],
  exports: [RouterModule]
})
export class CliaMochaRoutingModule { }
