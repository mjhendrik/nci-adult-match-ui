import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignmentReasonTableComponent } from './assignment-reason-table.component';
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
  declarations: [AssignmentReasonTableComponent],
  exports: [AssignmentReasonTableComponent]
})
export class AssignmentReasonTableModule { }
