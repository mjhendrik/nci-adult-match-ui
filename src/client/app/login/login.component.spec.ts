import { Component } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';

import { LoginModule } from './login.module';

export function main() {
  describe('login component', () => {
    
    

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [LoginModule]
      });
    });

    // it('should work',
    //   async(() => {
    //     TestBed
    //       .compileComponents()
    //       .then(() => {
    //         let fixture = TestBed.createComponent(TestComponent);
    //         let aboutDOMEl = fixture.debugElement.children[0].nativeElement;

    //       });
    //   }));

  });
}

@Component({
  selector: 'test-cmp',
  template: '<sd-login></sd-login>'
})
class TestComponent { }
