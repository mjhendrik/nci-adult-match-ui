import { Component } from '@angular/core';
import {
  async,
  TestBed
} from '@angular/core/testing';

import { VariantReportComparisonTableCnvComponent } from './variant-report-comparison-table-cnv.component';

export function main() {
  describe('variant-report-comparison-table-cnv component', () => {
    
    

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent, VariantReportComparisonTableCnvComponent],
        imports: []
      });
    });

    // it('should work',
    //   async(() => {
    //     TestBed
    //       .compileComponents()
    //       .then(() => {
    //         let fixture = TestBed.createComponent(TestComponent);
    //         let aboutDOMEl = fixture.debugElement.children[0].nativeElement;
    //         expect(aboutDOMEl).toBeTruthy();
    //       });
    //   }));

  });
}

@Component({
  selector: 'app-test-cmp',
  template: '<app-variant-report-comparison-table-cnv></app-variant-report-comparison-table-cnv>'
})
class TestComponent { }
