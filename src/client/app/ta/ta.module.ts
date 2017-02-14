import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaComponent } from './ta.component';
import { TaRoutingModule } from './ta-routing.module';

@NgModule({
  imports: [CommonModule, TaRoutingModule],
  declarations: [TaComponent],
  exports: [TaComponent]
})
export class TaModule { }
