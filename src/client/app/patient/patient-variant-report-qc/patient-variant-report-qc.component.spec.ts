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
import { PatientVariantReportQcComponent } from './patient-variant-report-qc.component';
import { PatientApiService } from './../patient-api.service';
import { ViewDataTransformer } from './../view-data-transformer.service';
import { SharedModule } from '../../shared/shared.module';
import { PatientApiServiceStub, PatientApiServiceMock } from '../testing/patient-api-service-stub';
import { ActivatedRouteStub } from '../testing/activated-route-stub';
import { UtilsModule } from '../../shared/utils/utils.module';
import { VariantReportFilteredTableModule } from '../../shared/variant-report-filtered-table/variant-report-filtered-table.module';
import { ToastrService } from '../../shared/error-handling/toastr.service';
import { ToastrServiceStub } from '../testing/toastr-service-stub';
import { DownloadService } from '../../shared/utils/download.service';
import { DownloadMockService } from '../../shared/testing/download-mock.service';

export function main() {
  describe('PatientVariantReportQcComponent (templateUrl)', () => {

    let component: PatientVariantReportQcComponent;
    let fixture: ComponentFixture<PatientVariantReportQcComponent>;
    let de: DebugElement;
    let el: HTMLElement;
    let activatedRouteStub: ActivatedRouteStub = new ActivatedRouteStub();
    activatedRouteStub.snapshot.data['data'] = PatientApiServiceStub.makeVariantReportQcData();

    let config: any[] = [
      { path: 'patients/1234/variant_reports/ABCD/qc', component: 'PatientVariantReportQcComponent' }
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
          VariantReportFilteredTableModule,
          UtilsModule
        ],
        declarations: [PatientVariantReportQcComponent],
        providers: [
          { provide: ActivatedRoute, useValue: activatedRouteStub },
          { provide: PatientApiService, useClass: PatientApiServiceMock },
          { provide: ToastrService, useClass: ToastrServiceStub },
          { provide: DownloadService, useClass: DownloadMockService },
          ChangeDetectorRef,
          ViewDataTransformer
        ]
      }).compileComponents();  // compile template and css
    }));

    // synchronous beforeEach
    beforeEach(() => {
      fixture = TestBed.createComponent(PatientVariantReportQcComponent);
      component = fixture.componentInstance; // PatientVariantReportQcComponent test instance
      // query for the title 'page-header' by CSS element selector
      de = fixture.debugElement.query(By.css('.page-header'));
      el = de.nativeElement;
    });

    it('no Analysis ID in title until manually call `detectChanges`', () => {
      expect(el.textContent).toEqual('Quality Control Report ');
    });

    it('should display Analysis ID in the title', () => {
      fixture.detectChanges();
      expect(el.textContent).toEqual('Quality Control Report ' + component.analysisId);
    });

    xit('should call downloadPatientFile when download is called', () => {
      let api = fixture.debugElement.injector.get(PatientApiService);
      let spy = spyOn(api, 'downloadPatientFile').and.callFake(() => { ; });
      component.download('fake_url');

      expect(spy).toHaveBeenCalled();
    });
  });
}
