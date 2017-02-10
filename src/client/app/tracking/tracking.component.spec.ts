import { Component } from '@angular/core';
import {
  async,
  TestBed
} from '@angular/core/testing';

import { TrackingModule } from './tracking.module';

export function main() {
  describe('tracking component', () => {
    // Setting module for testing
    // Disable old forms

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [TrackingModule]
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
  template: '<sd-tracking></sd-tracking>'
})
class TestComponent { }
