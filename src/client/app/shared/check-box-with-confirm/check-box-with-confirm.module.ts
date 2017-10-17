import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckBoxWithConfirmComponent } from './check-box-with-confirm.component';
import { ModalDialogWithCommentsModule } from '../modal-dialog-with-comments/modal-dialog-with-comments.module';

@NgModule({
  imports: [
    CommonModule,
    ModalDialogWithCommentsModule
  ],
  declarations: [CheckBoxWithConfirmComponent],
  exports: [CheckBoxWithConfirmComponent]
})
export class CheckBoxWithConfirmModule { }
