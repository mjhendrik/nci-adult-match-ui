import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Component } from '@angular/core';
import { Auth } from './../auth/auth.service';

/**
 * This class represents the navigation bar component.
 */
@Component({
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
  moduleId: module.id,
  selector: 'sd-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
})
export class NavbarComponent {

  cliaLabData: any = [
    "MoCha",
    "Yale",
    "MGH",
    "MD Anderson",
    "Dartmouth"
  ];

  location: Location;
  constructor(location: Location, private auth: Auth) {
    this.location = location;
  }

  backToTop(): void {
    setTimeout(() => window.scrollTo(0, 0), 1);
  }

  stopReload(keycode: number): boolean {
    if (keycode === 13)
      return false;
    return true;
  }

}
