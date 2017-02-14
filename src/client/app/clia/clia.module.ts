import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CliaComponent } from './clia.component';
import { CliaRoutingModule } from './clia-routing.module';

@NgModule({
  imports: [CommonModule, CliaRoutingModule],
  declarations: [CliaComponent],
  exports: [CliaComponent]
})
export class CliaModule { }
