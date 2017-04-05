import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CliaDartmouthComponent } from './clia-dartmouth.component';
import { CliaDartmouthRoutingModule } from './clia-dartmouth-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { DirectivesModule } from '../../shared/directives/directives.module';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from '../../shared/datatables/index';
import { PipesModule } from '../../shared/pipes/pipes.module';

@NgModule({
  imports: [CommonModule, CliaDartmouthRoutingModule, SharedModule, FormsModule, DataTableModule, PipesModule, DirectivesModule],
  declarations: [CliaDartmouthComponent],
  exports: [CliaDartmouthComponent]
})
export class CliaDartmouthModule { }
