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

import { TreatmentArmListComponent } from './treatment-arm-list.component';
import { Observable } from 'rxjs/Observable';
import { AuthGuard } from './../../shared/auth/auth.guard.service';
import { TreatmentArmApiService } from '../treatment-arm-api.service';

@Injectable()
class DataResolver implements Resolve<any[]> {
  constructor(private api: TreatmentArmApiService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any[]> | Promise<any[]> | any[] {
    return Observable.forkJoin(
      this.api.getTreatmentArmList()
    );
  }
}

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'treatments', component: TreatmentArmListComponent, canActivate: [AuthGuard], resolve: { data: DataResolver } }
    ])
  ],
  exports: [RouterModule],
  providers: [DataResolver]
})
export class TreatmentArmListRoutingModule { }
