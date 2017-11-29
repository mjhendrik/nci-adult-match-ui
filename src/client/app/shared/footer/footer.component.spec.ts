import { Component } from '@angular/core';
import { APP_BASE_HREF, Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import {
  async,
  TestBed
} from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';

import { Auth } from './../auth/auth.service';
import { ConfigApiService } from './../config/config-api.service';
import { FooterComponent } from './footer.component';

export function main() {
  describe('sd-navbar component', () => {



    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent, FooterComponent],
        imports: [],
        providers: [
          Location,
          { provide: LocationStrategy, useClass: PathLocationStrategy },
          { provide: APP_BASE_HREF, useValue: '' },
          { provide: Auth, useClass: AuthMock },
          { provide: ConfigApiService, useClass: ConfigApiServiceMock }
        ]
      });
    });

    it('should work by calling ngOnInit -> buildInfo',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(FooterComponent);
            fixture.componentInstance.ngOnInit();
            let comp: FooterComponent = fixture.componentInstance;
            expect(comp.buildInfo).toEqual({ 'buildInfo': 'mock_build' });
          });
      }));
  });
}

@Component({
  selector: 'test-cmp',
  template: '<sd-footer></sd-footer>'
})
class TestComponent { }

class AuthMock {
  logout(): void {
    // console.log('Mock logout called');
  }
}

class ConfigApiServiceMock {
  getBuildInfo(): Observable<any> {
    return Observable.of({ buildInfo: 'mock_build' });
  }
}
