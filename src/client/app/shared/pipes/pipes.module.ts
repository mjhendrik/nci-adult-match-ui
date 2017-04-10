import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterByTextPipe } from './filterpipe.pipe';
import { DashifyPipe } from './dashify.pipe';
import { GmtPipe } from './gmt.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [FilterByTextPipe, DashifyPipe, GmtPipe],
  exports: [FilterByTextPipe, DashifyPipe, GmtPipe],
})
export class PipesModule { }
