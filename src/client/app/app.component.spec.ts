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
import { CliaDartmouthComponent } from './clia/clia-dartmouth/clia-dartmouth.component';
import { CliaMdaccComponent } from './clia/clia-mdacc/clia-mdacc.component';
import { CliaMghComponent } from './clia/clia-mgh/clia-mgh.component';
import { CliaMochaComponent } from './clia/clia-mocha/clia-mocha.component';
import { CliaYaleComponent } from './clia/clia-yale/clia-yale.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

export function main() {

  describe('App component', () => {

    let config: Route[] = [
      { path: '', component: LoginComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'patients', component: PatientListComponent },
      { path: 'patients/details', component: PatientDetailsComponent },
      { path: 'patients/variant_report', component: PatientVariantReportComponent },
      { path: 'treatments', component: TaComponent },
      { path: 'treatments/details', component: TaDetailsComponent },
      { path: 'bt', component: BtComponent },
      { path: 'clia', component: CliaComponent },
      { path: 'clia_dartmouth', component: CliaDartmouthComponent },
      { path: 'clia_mdacc', component: CliaMdaccComponent },
      { path: 'clia_mgh', component: CliaMghComponent },
      { path: 'clia_mocha', component: CliaMochaComponent },
      { path: 'clia_yale', component: CliaYaleComponent }
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
          CliaDartmouthComponent,
          CliaMdaccComponent,
          CliaMghComponent,
          CliaMochaComponent,
          CliaYaleComponent,
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



