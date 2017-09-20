import { Component } from '@angular/core';
import {
  async,
  TestBed
} from '@angular/core/testing';

import { VariantReportSimpleTableGeneFusionComponent } from './variant-report-simple-table-gf.component';

export function main() {
  describe('variant-report-simple-table-gf component', () => {
    // Setting module for testing
    // Disable old forms

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent, VariantReportSimpleTableGeneFusionComponent],
        imports: []
      });
    });
  });
}

@Component({
  selector: 'test-cmp',
  template: '<sd-variant-report-simple-table-gf></sd-variant-report-simple-table-gf>'
})
class TestComponent { }
