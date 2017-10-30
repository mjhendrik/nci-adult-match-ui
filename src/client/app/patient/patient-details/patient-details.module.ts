import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { PatientDetailsComponent } from './patient-details.component';
import { PatientDetailsRoutingModule } from './patient-details-routing.module';
import { DataTableModule } from '../../shared/datatables/index';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { DirectivesModule } from '../../shared/directives/directives.module';
import { PatientApiService } from '../patient-api.service';
import { PatientTimelineModule } from './../patient-timeline/patient-timeline.module';
import { ViewDataTransformer } from './../view-data-transformer.service';
import { SharedModule } from '../../shared/shared.module';
import { FileUploadModule } from '../file-upload/file-upload.module';

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
  url: 'https://fakeurl.org/fakepost',
  timeout: 0,
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
    FileUploadModule,
    TabsModule.forRoot(),
    DropzoneModule.forRoot(DROPZONE_CONFIG)
  ],
  declarations: [PatientDetailsComponent],
  exports: [PatientDetailsComponent],
  providers: [PatientApiService, ViewDataTransformer]
})
export class PatientDetailsModule { }
