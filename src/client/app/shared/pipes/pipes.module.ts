import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterByTextPipe } from './filter-by-text.pipe';
import { DashifyPipe } from './dashify.pipe';
import { GmtPipe } from './gmt.pipe';
import { KeysPipe } from './keys.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [FilterByTextPipe, DashifyPipe, GmtPipe, KeysPipe],
  exports: [FilterByTextPipe, DashifyPipe, GmtPipe, KeysPipe],
})
export class PipesModule { }
