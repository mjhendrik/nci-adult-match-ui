import { Component } from '@angular/core';
import {
  async,
  TestBed
} from '@angular/core/testing';

import { VariantReportFilteredTableCnvComponent } from './variant-report-filtered-table-cnv.component';

export function main() {
  xdescribe('variant-report-filtered-table-cnv component', () => {
    
    

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent, VariantReportFilteredTableCnvComponent],
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
  selector: 'test-cmp',
  template: '<app-variant-report-filtered-table-cnv></app-variant-report-filtered-table-cnv>'
})
class TestComponent { }
