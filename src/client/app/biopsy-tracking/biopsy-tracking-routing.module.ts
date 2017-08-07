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

import { BiopsyTrackingListComponent } from './biopsy-tracking.component';
import { AuthGuard } from './../shared/auth/auth.guard.service';
import { Observable } from 'rxjs/Observable';
import { BiopsyTrackingApiService } from './biopsy-tracking-api.service';

@Injectable()
class DataResolver implements Resolve<any> {
  constructor(private api: BiopsyTrackingApiService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return Observable.forkJoin(
      this.api.getBiopsyCount(''),
      this.api.getBiopsyTracking(1, 10, 'asc', 'biopsies.mdAndersonMessages.biopsySequenceNumber', ''),
      this.api.getBiopsyTotal()
    ).map(
      data => {
        return {
          count: data[0],
          data: data[1],
          total: data[2]
        };
      }
      );
  }
}

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'tracking', component: BiopsyTrackingListComponent, canActivate: [AuthGuard], resolve: { data: DataResolver } }
    ])
  ],
  exports: [RouterModule],
  providers: [DataResolver]
})
export class BiopsyTrackingListRoutingModule { }
