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

import { CliaVariantReportQcComponent } from './clia-variant-report-qc.component';
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
      this.api.getCliaVariantReportQC(route.params['id'])
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
        path: 'clia_mocha/variant_reports_pc/qc/:id',
        component: CliaVariantReportQcComponent,
        canActivate: [AuthGuard],
        resolve: { data: DataResolver }
      },
      {
        path: 'clia_mgh/variant_reports_pc/qc/:id',
        component: CliaVariantReportQcComponent,
        canActivate: [AuthGuard],
        resolve: { data: DataResolver }
      },
      {
        path: 'clia_dartmount/variant_reports_pc/qc/:id',
        component: CliaVariantReportQcComponent,
        canActivate: [AuthGuard],
        resolve: { data: DataResolver }
      },
      {
        path: 'clia_yale/variant_reports_pc/qc/:id',
        component: CliaVariantReportQcComponent,
        canActivate: [AuthGuard],
        resolve: { data: DataResolver }
      },
      {
        path: 'clia_mda/variant_reports_pc/qc/:id',
        component: CliaVariantReportQcComponent,
        canActivate: [AuthGuard],
        resolve: { data: DataResolver }
      },
      {
        path: 'clia_mocha/variant_reports_ntc/qc/:id',
        component: CliaVariantReportQcComponent,
        canActivate: [AuthGuard],
        resolve: { data: DataResolver }
      },
      {
        path: 'clia_mgh/variant_reports_ntc/qc/:id',
        component: CliaVariantReportQcComponent,
        canActivate: [AuthGuard],
        resolve: { data: DataResolver }
      },
      {
        path: 'clia_dartmount/variant_reports_ntc/qc/:id',
        component: CliaVariantReportQcComponent,
        canActivate: [AuthGuard],
        resolve: { data: DataResolver }
      },
      {
        path: 'clia_yale/variant_reports_ntc/qc/:id',
        component: CliaVariantReportQcComponent,
        canActivate: [AuthGuard],
        resolve: { data: DataResolver }
      },
      {
        path: 'clia_mda/variant_reports_ntc/qc/:id',
        component: CliaVariantReportQcComponent,
        canActivate: [AuthGuard],
        resolve: { data: DataResolver }
      },
      {
        path: 'clia_mocha/variant_reports_pacc/qc/:id',
        component: CliaVariantReportQcComponent,
        canActivate: [AuthGuard],
        resolve: { data: DataResolver }
      },
      {
        path: 'clia_mgh/variant_reports_pacc/qc/:id',
        component: CliaVariantReportQcComponent,
        canActivate: [AuthGuard],
        resolve: { data: DataResolver }
      },
      {
        path: 'clia_dartmount/variant_reports_pacc/qc/:id',
        component: CliaVariantReportQcComponent,
        canActivate: [AuthGuard],
        resolve: { data: DataResolver }
      },
      {
        path: 'clia_yale/variant_reports_pacc/qc/:id',
        component: CliaVariantReportQcComponent,
        canActivate: [AuthGuard],
        resolve: { data: DataResolver }
      },
      {
        path: 'clia_mda/variant_reports_pacc/qc/:id',
        component: CliaVariantReportQcComponent,
        canActivate: [AuthGuard],
        resolve: { data: DataResolver }
      }
    ])
  ],
  exports: [RouterModule],
  providers: [DataResolver]
})
export class CliaVariantReportQcRoutingModule { }
