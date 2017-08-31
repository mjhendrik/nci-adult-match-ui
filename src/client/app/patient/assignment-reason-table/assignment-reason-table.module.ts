import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AssignmentReasonTableComponent } from './assignment-reason-table.component';
import { DataTableModule } from '../../shared/datatables/index';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { DirectivesModule } from '../../shared/directives/directives.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    DataTableModule,
    PipesModule,
    DirectivesModule,
    SharedModule
  ],
  declarations: [AssignmentReasonTableComponent],
  exports: [AssignmentReasonTableComponent]
})
export class AssignmentReasonTableModule { }
