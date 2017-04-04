import { Component } from '@angular/core';

import { routerTransition } from './../shared/router.animations';
import { Auth } from './../shared/auth/auth.service';

/**
 * This class represents the lazy loaded LoginComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})
export class LoginComponent {
  constructor(private auth: Auth) { }
}
