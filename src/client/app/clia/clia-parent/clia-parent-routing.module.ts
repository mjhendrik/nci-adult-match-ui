import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './../../shared/auth/auth.guard.service';
import { CliaParentComponent } from './clia-parent.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'clia_dartmouth', component: CliaParentComponent, canActivate: [AuthGuard], data: { cliaType: 'dartmouth' } },
      { path: 'clia_mocha', component: CliaParentComponent, canActivate: [AuthGuard], data: { cliaType: 'mocha' } },
      { path: 'clia_yale', component: CliaParentComponent, canActivate: [AuthGuard], data: { cliaType: 'yale' } },
      { path: 'clia_mgh', component: CliaParentComponent, canActivate: [AuthGuard], data: { cliaType: 'mgh' } },
      { path: 'clia_mdacc', component: CliaParentComponent, canActivate: [AuthGuard], data: { cliaType: 'mdacc' } }
    ])
  ],
  exports: [RouterModule]
})
export class CliaParentRoutingModule { }
