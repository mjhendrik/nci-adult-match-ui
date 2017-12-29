import { Component, Input } from '@angular/core';
import {
  async,
  TestBed
} from '@angular/core/testing';

import { VariantReportSimpleTableCnvComponent } from './variant-report-simple-table-cnv.component';

export function main() {
  xdescribe('variant-report-simple-table-cnv component', () => {
    
    

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent, VariantReportSimpleTableCnvComponent],
        imports: []
      });
    });
  });
}

@Component({
  selector: 'app-test-cmp',
  template: '<app-variant-report-simple-table-cnv></app-variant-report-simple-table-cnv>'
})
class TestComponent { }
