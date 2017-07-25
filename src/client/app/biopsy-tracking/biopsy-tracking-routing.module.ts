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
      this.api.getBiopsyCount('')
    ).map(
      data => {
        return {
          data: data[0]
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
