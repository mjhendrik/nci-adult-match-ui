import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BTComponent } from './bt.component';
import { BTRoutingModule } from './bt-routing.module';

@NgModule({
  imports: [CommonModule, BTRoutingModule],
  declarations: [BTComponent],
  exports: [BTComponent]
})
export class BTModule { }
