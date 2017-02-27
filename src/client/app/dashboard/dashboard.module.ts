import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NameListService } from '../shared/name-list/name-list.service';
import { colorCode } from '../shared/directives/colorcode';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from "../shared/datatables/index";
import { PipesModule } from "../shared/pipes/pipes.module"

@NgModule({
  imports: [CommonModule, DashboardRoutingModule, SharedModule, FormsModule, DataTableModule, PipesModule],
  declarations: [DashboardComponent, colorCode],
  exports: [DashboardComponent],
  providers: [NameListService]
})
export class DashboardModule { }
