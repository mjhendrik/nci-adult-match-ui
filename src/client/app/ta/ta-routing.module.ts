import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TaComponent } from './ta.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'ta', component: TaComponent }
    ])
  ],
  exports: [RouterModule]
})
export class TaRoutingModule { }
