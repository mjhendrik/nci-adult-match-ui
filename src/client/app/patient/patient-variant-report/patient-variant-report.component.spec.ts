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
import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DirectivesModule } from './../../shared/directives/directives.module';
import { PipesModule } from './../../shared/pipes/pipes.module';
import { DataTableModule } from './../../shared/datatables/DataTableModule';
import { VariantReportSimpleTableModule } from '../../shared/variant-report-simple-table/variant-report-simple-table.module';
import { AssignmentReasonTableModule } from './../assignment-reason-table/assignment-reason-table.module';
import { PatientVariantReportComponent } from './patient-variant-report.component';
import { PatientApiService } from './../patient-api.service';
import { ViewDataTransformer } from './../view-data-transformer.service';
import { SharedModule } from '../../shared/shared.module';
import { PatientApiServiceMock, PatientApiServiceStub } from '../testing/patient-api-service-stub';
import { ActivatedRouteStub } from '../testing/activated-route-stub';
import { ViewDataTransformerStub } from '../testing/view-data-transformer-stubs';
import { UtilsModule } from '../../shared/utils/utils.module';

let p_vr_resolved_data = {
  data: {
    psn: 'psn',
    analysisId: '1111',
    patient: 'patient',
    analysis: '',
    variantReport: 'variantReport',
    assignmentReport: 'assignmentReport',
    assignmentHistory: 'patientAssignments',
    parsed_vcf_genes: ['parsed_vcf_genes', 'file_name'],
    tvc_version: 'tvc_version',
    pool1: 'pool1',
    pool2: 'pool2',
    mapd: 'mapd',
    cellularity: 'cellularity',
    showPools: 'showPools',
    assays: 'assays'
  }
};

export function main() {
  fdescribe('PatientVariantReportComponent (templateUrl)', () => {

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
          { provide: PatientApiService, useClass: PatientApiServiceStub },
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

    it('no analysisId in title until manually call `detectChanges`', () => {
      expect(el.textContent).toEqual('Variant and Assignment Report ');
    });

    it('should display analysisId in the title', () => {
      fixture.detectChanges();
      expect(el.textContent).toEqual('Patient ' + component.analysisId);
    });

  });

  // describe('patient variant report component', () => {

  //   let config: any[] = [
  //     { path: 'patients/1234/variant_reports/ABCD', component: 'PatientVariantReportComponent' }
  //   ];

  //   beforeEach(() => {
  //     TestBed.configureTestingModule({
  //       imports: [
  //         RouterTestingModule.withRoutes(config),
  //         DirectivesModule,
  //         PipesModule,
  //         FormsModule,
  //         DataTableModule,
  //         AssignmentReasonTableModule,
  //         VariantReportSimpleTableModule,
  //         SharedModule,
  //         CommonModule
  //       ],
  //       declarations: [PatientVariantReportComponent],
  //       providers: [
  //         { provide: PatientApiService, useClass: PatientApiServiceMock },
  //         {
  //           provide: ActivatedRoute, useValue: {
  //             snapshot: {
  //               params: { patientSequenceNumber: 1067, analysisId: 1234 },
  //               data: p_vr_resolved_data
  //             }
  //           }
  //         },
  //         ViewDataTransformer
  //       ]
  //     });
  //   });

  //   xit('should test ngOnInit',
  //     async((done: any) => {
  //       TestBed
  //         .compileComponents()
  //         .then(() => {
  //           let fixture = TestBed.overrideComponent(PatientVariantReportComponent, {
  //             set: {
  //               templateUrl: ''
  //             }
  //           }).createComponent(PatientVariantReportComponent);
  //           fixture.componentInstance.ngOnInit();
  //           fixture.componentInstance.download('test');
  //         });
  //     }));
  // });
}
