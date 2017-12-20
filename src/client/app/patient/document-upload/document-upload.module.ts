import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropzoneModule } from 'ngx-dropzone-wrapper';

import { PipesModule } from '../../shared/pipes/pipes.module';
import { DirectivesModule } from '../../shared/directives/directives.module';
import { DocumentUploadComponent } from './document-upload.component';
import { DocumentUploadContentComponent } from './document-upload-content.component';

@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    DirectivesModule,
    FormsModule,
    DropzoneModule.forRoot()
  ],
  declarations: [DocumentUploadComponent, DocumentUploadContentComponent],
  exports: [DocumentUploadComponent, DocumentUploadContentComponent]
})
export class DocumentUploadModule { }
