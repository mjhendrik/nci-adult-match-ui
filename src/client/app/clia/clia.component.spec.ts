import { Component } from '@angular/core';
import {
  async,
  TestBed
} from '@angular/core/testing';

import { CliaModule } from './clia.module';

export function main() {
  describe('clia component', () => {
    // Setting module for testing
    // Disable old forms

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [CliaModule]
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
  template: '<sd-clia></sd-clia>'
})
class TestComponent { }