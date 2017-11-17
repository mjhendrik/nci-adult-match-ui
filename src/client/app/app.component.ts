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

  constructor(vcr: ViewContainerRef,
    public toastr: ToastsManager,
    private router: Router,
    private toastrService: ToastrService) {
    this.toastrService.toastr = toastr; // A work-around for ToastsManager not being able to be injected into ErrorHandlingService for some reason
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
      window.scroll(0, 0);
    });
  }
}
