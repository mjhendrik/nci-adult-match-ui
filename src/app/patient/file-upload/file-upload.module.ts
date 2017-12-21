import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropzoneModule } from 'ngx-dropzone-wrapper';

import { PipesModule } from '../../shared/pipes/pipes.module';
import { DirectivesModule } from '../../shared/directives/directives.module';
import { FileUploadComponent } from './file-upload.component';
import { FileUploadContentComponent } from './file-upload-content.component';
import { FileUploadNotificationService } from './../file-upload-notification.service';

@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    DirectivesModule,
    FormsModule,
    DropzoneModule
  ],
  declarations: [FileUploadComponent, FileUploadContentComponent],
  exports: [FileUploadComponent, FileUploadContentComponent],
  providers: [FileUploadNotificationService]
})
export class FileUploadModule { }
