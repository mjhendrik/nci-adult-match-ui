import { Component } from '@angular/core';
import {
  async,
  TestBed
} from '@angular/core/testing';

import { AssignmentReportTableModule } from './assignment-report-table.module';

export function main() {
  describe('assignment-report-table component', () => {
    // Setting module for testing
    // Disable old forms

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [AssignmentReportTableModule]
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
  template: '<sd-assignment-report-table></sd-assignment-report-table>'
})
class TestComponent { }
