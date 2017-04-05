import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CliaMghComponent } from './clia-mgh.component';
import { AuthGuard } from './../../shared/auth/auth.guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'clia_mgh', component: CliaMghComponent, canActivate: [AuthGuard] }
    ])
  ],
  exports: [RouterModule]
})
export class CliaMghRoutingModule { }
