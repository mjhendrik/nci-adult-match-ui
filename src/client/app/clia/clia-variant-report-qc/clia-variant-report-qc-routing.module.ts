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

import { CliaVariantReportQcComponent } from './clia-variant-report-qc.component';
import { AuthGuard } from './../../shared/auth/auth.guard.service';
import { SampleControlApiService } from '../sample-control-api.service';

@Injectable()
class DataResolver implements Resolve<any> {
  constructor(private api: SampleControlApiService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    console.log(route.params['id']);
    console.log(route.params['analysisId']); // analysisId might not be readily available
    return Observable.forkJoin(
      // this.api.getCliaVariantReportQC(route.params['id']) // sample control
      this.api.getCliaVariantReportQC(route.params['id'], route.params['analysisId']), // message
      this.api.getCliaVariantReportVCF(route.params['id'], route.params['analysisId']) // message
    ).map(
      data => {
        return {
          data: data[0],
          graph: data[1].body
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
        path: 'clia_dartmouth/variant_reports_pc/qc/:id',
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
        path: 'clia_dartmouth/variant_reports_ntc/qc/:id',
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
        path: 'clia_dartmouth/variant_reports_pacc/qc/:id',
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
