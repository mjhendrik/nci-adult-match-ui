import { Component } from '@angular/core';
import {
  async,
  TestBed
} from '@angular/core/testing';

import { ErrorModule } from './error.module';

export function main() {
  xdescribe('error component', () => {

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [ErrorModule]
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
  template: '<sd-error></sd-error>'
})
class TestComponent { }
