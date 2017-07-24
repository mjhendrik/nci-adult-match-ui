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

import { CliaVariantReportsNtcComponent } from './clia-variant-reports-ntc.component';
import { AuthGuard } from './../../shared/auth/auth.guard.service';
import { Observable } from 'rxjs/Observable';
import { CliaApiService } from '../clia-api.service';

@Injectable()
class DataResolver implements Resolve<any> {
  constructor(private api: CliaApiService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return Observable.forkJoin(
      this.api.getCliaVariantReportsNTC(route.params['id'])
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
      {
        path: 'clia_mgh/variant_reports_ntc/:id',
        component: CliaVariantReportsNtcComponent,
        canActivate: [AuthGuard],
        resolve: { data: DataResolver }
      },
      {
        path: 'clia_dartmount/variant_reports_ntc/:id',
        component: CliaVariantReportsNtcComponent,
        canActivate: [AuthGuard],
        resolve: { data: DataResolver }
      },
      {
        path: 'clia_mocha/variant_reports_ntc/:id',
        component: CliaVariantReportsNtcComponent,
        canActivate: [AuthGuard],
        resolve: { data: DataResolver }
      },
      {
        path: 'clia_yale/variant_reports_ntc/:id',
        component: CliaVariantReportsNtcComponent,
        canActivate: [AuthGuard],
        resolve: { data: DataResolver }
      },
      {
        path: 'clia_mda/variant_reports_ntc/:id',
        component: CliaVariantReportsNtcComponent,
        canActivate: [AuthGuard],
        resolve: { data: DataResolver }
      }
    ])
  ],
  exports: [RouterModule],
  providers: [DataResolver]
})
export class CliaVariantReportsNtcRoutingModule { }
