import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CliaComponent } from './clia.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'clia', component: CliaComponent }
    ])
  ],
  exports: [RouterModule]
})
export class CliaRoutingModule { }
