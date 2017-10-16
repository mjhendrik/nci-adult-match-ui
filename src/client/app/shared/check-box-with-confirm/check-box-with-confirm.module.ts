import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckBoxWithConfirmComponent } from './check-box-with-confirm.component';
import { PipesModule } from '../pipes/pipes.module';
import { ModalDialogWithCommentsComponent } from './modal-dialog-with-comments.component';

@NgModule({
  imports: [
    CommonModule,
    PipesModule
  ],
  declarations: [CheckBoxWithConfirmComponent, ModalDialogWithCommentsComponent],
  exports: [CheckBoxWithConfirmComponent]
})
export class CheckBoxWithConfirmModule { }

