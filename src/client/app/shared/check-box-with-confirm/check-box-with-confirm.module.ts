import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckBoxWithConfirmComponent } from './check-box-with-confirm.component';
import { ModalDialogsModule } from '../modal-dialogs/modal-dialogs.module';

@NgModule({
  imports: [
    CommonModule,
    ModalDialogsModule
  ],
  declarations: [CheckBoxWithConfirmComponent],
  exports: [CheckBoxWithConfirmComponent]
})
export class CheckBoxWithConfirmModule { }
