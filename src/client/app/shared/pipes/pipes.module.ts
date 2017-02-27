import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { filterByText } from './filterpipe';

@NgModule({
  imports: [CommonModule],
  declarations: [filterByText],
  exports: [filterByText],
})
export class PipesModule { }
