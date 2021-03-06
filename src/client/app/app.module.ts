import {
  NgModule,
  ErrorHandler
} from '@angular/core';
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
import { HttpClientModule } from '@angular/common/http';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { Router } from '@angular/router';
import { ModalModule, PopoverModule } from 'ngx-bootstrap';

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
import { FileUploadContentComponent } from './patient/file-upload/file-upload-content.component';
import { DocumentUploadContentComponent } from './patient/document-upload/document-upload-content.component';
import { ModalDialogWithCommentsComponent } from './shared/modal-dialogs/modal-dialog-with-comments.component';
import { ModalDialogConfirmationComponent } from './shared/modal-dialogs/modal-dialog-confirmation.component';
import { ErrorPageHttpInterceptor } from './shared/error-handling/error-page-http.interceptor';
import { ModalDialogPathologyReportComponent } from './shared/modal-dialogs/modal-dialog-pathology-report.component';

@NgModule({
  imports: [
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
    HttpClientModule,
    ToastModule.forRoot(),
    ModalModule.forRoot(),
    PopoverModule.forRoot(),
    ErrorModule // This needs to be at the bottom of the list for ErrorComponent to work properly
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
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    FileUploadContentComponent,
    DocumentUploadContentComponent,
    ModalDialogWithCommentsComponent,
    ModalDialogConfirmationComponent,
    ModalDialogPathologyReportComponent
  ]
})
export class AppModule { }
