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
import { BsModalService } from 'ngx-bootstrap';
import { Observable } from 'rxjs/Observable';

import { DirectivesModule } from './../../shared/directives/directives.module';
import { PipesModule } from './../../shared/pipes/pipes.module';
import { DataTableModule } from './../../shared/datatables/DataTableModule';
import { VariantReportSimpleTableModule } from '../../shared/variant-report-simple-table/variant-report-simple-table.module';
import { AssignmentReasonTableModule } from './../assignment-reason-table/assignment-reason-table.module';
import { PatientVariantReportComponent } from './patient-variant-report.component';
import { PatientApiService } from './../patient-api.service';
import { ViewDataTransformer } from './../view-data-transformer.service';
import { SharedModule } from '../../shared/shared.module';
import { PatientApiServiceStub, PatientApiServiceMock } from '../testing/patient-api-service-stub';
import { ActivatedRouteStub } from '../testing/activated-route-stub';
import { UtilsModule } from '../../shared/utils/utils.module';
import { BsModalServiceStub } from '../testing/bs-modal.service-stub';
import { ToastrService } from '../../shared/error-handling/toastr.service';
import { ToastrServiceStub } from '../testing/toastr-service-stub';
import { DownloadService } from '../../shared/utils/download.service';
import { DownloadMockService } from '../../shared/testing/download-mock.service';
import { PatientHeaderModule } from './../patient-header/patient-header.module';

export function main() {

  xdescribe('PatientVariantReportComponent Init', () => {

    let config: any[] = [
      { path: 'patients/1234', component: 'PatientVariantReportComponent' }
    ];

    let activatedRouteStub: ActivatedRouteStub = new ActivatedRouteStub();
    activatedRouteStub.snapshot.data['data'] = PatientApiServiceStub.makeVariantReportData();

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule.withRoutes(config),
          DirectivesModule,
          PipesModule,
          FormsModule,
          DataTableModule,
          SharedModule,
          NoopAnimationsModule,
          VariantReportSimpleTableModule,
          AssignmentReasonTableModule,
          UtilsModule,
          PatientHeaderModule
        ],
        declarations: [PatientVariantReportComponent],
        providers: [
          { provide: ActivatedRoute, useValue: activatedRouteStub },
          { provide: PatientApiService, useClass: MockPatientApiService },
          { provide: BsModalService, useClass: BsModalServiceStub },
          { provide: ToastrService, useClass: ToastrServiceStub },
          { provide: DownloadService, useClass: DownloadMockService },
          ChangeDetectorRef,
          ViewDataTransformer
        ]
      });
      spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify({ 'roles': ['ADMIN'] }));
    });

    xit('should work for ngOnInit  --> allowVariantReportEdit, allowAssignmentReportEdit',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(PatientVariantReportComponent);

            fixture.componentInstance.ngOnInit();
            expect(fixture.componentInstance.allowVariantReportEdit).toBe(true);
            expect(fixture.componentInstance.allowAssignmentReportEdit).toBe(true);
          });
      }));

    xit('should work for confirmVariantReport / rejectVariantReport  ',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(PatientVariantReportComponent);

            fixture.componentInstance.confirmVariantReport();

            fixture.componentInstance.rejectVariantReport();

          });
      }));

    xit('should work for confirmAssignmentReport  ',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(PatientVariantReportComponent);

            fixture.componentInstance.confirmAssignmentReport();

          });
      }));

  });


  xdescribe('PatientVariantReportComponent (templateUrl)', () => {

    let component: PatientVariantReportComponent;
    let fixture: ComponentFixture<PatientVariantReportComponent>;
    let de: DebugElement;
    let el: HTMLElement;
    let activatedRouteStub: ActivatedRouteStub = new ActivatedRouteStub();
    activatedRouteStub.snapshot.data['data'] = PatientApiServiceStub.makeVariantReportData();

    let config: any[] = [
      { path: 'patients/1234', component: 'PatientVariantReportComponent' }
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
          VariantReportSimpleTableModule,
          AssignmentReasonTableModule,
          UtilsModule
        ],
        declarations: [PatientVariantReportComponent],
        providers: [
          { provide: ActivatedRoute, useValue: activatedRouteStub },
          { provide: PatientApiService, useClass: PatientApiServiceMock },
          { provide: BsModalService, useClass: BsModalServiceStub },
          { provide: ToastrService, useClass: ToastrServiceStub },
          { provide: DownloadService, useClass: DownloadMockService },
          ChangeDetectorRef,
          ViewDataTransformer
        ]
      }).compileComponents();  // compile template and css
    }));

    // synchronous beforeEach
    beforeEach(() => {
      fixture = TestBed.createComponent(PatientVariantReportComponent);
      component = fixture.componentInstance; // PatientVariantReportComponent test instance
      // query for the title 'page-header' by CSS element selector
      de = fixture.debugElement.query(By.css('.page-header'));
      el = de.nativeElement;
    });

    xit('no Analysis ID in title until manually call `detectChanges`', () => {
      expect(el.textContent).toEqual('Variant and Assignment Report ');
    });

    xit('should display Analysis ID in the title', () => {
      fixture.detectChanges();
      expect(el.textContent).toEqual('Variant and Assignment Report ' + component.analysisId);
    });

    xit('should call downloadPatientFile when download is called', () => {
      let api = fixture.debugElement.injector.get(PatientApiService);
      let spy = spyOn(api, 'downloadPatientFile').and.callFake(() => { ; });
      component.download('fake_url');

      expect(spy).toHaveBeenCalled();
    });
  });
}

class MockPatientApiService {
  updateVariantReport(): Observable<any> {
    let testdata: any = [{ "showConfirmation": {} }];
    return testdata;
  }
  ngAfterViewInit(): Observable<any> {
    let testdata: any = [{ "nativeElement": {} }];
    return testdata;
  }
}
