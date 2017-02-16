import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NameListService } from '../shared/name-list/name-list.service';
import { filterByText } from '../shared/pipes/filterpipe';
import { OrderBy } from '../shared/pipes/orderBy';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, DashboardRoutingModule, SharedModule, FormsModule],
  declarations: [DashboardComponent, filterByText, OrderBy],
  exports: [DashboardComponent],
  providers: [NameListService]
})
export class DashboardModule { }
