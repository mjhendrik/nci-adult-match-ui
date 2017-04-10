import { Component } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';

import { TaModule } from './treatment-arm-list.module';

export function main() {
  describe('ta component', () => {
    // Setting module for testing
    // Disable old forms

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [TaModule]
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
