import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate() {
    if (this.auth.authenticated()) {
      // Don't allow redirecting to the login page. Redirect to dashboard if already authenticated.
      this.router.navigate(['dashboard']);
      return false;
    }
    return true;
  }
}
