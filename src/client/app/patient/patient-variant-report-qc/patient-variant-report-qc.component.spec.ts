import { Component } from '@angular/core';
import {
  async,
  TestBed
} from '@angular/core/testing';

import { PatientVariantReportQcModuleModule } from './patient-variant-report-qc.module';

export function main() {
  describe('patient-details component', () => {
    // Setting module for testing
    // Disable old forms

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [PatientVariantReportQcModuleModule]
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
  template: '<sd-patient-variant-report></sd-patient-variant-report>'
})
class TestComponent { }
