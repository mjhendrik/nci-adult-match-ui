import {
  DebugElement,
} from '@angular/core';
import {
  async,
  TestBed,
  ComponentFixture,
  inject
} from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

import { BsModalServiceStub } from '../../patient/testing/bs-modal.service-stub';
import { DialogResults } from '../modal-dialogs/modal-dialog-results';
import { ModalDialogWithCommentsComponent } from './modal-dialog-with-comments.component';

export function main() {
  describe('ModalDialogWithCommentsComponent (templateUrl)', () => {
    let component: ModalDialogWithCommentsComponent;
    let fixture: ComponentFixture<ModalDialogWithCommentsComponent>;
    let de: DebugElement;
    let el: HTMLElement;
    let modalService = new BsModalServiceStub();
    let bsModalRef: BsModalRef;

    // async beforeEach
    beforeEach(async(() => {
      bsModalRef = modalService.show(ModalDialogWithCommentsComponent);
      bsModalRef.hide = () => { ; };

      TestBed.configureTestingModule({
        imports: [CommonModule, FormsModule],
        declarations: [ModalDialogWithCommentsComponent],
        providers: [
          { provide: BsModalService, useValue: modalService},
          { provide: BsModalRef, useValue: bsModalRef }
        ]
      }).compileComponents();  // compile template and css
    }));

    // synchronous beforeEach
    beforeEach(() => {
      fixture = TestBed.createComponent(ModalDialogWithCommentsComponent);
      component = fixture.componentInstance;

      component.title = 'test_confirmTitle';
      component.message = 'test_confirmMessage';
      component.isEnabled = true;
      component.comment = 'test_comment';
    });

    it('can provide BsModalService and BsModalRef', inject([BsModalService, BsModalRef], (bsModalRef: BsModalRef, modalService: BsModalService) => {
      expect(bsModalRef).not.toBeNull('BsModalService should be provided');
      expect(modalService).not.toBeNull('BsModalService should be provided');
    }));

    it('can instantiate component with "new"', inject([BsModalService, BsModalRef], (bsModalRef: BsModalRef, modalService: BsModalService) => {
      let comp = new ModalDialogWithCommentsComponent(bsModalRef, modalService);
      expect(comp instanceof ModalDialogWithCommentsComponent).toBe(true, 'new service should be ok');
    }));

    it('can instantiate component with "new"', inject([BsModalService, BsModalRef], (bsModalRef: BsModalRef, modalService: BsModalService) => {
      let comp = new ModalDialogWithCommentsComponent(bsModalRef, modalService);
      expect(comp instanceof ModalDialogWithCommentsComponent).toBe(true, 'new service should be ok');
    }));

    it('template has body', inject([BsModalService, BsModalRef], (bsModalRef: BsModalRef, modalService: BsModalService) => {
      de = fixture.debugElement.query(By.css('.modal-body'));
      el = de.nativeElement;
      expect(el).toBeDefined();
    }));

    it('`ok()` calls modalService.setDismissReason() with `{ success: true }` and bsModalRef.hide()', () => {
      fixture.detectChanges();

      const expectedReason = DialogResults.toString({ success: true, comment: 'test_comment' });
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
