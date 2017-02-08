import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TAComponent } from './ta.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'ta', component: TAComponent }
    ])
  ],
  exports: [RouterModule]
})
export class TARoutingModule { }
