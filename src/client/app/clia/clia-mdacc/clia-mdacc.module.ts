import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CliaMdaccComponent } from './clia-mdacc.component';
import { CliaMdaccRoutingModule } from './clia-mdacc-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { DirectivesModule } from '../../shared/directives/directives.module';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from '../../shared/datatables/index';
import { PipesModule } from '../../shared/pipes/pipes.module';

@NgModule({
  imports: [CommonModule, CliaMdaccRoutingModule, SharedModule, FormsModule, DataTableModule, PipesModule, DirectivesModule],
  declarations: [CliaMdaccComponent],
  exports: [CliaMdaccComponent]
})
export class CliaMdaccModule { }
