import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtComponent } from './bt.component';
import { BtRoutingModule } from './bt-routing.module';

@NgModule({
  imports: [CommonModule, BtRoutingModule],
  declarations: [BtComponent],
  exports: [BtComponent]
})
export class BtModule { }
