import {
  Location,
  LocationStrategy,
  PathLocationStrategy
} from '@angular/common';
import {
  Component,
  OnInit
} from '@angular/core';
import { Auth } from './../auth/auth.service';
import { ConfigApiService } from './../config/config-api.service';

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
export class NavbarComponent implements OnInit {
  buildInfo: any;
  userName: string;

  location: Location;
  constructor(location: Location,
    private auth: Auth,
    private configApi: ConfigApiService) {
    this.location = location;
  }

  ngOnInit() {
    this.getData();
    this.userName = JSON.parse(localStorage.getItem('profile')).user_metadata.firstName;
  }

  backToTop(): void {
    setTimeout(() => window.scrollTo(0, 0), 1);
  }

  stopReload(keycode: number): boolean {
    if (keycode === 13)
      return false;
    return true;
  }

  getData() {
    this.configApi.getBuildInfo()
      .subscribe(info => {
        this.buildInfo = info;
      });
  }
}
