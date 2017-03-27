import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AUTH_PROVIDERS } from 'angular2-jwt';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { CliaModule } from './clia/clia.module';
import { BtModule } from './bt/bt.module';
import { TaModule } from './ta/ta.module';
import { TaDetailsModule } from './ta/ta-details/ta-details.module';
import { PatientListModule } from './patient/patient-list/patient-list.module';
import { PatientDetailsModule } from './patient/patient-details/patient-details.module';
import { PatientVariantReportModule } from './patient/patient-variant-report/patient-variant-report.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';
import { Auth } from './shared/auth/auth.service';
import { AuthGuard } from './shared/auth/auth.guard.service';
import { LoginGuard } from './shared/auth/login.guard.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  imports: [BrowserModule,
    HttpModule,
    AppRoutingModule,
    LoginModule,
    CliaModule,
    BtModule,
    TaModule,
    TaDetailsModule,
    PatientListModule,
    PatientDetailsModule,
    PatientVariantReportModule,
    DashboardModule,
    SharedModule.forRoot(),
    FormsModule,
    NgxChartsModule],
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
