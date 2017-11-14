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
  items: any[] = [
    { stepNumber: '1.0', status: 'fake-status2' },
    { stepNumber: '2.0', status: 'fake-status3' }
  ];
}

export function main() {
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

    it('should show no items until `detectChanges` is called', () => {
      let itemElements = fixture.debugElement.queryAll(By.css('li'));
      expect(itemElements.length).toBe(0);
    });

    it('should show no data available if there is no items supplied', () => {
      hostComponent.items = [];
      fixture.detectChanges();
      let noDataElement = fixture.debugElement.query(By.css('.text-muted'));
      expect((noDataElement.nativeElement as HTMLElement).innerText).toContain('No Patient timeline data yet');
    });

    it('should show 2 items', () => {
      fixture.detectChanges();
      let itemElements = fixture.debugElement.queryAll(By.css('li'));
      expect(itemElements.length).toBe(2);
    });

    it('should show 1 items if another is removed', () => {
      hostComponent.items.pop();
      fixture.detectChanges();
      let itemElements = fixture.debugElement.queryAll(By.css('li'));
      expect(itemElements.length).toBe(1);
    });

  });

}
