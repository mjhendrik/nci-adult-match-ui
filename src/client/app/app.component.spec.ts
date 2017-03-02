import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';

import {
  async
} from '@angular/core/testing';
import {
  Route
} from '@angular/router';
import {
  RouterTestingModule
} from '@angular/router/testing';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientsComponent } from './patients/patients.component';
import { TaComponent } from './ta/ta.component';
import { PatientsDetailsComponent } from './patients/patients-details/patients-details.component';
import { TaDetailsComponent } from './ta/ta-details/ta-details.component';
import { BtComponent } from './bt/bt.component';
import { CliaComponent } from './clia/clia.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

export function main() {

  describe('App component', () => {

    let config: Route[] = [
      { path: '', component: LoginComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'patients', component: PatientsComponent },
      { path: 'treatments', component: TaComponent },
      { path: 'patients/details', component: PatientsDetailsComponent },
      { path: 'treatments/details', component: TaDetailsComponent },
      { path: 'bt', component: BtComponent },
      { path: 'clia', component: CliaComponent }
    ];
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [FormsModule, RouterTestingModule.withRoutes(config)],
        declarations: [TestComponent, NavbarComponent,
          AppComponent, LoginComponent,
          DashboardComponent, PatientsComponent,
          TaComponent, BtComponent,
          CliaComponent, PatientsDetailsComponent,
          TaDetailsComponent],
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



