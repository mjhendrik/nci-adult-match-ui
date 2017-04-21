import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LongListComponent } from './long-list.component';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from '../../shared/datatables/index';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { DirectivesModule } from '../../shared/directives/directives.module';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    DataTableModule,
    PipesModule,
    DirectivesModule
  ],
  declarations: [LongListComponent],
  exports: [LongListComponent]
})
export class LongListModule { }
