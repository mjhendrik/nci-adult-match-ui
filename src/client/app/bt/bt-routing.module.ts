import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BTComponent } from './bt.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'bt', component: BTComponent }
    ])
  ],
  exports: [RouterModule]
})
export class BTRoutingModule { }
