import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CliaParentComponent } from './clia-parent.component';
import { SharedModule } from '../../shared/shared.module';
import { DirectivesModule } from '../../shared/directives/directives.module';
import { DataTableModule } from '../../shared/datatables/index';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { CliaParentRoutingModule } from './clia-parent-routing.module';
import { SampleControlApiService } from '../sample-control-api.service';
import { IonReportersApiService } from '../ion-reporters-api.service';
import { AliquotApiService } from '../aliquot-api.service';

@NgModule({
  imports: [CommonModule, SharedModule, CliaParentRoutingModule, FormsModule, DataTableModule, PipesModule, DirectivesModule],
  declarations: [CliaParentComponent],
  exports: [CliaParentComponent],
  providers: [
    SampleControlApiService,
    IonReportersApiService,
    AliquotApiService
  ]
})
export class CliaParentModule { }
