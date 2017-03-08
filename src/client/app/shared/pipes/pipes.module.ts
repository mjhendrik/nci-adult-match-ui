import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { filterByText } from './filterpipe';
import { dashify } from './dashify'

@NgModule({
  imports: [CommonModule],
  declarations: [filterByText, dashify],
  exports: [filterByText, dashify],
})
export class PipesModule { }
