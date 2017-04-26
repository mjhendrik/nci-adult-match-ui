import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import './operators';

import { Auth } from './shared/auth/auth.service';

/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  constructor(private auth: Auth, private router: Router) {
    this.auth.handleAuthentication();
  }

  ngOnInit() {
    this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
      window.scroll(0, 0);
    });
  }
}
