import { Component } from '@angular/core';

import { routerTransition } from './../shared/router.animations';
import { Auth } from './../shared/auth/auth.service';

/**
 * SignInComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-login',
  templateUrl: 'login.component.html',
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})
export class SignInComponent {
  constructor(private auth: Auth) { }
}
