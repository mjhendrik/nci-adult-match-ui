import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './file-upload.component';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { DirectivesModule } from '../../shared/directives/directives.module';
import { FileUploadContentComponent } from './file-upload-content.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    DirectivesModule,
    FormsModule
  ],
  declarations: [FileUploadComponent, FileUploadContentComponent],
  exports: [FileUploadComponent, FileUploadContentComponent]
})
export class FileUploadModule { }
