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
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientsComponent } from './patients/patients.component';
import { TAComponent } from './ta/ta.component';
import { BTComponent } from './bt/bt.component';
import { CLIAComponent } from './clia/clia.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

export function main() {

  describe('App component', () => {

    let config: Route[] = [
      { path: '', component: DashboardComponent },
      { path: 'patients', component: PatientsComponent },
      { path: 'ta', component: TAComponent },
      { path: 'bt', component: BTComponent },
      { path: 'clia', component: CLIAComponent }
    ];
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [FormsModule, RouterTestingModule.withRoutes(config)],
        declarations: [TestComponent, NavbarComponent,
          AppComponent, DashboardComponent,
          PatientsComponent, TAComponent,
          BTComponent, CLIAComponent],
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



