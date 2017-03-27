import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtComponent } from './bt.component';
import { BtRoutingModule } from './bt-routing.module';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from '../shared/datatables/index';
import { PipesModule } from '../shared/pipes/pipes.module';


@NgModule({
  imports: [CommonModule, BtRoutingModule, FormsModule, DataTableModule, PipesModule],
  declarations: [BtComponent],
  exports: [BtComponent]
})
export class BtModule { }
