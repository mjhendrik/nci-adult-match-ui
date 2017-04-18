import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import {
  async,
  TestBed
} from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';

import { Auth } from './../auth/auth.service';
import { ConfigApiService } from './../config/config-api.service';

import { NavbarComponent } from './navbar.component';

export function main() {
  describe('sd-navbar component', () => {
    // Setting module for testing
    // Disable old forms

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent, NavbarComponent],
        imports: [RouterModule],
        providers: [
          { provide: APP_BASE_HREF, useValue: '' },
          { provide: Auth, useClass: AuthMock },
          { provide: ConfigApiService, useClass: ConfigApiServiceMock }
        ]
      });
    });


    fit('should work',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {

            console.log('HERE!!!');

            let fixture = TestBed.createComponent(TestComponent);
            let aboutDOMEl = fixture.debugElement.children[0].nativeElement;
            expect(aboutDOMEl).toBeTruthy();
          });
      }));
  });
}

@Component({
  selector: 'test-cmp',
  template: '<sd-navbar></sd-navbar>'
})
class TestComponent { }

class AuthMock {
  logout(): void { console.log('Mock logout called'); }
}

class ConfigApiServiceMock {
  getBuildInfo(): Observable<any> {
    return Observable.of({ buildInfo: 'mock_build' });
  }
}
