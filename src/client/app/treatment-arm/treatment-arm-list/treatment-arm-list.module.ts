import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaComponent } from './treatment-arm-list.component';
import { TaRoutingModule } from './treatment-arm-list-routing.module';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from '../../shared/datatables/index';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { DirectivesModule } from '../../shared/directives/directives.module';


@NgModule({
  imports: [CommonModule, TaRoutingModule, FormsModule, DataTableModule, PipesModule, DirectivesModule],
  declarations: [TaComponent],
  exports: [TaComponent]
})
export class TaModule { }
