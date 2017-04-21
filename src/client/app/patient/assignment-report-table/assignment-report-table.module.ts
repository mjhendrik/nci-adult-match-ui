import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignmentReportTableComponent } from './assignment-report-table.component';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from '../../shared/datatables/index';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { DirectivesModule } from '../../shared/directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DataTableModule,
    PipesModule,
    DirectivesModule
  ],
  declarations: [AssignmentReportTableComponent],
  exports: [AssignmentReportTableComponent]
})
export class AssignmentReportTableModule { }
