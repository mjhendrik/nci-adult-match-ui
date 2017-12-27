import {
  Location,
  LocationStrategy,
  PathLocationStrategy
} from '@angular/common';
import {
  Component,
  Inject,
  OnInit,
  HostListener
} from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { ConfigApiService } from './../config/config-api.service';
import { DOCUMENT } from '@angular/platform-browser';
/**
 * This class represents the navigation bar component.
 */
@Component({
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
  moduleId: module.id,
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  userName: string;

  location: Location;

  didScroll: any;
  lastScrollTop = 0;
  delta = 5;
  navBarHeight: any;

  constructor(location: Location,
    private auth: AuthService,
    private configApi: ConfigApiService,
    @Inject(DOCUMENT) private document: Document) {
    this.location = location;
  }

  ngOnInit() {
    this.auth.loggedIn.subscribe(() => {
      // TODO: refactor this, unsafe
      if (localStorage.getItem('profile') && JSON.parse(localStorage.getItem('profile')).user_metadata) {
        this.userName = JSON.parse(localStorage.getItem('profile')).user_metadata.name;
      }
    });

    if (localStorage.getItem('profile') && JSON.parse(localStorage.getItem('profile')).user_metadata) {
      this.userName = JSON.parse(localStorage.getItem('profile')).user_metadata.name;
    }
  }

  backToTop(): void {
    setTimeout(() => window.scrollTo(0, 0), 1);
  }

  stopReload(keycode: number): boolean {
    if (keycode === 13) {
      return false;
    }
    return true;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {

    const navBar = document.getElementById('top-menu');
    if (!navBar) {
      return;
    }

    this.navBarHeight = navBar.offsetHeight;
    this.didScroll = true;
    if (document.body.scrollTop > 1) {
      setTimeout(() => {
        if (this.didScroll) {
          this.hasScrolled();
          this.didScroll = false;
        }
      }, 250);
    } else {
      document.getElementById('header').classList.remove('header-up');
      document.getElementById('top-menu').classList.remove('top-menu-up');
      document.getElementById('top-menu').classList.add('top-position');
      document.getElementById('maindiv').classList.remove('header-up');
    }

  }

  hasScrolled() {

    const st: any = (document.body.scrollTop).toFixed();

    // Make sure they scroll more than delta
    if (Math.abs(this.lastScrollTop - st) <= this.delta) {
      return;
    }

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is 'behind' the navbar.

    if (st > this.lastScrollTop && st > this.navBarHeight) {

      // Scroll Down
      document.getElementById('top-menu').classList.remove('top-position');
      document.getElementById('header').classList.add('header-up');
      document.getElementById('top-menu').classList.add('top-menu-up');
      document.getElementById('maindiv').classList.add('header-up');

    } else {

      // Scroll Up
      if ((parseInt(st) + window.innerHeight) < document.body.scrollHeight) {

        document.getElementById('header').classList.remove('header-up');
        document.getElementById('top-menu').classList.remove('top-menu-up');
        document.getElementById('top-menu').classList.add('top-position');
        document.getElementById('maindiv').classList.remove('header-up');

      }

    }

    this.lastScrollTop = st;

  }

}
