import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CliaYaleComponent } from './clia-yale.component';
import { CliaYaleRoutingModule } from './clia-yale-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { DirectivesModule } from '../../shared/directives/directives.module';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from '../../shared/datatables/index';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { CliaParentModule } from './../clia-parent/clia-parent.module';

@NgModule({
  imports: [CommonModule, CliaYaleRoutingModule, SharedModule, FormsModule, DataTableModule, PipesModule, DirectivesModule, CliaParentModule],
  declarations: [CliaYaleComponent],
  exports: [CliaYaleComponent]
})
export class CliaYaleModule { }
