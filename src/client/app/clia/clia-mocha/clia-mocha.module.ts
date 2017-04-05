import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CliaMochaComponent } from './clia-mocha.component';
import { CliaMochaRoutingModule } from './clia-mocha-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { DirectivesModule } from '../../shared/directives/directives.module';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from '../../shared/datatables/index';
import { PipesModule } from '../../shared/pipes/pipes.module';

@NgModule({
  imports: [CommonModule, CliaMochaRoutingModule, SharedModule, FormsModule, DataTableModule, PipesModule, DirectivesModule],
  declarations: [CliaMochaComponent],
  exports: [CliaMochaComponent]
})
export class CliaMochaModule { }
