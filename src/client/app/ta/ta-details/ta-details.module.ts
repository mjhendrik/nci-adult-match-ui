import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaDetailsComponent } from './ta-details.component';
import { TaDetailsRoutingModule } from './ta-details-routing.module';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from '../../shared/datatables/index';
import { PipesModule } from '../../shared/pipes/pipes.module';
// import { colorCodeTa } from '../../shared/directives/colorcode-ta';


@NgModule({
  imports: [CommonModule, TaDetailsRoutingModule, FormsModule, DataTableModule, PipesModule],
  declarations: [TaDetailsComponent], //, colorCodeTa
  exports: [TaDetailsComponent]
})
export class TaDetailsModule { }
