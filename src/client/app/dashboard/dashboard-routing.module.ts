import {
  NgModule,
  Injectable
} from '@angular/core';
import {
  RouterModule,
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { AuthGuard } from './../shared/auth/auth.guard.service';
import { Observable } from 'rxjs/Observable';
import { DashboardApiService } from './dashboard-api.service';

@Injectable()
class DataResolver implements Resolve<any> {
  constructor(private api: DashboardApiService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return Observable.forkJoin(
      this.api.getDashboardAR(),
      this.api.getDashboardVR(),
      this.api.getDashboardPatientsAwaiting(),
      this.api.getDashboardOverviewTa(),
      this.api.getDashboardOverviewPatients(),
      this.api.getDashboardOverviewBt()
    ).map(
      data => {
        return {
          AR: data[0],
          VR: data[1],
          PatientsAwaiting: data[2],
          OverviewTa: data[3],
          OverviewPatients: data[4],
          OverviewBt: data[5]
        };
      }
      );
  }
}

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], resolve: { data: DataResolver } }
    ])
  ],
  exports: [RouterModule],
  providers: [DataResolver]
})
export class DashboardRoutingModule { }
