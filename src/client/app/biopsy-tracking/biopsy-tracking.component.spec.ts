import { Component } from '@angular/core';
import {
  async,
  TestBed,
  ComponentFixture
} from '@angular/core/testing';

import { BiopsyTrackingListModule } from './biopsy-tracking.module';
import { BiopsyTrackingListComponent } from './biopsy-tracking.component';
import { BiopsyTrackingApiService } from './biopsy-tracking-api.service';

export function main() {
  describe('biopsy tracking component', () => {

    let component: BiopsyTrackingListComponent;
    let fixture: ComponentFixture<BiopsyTrackingListComponent>;
    // Setting module for testing
    // Disable old forms

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [],
        imports: [BiopsyTrackingListModule],
        providers: [
          {
            provide: BiopsyTrackingApiService,
            useClass: MockBiopsyService
          }
        ]
      }).compileComponents();
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(BiopsyTrackingListComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    // it('should work',
    //   async(() => {
    //     // TestBed
    //     //   .compileComponents()
    //     //   .then(() => {
    //     //     let fixture = TestBed.createComponent(TestComponent);
    //     //     let aboutDOMEl = fixture.debugElement.children[0].nativeElement;

    //     //   });
    //   }));

    it('should create', () => {
      expect(component).toBeTruthy();
    });

  });
}

class MockBiopsyService {
  public mockName: string = 'Mocked Service';
}

// @Component({
//   selector: 'test-cmp',
//   template: '<sd-biopsy-tracking></sd-biopsy-tracking>'
// })
// class TestComponent { }
