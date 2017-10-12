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
import { CheckBoxWithConfirmComponent } from './check-box-with-confirm.component';

@Component({
  selector: 'test-cmp',
  template: '<sd-check-box-with-confirm [reasons]="testItems"></sd-check-box-with-confirm>'
})
class TestComponent {
}

export function main() {
  xdescribe('CheckBoxWithConfirmComponent (templateUrl)', () => {
    let hostComponent: TestComponent;
    let fixture: ComponentFixture<TestComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    // async beforeEach
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [CheckBoxWithConfirmComponent, TestComponent]
      }).compileComponents();  // compile template and css
    }));

    // synchronous beforeEach
    beforeEach(() => {
      fixture = TestBed.createComponent(TestComponent);
      hostComponent = fixture.componentInstance;
      de = fixture.debugElement.query(By.css('sd-check-box-with-confirm'));
      el = de.nativeElement;
    });

  });
}
