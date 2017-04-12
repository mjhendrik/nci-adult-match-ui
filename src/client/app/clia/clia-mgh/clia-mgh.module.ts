import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CliaMghComponent } from './clia-mgh.component';
import { CliaMghRoutingModule } from './clia-mgh-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { DirectivesModule } from '../../shared/directives/directives.module';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from '../../shared/datatables/index';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { CliaParentModule } from './../clia-parent/clia-parent.module';

@NgModule({
  imports: [CommonModule, CliaMghRoutingModule, SharedModule, FormsModule, DataTableModule, PipesModule, DirectivesModule, CliaParentModule],
  declarations: [CliaMghComponent],
  exports: [CliaMghComponent]
})
export class CliaMghModule { }
