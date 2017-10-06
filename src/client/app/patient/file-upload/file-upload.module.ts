import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './file-upload.component';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { DirectivesModule } from '../../shared/directives/directives.module';
import { FileUploadContentComponent } from './file-upload-content.component';

@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    DirectivesModule,
  ],
  declarations: [FileUploadComponent, FileUploadContentComponent],
  exports: [FileUploadComponent, FileUploadContentComponent]
})
export class FileUploadModule { }
