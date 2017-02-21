import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
// import { AUTH_PROVIDERS } from 'angular2-jwt'; // error: angular2-jwt/angular2-jwt // auth0-lock
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CliaModule } from './clia/clia.module';
import { BtModule } from './bt/bt.module';
import { TaModule } from './ta/ta.module';
import { PatientsModule } from './patients/patients.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [BrowserModule, HttpModule, AppRoutingModule, CliaModule, BtModule, TaModule, PatientsModule, DashboardModule, SharedModule.forRoot(), FormsModule],
  declarations: [AppComponent],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '<%= APP_BASE %>'
    },
    // AUTH_PROVIDERS // auth0-lock
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
