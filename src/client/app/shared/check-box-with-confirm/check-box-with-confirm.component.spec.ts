import {
  Component,
  DebugElement,
  Input,
  Output,
  EventEmitter,
  ViewChild
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
import { DialogResults } from "../modal-dialogs/modal-dialog-results";

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

  @ViewChild(CheckBoxWithConfirmComponent)
  checkBoxWithConfirmComponent: CheckBoxWithConfirmComponent;

  @Input() item: ConfirmableItem = {
    confirmed: false,
    id: 'dummy_id',
    comment: 'dummy_comment'
  };
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
    let modalService = new BsModalServiceStub();

    // async beforeEach
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [CommonModule],
        declarations: [CheckBoxWithConfirmComponent, TestComponent],
        providers: [
          { provide: BsModalService, useValue: modalService }
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
      let comp = new CheckBoxWithConfirmComponent(modalService);
      expect(comp instanceof CheckBoxWithConfirmComponent).toBe(true, 'new service should be ok');
    }));

    it('should have no confirm-title until manually calling `detectChanges`', () => {
      let confirmTitle = de.attributes['ng-reflect-confirm-title'];
      expect(confirmTitle).not.toBeDefined();
    });

    it('should display confirm-title after manually calling `detectChanges`', () => {
      fixture.detectChanges();
      let confirmTitle = de.attributes['ng-reflect-confirm-title'];
      expect(confirmTitle).toEqual(hostComponent.confirmTitle);
    });

    it('should not show dialog when confirming variant', () => {
      hostComponent.item.confirmed = false;

      fixture.detectChanges();

      const spy = spyOn(modalService, 'show').and.callThrough();

      hostComponent.checkBoxWithConfirmComponent.confirm();

      expect(spy).not.toHaveBeenCalled();
    });

    it('should not dialog when un-confirming variant', () => {
      hostComponent.item.confirmed = true;

      fixture.detectChanges();

      const spy = spyOn(modalService, 'show').and.callThrough();

      hostComponent.checkBoxWithConfirmComponent.confirm();

      expect(spy).toHaveBeenCalled();
    });

    it('should unsubscribe after the dialog is closed', () => {
      hostComponent.item.confirmed = true;

      fixture.detectChanges();

      const showSpy = spyOn(modalService, 'show').and.callThrough();
      const unsubscribeSpy = spyOn(
        hostComponent.checkBoxWithConfirmComponent, 'unsubscribe'
      ).and.callThrough();

      hostComponent.checkBoxWithConfirmComponent.confirm();
      modalService.onHidden.next(DialogResults.toString({ success: true }));

      expect(showSpy).toHaveBeenCalled();
      expect(unsubscribeSpy).toHaveBeenCalled();
    });
  });
}
