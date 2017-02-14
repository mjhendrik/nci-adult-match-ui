import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BtComponent } from './bt.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'bt', component: BtComponent }
    ])
  ],
  exports: [RouterModule]
})
export class BtRoutingModule { }
