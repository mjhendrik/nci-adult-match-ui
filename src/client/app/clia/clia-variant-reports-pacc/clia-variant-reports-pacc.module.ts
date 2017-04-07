import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CliaYaleComponent } from './clia-variant-reports-pacc.component';
import { CliaYaleRoutingModule } from './clia-variant-reports-pacc-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { DirectivesModule } from '../../shared/directives/directives.module';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from '../../shared/datatables/index';
import { PipesModule } from '../../shared/pipes/pipes.module';

@NgModule({
  imports: [CommonModule, CliaYaleRoutingModule, SharedModule, FormsModule, DataTableModule, PipesModule, DirectivesModule],
  declarations: [CliaYaleComponent],
  exports: [CliaYaleComponent]
})
export class CliaYaleModule { }
