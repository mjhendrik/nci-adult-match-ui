import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { colorCodeDays } from '../shared/directives/colorcode-days';
import { colorCodeHours } from '../shared/directives/colorcode-hours';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from '../shared/datatables/index';
import { PipesModule } from '../shared/pipes/pipes.module';

@NgModule({
  imports: [CommonModule, DashboardRoutingModule, SharedModule, FormsModule, DataTableModule, PipesModule],
  declarations: [DashboardComponent, colorCodeDays, colorCodeHours],
  exports: [DashboardComponent]
})
export class DashboardModule { }
