import { Component } from '@angular/core';
import {
  async,
  TestBed
} from '@angular/core/testing';

import { PatientTimelineModule } from './patient-timeline.module';

export function main() {
  describe('patient-timeline component', () => {
    // Setting module for testing
    // Disable old forms

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [PatientTimelineModule]
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
  template: '<sd-patient-timeline></sd-patient-timeline>'
})
class TestComponent { }
