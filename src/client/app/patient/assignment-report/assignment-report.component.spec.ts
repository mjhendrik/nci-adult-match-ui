import {
  ChangeDetectorRef,
  DebugElement
} from '@angular/core';
import {
  async,
  TestBed,
  ComponentFixture
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';

import { PipesModule } from './../../shared/pipes/pipes.module';
import { SharedModule } from '../../shared/shared.module';
import { AssignmentReportComponent } from './assignment-report.component';
import { AssignmentReasonTableModule } from '../assignment-reason-table/assignment-reason-table.module';
import { DirectivesModule } from '../../shared/directives/directives.module';
import { PatientApiService } from './../patient-api.service';
import { ViewDataTransformer } from './../view-data-transformer.service';

import { PatientApiServiceStub } from '../testing/patient-api-service-stub';
import { ActivatedRouteStub } from '../testing/activated-route-stub';

export function main() {
  describe('AssignmentReportComponent (templateUrl)', () => {
    let component: AssignmentReportComponent;
    let fixture: ComponentFixture<AssignmentReportComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    let config: any[] = [
      { path: 'patients/1234/variant_reports/ABCD/assignment/2017-02-04', component: 'AssignmentReportComponent' }
    ];

    // async beforeEach
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule.withRoutes(config),
          PipesModule,
          SharedModule,
          DirectivesModule,
          AssignmentReasonTableModule,
          NoopAnimationsModule
        ],
        declarations: [AssignmentReportComponent],
        providers: [
          { provide: ActivatedRoute, useClass: ActivatedRouteStub },
          { provide: PatientApiService, useClass: PatientApiServiceStub },
          ChangeDetectorRef,
          ViewDataTransformer
        ]
      }).compileComponents();  // compile template and css
    }));

    // synchronous beforeEach
    beforeEach(() => {
      fixture = TestBed.createComponent(AssignmentReportComponent);
      component = fixture.componentInstance; // AssignmentReportComponent test instance
      // query for the title 'page-header' by CSS element selector
      de = fixture.debugElement.query(By.css('.page-header'));
      el = de.nativeElement;
    });

    fit('no PSN in title until manually call `detectChanges`', () => {
      expect(el.textContent).toEqual('Historical Assignment Report ');
    });

    it('should display PSN in the title', () => {
      fixture.detectChanges();
      expect(el.textContent).toEqual('Historical Assignment Report ' + component.dateAssigned);
    });

  });
}
