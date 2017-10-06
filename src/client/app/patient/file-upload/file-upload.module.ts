import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent, FileUploadContentComponent } from './file-upload.component';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { DirectivesModule } from '../../shared/directives/directives.module';
import { FileUploadService } from './file-upload.service';

@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    DirectivesModule,
  ],
  declarations: [FileUploadComponent],
  exports: [FileUploadComponent],
  providers: [FileUploadService]
})
export class FileUploadModule { }