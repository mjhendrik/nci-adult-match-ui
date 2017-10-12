import { Component, Input } from '@angular/core';
import {
  async,
  TestBed
} from '@angular/core/testing';

import { VariantReportSimpleTableCnvComponent } from './variant-report-simple-table-cnv.component';

export function main() {
  describe('variant-report-simple-table-cnv component', () => {
    // Setting module for testing
    // Disable old forms

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent, VariantReportSimpleTableCnvComponent],
        imports: []
      });
    });
  });
}

@Component({
  selector: 'test-cmp',
  template: '<sd-variant-report-simple-table-cnv></sd-variant-report-simple-table-cnv>'
})
class TestComponent { }
