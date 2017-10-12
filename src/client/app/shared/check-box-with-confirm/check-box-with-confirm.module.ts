import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckBoxWithConfirmComponent } from './check-box-with-confirm.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CheckBoxWithConfirmComponent],
  exports: [CheckBoxWithConfirmComponent]
})
export class CheckBoxWithConfirmModule { }
