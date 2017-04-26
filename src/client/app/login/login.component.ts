import { Component } from '@angular/core';

import { Auth } from './../shared/auth/auth.service';

/**
 * SignInComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-login',
  templateUrl: 'login.component.html'
})
export class SignInComponent {
  constructor(private auth: Auth) { }
}
