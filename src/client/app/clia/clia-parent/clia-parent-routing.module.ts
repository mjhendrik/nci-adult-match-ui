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

import { AuthGuard } from './../../shared/auth/auth.guard.service';
import { CliaParentComponent } from './clia-parent.component';
import { Observable } from 'rxjs/Observable';
import { SampleControlApiService } from '../sample-control-api.service';
import { IonReportersApiService } from '../ion-reporters-api.service';

@Injectable()
class DataResolver implements Resolve<any> {
  constructor(
    private sampleControlApi: SampleControlApiService, 
    private ionReportersApi: IonReportersApiService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return Observable.forkJoin(
      this.sampleControlApi.getCliaDetailsPC(route.data['cliaType']),
      this.sampleControlApi.getCliaDetailsNTC(route.data['cliaType']),
      this.sampleControlApi.getCliaDetailsPACC(route.data['cliaType']),
      this.ionReportersApi.getCliaIon(route.data['cliaType'])
    ).map(
      data => {
        return {
          PCData: data[0],
          NTCData: data[1],
          PACCData: data[2],
          ionData: data[3]
        };
      }
      );
  }
}

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'clia_dartmouth',
        component: CliaParentComponent,
        canActivate: [AuthGuard],
        data: { cliaType: 'dartmouth' },
        resolve: { data: DataResolver }
      },
      {
        path: 'clia_mocha',
        component: CliaParentComponent,
        canActivate: [AuthGuard],
        data: { cliaType: 'mocha' },
        resolve: { data: DataResolver }
      },
      {
        path: 'clia_yale',
        component: CliaParentComponent,
        canActivate: [AuthGuard],
        data: { cliaType: 'yale' },
        resolve: { data: DataResolver }
      },
      {
        path: 'clia_mgh',
        component: CliaParentComponent,
        canActivate: [AuthGuard],
        data: { cliaType: 'mgh' },
        resolve: { data: DataResolver }
      },
      {
        path: 'clia_mda',
        component: CliaParentComponent,
        canActivate: [AuthGuard],
        data: { cliaType: 'mda' },
        resolve: { data: DataResolver }
      }
    ])
  ],
  exports: [RouterModule],
  providers: [DataResolver]
})
export class CliaParentRoutingModule { }
