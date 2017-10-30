import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DirectivesModule } from '../shared/directives/directives.module';
import { DataTableModule } from '../shared/datatables/index';
import { PipesModule } from '../shared/pipes/pipes.module';
import { DashboardApiService } from './dashboard-api.service';
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
    LoadingSpinnerModule
  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
  providers: [DashboardApiService]
})
export class DashboardModule { }
