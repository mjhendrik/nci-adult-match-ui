import {
  Component,
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

import { PatientApiServiceStub, PatientApiServiceWithErrorStub } from '../testing/patient-api-service-stub';
import { ActivatedRouteStub } from '../testing/activated-route-stub';

export function main() {
  describe('PatientDetailsComponent (templateUrl)', () => {

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

    it('no PSN in title until manually call `detectChanges`', () => {
      expect(el.textContent).toEqual('Patient ');
    });

    it('should display PSN in the title', () => {
      fixture.detectChanges();
      expect(el.textContent).toEqual('Patient ' + component.patient.patientSequenceNumber);
    });

    it('should work for download', () => {
      let api = fixture.debugElement.injector.get(PatientApiService);
      let spy = spyOn(api, 'downloadPatientFile').and.callFake(() => { ; });
      component.download('fake_url');

      expect(spy).toHaveBeenCalled();
    });


    describe('with upload', () => {
      beforeEach(() => {
        component.ngOnInit();
      });

      it('should initialize drop-zones', () => {

        expect(component.configVariantZip).toBeDefined();
        expect(component.configDnaBam).toBeDefined();
        expect(component.configCdnaBam).toBeDefined();
        expect(component.configDocuments).toBeDefined();
      });

      it('should call onUploadSuccess with no errors', () => {
        expect(() => { component.onUploadSuccess('test'); }).not.toThrowError();
      });

      it('should call uploadFiles with no errors', () => {
        expect(() => { component.uploadFiles(); }).not.toThrowError();

        expect(component.configVariantZip.autoProcessQueue).toBe(true);
        expect(component.configDnaBam.autoProcessQueue).toBe(true);
        expect(component.configCdnaBam.autoProcessQueue).toBe(true);
      });

    });
  });

}

