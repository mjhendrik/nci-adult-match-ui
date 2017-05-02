import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';

import { async } from '@angular/core/testing';
import { Route } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { TreatmentArmListComponent } from './treatment-arm/treatment-arm-list/treatment-arm-list.component';
import { PatientDetailsComponent } from './patient/patient-details/patient-details.component';
import { PatientVariantReportComponent } from './patient/patient-variant-report/patient-variant-report.component';
import { TreatmentArmDetailsComponent } from './treatment-arm/treatment-arm-details/treatment-arm-details.component';
import { BiopsyTrackingListComponent } from './biopsy-tracking/biopsy-tracking.component';
import { CliaParentComponent } from './clia/clia-parent/clia-parent.component';
import { CliaVariantReportsNtcComponent } from './clia/clia-variant-reports-ntc/clia-variant-reports-ntc.component';
import { CliaVariantReportsPaccComponent } from './clia/clia-variant-reports-pacc/clia-variant-reports-pacc.component';
import { CliaVariantReportsPcComponent } from './clia/clia-variant-reports-pc/clia-variant-reports-pc.component';
import { CliaVariantReportQcComponent } from './clia/clia-variant-report-qc/clia-variant-report-qc.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

export function main() {

  describe('App component', () => {

    let config: Route[] = [
      { path: '', component: LoginComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'patients', component: PatientListComponent },
      { path: 'patients/details', component: PatientDetailsComponent },
      { path: 'patients/details/variant_report', component: PatientVariantReportComponent },
      { path: 'treatments', component: TreatmentArmListComponent },
      { path: 'treatments/details', component: TreatmentArmDetailsComponent },
      { path: 'tracking', component: BiopsyTrackingListComponent },
      { path: 'clia_dartmouth', component: CliaParentComponent },
      { path: 'clia_yale', component: CliaParentComponent },
      { path: 'clia_mocha', component: CliaParentComponent },
      { path: 'clia_mgh', component: CliaParentComponent },
      { path: 'clia_mda', component: CliaParentComponent },
      { path: 'clia_variant_reports_ntc', component: CliaVariantReportsNtcComponent },
      { path: 'clia_variant_reports_pacc', component: CliaVariantReportsPaccComponent },
      { path: 'clia_variant_reports_pc', component: CliaVariantReportsPcComponent },
      { path: 'clia_variant_reports_qc', component: CliaVariantReportQcComponent }
    ];
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [FormsModule, RouterTestingModule.withRoutes(config)],
        declarations: [
          TestComponent,
          AppComponent,
          NavbarComponent,
          LoginComponent,
          DashboardComponent,
          PatientListComponent,
          TreatmentArmListComponent,
          TreatmentArmDetailsComponent,
          BiopsyTrackingListComponent,
          CliaParentComponent,
          CliaVariantReportsNtcComponent,
          CliaVariantReportsPaccComponent,
          CliaVariantReportsPcComponent,
          CliaVariantReportQcComponent,
          PatientDetailsComponent,
          PatientVariantReportComponent,
        ],
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
