import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TAComponent } from './ta.component';
import { TARoutingModule } from './ta-routing.module';

@NgModule({
  imports: [CommonModule, TARoutingModule],
  declarations: [TAComponent],
  exports: [TAComponent]
})
export class TAModule { }
