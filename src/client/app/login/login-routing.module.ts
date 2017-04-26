import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SignInComponent } from './login.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'signin', redirectTo: '/login' },
      { path: 'login', component: SignInComponent }
    ])
  ],
  exports: [RouterModule]
})
export class SignInRoutingModule { }
