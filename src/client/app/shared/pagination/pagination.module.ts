import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination.component';
import { SharedModule } from '../shared.module';
import { filterByText } from '../pipes/filterpipe';
import { OrderBy } from '../pipes/orderBy';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, SharedModule, FormsModule],
  declarations: [PaginationComponent, filterByText, OrderBy],
  exports: [PaginationComponent],
})
export class DashboardModule { }
