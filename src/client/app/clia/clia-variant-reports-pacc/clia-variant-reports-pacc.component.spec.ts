import { Component } from '@angular/core';
import {
  async,
  TestBed
} from '@angular/core/testing';

import { CliaVariantReportsPaccModule } from './clia-variant-reports-pacc.module';

export function main() {
  describe('clia variant reports pacc component', () => {
    // Setting module for testing
    // Disable old forms

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [CliaVariantReportsPaccModule]
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
  template: '<sd-clia-variant-reports-pacc></sd-clia-variant-reports-pacc>'
})
class TestComponent { }
