import { Component } from '@angular/core';

import { Auth } from './../shared/auth/auth.service';

/**
 * LoginComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent {
  constructor(private auth: Auth) { }
}
