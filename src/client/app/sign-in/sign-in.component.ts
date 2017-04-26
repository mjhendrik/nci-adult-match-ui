import { Component } from '@angular/core';
import { Auth } from './../shared/auth/auth.service';

@Component({
  selector: 'sign-in',
  templateUrl: 'sign-in.component.html'
})
export class SignInComponent {
  constructor(private auth: Auth) {}
};
