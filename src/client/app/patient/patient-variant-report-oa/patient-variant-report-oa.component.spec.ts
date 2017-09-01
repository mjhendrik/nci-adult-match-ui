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
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DirectivesModule } from './../../shared/directives/directives.module';
import { PipesModule } from './../../shared/pipes/pipes.module';
import { DataTableModule } from './../../shared/datatables/DataTableModule';
import { AssignmentReasonTableModule } from './../assignment-reason-table/assignment-reason-table.module';
import { PatientVariantReportOutsideAssayComponent } from './patient-variant-report-oa.component';
import { PatientApiService } from './../patient-api.service';
import { ViewDataTransformer } from './../view-data-transformer.service';
import { SharedModule } from '../../shared/shared.module';
import { PatientApiServiceStub, PatientApiServiceMock } from '../testing/patient-api-service-stub';
import { ActivatedRouteStub } from '../testing/activated-route-stub';
import { UtilsModule } from '../../shared/utils/utils.module';
import { VariantReportComparisonTableModule } from '../variant-report-comparison-table/variant-report-comparison-table.module';

export function main() {
  describe('PatientVariantReportOutsideAssayComponent (templateUrl)', () => {

    let component: PatientVariantReportOutsideAssayComponent;
    let fixture: ComponentFixture<PatientVariantReportOutsideAssayComponent>;
    let de: DebugElement;
    let el: HTMLElement;
    let activatedRouteStub: ActivatedRouteStub = new ActivatedRouteStub();
    activatedRouteStub.snapshot.data['data'] = PatientApiServiceStub.makeOutsideAssayVariantReportData();

    let config: any[] = [
      { path: 'patients/1234', component: 'PatientVariantReportOutsideAssayComponent' }
    ];

    // async beforeEach
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule.withRoutes(config),
          DirectivesModule,
          PipesModule,
          FormsModule,
          DataTableModule,
          SharedModule,
          NoopAnimationsModule,
          VariantReportComparisonTableModule,
          AssignmentReasonTableModule,
          UtilsModule
        ],
        declarations: [PatientVariantReportOutsideAssayComponent],
        providers: [
          { provide: ActivatedRoute, useValue: activatedRouteStub },
          { provide: PatientApiService, useClass: PatientApiServiceMock },
          ChangeDetectorRef,
          ViewDataTransformer
        ]
      }).compileComponents();  // compile template and css
    }));

    // synchronous beforeEach
    beforeEach(() => {
      fixture = TestBed.createComponent(PatientVariantReportOutsideAssayComponent);
      component = fixture.componentInstance; // PatientVariantReportOutsideAssayComponent test instance
      // query for the MSN 'ut-outside-msn' by CSS element selector
    });

    it('no Analysis ID in title until manually call `detectChanges`', () => {
      de = fixture.debugElement.query(By.css('.ut-outside-msn'));
      expect(de).toBeNull();
    });

    it('should display Analysis ID in the title', () => {
      fixture.detectChanges();
      de = fixture.debugElement.query(By.css('.ut-outside-msn'));
      el = de.nativeElement;
      expect(el.textContent).toEqual(component.outsideData.variantReport.molecularSequenceNumber);
    });

    it('should call downloadPatientFile when download is called', () => {
      let api = fixture.debugElement.injector.get(PatientApiService);
      let spy = spyOn(api, 'downloadPatientFile').and.callFake(() => { ; });
      component.download('fake_url');

      expect(spy).toHaveBeenCalled();
    });
  });
}

