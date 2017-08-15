import {
  Component,
  ChangeDetectorRef,
  Injectable
} from '@angular/core';
import {
  async,
  TestBed,
  ComponentFixture
} from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, ParamMap, ActivatedRouteSnapshot, Data } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { RouterTestingModule } from '@angular/router/testing';
import { DropzoneModule } from 'ngx-dropzone-wrapper';

import { DirectivesModule } from './../../shared/directives/directives.module';
import { PipesModule } from './../../shared/pipes/pipes.module';
import { DataTableModule } from './../../shared/datatables/DataTableModule';
import { PatientDetailsComponent } from './patient-details.component';
import { PatientApiService } from './../patient-api.service';
import { ViewDataTransformer } from './../view-data-transformer.service';
import { PatientTimelineModule } from './../patient-timeline/patient-timeline.module';
import { SharedModule } from '../../shared/shared.module';

import { PatientApiServiceStub, PatientApiServiceWithErrorStub } from '../testing/patient-api-service-stubs';

@Injectable()
export class ActivatedRouteStub {
  // ActivatedRoute.paramMap is Observable
  private subject = new BehaviorSubject(convertToParamMap(this.testParamMap));
  // tslint:disable-next-line:member-ordering
  paramMap = this.subject.asObservable();

  // Test parameters
  private _testParamMap: ParamMap;
  get testParamMap() { return this._testParamMap; }
  set testParamMap(params: {}) {
    this._testParamMap = convertToParamMap(params);
    this.subject.next(this._testParamMap);
  }

  private actvatedSnapshot: ActivatedRouteSnapshot;

  // ActivatedRoute.snapshot.paramMap
  get snapshot(): ActivatedRouteSnapshot {
    return this.actvatedSnapshot;
  }

  constructor() {
    this.actvatedSnapshot = new ActivatedRouteSnapshot();
    this.actvatedSnapshot.data = {};
    this.actvatedSnapshot.data['data'] = {};
  }

  toString(): string {
    return "ActivatedRouteStub";
  }
}

export function main() {
  describe('patient-details component', () => {
    let fixture: ComponentFixture<PatientDetailsComponent>;
    let component: PatientDetailsComponent;

    let config: any[] = [
      { path: 'patients/1234', component: 'PatientDetailsComponent' }
    ];

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule.withRoutes(config),
          DirectivesModule,
          PipesModule,
          FormsModule,
          DataTableModule,
          PatientTimelineModule,
          DropzoneModule,
          SharedModule
        ],
        declarations: [PatientDetailsComponent],
        providers: [
          { provide: ActivatedRoute, useClass: ActivatedRouteStub },
          { provide: PatientApiService, useClass: PatientApiServiceStub },
          // { provide: ActivatedRoute, useValue: { snapshot: { params: { patientSequenceNumber: 1234 } } } },
          ChangeDetectorRef,
          ViewDataTransformer
        ]
      });
    });

    it('should work for download',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            fixture = TestBed.overrideComponent(PatientDetailsComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(PatientDetailsComponent);

            component = fixture.componentInstance;
            let api = fixture.debugElement.injector.get(PatientApiService);

            let spy = spyOn(api, 'downloadPatientFile').and.callFake(() => { });

            component.download('fake_url')

            expect(spy).toHaveBeenCalled();
          });
      }));


    it('should work for ngoninit',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            fixture = TestBed.overrideComponent(PatientDetailsComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(PatientDetailsComponent);

            component = fixture.componentInstance;

            component.ngOnInit();

            expect(component.configVariantZip).toBeDefined();
            expect(component.configDnaBam).toBeDefined();
            expect(component.configCdnaBam).toBeDefined();
            expect(component.configDocuments).toBeDefined();

          });
      }));

    it('should work for onUploadSuccess',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            fixture = TestBed.overrideComponent(PatientDetailsComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(PatientDetailsComponent);
            fixture.componentInstance.onUploadSuccess("test");
          });
      }));

    it('should work for uploadFiles',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            fixture = TestBed.overrideComponent(PatientDetailsComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(PatientDetailsComponent);

            fixture.componentInstance.configVariantZip = {};
            fixture.componentInstance.configDnaBam = {};
            fixture.componentInstance.configCdnaBam = {};

            fixture.componentInstance.uploadFiles();
          });
      }));
  });

  describe('patient-details component with error', () => {
    let fixture: ComponentFixture<PatientDetailsComponent>;
    let component: PatientDetailsComponent;

    let config: any[] = [
      { path: 'patients/1234', component: 'PatientDetailsComponent' }
    ];

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule.withRoutes(config),
          DirectivesModule,
          PipesModule,
          FormsModule,
          DataTableModule,
          PatientTimelineModule,
          DropzoneModule,
          SharedModule
        ],
        declarations: [PatientDetailsComponent],
        providers: [
          { provide: PatientApiService, useClass: PatientApiServiceWithErrorStub },
          { provide: ActivatedRoute, useValue: { snapshot: { params: { patientSequenceNumber: 1234 } } } },
          ChangeDetectorRef,
          ViewDataTransformer
        ]
      });
    });

    it('should work for getData',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            fixture = TestBed.overrideComponent(PatientDetailsComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(PatientDetailsComponent);
          });
      }));

  });
}

