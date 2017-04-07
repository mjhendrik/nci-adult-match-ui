import { Component } from '@angular/core';
import {
  async,
  TestBed
} from '@angular/core/testing';

import { CliaYaleModule } from './clia-variant-reports-ntc.module';

export function main() {
  describe('clia yale component', () => {
    // Setting module for testing
    // Disable old forms

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [CliaYaleModule]
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
  template: '<sd-clia-yale></sd-clia-yale>'
})
class TestComponent { }
