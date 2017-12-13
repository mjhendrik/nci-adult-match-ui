import { Component } from '@angular/core';
import {
  async,
  TestBed
} from '@angular/core/testing';

import { VariantReportSimpleTableSnvIndelsComponent } from './variant-report-simple-table-snv-indels.component';

export function main() {
  xdescribe('variant-report-simple-table-snv-indels component', () => {
    
    

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent, VariantReportSimpleTableSnvIndelsComponent],
        imports: []
      });
    });
  });
}

@Component({
  selector: 'test-cmp',
  template: '<app-variant-report-simple-table-snv-indels></app-variant-report-simple-table-snv-indels>'
})
class TestComponent { }
