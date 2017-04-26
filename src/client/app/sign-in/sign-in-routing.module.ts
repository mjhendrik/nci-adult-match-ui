import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SignInComponent } from './sign-in.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'login', redirectTo: 'signin' },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'signin', component: SignInComponent }
    ])
  ],
  exports: [RouterModule]
})
export class SignInRoutingModule { }
