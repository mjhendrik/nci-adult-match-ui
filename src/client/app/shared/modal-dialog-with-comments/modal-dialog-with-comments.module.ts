import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ModalDialogWithCommentsComponent } from './modal-dialog-with-comments.component';

export class DialogResults {
  success: boolean;
  comment: string;

  static fromString(value: string): DialogResults {
    return JSON.parse(value) as DialogResults;
  }

  static toString(value: DialogResults): string {
    return JSON.stringify(value);
  }
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ModalDialogWithCommentsComponent],
  exports: [ModalDialogWithCommentsComponent]
})
export class ModalDialogWithCommentsModule { }
