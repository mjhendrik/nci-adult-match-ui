import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientDetailsComponent } from './patient-details.component';
import { PatientDetailsRoutingModule } from './patient-details-routing.module';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from '../../shared/datatables/index';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { DirectivesModule } from '../../shared/directives/directives.module';
import { PatientApiService } from '../patient-api.service';

import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

const DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  server: 'https://httpbin.org/post',
  // maxFiles: 3,
  maxFilesize: 50000, // size in MB
  // acceptedFiles: '.zip,.bam',
  addRemoveLinks: true
};

@NgModule({
  imports: [CommonModule,
    PatientDetailsRoutingModule,
    FormsModule,
    DataTableModule,
    PipesModule,
    DirectivesModule,
    DropzoneModule.forRoot(DROPZONE_CONFIG)],
  declarations: [PatientDetailsComponent],
  exports: [PatientDetailsComponent],
  providers: [PatientApiService]
})
export class PatientDetailsModule { }
