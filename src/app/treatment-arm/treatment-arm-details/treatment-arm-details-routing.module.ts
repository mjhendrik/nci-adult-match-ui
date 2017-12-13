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

import { TreatmentArmDetailsComponent } from './treatment-arm-details.component';
import { Observable } from 'rxjs/Observable';
import { AuthGuard } from './../../shared/auth/auth.guard.service';
import { TreatmentArmApiService } from '../treatment-arm-api.service';

@Injectable()
class DataResolver implements Resolve<any> {
  constructor(private api: TreatmentArmApiService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return Observable.forkJoin(
      this.api.getTreatmentArmVersions(route.params['id']),
      this.api.getTreatmentArmDetails(route.params['id'])
    ).map(
      data => {
        return {
          versionData: data[0],
          details: data[1]
        };
      }
      );
  }
}

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'treatments/:id/:version',
        component: TreatmentArmDetailsComponent,
        canActivate: [AuthGuard],
        resolve: { data: DataResolver }
      }
    ])
  ],
  exports: [RouterModule],
  providers: [DataResolver]
})
export class TreatmentArmDetailsRoutingModule { }
