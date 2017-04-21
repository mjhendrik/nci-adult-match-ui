import { Component } from '@angular/core';
import {
  async,
  TestBed
} from '@angular/core/testing';

import { AssignmentReasonTableModule } from './assignment-reason-table.module';

export function main() {
  describe('assignment-reason-table component', () => {
    // Setting module for testing
    // Disable old forms

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [AssignmentReasonTableModule]
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
  template: '<sd-assignment-reason-table></sd-assignment-reason-table>'
})
class TestComponent { }
