import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CliaComponent } from './clia.component';
import { AuthGuard } from './../../shared/auth/auth.guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'clia', component: CliaComponent, canActivate: [AuthGuard] }
    ])
  ],
  exports: [RouterModule]
})
export class CliaRoutingModule { }
