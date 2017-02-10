import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CLIAComponent } from './clia.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'clia', component: CLIAComponent }
    ])
  ],
  exports: [RouterModule]
})
export class CLIARoutingModule { }
