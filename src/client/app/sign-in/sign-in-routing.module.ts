import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SignInComponent } from './sign-in.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'signin', component: SignInComponent }
    ])
  ],
  exports: [RouterModule]
})
export class SignInRoutingModule { }
