import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './login.component';
import { SignInRoutingModule } from './login-routing.module';

@NgModule({
  imports: [CommonModule, SignInRoutingModule],
  declarations: [SignInComponent],
  exports: [SignInComponent]
})
export class SignInModule { }
