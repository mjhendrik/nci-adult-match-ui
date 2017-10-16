import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
    selector: 'sd-modal-dialog-with-comments',
    templateUrl: 'modal-dialog-with-comments.component.html'
//     template: `
//     <div class="modal-header">
//       <h4 class="modal-title pull-left">{{title}}</h4>
//       <button type="button" class="close pull-right" aria-label="Close" (click)="bsModalRef.hide()">
//         <span aria-hidden="true">&times;</span>
//       </button>
//     </div>
//     <div class="modal-body">
//     vidy
//     </div>
//     <div class="modal-footer">
//       <button type="button" class="btn btn-default" (click)="bsModalRef.hide()">Close</button>
//     </div>
//   `
})
export class ModalDialogWithCommentsComponent {
    constructor(public bsModalRef: BsModalRef) { }
}
