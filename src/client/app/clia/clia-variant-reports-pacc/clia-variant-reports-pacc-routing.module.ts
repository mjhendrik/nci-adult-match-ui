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
import { Observable } from 'rxjs/Observable';

import { CliaVariantReportsPaccComponent } from './clia-variant-reports-pacc.component';
import { AuthGuard } from './../../shared/auth/auth.guard.service';
import { AliquotApiService } from '../aliquot-api.service';

@Injectable()
class DataResolver implements Resolve<any> {
  constructor(private api: AliquotApiService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return Observable.forkJoin(
      this.api.getCliaVariantReportsPACC(route.params['id'])
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
        path: 'clia_mgh/variant_reports_pacc/:id',
        component: CliaVariantReportsPaccComponent,
        canActivate: [AuthGuard],
        resolve: { data: DataResolver }
      },
      {
        path: 'clia_dartmount/variant_reports_pacc/:id',
        component: CliaVariantReportsPaccComponent,
        canActivate: [AuthGuard],
        resolve: { data: DataResolver }
      },
      {
        path: 'clia_mocha/variant_reports_pacc/:id',
        component: CliaVariantReportsPaccComponent,
        canActivate: [AuthGuard],
        resolve: { data: DataResolver }
      },
      {
        path: 'clia_yale/variant_reports_pacc/:id',
        component: CliaVariantReportsPaccComponent,
        canActivate: [AuthGuard],
        resolve: { data: DataResolver }
      },
      {
        path: 'clia_mda/variant_reports_pacc/:id',
        component: CliaVariantReportsPaccComponent,
        canActivate: [AuthGuard],
        resolve: { data: DataResolver }
      }
    ])
  ],
  exports: [RouterModule],
  providers: [DataResolver]
})
export class CliaVariantReportsPaccRoutingModule { }
