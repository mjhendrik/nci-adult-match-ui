import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterByTextPipe } from './filter-by-text.pipe';
import { DashifyPipe } from './dashify.pipe';
import { RoundPipe } from './round.pipe';
import { GmtPipe } from './gmt.pipe';
import { KeysPipe } from './keys.pipe';
import { ChromosomePipe } from './chromosome.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [
    FilterByTextPipe,
    DashifyPipe,
    RoundPipe,
    GmtPipe,
    KeysPipe,
    ChromosomePipe
  ],
  exports: [
    FilterByTextPipe,
    DashifyPipe,
    RoundPipe,
    GmtPipe,
    KeysPipe,
    ChromosomePipe
  ]
})
export class PipesModule { }
