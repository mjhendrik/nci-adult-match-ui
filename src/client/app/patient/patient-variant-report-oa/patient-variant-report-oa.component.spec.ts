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
import { TabsModule } from 'ngx-bootstrap/tabs';
import { Observable } from 'rxjs/Observable';
import { PatientApiServiceMock } from '../testing/patient-api-service-stub';
// import { FileUploadService } from '../file-upload/file-upload.service';

import { DirectivesModule } from './../../shared/directives/directives.module';
import { PipesModule } from './../../shared/pipes/pipes.module';
import { DataTableModule } from './../../shared/datatables/DataTableModule';
import { AssignmentReasonTableModule } from './../assignment-reason-table/assignment-reason-table.module';
import { PatientVariantReportOutsideAssayComponent } from './patient-variant-report-oa.component';
import { PatientApiService } from './../patient-api.service';
import { ViewDataTransformer } from './../view-data-transformer.service';
import { SharedModule } from '../../shared/shared.module';
import { PatientApiServiceStub } from '../testing/patient-api-service-stub';
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
          UtilsModule,
          TabsModule.forRoot()
        ],
        declarations: [PatientVariantReportOutsideAssayComponent],
        providers: [
          { provide: ActivatedRoute, useValue: activatedRouteStub },
          { provide: PatientApiService, useClass: PatientApiServiceMock },
          // { provide: FileUploadService, useClass: MockFileUploadService },
          ChangeDetectorRef,
          ViewDataTransformer
        ]
      }).compileComponents();  // compile template and css

      // spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify({ 'isOutsideAssayValue': true }));

    }));

    // xit('should work by calling ngonInit',
    //   async((done: any) => {
    //     let id:string = 'EAY131-F';
    //     TestBed
    //       .compileComponents()
    //       .then(() => {
    //         let fixture = TestBed.overrideComponent(PatientVariantReportOutsideAssayComponent, {
    //           set: {
    //             templateUrl: ''
    //           }
    //         }).createComponent(PatientVariantReportOutsideAssayComponent);
    //         fixture.componentInstance.ngOnInit();
    //         expect(fixture.componentInstance).toBeDefined();
    //
    //
    //
    //         expect(fixture.componentInstance.route).toBeDefined();
    //
    //         console.log('fixture.componentInstance.route - ' + JSON.stringify(fixture.componentInstance.route))
    //
    //
    //         // expect(fixture.componentInstance.roles).toEqual([ 'ADMIN' ]);
    //         // expect(fixture.componentInstance).toBeDefined();
    //         // fixture.componentInstance.getVersionsData(id);
    //         // expect(fixture.componentInstance.versionData).toBe('EAY131-F');
    //
    //       });
    //   }));

    // synchronous beforeEach
    beforeEach(() => {
      fixture = TestBed.createComponent(PatientVariantReportOutsideAssayComponent);
      component = fixture.componentInstance; // PatientVariantReportOutsideAssayComponent test instance
      // query for the MSN 'ut-outside-msn' by CSS element selector
    });

    xit('no Analysis ID in title until manually call `detectChanges`', () => {
      de = fixture.debugElement.query(By.css('.ut-outside-msn'));
      expect(de).toBeNull();
    });

    xit('should display Analysis ID in the title', () => {
      fixture.detectChanges();
      de = fixture.debugElement.query(By.css('.ut-outside-msn'));
      el = de.nativeElement;
      expect(el.textContent).toEqual(component.outsideData.analysisId);
    });

    xit('should call downloadPatientFile when download is called', () => {
      let api = fixture.debugElement.injector.get(PatientApiService);
      let spy = spyOn(api, 'downloadPatientFile').and.callFake(() => { ; });
      component.download('fake_url');

      expect(spy).toHaveBeenCalled();
    });
  });
}

class MockFileUploadService {
  downloadPatientFile(): Observable<any> {
    return Observable.of('Psn', 'File');
  }
}

