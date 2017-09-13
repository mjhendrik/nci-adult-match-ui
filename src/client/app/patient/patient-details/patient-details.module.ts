import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { PatientDetailsComponent } from './patient-details.component';
import { PatientDetailsRoutingModule } from './patient-details-routing.module';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from '../../shared/datatables/index';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { DirectivesModule } from '../../shared/directives/directives.module';
import { PatientApiService } from '../patient-api.service';
import { PatientTimelineModule } from './../patient-timeline/patient-timeline.module';
import { ViewDataTransformer } from './../view-data-transformer.service';
import { SharedModule } from '../../shared/shared.module';

import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

export interface PatientData {
  psn: string;
  patient: any;
  summaryData: any;
  section: string;
  entityId: string;
  needToScroll: boolean;
  tabs: Tabs;
}

export class Tabs {
  activeTab: string;
  hasActive: boolean;

  private tabs: { [key: string]: boolean } = {};

  set(key: string, active: boolean): void {
    this.tabs[key] = active;
    this.hasActive = this.hasActive || active;
    if (active) {
      this.activeTab = key;
    }
  }

  get(key: string, subKey?: string): boolean {
    return this.tabs[key + (subKey || '')] || false;
  }
}

const DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: 'https://httpbin.org/post',
  // maxFiles: 3,
  // parallelUploads: 3,
  timeout: 0,
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
    PatientTimelineModule,
    SharedModule,
    DropzoneModule.forRoot(DROPZONE_CONFIG)],
  declarations: [PatientDetailsComponent],
  exports: [PatientDetailsComponent],
  providers: [PatientApiService, ViewDataTransformer]
})
export class PatientDetailsModule { }
