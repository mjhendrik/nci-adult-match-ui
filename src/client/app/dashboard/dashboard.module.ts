import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NameListService } from '../shared/name-list/name-list.service';
import { filterByText } from '../shared/pipes/filterpipe';
import { colorCode } from '../shared/directives/colorcode';
import { OrderBy } from '../shared/pipes/orderBy';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from "angular2-datatable/index";

@NgModule({
  imports: [CommonModule, DashboardRoutingModule, SharedModule, FormsModule, DataTableModule],
  declarations: [DashboardComponent, filterByText, OrderBy, colorCode],
  exports: [DashboardComponent],
  providers: [NameListService]
})
export class DashboardModule { }
