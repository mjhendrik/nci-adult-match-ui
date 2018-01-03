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
import { PatientHeaderComponent } from './patient-header.component';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'test-cmp',
  template: '<app-patient-header [items]="items"></app-patient-header>'
})
class TestComponent {
  items: any[] = [
    { stepNumber: '1.0', status: 'fake-status2' },
    { stepNumber: '2.0', status: 'fake-status3' }
  ];
}

export function main() {
  describe('PatientHeaderComponent (templateUrl)', () => {
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
          SharedModule
        ],
        declarations: [PatientHeaderComponent, TestComponent]
      }).compileComponents();  // compile template and css
    }));

    // synchronous beforeEach
    beforeEach(() => {
      fixture = TestBed.createComponent(TestComponent);
      hostComponent = fixture.componentInstance;
      de = fixture.debugElement.query(By.css('app-patient-header'));
      el = de.nativeElement;
    });

    xit('should show no items until `detectChanges` is called', () => {
      let itemElements = fixture.debugElement.queryAll(By.css('li'));
      expect(itemElements.length).toBe(0);
    });

    xit('should show no data available if there is no items supplied', () => {
      hostComponent.items = [];
      fixture.detectChanges();
      let noDataElement = fixture.debugElement.query(By.css('.text-muted'));
      expect((noDataElement.nativeElement as HTMLElement).innerText).toContain('No Patient header?! data yet');
    });

    xit('should show 2 items', () => {
      fixture.detectChanges();
      let itemElements = fixture.debugElement.queryAll(By.css('li'));
      expect(itemElements.length).toBe(2);
    });

    xit('should show 1 items if another is removed', () => {
      hostComponent.items.pop();
      fixture.detectChanges();
      let itemElements = fixture.debugElement.queryAll(By.css('li'));
      expect(itemElements.length).toBe(1);
    });

  });

}
