import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { Auth } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: Auth, private router: Router) { }

  canActivate() {
    console.debug('AuthGuard, this.auth.authenticated() = ', this.auth.authenticated());

    if (!this.auth.authenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
