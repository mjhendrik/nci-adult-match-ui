import { Component } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';

import { PatientsModule } from './patients.module';

export function main() {
  describe('patients component', () => {
    // Setting module for testing
    // Disable old forms

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [PatientsModule]
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
  template: '<sd-patients></sd-patients>'
})
class TestComponent { }
