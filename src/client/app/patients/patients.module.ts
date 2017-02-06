import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsComponent } from './patients.component';
import { PatientsRoutingModule } from './patients-routing.module';

@NgModule({
  imports: [CommonModule, PatientsRoutingModule],
  declarations: [PatientsComponent],
  exports: [PatientsComponent]
})
export class PatientsModule { }
