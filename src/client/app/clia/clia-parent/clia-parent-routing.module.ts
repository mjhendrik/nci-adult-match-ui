import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard } from './../../shared/auth/auth.guard.service';
import { CliaDataService } from './../../shared/clia/clia-data.service';
import { CliaParentComponent } from './clia-parent.component';
import { CliaDataTransformer } from '../clia-data-transformer.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'clia_dartmouth',
        component: CliaParentComponent,
        canActivate: [AuthGuard],
        data: { cliaType: 'dartmouth' }
      },
      {
        path: 'clia_mocha',
        component: CliaParentComponent,
        canActivate: [AuthGuard],
        data: { cliaType: 'mocha' }
      },
      {
        path: 'clia_yale',
        component: CliaParentComponent,
        canActivate: [AuthGuard],
        data: { cliaType: 'yale' }
      },
      {
        path: 'clia_mgh',
        component: CliaParentComponent,
        canActivate: [AuthGuard],
        data: { cliaType: 'mgh' }
      },
      {
        path: 'clia_mda',
        component: CliaParentComponent,
        canActivate: [AuthGuard],
        data: { cliaType: 'mda' }
      }
    ])
  ],
  exports: [RouterModule],
  providers: [ CliaDataService, CliaDataTransformer ],
})
export class CliaParentRoutingModule { }
