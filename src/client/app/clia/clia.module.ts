import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CliaComponent } from './clia.component';
import { CliaRoutingModule } from './clia-routing.module';
import { colorCodeClia } from '../shared/directives/colorcode-clia';

@NgModule({
  imports: [CommonModule, CliaRoutingModule],
  declarations: [CliaComponent, colorCodeClia],
  exports: [CliaComponent]
})
export class CliaModule { }
