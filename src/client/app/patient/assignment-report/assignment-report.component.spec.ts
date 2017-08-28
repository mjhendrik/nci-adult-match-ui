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

import { PipesModule } from './../../shared/pipes/pipes.module';
import { SharedModule } from '../../shared/shared.module';
import { AssignmentReportComponent } from './assignment-report.component';
import { AssignmentReasonTableModule } from '../assignment-reason-table/assignment-reason-table.module';
import { DirectivesModule } from '../../shared/directives/directives.module';

@Component({
  selector: 'test-cmp',
  template: '<sd-assignment-report></sd-assignment-report>'
})
class TestComponent {
}

export function main() {
  fdescribe('AssignmentReportComponent (templateUrl)', () => {
    let hostComponent: TestComponent;
    let fixture: ComponentFixture<TestComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    // async beforeEach
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          PipesModule,
          SharedModule,
          DirectivesModule,
          AssignmentReasonTableModule
        ],
        declarations: [AssignmentReportComponent, TestComponent]
      }).compileComponents();  // compile template and css
    }));

    // synchronous beforeEach
    beforeEach(() => {
      fixture = TestBed.createComponent(TestComponent);
      hostComponent = fixture.componentInstance;
      de = fixture.debugElement.query(By.css('sd-assignment-report'));
      console.log(fixture.debugElement.nativeElement.innerText);
      el = de.nativeElement;
    });

    it('should have no table body until manually calling `detectChanges`', () => {
      let tbody = fixture.debugElement.query(By.css('tbody'));
      expect(tbody).toBeNull();
    });

    it('should display "No Assignment data" when host provides empty array', () => {
      fixture.detectChanges();
      let tbody = fixture.debugElement.query(By.css('tbody'));
      let rows = tbody.queryAll(By.css('tr'));
      expect(rows.length).toBe(1);
      expect((rows[0].nativeElement as HTMLElement).innerText).toContain('No Assignment data');
    });

  });
}
