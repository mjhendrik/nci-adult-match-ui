import { Component } from '@angular/core';
import {
  async,
  TestBed
} from '@angular/core/testing';

import { VariantReportFilteredTableCnvComponent } from './variant-report-filtered-table-cnv.component';

export function main() {
  describe('variant-report-filtered-table-cnv component', () => {
    // Setting module for testing
    // Disable old forms

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent, VariantReportFilteredTableCnvComponent],
        imports: []
      });
    });

    it('should work',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {

            console.log('HERE!!!');
            let fixture = TestBed.createComponent(TestComponent);
            let aboutDOMEl = fixture.debugElement.children[0].nativeElement;
            expect(aboutDOMEl).toBeTruthy();
          });
      }));
  });
}

@Component({
  selector: 'test-cmp',
  template: '<sd-variant-report-filtered-table-cnv></sd-variant-report-filtered-table-cnv>'
})
class TestComponent { }
