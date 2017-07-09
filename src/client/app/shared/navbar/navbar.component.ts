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
import { Auth } from './../auth/auth.service';
import { ConfigApiService } from './../config/config-api.service';
import { DOCUMENT } from '@angular/platform-browser';
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

  didScroll: any;
  lastScrollTop = 0;
  delta = 5;
  navbarheight: any;

  constructor(location: Location,
    private auth: Auth,
    private configApi: ConfigApiService,
    @Inject(DOCUMENT) private document: Document) {
    this.location = location;
  }

  ngOnInit() {
    this.getData();

    this.auth.loggedIn.subscribe((t: any) => {
      if (localStorage.getItem('profile') !== null) this.userName = JSON.parse(localStorage.getItem('profile')).user_metadata.firstName;
    });

    if (localStorage.getItem('profile') !== null) this.userName = JSON.parse(localStorage.getItem('profile')).user_metadata.firstName;

  }

  backToTop(): void {
    setTimeout(() => window.scrollTo(0, 0), 1);
  }

  stopReload(keycode: number): boolean {
    if (keycode === 13)
      return false;
    return true;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {

    this.navbarheight = document.getElementById('top-menu').offsetHeight;
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

    var st: any = (document.body.scrollTop).toFixed();

    // Make sure they scroll more than delta
    if (Math.abs(this.lastScrollTop - st) <= this.delta)
      return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is 'behind' the navbar.

    if (st > this.lastScrollTop && st > this.navbarheight) {

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

  getData() {
    this.configApi.getBuildInfo()
      .subscribe(info => {
        this.buildInfo = info;
      });
  }

}
