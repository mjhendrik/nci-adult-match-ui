import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BiopsyTrackingListComponent } from './biopsy-tracking.component';
import { BiopsyTrackingListRoutingModule } from './biopsy-tracking-routing.module';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from '../shared/datatables/index';
import { PipesModule } from '../shared/pipes/pipes.module';
import { BiopsyTrackingApiService } from './biopsy-tracking-api.service';



@NgModule({
  imports: [CommonModule, BiopsyTrackingListRoutingModule, FormsModule, DataTableModule, PipesModule],
  declarations: [BiopsyTrackingListComponent],
  exports: [BiopsyTrackingListComponent],
  providers: [BiopsyTrackingApiService]
})
export class BiopsyTrackingListModule { }
