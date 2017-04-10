import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AUTH_PROVIDERS } from 'angular2-jwt';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { CliaDartmouthModule } from './clia/clia-dartmouth/clia-dartmouth.module';
import { CliaMdaccModule } from './clia/clia-mdacc/clia-mdacc.module';
import { CliaMghModule } from './clia/clia-mgh/clia-mgh.module';
import { CliaMochaModule } from './clia/clia-mocha/clia-mocha.module';
import { CliaYaleModule } from './clia/clia-yale/clia-yale.module';
import { CliaVariantReportsNtcModule } from './clia/clia-variant-reports-ntc/clia-variant-reports-ntc.module';
import { CliaVariantReportsPaccModule } from './clia/clia-variant-reports-pacc/clia-variant-reports-pacc.module';
import { CliaVariantReportsPcModule } from './clia/clia-variant-reports-pc/clia-variant-reports-pc.module';
import { BiopsyTrackingListModule } from './biopsy-tracking/biopsy-tracking.module';
import { TreatmentArmListModule } from './treatment-arm/treatment-arm-list/treatment-arm-list.module';
import { TaDetailsModule } from './treatment-arm/treatment-arm-details/treatment-arm-details.module';
import { PatientListModule } from './patient/patient-list/patient-list.module';
import { PatientDetailsModule } from './patient/patient-details/patient-details.module';
import { PatientVariantReportModule } from './patient/patient-variant-report/patient-variant-report.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';
import { Auth } from './shared/auth/auth.service';
import { AuthGuard } from './shared/auth/auth.guard.service';
import { LoginGuard } from './shared/auth/login.guard.service';

@NgModule({
  imports: [BrowserModule,
    HttpModule,
    AppRoutingModule,
    LoginModule,
    CliaDartmouthModule,
    CliaMdaccModule,
    CliaMghModule,
    CliaMochaModule,
    CliaYaleModule,
    CliaVariantReportsNtcModule,
    CliaVariantReportsPaccModule,
    CliaVariantReportsPcModule,
    BiopsyTrackingListModule,
    TreatmentArmListModule,
    TaDetailsModule,
    PatientListModule,
    PatientDetailsModule,
    PatientVariantReportModule,
    DashboardModule,
    SharedModule.forRoot(),
    FormsModule
  ],
  declarations: [AppComponent],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '<%= APP_BASE %>'
    },
    AUTH_PROVIDERS,
    Auth,
    AuthGuard,
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
