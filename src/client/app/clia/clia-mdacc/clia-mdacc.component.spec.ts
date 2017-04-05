import { Component } from '@angular/core';
import {
  async,
  TestBed
} from '@angular/core/testing';

import { CliaMdaccModule } from './clia-mdacc.module';

export function main() {
  describe('clia mdacc component', () => {
    // Setting module for testing
    // Disable old forms

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [CliaMdaccModule]
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
  template: '<sd-clia-mdacc></sd-clia-mdacc>'
})
class TestComponent { }
