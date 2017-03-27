import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';

import { async } from '@angular/core/testing';
import { Route } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { TaComponent } from './ta/ta.component';
import { PatientDetailsComponent } from './patient/patient-details/patient-details.component';
import { PatientVariantReportComponent } from './patient/patient-variant-report/patient-variant-report.component';
import { TaDetailsComponent } from './ta/ta-details/ta-details.component';
import { BtComponent } from './bt/bt.component';
import { CliaComponent } from './clia/clia.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

export function main() {

  describe('App component', () => {

    let config: Route[] = [
      { path: '', component: LoginComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'patients', component: PatientListComponent },
      { path: 'patients/details', component: PatientDetailsComponent },
      { path: 'patients/details/variant_report', component: PatientVariantReportComponent },
      { path: 'treatments', component: TaComponent },
      { path: 'treatments/details', component: TaDetailsComponent },
      { path: 'bt', component: BtComponent },
      { path: 'clia', component: CliaComponent }
    ];
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [FormsModule, RouterTestingModule.withRoutes(config)],
        declarations: [
          TestComponent,
          NavbarComponent,
          AppComponent,
          LoginComponent,
          DashboardComponent,
          PatientListComponent,
          TaComponent,
          TaDetailsComponent,
          BtComponent,
          CliaComponent,
          PatientDetailsComponent,
          PatientVariantReportComponent],
        providers: [
          { provide: APP_BASE_HREF, useValue: '' }
        ]
      });
    });

    it('should build without a problem',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(TestComponent);
            let compiled = fixture.nativeElement;

            expect(compiled).toBeTruthy();
          });
      }));
  });
}

@Component({
  selector: 'test-cmp',
  template: '<sd-app></sd-app>'
})
class TestComponent {
}



