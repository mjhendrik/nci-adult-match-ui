import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ModalDialogWithCommentsComponent } from './modal-dialog-with-comments.component';
import { ModalDialogConfirmationComponent } from './modal-dialog-confirmation.component';
import { ModalDialogPathologyReportComponent } from './modal-dialog-pathology-report.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ModalDialogWithCommentsComponent,
    ModalDialogConfirmationComponent,
    ModalDialogPathologyReportComponent
  ],
  exports: [
    ModalDialogWithCommentsComponent,
    ModalDialogConfirmationComponent,
    ModalDialogPathologyReportComponent
  ]
})
export class ModalDialogsModule { }
