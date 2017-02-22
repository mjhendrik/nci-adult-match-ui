import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { Auth } from './auth.service';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private auth: Auth, private router: Router) { }

  canActivate() {
    console.debug('LoginGuard, this.auth.authenticated() = ', this.auth.authenticated());
    if (this.auth.authenticated()) {
      this.router.navigate(['dashboard']);
      return false;
    }
    return true;
  }
}
