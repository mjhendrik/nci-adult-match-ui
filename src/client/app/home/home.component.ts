import { Component } from '@angular/core';

import { Auth } from './../shared/auth/auth.service';

/**
 * HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent {
  constructor(private auth: Auth) { }
}
