import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Component } from '@angular/core';

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
  location: Location;
  constructor(location: Location) { this.location = location; }
}
