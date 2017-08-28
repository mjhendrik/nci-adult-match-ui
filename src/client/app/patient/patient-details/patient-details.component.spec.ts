import {
  ChangeDetectorRef,
  DebugElement
} from '@angular/core';
import {
  async,
  TestBed,
  ComponentFixture,
  fakeAsync,
  tick
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

import { PatientApiServiceStub } from '../testing/patient-api-service-stub';
import { ActivatedRouteStub } from '../testing/activated-route-stub';
import { ViewDataTransformerStub } from '../testing/view-data-transformer-stubs';

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
          NoopAnimationsModule
        ],
        declarations: [PatientDetailsComponent],
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
      fixture = TestBed.createComponent(PatientDetailsComponent);
      component = fixture.componentInstance; // PatientDetailsComponent test instance
      // query for the title 'page-header' by CSS element selector
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

    it('should call downloadPatientFile when download is called', () => {
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

      it('should call onUploadError with no errors', () => {
        expect(() => { component.onUploadError('test'); }).not.toThrowError();
      });

      it('should call uploadFiles with no errors', () => {
        expect(() => { component.uploadFiles(); }).not.toThrowError();

        expect(component.configVariantZip.autoProcessQueue).toBe(true);
        expect(component.configDnaBam.autoProcessQueue).toBe(true);
        expect(component.configCdnaBam.autoProcessQueue).toBe(true);
      });

      it('should call addedFileVariantZip with detectChanges()', () => {
        let spy = spyOn(component.changeDetector, 'detectChanges').and.callThrough();

        component.addedFileVariantZip('test');

        expect(component.variantZip).toBe(true);
        expect(spy).toHaveBeenCalled();
      });

      it('should call removedFileVariantZip with detectChanges()', () => {
        let spy = spyOn(component.changeDetector, 'detectChanges').and.callThrough();

        component.removedFileVariantZip();

        expect(component.variantZip).toBe(false);
        expect(spy).toHaveBeenCalled();
      });

      it('should call addedFileDnaBam with detectChanges()', () => {
        let spy = spyOn(component.changeDetector, 'detectChanges').and.callThrough();

        component.addedFileDnaBam('test');

        expect(component.dnaBam).toBe(true);
        expect(spy).toHaveBeenCalled();
      });

      it('should call removedFileDnaBam with detectChanges()', () => {
        let spy = spyOn(component.changeDetector, 'detectChanges').and.callThrough();

        component.removedFileDnaBam();

        expect(component.dnaBam).toBe(false);
        expect(spy).toHaveBeenCalled();
      });

      it('should call addedFileCdnaBam with detectChanges()', () => {
        let spy = spyOn(component.changeDetector, 'detectChanges').and.callThrough();

        component.addedFileCdnaBam('test');

        expect(component.cdnaBam).toBe(true);
        expect(spy).toHaveBeenCalled();
      });

      it('should call removedFileCdnaBam with detectChanges()', () => {
        let spy = spyOn(component.changeDetector, 'detectChanges').and.callThrough();

        component.removedFileCdnaBam();

        expect(component.cdnaBam).toBe(false);
        expect(spy).toHaveBeenCalled();
      });

    });

    describe('with scroll', () => {
      beforeEach(() => {
        component.needToScroll = true;
        component.ngOnInit();
      });

      it('should work when entityId and needToScroll are passed', fakeAsync(() => {


        const scrollToElement = fixture.debugElement.query(By.css('.ut-patient-timeline'));
        expect(scrollToElement).not.toBeNull();

        const htmlElement = scrollToElement.nativeElement as HTMLElement;

        let spy = spyOn(htmlElement, 'scrollIntoView').and.callThrough();

        component.ngAfterViewInit();

        tick(228);

        expect(spy).toHaveBeenCalled();
      }));

    });

  });

}
