import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DirectivesModule } from '../shared/directives/directives.module';
import { DataTableModule } from '../shared/datatables/index';
import { PipesModule } from '../shared/pipes/pipes.module';
import { LoadingSpinnerModule } from '../shared/loading-spinner/loading-spinner.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    FormsModule,
    DataTableModule,
    PipesModule,
    DirectivesModule,
    LoadingSpinnerModule,
    TabsModule.forRoot()
  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent]
})
export class DashboardModule { }
