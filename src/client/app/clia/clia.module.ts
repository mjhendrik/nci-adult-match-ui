import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CliaComponent } from './clia.component';
import { CliaRoutingModule } from './clia-routing.module';
import { DirectivesModule } from '../shared/directives/directives.module';

@NgModule({
  imports: [CommonModule, CliaRoutingModule, DirectivesModule],
  declarations: [CliaComponent],
  exports: [CliaComponent]
})
export class CliaModule { }
