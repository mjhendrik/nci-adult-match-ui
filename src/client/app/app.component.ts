import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import './operators';
import 'd3';
import 'nvd3';
import 'ng2-nvd3';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ToastrService } from './shared/error-handling/toastr.service';

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

  public options = {
    position: ["bottom", "left"],
    timeOut: 5000,
    lastOnBottom: true
  };

  constructor(vcr: ViewContainerRef, private router: Router, public toastr: ToastsManager, private toastrService: ToastrService) {
    this.toastrService.toastr = toastr;
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
      window.scroll(0, 0);
    });
  }
}
