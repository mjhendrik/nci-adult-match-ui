import { Component } from '@angular/core';

import { routerTransition } from './../shared/router.animations';
import { Auth } from './../shared/auth/auth.service';

/**
 * HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})
export class HomeComponent {
  constructor(private auth: Auth) { }
}
