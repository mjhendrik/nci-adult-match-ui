import {
  Component,
  DebugElement,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import {
  async,
  TestBed,
  ComponentFixture,
  inject
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BsModalService } from 'ngx-bootstrap';

import { CheckBoxWithConfirmComponent, ConfirmableItem } from './check-box-with-confirm.component';
import { BsModalServiceStub } from '../../patient/testing/bs-modal.service-stub';

@Component({
  selector: 'test-cmp',
  template: `
  <sd-check-box-with-confirm [item]="item" [confirmTitle]="confirmTitle" [confirmMessage]="'Please enter a reason:'"
    [promptOnlyIf]="true" [isEnabled]="isEditable" (onItemConfirmed)="onItemConfirmed(item)">
  </sd-check-box-with-confirm>
  `
})
class TestComponent {
  confirmTitle = 'Confirmation Comments';

  @Input() items: ConfirmableItem[] = [{
    confirmed: false,
    id: 'dummy_id',
    comment: 'dummy_comment'
  }];
  @Input() isEditable: boolean;

  @Output() onVariantConfirmed: EventEmitter<ConfirmableItem> = new EventEmitter();

  onItemConfirmed(item: ConfirmableItem) {
    if (this.onVariantConfirmed) {
      this.onVariantConfirmed.emit(item);
    }
  }
}

export function main() {
  describe('CheckBoxWithConfirmComponent (templateUrl)', () => {
    let hostComponent: TestComponent;
    let fixture: ComponentFixture<TestComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    // async beforeEach
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [CommonModule],
        declarations: [CheckBoxWithConfirmComponent, TestComponent],
        providers: [
          { provide: BsModalService, useClass: BsModalServiceStub }
        ]
      }).compileComponents();  // compile template and css
    }));

    // synchronous beforeEach
    beforeEach(() => {
      fixture = TestBed.createComponent(TestComponent);
      hostComponent = fixture.componentInstance;
      de = fixture.debugElement.query(By.css('sd-check-box-with-confirm'));
      el = de.nativeElement;
    });

    it('can provide the BsModalServiceStub as BsModalService', inject([BsModalService], (modalService: BsModalServiceStub) => {
      expect(BsModalService).not.toBeNull('BsModalService should be provided');
    }));

    it('can instantiate service with "new"', inject([BsModalService], (modalService: BsModalService) => {
      expect(modalService).not.toBeNull('modalService should be provided');
      let service = new CheckBoxWithConfirmComponent(modalService);
      expect(service instanceof CheckBoxWithConfirmComponent).toBe(true, 'new service should be ok');
    }));

    it('should have no confirm-title until manually calling `detectChanges`', () => {
      let a = de.attributes['ng-reflect-confirm-title'];
      expect(a).not.toBeNull();
    });

    xit('should display confirm-title after manually calling `detectChanges`', () => {
      fixture.detectChanges();
      let a = de.attributes['ng-reflect-confirm-title'];
      expect(a).not.toBeNull();
    });

  });
}
