import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
    moduleId: module.id,
    selector: 'sd-modal-dialog-with-comments',
    templateUrl: './modal-dialog-with-comments.component.html'
})
export class ModalDialogWithCommentsComponent {
    constructor(public bsModalRef: BsModalRef) { }
}
