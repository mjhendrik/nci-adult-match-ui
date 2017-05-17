import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_BASE_HREF } from '@angular/common';
import {
  HttpModule,
  Http,
  RequestOptions,
  XHRBackend
} from '@angular/http';
import { FormsModule } from '@angular/forms';
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
import { PatientVariantReportQcModule } from './patient/patient-variant-report-qc/patient-variant-report-qc.module';
import { CliaVariantReportQcModule } from './clia/clia-variant-report-qc/clia-variant-report-qc.module';
import { AssignmentReportModule } from './patient/assignment-report/assignment-report.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { VariantReportFilteredTableModule } from './shared/variant-report-table/variant-report-filtered-table.module';
import { PopoverModule } from 'ngx-popover';
import { HttpInterceptor } from './shared/http.interceptor';
import { Router } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    SharedModule.forRoot(),
    AppRoutingModule,
    LoginModule,
    ErrorModule,
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
    PatientVariantReportQcModule,
    CliaVariantReportQcModule,
    AssignmentReportModule,
    VariantReportFilteredTableModule,
    PopoverModule
  ],
  declarations: [AppComponent],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '<%= APP_BASE %>'
    },
    {
      provide: Http,
      useFactory: (backend: XHRBackend, options: RequestOptions, router: Router) => {
        return new HttpInterceptor(backend, options, router);
      },
      deps: [XHRBackend, RequestOptions, Router]
    },
    AUTH_PROVIDERS,
    Auth,
    AuthGuard,
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
