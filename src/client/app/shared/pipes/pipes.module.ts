import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { filterByText } from './filterpipe.pipe';
import { dashify } from './dashify.pipe';
import { GMTFilter } from './gmt.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [filterByText, dashify, GMTFilter],
  exports: [filterByText, dashify, GMTFilter],
})
export class PipesModule { }
