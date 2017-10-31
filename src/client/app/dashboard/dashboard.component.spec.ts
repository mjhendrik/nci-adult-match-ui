import {
  async,
  TestBed,
  ComponentFixture
} from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { DirectivesModule } from './../shared/directives/directives.module';
import { PipesModule } from './../shared/pipes/pipes.module';
import { DataTableModule } from './../shared/datatables/DataTableModule';
import { DashboardComponent } from './dashboard.component';
import { DashboardApiService } from './dashboard-api.service';
import { SharedModule } from '../shared/shared.module';
import { LoadingSpinnerModule } from '../shared/loading-spinner/loading-spinner.module';

const config: any[] = [
  { path: 'dashboard', component: 'DashboardComponent' }
];

export function main() {
  fdescribe('dashboard component', () => {

    let component: DashboardComponent;
    let fixture: ComponentFixture<DashboardComponent>;

    // async beforeEach
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule.withRoutes(config),
          DirectivesModule,
          PipesModule,
          FormsModule,
          DataTableModule,
          LoadingSpinnerModule,
          SharedModule,
          TabsModule.forRoot()
        ],
        declarations: [DashboardComponent],
        providers: [
          { provide: DashboardApiService, useClass: MockDashboardService }
        ]
      }).compileComponents();  // compile template and css
    }));

    // synchronous beforeEach
    beforeEach(() => {
      fixture = TestBed.createComponent(DashboardComponent);
      component = fixture.componentInstance; // DashboardComponent test instance
    });

    it('should initiate data calls from onInit', () => {
      let spy1 = spyOn(fixture.componentInstance, 'getPatientSummaryData');
      let spy2 = spyOn(fixture.componentInstance, 'getTreatmentArmSummaryData');
      let spy3 = spyOn(fixture.componentInstance, 'getBiopsyTrackingSummaryData');
      let spy4 = spyOn(fixture.componentInstance, 'getPendingAssignmentReportsData');
      let spy5 = spyOn(fixture.componentInstance, 'getPendingVariantReportsData');
      let spy6 = spyOn(fixture.componentInstance, 'getPatientsAwaitingData');

      fixture.componentInstance.ngOnInit();

      expect(spy1).toHaveBeenCalled();
      expect(spy2).toHaveBeenCalled();
      expect(spy3).toHaveBeenCalled();
      expect(spy4).toHaveBeenCalled();
      expect(spy5).toHaveBeenCalled();
      expect(spy6).toHaveBeenCalled();
    });

    it('should test getPendingAssignmentReportsData', () => {
      fixture.componentInstance.getPendingAssignmentReportsData();
      expect(fixture.componentInstance.pendingAssignmentReports.data[0].patientSequenceNumber).toEqual('1031');
      expect(fixture.componentInstance.pendingAssignmentReports.data[0].dateAssigned).toEqual('March 2, 2017 1:38 PM GMT');
    });

    it('should test getPendingVariantReportsData', () => {
      fixture.componentInstance.getPendingVariantReportsData();
      expect(fixture.componentInstance.pendingVariantReports.data[0].patientSequenceNumber).toEqual('1001re');
      expect(fixture.componentInstance.pendingVariantReports.data[0].analysisId).toEqual('JOB-1001re');
    });

    fit('should test getPatientsAwaitingData when isOutsideAssayValue null', () => {
      fixture.componentInstance.isOutsideAssayWorkflow = null;
      fixture.componentInstance.getPatientsAwaitingData();
      expect(fixture.componentInstance.patientsAwaiting.data[0].outsideBiopsy.messages).not.toBe('');
    });

    it('should test getPatientsAwaitingData when isOutsideAssayValue true', () => {
      fixture.componentInstance.isOutsideAssayWorkflow = true;
      fixture.componentInstance.getPatientsAwaitingData();
      expect(fixture.componentInstance.patientsAwaiting.data[0].outsideBiopsy.messages).not.toBe('');
    });

    it('should test getPatientsAwaitingData when isOutsideAssayValue false', () => {
      fixture.componentInstance.isOutsideAssayWorkflow = false;
      fixture.componentInstance.getPatientsAwaitingData();
      expect(fixture.componentInstance.patientsAwaiting).toEqual({ isLoaded: true, data: [] });
    });

    it('should test getTreatmentArmSummaryData', () => {
      fixture.componentInstance.getTreatmentArmSummaryData();
      expect(fixture.componentInstance.treatmentArmSummary).not.toBeNull();
    });

    it('should test getPatientSummaryData', () => {
      fixture.componentInstance.getPatientSummaryData();
      expect(fixture.componentInstance.patientSummary).not.toBeNull();
    });

    it('should test getBiopsyTrackingSummaryData', () => {
      fixture.componentInstance.getBiopsyTrackingSummaryData();
      expect(fixture.componentInstance.biopsyTrackingSummary).not.toBeNull();
    });


    it('should refresh Patients Awaiting data when isOutsideAssayWorkflow is changed', () => {
      let spy = spyOn(fixture.componentInstance, 'getPatientsAwaitingData');
      fixture.componentInstance.isOutsideAssayWorkflow = !fixture.componentInstance.isOutsideAssayWorkflow;
      expect(spy).toHaveBeenCalled();
    });

  });
}
