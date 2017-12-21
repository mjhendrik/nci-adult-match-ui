import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CallbackComponent } from './shared/callback/callback.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'callback', component: CallbackComponent }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

