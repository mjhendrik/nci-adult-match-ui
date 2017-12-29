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
import { AssayHistoryTableComponent, AssayHistoryItem } from './assay-history-table.component';

@Component({
  selector: 'app-test-cmp',
  template: '<sd-assay-history-table [reasons]="testItems"></sd-assay-history-table>'
})
class TestComponent {
  items: AssayHistoryItem[] = [];
}

export function main() {
  xdescribe('AssayHistoryTableComponent (templateUrl)', () => {
    let hostComponent: TestComponent;
    let fixture: ComponentFixture<TestComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    // async beforeEach
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          PipesModule,
          SharedModule
        ],
        declarations: [AssayHistoryTableComponent, TestComponent]
      }).compileComponents();  // compile template and css
    }));

    // synchronous beforeEach
    beforeEach(() => {
      fixture = TestBed.createComponent(TestComponent);
      hostComponent = fixture.componentInstance;
      de = fixture.debugElement.query(By.css('sd-assay-history-table'));
      el = de.nativeElement;
    });

    // it('should have no table body until manually calling `detectChanges`', () => {
    //   let tbody = fixture.debugElement.query(By.css('tbody'));
    //   expect(tbody).toBeNull();
    // });

    // it('should display "No Assignment data" when host provides empty array', () => {
    //   fixture.detectChanges();
    //   let tbody = fixture.debugElement.query(By.css('tbody'));
    //   let rows = tbody.queryAll(By.css('tr'));
    //   expect(rows.length).toBe(1);
    //   expect((rows[0].nativeElement as HTMLElement).innerText).toContain('No Assignment data');
    // });

    // it('should display 2 rows when host provides array of 2 items', () => {
    //   let a = new AssayHistoryItem();
    //   a.name = 'fake-section1';
    //   a.items.push('fake-reason1');
    //   hostComponent.items.push(a);

    //   a = new AssayHistoryItem();
    //   a.name = 'fake-section2';
    //   a.items.push('fake-reason2');
    //   a.items.push('fake-reason3');
    //   hostComponent.items.push(a);

    //   fixture.detectChanges();
    //   let tbody = fixture.debugElement.query(By.css('tbody'));
    //   let rows = tbody.queryAll(By.css('tr'));
    //   expect(rows.length).toBe(1);
    //   expect((rows[0].nativeElement as HTMLElement).innerText).toContain('No Assignment data');
    // });

  });
}
