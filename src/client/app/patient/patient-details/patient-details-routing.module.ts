import { NgModule, Injectable } from '@angular/core';
import {
  RouterModule,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Resolve
} from '@angular/router';

import { PatientDetailsComponent } from './patient-details.component';
import { AuthGuard } from './../../shared/auth/auth.guard.service';
import { PatientApiService } from "../patient-api.service";
import { PatientData, Tabs } from "./patient-details.module";
import { Observable } from "rxjs/Observable";
import { ViewDataTransformer } from "../view-data-transformer.service";


@Injectable()
class DataResolver implements Resolve<PatientData> {
  calculateOcpSum(ocpSummary: { [key: string]: any }): any {
    if (!ocpSummary)
      return null;

    let sum: number = 0;
    for (let key of Object.keys(ocpSummary)) {
      sum += Number(ocpSummary[key]);
    }

    return sum;
  }

  constructor(
    private api: PatientApiService,
    private transformer: ViewDataTransformer) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<PatientData> | Promise<PatientData> | PatientData {
    const psn: string = route.params['patientSequenceNumber'];
    const section: string = route.queryParamMap.get('section') || 'summary';
    const entityId: string = route.queryParamMap.get('entityId');

    return this.api.getPatientDetails(psn)
      .map(
        data => {
          let patient = this.transformer.transformPatient(data);
          patient.section = section;
          patient.entityId = entityId;
          let tabs = this.createTabs(patient);

          return {
            psn: psn,
            patient: patient,
            summaryData: {},
            section: section,
            entityId,
            needToScroll: patient.needToScroll,
            tabs: tabs
          };
        }
      );
  }

  private createTabs(data: any): Tabs {
    let tabs = new Tabs();

    tabs.set('summary', data.section === 'summary');

    if ((data.section === 'biopsies' || data.section === 'msn') && !data.entityId) {
      console.warn(`Inner Patient navigation section was set to ${data.section}, but the specific ID wasn't provided`);
    }

    if (data.section === 'biopsies' && data.entityId) {
      for (const biopsy of data.biopsies) {
        let isActive = data.entityId === biopsy.biopsySequenceNumber;
        tabs.set('biopsies' + (biopsy.biopsySequenceNumber || ''), isActive);
      }
    } else if (data.section === 'msn' && data.entityId) {
      const findBiopsyIdByMsn = function (msn: string, biopsies: any[]): string {
        if (!msn || !biopsies || !biopsies.length)
          return null;

        for (const biopsy of data.biopsies) {
          if (!biopsy.nucleicAcidSendouts || !biopsy.nucleicAcidSendouts.length) {
            continue;
          }
          let found = biopsy.nucleicAcidSendouts.some((x: any) => x.molecularSequenceNumber === msn);
          if (found)
            return biopsy.biopsySequenceNumber;
        }

        return null;
      };

      for (const biopsy of data.biopsies) {
        let activeBiopsy = findBiopsyIdByMsn(data.entityId, data.biopsies);
        let isActive = !!activeBiopsy;
        tabs.set('biopsies' + (biopsy.biopsySequenceNumber || ''), isActive);
        data.needToScroll = true;
      }
    }

    tabs.set('documents', data.section === 'documents');

    if (!tabs.hasActive) {
      tabs.set('summary', true);
    }

    console.info(`Active tab is set to ${tabs.activeTab}`);

    return tabs;
  }
}

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'patients/:patientSequenceNumber',
        component: PatientDetailsComponent,
        canActivate: [AuthGuard],
        resolve: { data: DataResolver }
      }
    ])
  ],
  exports: [RouterModule],
  providers: [DataResolver]
})
export class PatientDetailsRoutingModule { }
