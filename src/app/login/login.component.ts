import { Component } from '@angular/core';

import { AuthService } from './../shared/auth/auth.service';

/**
 * LoginComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent {
  constructor(private auth: AuthService) { }
}
