import { Component } from '@angular/core';
import {
  async,
  TestBed
} from '@angular/core/testing';

import { TreatmentArmDetailsModule } from './treatment-arm-details.module';

export function main() {
  describe('treatment arm details component', () => {
    // Setting module for testing
    // Disable old forms

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [TreatmentArmDetailsModule]
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
  template: '<sd-treatment-arm-details></sd-treatment-arm-details>'
})
class TestComponent { }
