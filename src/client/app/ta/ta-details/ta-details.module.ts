import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaDetailsComponent } from './ta-details.component';
import { TaDetailsRoutingModule } from './ta-details-routing.module';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from '../../shared/datatables/index';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { DirectivesModule } from '../../shared/directives/directives.module';
import { NgxChartsModule } from '@swimlane/ngx-charts/release/index';


@NgModule({
  imports: [CommonModule, TaDetailsRoutingModule, FormsModule, DataTableModule, PipesModule, DirectivesModule, NgxChartsModule],
  declarations: [TaDetailsComponent],
  exports: [TaDetailsComponent]
})
export class TaDetailsModule { }
