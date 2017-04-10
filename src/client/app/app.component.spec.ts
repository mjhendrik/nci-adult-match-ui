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
import { TreatmentArmListComponent } from './treatment-arm/treatment-arm-list/treatment-arm-list.component';
import { PatientDetailsComponent } from './patient/patient-details/patient-details.component';
import { PatientVariantReportComponent } from './patient/patient-variant-report/patient-variant-report.component';
import { TaDetailsComponent } from './treatment-arm/treatment-arm-details/treatment-arm-details.component';
import { BiopsyTrackingListComponent } from './biopsy-tracking/biopsy-tracking.component';
import { CliaDartmouthComponent } from './clia/clia-dartmouth/clia-dartmouth.component';
import { CliaMdaccComponent } from './clia/clia-mdacc/clia-mdacc.component';
import { CliaMghComponent } from './clia/clia-mgh/clia-mgh.component';
import { CliaMochaComponent } from './clia/clia-mocha/clia-mocha.component';
import { CliaYaleComponent } from './clia/clia-yale/clia-yale.component';
import { CliaVariantReportsNtcComponent } from './clia/clia-variant-reports-ntc/clia-variant-reports-ntc.component';
import { CliaVariantReportsPaccComponent } from './clia/clia-variant-reports-pacc/clia-variant-reports-pacc.component';
import { CliaVariantReportsPcComponent } from './clia/clia-variant-reports-pc/clia-variant-reports-pc.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

export function main() {

  describe('App component', () => {

    let config: Route[] = [
      { path: '', component: LoginComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'patients', component: PatientListComponent },
      { path: 'patients/details', component: PatientDetailsComponent },
      { path: 'patients/variant_report', component: PatientVariantReportComponent },
      { path: 'treatments', component: TreatmentArmListComponent },
      { path: 'treatments/details', component: TaDetailsComponent },
      { path: 'tracking', component: BiopsyTrackingListComponent },
      { path: 'clia_dartmouth', component: CliaDartmouthComponent },
      { path: 'clia_mdacc', component: CliaMdaccComponent },
      { path: 'clia_mgh', component: CliaMghComponent },
      { path: 'clia_mocha', component: CliaMochaComponent },
      { path: 'clia_yale', component: CliaYaleComponent },
      { path: 'clia_variant_reports_ntc', component: CliaVariantReportsNtcComponent },
      { path: 'clia_variant_reports_pacc', component: CliaVariantReportsPaccComponent },
      { path: 'clia_variant_reports_pc', component: CliaVariantReportsPcComponent }
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
          TreatmentArmListComponent,
          TaDetailsComponent,
          BiopsyTrackingListComponent,
          CliaDartmouthComponent,
          CliaMdaccComponent,
          CliaMghComponent,
          CliaMochaComponent,
          CliaYaleComponent,
          CliaVariantReportsNtcComponent,
          CliaVariantReportsPaccComponent,
          CliaVariantReportsPcComponent,
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



