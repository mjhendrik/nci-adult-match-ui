import { Component } from '@angular/core';
import {
  async,
  TestBed
} from '@angular/core/testing';

import { VariantReportSimpleTableGeneFusionComponent } from './variant-report-simple-table-gf.component';

export function main() {
  xdescribe('variant-report-simple-table-gf component', () => {
    
    

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
