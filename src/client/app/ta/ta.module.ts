import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaComponent } from './ta.component';
import { TaRoutingModule } from './ta-routing.module';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from "../shared/datatables/index";
import { PipesModule } from "../shared/pipes/pipes.module"


@NgModule({
  imports: [CommonModule, TaRoutingModule, FormsModule, DataTableModule, PipesModule],
  declarations: [TaComponent],
  exports: [TaComponent]
})
export class TaModule { }
