import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SignInComponent } from './sign-in.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'signin', redirectTo: 'login' },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'login', component: SignInComponent }
    ])
  ],
  exports: [RouterModule]
})
export class SignInRoutingModule { }
