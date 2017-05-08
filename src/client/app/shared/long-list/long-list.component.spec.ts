import { Component } from '@angular/core';
import {
  async,
  TestBed
} from '@angular/core/testing';

import { LongListModule } from './long-list.module';

export function main() {
  describe('long-list component', () => {
    // Setting module for testing
    // Disable old forms

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [LongListModule]
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
  template: '<sd-long-list></sd-long-list>'
})
class TestComponent { }
