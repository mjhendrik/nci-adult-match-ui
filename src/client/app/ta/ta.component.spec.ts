import { Component } from '@angular/core';
import {
  async,
  TestBed
} from '@angular/core/testing';

import { TAModule } from './ta.module';

export function main() {
  describe('ta component', () => {
    // Setting module for testing
    // Disable old forms

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [TAModule]
      });
    });

    it('should work',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(TestComponent);
            let aboutDOMEl = fixture.debugElement.children[0].nativeElement;

          });
      }));
  });
}

@Component({
  selector: 'test-cmp',
  template: '<sd-ta></sd-ta>'
})
class TestComponent { }
