import {
  DebugElement,
} from '@angular/core';
import {
  async,
  TestBed,
  ComponentFixture,
  inject
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

import { BsModalServiceStub } from '../../patient/testing/bs-modal.service-stub';
import { DialogResults } from '../modal-dialogs/modal-dialog-results';
import { ModalDialogConfirmationComponent } from './modal-dialog-confirmation.component';

export function main() {
  describe('ModalDialogConfirmationComponent (templateUrl)', () => {
    let component: ModalDialogConfirmationComponent;
    let fixture: ComponentFixture<ModalDialogConfirmationComponent>;
    let de: DebugElement;
    let el: HTMLElement;
    let modalService = new BsModalServiceStub();
    let bsModalRef: BsModalRef;

    // async beforeEach
    beforeEach(async(() => {
      bsModalRef = modalService.show(ModalDialogConfirmationComponent);
      bsModalRef.hide = () => { ; };

      TestBed.configureTestingModule({
        imports: [CommonModule],
        declarations: [ModalDialogConfirmationComponent],
        providers: [
          { provide: BsModalService, useValue: modalService},
          { provide: BsModalRef, useValue: bsModalRef }
        ]
      }).compileComponents();  // compile template and css

      bsModalRef.content.title = 'test_confirmTitle';
      bsModalRef.content.message = 'test_confirmMessage';
      bsModalRef.content.okButtonText = 'test_okButtonText';
      bsModalRef.content.cancelButtonText = 'test_cancelButtonText';
    }));

    // synchronous beforeEach
    beforeEach(() => {
      fixture = TestBed.createComponent(ModalDialogConfirmationComponent);
      component = fixture.componentInstance;
    });

    it('can provide BsModalService and BsModalRef', inject([BsModalService, BsModalRef], (bsModalRef: BsModalRef, modalService: BsModalService) => {
      expect(bsModalRef).not.toBeNull('BsModalService should be provided');
      expect(modalService).not.toBeNull('BsModalService should be provided');
    }));

    it('can instantiate component with "new"', inject([BsModalService, BsModalRef], (bsModalRef: BsModalRef, modalService: BsModalService) => {
      let comp = new ModalDialogConfirmationComponent(bsModalRef, modalService);
      expect(comp instanceof ModalDialogConfirmationComponent).toBe(true, 'new service should be ok');
    }));

    it('can instantiate component with "new"', inject([BsModalService, BsModalRef], (bsModalRef: BsModalRef, modalService: BsModalService) => {
      let comp = new ModalDialogConfirmationComponent(bsModalRef, modalService);
      expect(comp instanceof ModalDialogConfirmationComponent).toBe(true, 'new service should be ok');
    }));

    it('template has body', inject([BsModalService, BsModalRef], (bsModalRef: BsModalRef, modalService: BsModalService) => {
      de = fixture.debugElement.query(By.css('.modal-body'));
      el = de.nativeElement;
      expect(el).toBeDefined();
    }));

    it('`ok()` calls modalService.setDismissReason() with `{ success: true }` and bsModalRef.hide()', () => {
      const expectedReason = DialogResults.toString({ success: true });
      const setDismissReasonSpy = spyOn(modalService, 'setDismissReason').and.callThrough();
      const hideSpy = spyOn(bsModalRef, 'hide').and.callThrough();

      component.ok();

      expect(setDismissReasonSpy).toHaveBeenCalledWith(expectedReason);
      expect(hideSpy).toHaveBeenCalled();
    });

    it('`cancel()` calls modalService.setDismissReason() with `{ success: false } and bsModalRef.hide()`', () => {
      const expectedReason = DialogResults.toString({ success: false });
      const setDismissReasonSpy = spyOn(modalService, 'setDismissReason').and.callThrough();
      const hideSpy = spyOn(bsModalRef, 'hide').and.callThrough();

      component.cancel();

      expect(setDismissReasonSpy).toHaveBeenCalledWith(expectedReason);
      expect(hideSpy).toHaveBeenCalled();
    });
  });
}
