import {
  Component,
  ChangeDetectorRef,
  Injectable,
  DebugElement
} from '@angular/core';
import {
  async,
  TestBed,
  ComponentFixture
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, convertToParamMap, ParamMap, ActivatedRouteSnapshot, Data } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
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

import { PatientApiServiceStub, PatientApiServiceWithErrorStub } from '../testing/patient-api-service-stub';
import { ViewDataTransformerStub } from '../testing/view-data-transformer-stubs';

@Injectable()
export class ActivatedRouteStub {
  // ActivatedRoute.paramMap is Observable
  private subject = new BehaviorSubject(convertToParamMap(this.testParamMap));
  // tslint:disable-next-line:member-ordering
  paramMap = this.subject.asObservable();
  private trasformerStub: ViewDataTransformerStub = new ViewDataTransformerStub();

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
    this.actvatedSnapshot.data['data'] = this.trasformerStub.makePatientListData();
  }

  toString(): string {
    return "ActivatedRouteStub";
  }
}

export function main() {
  fdescribe('PatientDetailsComponent (templateUrl)', () => {

    let component: PatientDetailsComponent;
    let fixture: ComponentFixture<PatientDetailsComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    let config: any[] = [
      { path: 'patients/1234', component: 'PatientDetailsComponent' }
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
          PatientTimelineModule,
          DropzoneModule,
          SharedModule,
          NoopAnimationsModule
        ],
        declarations: [PatientDetailsComponent],
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
      fixture = TestBed.createComponent(PatientDetailsComponent);

      component = fixture.componentInstance; // PatientDetailsComponent test instance

      // query for the title <h1> by CSS element selector
      de = fixture.debugElement.query(By.css('.page-header'));
      el = de.nativeElement;
    });

    fit('no PSN in title until manually call `detectChanges`', () => {
      expect(el.textContent).toEqual('Patient ');
    });

    fit('should display PSN in the title', () => {
      fixture.detectChanges();
      expect(el.textContent).toEqual('Patient ' + component.psn);
    });
  });


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

    it('should work for download', async(() => {
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

          let spy = spyOn(api, 'downloadPatientFile').and.callFake(() => { ; });

          component.download('fake_url');

          expect(spy).toHaveBeenCalled();
        });
    }));

    it('should work for ngoninit', async(() => {
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

    fit('should work for onUploadSuccess', async(() => {
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

    xit('should work for uploadFiles', async(() => {
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

    xit('should work for getData', async(() => {
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

