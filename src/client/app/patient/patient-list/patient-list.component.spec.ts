import {
  DebugElement
} from '@angular/core';
import {
  async,
  TestBed,
  ComponentFixture
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DirectivesModule } from './../../shared/directives/directives.module';
import { PipesModule } from './../../shared/pipes/pipes.module';
import { DataTableModule } from './../../shared/datatables/DataTableModule';
import { PatientListComponent } from './patient-list.component';
import { PatientApiService } from './../patient-api.service';
import { SharedModule } from '../../shared/shared.module';
import { PatientApiServiceMock } from '../testing/patient-api-service-stub';

export function main() {
  describe('PatientListComponent', () => {

    let component: PatientListComponent;
    let fixture: ComponentFixture<PatientListComponent>;
    let api: PatientApiService;
    let spy: jasmine.Spy;
    let de: DebugElement;
    let el: HTMLElement;
    let tbody: DebugElement;

    let config: any[] = [
      { path: 'patients', component: 'PatientListComponent' }
    ];

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule.withRoutes(config),
          DirectivesModule,
          PipesModule,
          FormsModule,
          DataTableModule,
          SharedModule,
          NoopAnimationsModule
        ],
        declarations: [PatientListComponent],
        providers: [
          { provide: PatientApiService, useClass: PatientApiServiceMock },
        ]
      }).compileComponents();  // compile template and css
    }));

    // synchronous beforeEach
    beforeEach(() => {
      fixture = TestBed.createComponent(PatientListComponent);
      component = fixture.componentInstance;

      // PatientApiService actually injected into the component
      api = fixture.debugElement.injector.get(PatientApiService);
      spy = spyOn(api, 'getPatientList').and.callThrough();

      // Get the Twain quote element by CSS selector (e.g., by class name)
      de = fixture.debugElement.query(By.css('table'));
      tbody = de.query(By.css('tbody'));
      el = de.nativeElement;
    });

    it('should not show any rows before OnInit', () => {
      let rows = tbody.queryAll(By.css('tr'));
      expect(rows.length).toBe(0);
    });

    it('should display initial data (async) after OnInit', async((done: any) => {
      fixture.detectChanges();

      fixture.whenStable().then(() => { // wait for async getPatientList
        let rows = tbody.queryAll(By.css('tr'));
        expect(rows.length).toBe(10);
      });

    }));

  });


  xdescribe('patients component', () => {
    let config: any[] = [
      { path: 'patients', component: 'PatientListComponent' }
    ];

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule.withRoutes(config),
          DirectivesModule,
          PipesModule,
          FormsModule,
          DataTableModule,
          SharedModule
        ],
        declarations: [PatientListComponent],
        providers: [
          { provide: PatientApiService, useClass: PatientApiServiceMock },
        ]
      });
    });

    xit('should test ngOnInit',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(PatientListComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(PatientListComponent);
            fixture.componentInstance.previous = '1,100,asc,patientSequenceNumber';
            fixture.componentInstance.ngOnInit();
          });
      }));

    xit('should test currentPageActive',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(PatientListComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(PatientListComponent);
            fixture.componentInstance.previous = '1,100,asc,patientSequenceNumber';
            fixture.componentInstance.currentPageActive('1,10,asc,patientSequenceNumber');
          });
      }));

    xit('should test currentPageActive with else status',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(PatientListComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(PatientListComponent);
            fixture.componentInstance.previous = '1,10,asc,patientSequenceNumber';
            fixture.componentInstance.currentPageActive('1,10,asc,patientSequenceNumber');
          });
      }));

    xit('should test sortStatus',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(PatientListComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(PatientListComponent);
            fixture.componentInstance.previous = '1,100,asc,patientSequenceNumber';
            fixture.componentInstance.sortStatus('1,10,asc,patientSequenceNumber');
          });
      }));

    xit('should test sortStatus with else',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(PatientListComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(PatientListComponent);
            fixture.componentInstance.previous = '1,100,asc,patientSequenceNumber,test';
            fixture.componentInstance.searchTermPatients = 'test';
            fixture.componentInstance.sortStatus('1,100,asc,patientSequenceNumber');
          });
      }));

    xit('should test onSearchChanged',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(PatientListComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(PatientListComponent);
            fixture.componentInstance.previous = '1,100,asc,patientSequenceNumber';
            fixture.componentInstance.onSearchChanged('test');
          });
      }));

    xit('should test onSearchChanged with else',
      async((done: any) => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.overrideComponent(PatientListComponent, {
              set: {
                templateUrl: ''
              }
            }).createComponent(PatientListComponent);
            fixture.componentInstance.previous = '1,100,asc,patientSequenceNumber';
            fixture.componentInstance.searchTermPatients = 'test';
            fixture.componentInstance.onSearchChanged('test');
          });
      }));

  });

}

