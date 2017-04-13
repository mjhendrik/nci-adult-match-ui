import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CliaParentComponent } from './clia-parent.component';
import { SharedModule } from '../../shared/shared.module';
import { DirectivesModule } from '../../shared/directives/directives.module';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from '../../shared/datatables/index';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { CliaApiService } from './../clia-api.service';
import { CliaParentRoutingModule } from './clia-parent-routing.module';

@NgModule({
  imports: [CommonModule, SharedModule, CliaParentRoutingModule, FormsModule, DataTableModule, PipesModule, DirectivesModule],
  declarations: [CliaParentComponent],
  exports: [CliaParentComponent],
  providers: [CliaApiService]
})
export class CliaParentModule { }
