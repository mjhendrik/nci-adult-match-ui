import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ModalDialogWithCommentsComponent } from './modal-dialog-with-comments.component';
import { ModalDialogConfirmationComponent } from './modal-dialog-confirmation.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ModalDialogWithCommentsComponent, ModalDialogConfirmationComponent],
  exports: [ModalDialogWithCommentsComponent, ModalDialogConfirmationComponent]
})
export class ModalDialogsModule { }
