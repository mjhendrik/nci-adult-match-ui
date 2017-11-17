import {
  HttpModule,
  Http,
  RequestOptions,
  XHRBackend
} from '@angular/http';
import {
  Component,
  ErrorHandler,
  DebugElement
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopoverModule } from 'ngx-popover';
import { Router } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { AUTH_PROVIDERS } from 'angular2-jwt';

import { AppComponent } from './app.component';
import { Auth } from './shared/auth/auth.service';
import { AuthGuard } from './shared/auth/auth.guard.service';
import { LoginGuard } from './shared/auth/login.guard.service';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './login/login.module';
import { ErrorModule } from './error/error.module';
import { CliaParentModule } from './clia/clia-parent/clia-parent.module';
import { CliaVariantReportsNtcModule } from './clia/clia-variant-reports-ntc/clia-variant-reports-ntc.module';
import { CliaVariantReportsPaccModule } from './clia/clia-variant-reports-pacc/clia-variant-reports-pacc.module';
import { CliaVariantReportsPcModule } from './clia/clia-variant-reports-pc/clia-variant-reports-pc.module';
import { BiopsyTrackingListModule } from './biopsy-tracking/biopsy-tracking.module';
import { TreatmentArmListModule } from './treatment-arm/treatment-arm-list/treatment-arm-list.module';
import { TreatmentArmDetailsModule } from './treatment-arm/treatment-arm-details/treatment-arm-details.module';
import { PatientListModule } from './patient/patient-list/patient-list.module';
import { PatientDetailsModule } from './patient/patient-details/patient-details.module';
import { PatientVariantReportModule } from './patient/patient-variant-report/patient-variant-report.module';
import { PatientVariantReportOutsideAssayModule } from './patient/patient-variant-report-oa/patient-variant-report-oa.module';
import { PatientVariantReportQcModule } from './patient/patient-variant-report-qc/patient-variant-report-qc.module';
import { CliaVariantReportQcModule } from './clia/clia-variant-report-qc/clia-variant-report-qc.module';
import { AssignmentReportModule } from './patient/assignment-report/assignment-report.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { VariantReportSimpleTableModule } from './shared/variant-report-simple-table/variant-report-simple-table.module';
import { VariantReportFilteredTableModule } from './shared/variant-report-filtered-table/variant-report-filtered-table.module';
import { ErrorHandlingService } from './shared/error-handling/error-handling.service';
import { ToastrService } from './shared/error-handling/toastr.service';
import { ErrorPageHttpInterceptor } from './shared/error-handling/error-page-http.interceptor';

export function main() {
  let config: any[] = [
    { path: 'dashboard', component: 'DashboardComponent' }
  ];

  describe('App component', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    // async beforeEach
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [FormsModule, RouterTestingModule.withRoutes(config)],
        declarations: [
          BrowserModule,
          BrowserAnimationsModule,
          HttpModule,
          FormsModule,
          SharedModule.forRoot(),
          AppRoutingModule,
          LoginModule,
          DashboardModule,
          CliaParentModule,
          CliaVariantReportsNtcModule,
          CliaVariantReportsPaccModule,
          CliaVariantReportsPcModule,
          BiopsyTrackingListModule,
          TreatmentArmListModule,
          TreatmentArmDetailsModule,
          PatientListModule,
          PatientDetailsModule,
          PatientVariantReportModule,
          PatientVariantReportOutsideAssayModule,
          PatientVariantReportQcModule,
          CliaVariantReportQcModule,
          AssignmentReportModule,
          VariantReportFilteredTableModule,
          VariantReportSimpleTableModule,
          PopoverModule,
          HttpClientModule,
          ToastModule.forRoot(),
          ModalModule.forRoot(),
          ErrorModule // This needs to be at the bottom of the list for ErrorComponent to work properly
        ],
        providers: [
          {
            provide: APP_BASE_HREF,
            useValue: '<%= APP_BASE %>'
          },
          {
            provide: Http,
            useFactory: (backend: XHRBackend, options: RequestOptions, router: Router) => {
              return new ErrorPageHttpInterceptor(backend, options, router);
            },
            deps: [XHRBackend, RequestOptions, Router]
          },
          AUTH_PROVIDERS,
          Auth,
          AuthGuard,
          LoginGuard,
          ToastrService,
          { provide: ErrorHandler, useClass: ErrorHandlingService }
        ]
      }).compileComponents();  // compile template and css
    }));

    // synchronous beforeEach
    beforeEach(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance; // AppComponent test instance
      // query for the title 'page-header' by CSS element selector
      de = fixture.debugElement.query(By.css('.page-header'));
      el = de.nativeElement;
    });

    // vcr: ViewContainerRef,
    // public toastr: ToastsManager,
    // private router: Router,
    // private toastrService: ToastrService

    // it('can instantiate component with "new"', inject([AuthHttp, DownloadService], (http: AuthHttp, download: DownloadService) => {
    //   expect(http).not.toBeNull('http should be provided');
    //   let service = new PatientApiService(http, download);
    //   expect(service instanceof PatientApiService).toBe(true, 'new service should be ok');
    // }));

    // it('should build without a problem',
    //   async(() => {
    //     TestBed
    //       .compileComponents()
    //       .then(() => {
    //         let fixture = TestBed.createComponent(TestComponent);
    //         let compiled = fixture.nativeElement;

    //         expect(compiled).toBeTruthy();
    //       });
    //   }));

  });
}

@Component({
  selector: 'test-cmp',
  template: '<sd-app></sd-app>'
})
class TestComponent {
}
