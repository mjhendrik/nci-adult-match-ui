import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ModalDialogWithCommentsComponent } from './modal-dialog-with-comments.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ModalDialogWithCommentsComponent],
  exports: [ModalDialogWithCommentsComponent]
})
export class ModalDialogsModule { }
