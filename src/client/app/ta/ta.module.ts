import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaComponent } from './ta.component';
import { TaRoutingModule } from './ta-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [CommonModule, TaRoutingModule, FormsModule],
  declarations: [TaComponent],
  exports: [TaComponent]
})
export class TaModule { }
