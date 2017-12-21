import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'callback', component: CallbackComponent }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

