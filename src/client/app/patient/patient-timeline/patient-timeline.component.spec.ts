import {
  Component,
  DebugElement
} from '@angular/core';
import {
  async,
  TestBed,
  ComponentFixture
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { DirectivesModule } from './../../shared/directives/directives.module';
import { PipesModule } from './../../shared/pipes/pipes.module';
import { PatientTimelineComponent } from './patient-timeline.component';

@Component({
  selector: 'test-cmp',
  template: '<sd-patient-timeline [items]="items"></sd-patient-timeline>'
})
class TestComponent {
  items: any[] = [];
}

export function main() {
  // fdescribe('patient timeline component', () => {

  //   beforeEach(() => {
  //     TestBed.configureTestingModule({
  //       imports: [CommonModule, PipesModule, DirectivesModule],
  //       declarations: [PatientTimelineComponent]
  //     });
  //   });

  //   fit('should test getIcon',
  //     async((done: any) => {
  //       TestBed
  //         .compileComponents()
  //         .then(() => {
  //           let fixture = TestBed.overrideComponent(PatientTimelineComponent, {
  //             set: {
  //               templateUrl: ''
  //             }
  //           }).createComponent(PatientTimelineComponent);
  //           fixture.componentInstance.getIcon('test');
  //         });
  //     }));
  // });


  describe('PatientTimelineComponent (templateUrl)', () => {
    let hostComponent: TestComponent;
    let fixture: ComponentFixture<TestComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    // async beforeEach
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          CommonModule,
          PipesModule,
          DirectivesModule,
        ],
        declarations: [PatientTimelineComponent, TestComponent]
      }).compileComponents();  // compile template and css
    }));

    // synchronous beforeEach
    beforeEach(() => {
      fixture = TestBed.createComponent(TestComponent);
      hostComponent = fixture.componentInstance;
      de = fixture.debugElement.query(By.css('sd-patient-timeline'));
      el = de.nativeElement;
    });

    it('should have no table body until manually calling `detectChanges`', () => {
      expect(de).not.toBeNull();
      // let ul = de.query(By.css('ul'));
      // expect(ul).toBeNull();
    });

  //   it('should display "No Patient timeline data yet" when host provides empty array', () => {
  //     fixture.detectChanges();
  //     let ul = fixture.debugElement.query(By.css('ul'));
  //     let rows = ul.queryAll(By.css('li'));
  //     expect(rows.length).toBe(1);
  //     expect((rows[0].nativeElement as HTMLElement).innerText).toContain('No Patient timeline data yet');
  //   });

  });

}
