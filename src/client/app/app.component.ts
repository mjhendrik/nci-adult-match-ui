import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import './operators';
import 'd3';
import 'nvd3';
import 'ng2-nvd3';

declare let d3: any;

/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
      window.scroll(0, 0);
    });
  }

}
