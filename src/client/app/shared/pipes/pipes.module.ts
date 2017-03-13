import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { filterByText } from './filterpipe';
import { dashify } from './dashify';
import { GMTFilter } from './gmt';

@NgModule({
  imports: [CommonModule],
  declarations: [filterByText, dashify, GMTFilter],
  exports: [filterByText, dashify, GMTFilter],
})
export class PipesModule { }
