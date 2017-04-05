import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CliaComponent } from './clia.component';
import { CliaRoutingModule } from './clia-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { DirectivesModule } from '../../shared/directives/directives.module';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from '../../shared/datatables/index';
import { PipesModule } from '../../shared/pipes/pipes.module';

@NgModule({
  imports: [CommonModule, CliaRoutingModule, SharedModule, FormsModule, DataTableModule, PipesModule, DirectivesModule],
  declarations: [CliaComponent],
  exports: [CliaComponent]
})
export class CliaModule { }
