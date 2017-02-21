import { Component } from '@angular/core';

import { routerTransition } from './../shared/router.animations';

/**
 * This class represents the lazy loaded LoginComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class LoginComponent { }
// // auth0-js
// import { Component } from '@angular/core';
// import { Auth } from './auth.service';

// @Component({
//     selector: 'login',
//     templateUrl: 'login.component.html'
// })
// export class LoginComponent {
//     constructor(private auth: Auth) { }
// }