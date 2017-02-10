import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CLIAComponent } from './clia.component';
import { CLIARoutingModule } from './clia-routing.module';

@NgModule({
  imports: [CommonModule, CLIARoutingModule],
  declarations: [CLIAComponent],
  exports: [CLIAComponent]
})
export class CLIAModule { }
