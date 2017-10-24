import {
  ChangeDetectorRef,
  DebugElement
} from '@angular/core';
import {
  async,
  TestBed,
  ComponentFixture
} from '@angular/core/testing';

import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
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
import { Observable } from 'rxjs/Observable';

import { PatientApiServiceMock } from '../testing/patient-api-service-stub';
import { ActivatedRouteStub } from '../testing/activated-route-stub';
import { ViewDataTransformerStub } from '../testing/view-data-transformer-stubs';
import { TabsModule } from 'ngx-bootstrap/tabs';

export function main() {
  describe('PatientDetailsComponent (templateUrl)', () => {

    let component: PatientDetailsComponent;
    let fixture: ComponentFixture<PatientDetailsComponent>;
    let de: DebugElement;
    let el: HTMLElement;
    let activatedRouteStub: ActivatedRouteStub = new ActivatedRouteStub();
    activatedRouteStub.snapshot.data['data'] = ViewDataTransformerStub.makePatientData();

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
          NoopAnimationsModule,
          TabsModule.forRoot()
        ],
        declarations: [PatientDetailsComponent],
        providers: [
          { provide: ActivatedRoute, useValue: activatedRouteStub },
          { provide: PatientApiService, useClass: PatientApiServiceMock },
          ChangeDetectorRef,
          ViewDataTransformer
        ]
      }).compileComponents();  // compile template and css

      spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify({ 'roles': ['ADMIN'] }));

    }));


    xit('should work by calling Patient details ngOnInit',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(PatientDetailsComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(PatientDetailsComponent);
            fixture.componentInstance.ngOnInit();
            expect(fixture.componentInstance).toBeDefined();
            expect(fixture.componentInstance.roles).toBeDefined();
            expect(fixture.componentInstance.roles).toEqual([ 'ADMIN' ]);
          });
      }));

    xit('should work by calling Patient details download',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(PatientDetailsComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(PatientDetailsComponent);

            fixture.componentInstance.download("File");
          });
      }));

    xit('should work by calling Patient details ngAfterViewInit',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(PatientDetailsComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(PatientDetailsComponent);

            fixture.componentInstance.ngAfterViewInit();
            fixture.componentInstance.entityId = 'li';
          });
      }));
  });
}

class MockFileUploadService {
  downloadPatientFile(): Observable<any> {
    return Observable.of("Psn","File");
  }
}

