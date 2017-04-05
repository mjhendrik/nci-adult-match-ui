import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CliaDartmouthComponent } from './clia-dartmouth.component';
import { AuthGuard } from './../../shared/auth/auth.guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'clia_dartmouth', component: CliaDartmouthComponent, canActivate: [AuthGuard] }
    ])
  ],
  exports: [RouterModule]
})
export class CliaDartmouthRoutingModule { }
