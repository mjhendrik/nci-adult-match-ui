import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { LoginGuard } from './../shared/auth/login.guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'signin', redirectTo: 'login' },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent, canActivate: [LoginGuard] }
    ])
  ],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
