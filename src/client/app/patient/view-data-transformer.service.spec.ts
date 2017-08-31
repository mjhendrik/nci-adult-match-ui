import { inject, async, TestBed } from '@angular/core/testing';

import { ViewDataTransformer } from './view-data-transformer.service';
import { PatientApiServiceStub } from './testing/patient-api-service-stub';

export function main() {
  describe('ViewDataTransformer', () => {
    let service: ViewDataTransformer;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        providers: [ ViewDataTransformer ]
      });
    }));

    it('should be created', () => {
      expect(service instanceof ViewDataTransformer).toBe(false, 'should not be a static instance');
    });

    it('can instantiate service with "new"', inject([], () => {
      service = new ViewDataTransformer();
      expect(service instanceof ViewDataTransformer).toBe(true, 'new service should be ok');
    }));

    it('can instantiate service when inject service', inject([ViewDataTransformer], (service: ViewDataTransformer) => {
      expect(service instanceof ViewDataTransformer).toBe(true, 'new service should be ok');
    }));

    describe('with transformPatient', () => {
      let fakeSource: any;
      let transformed: any;

      beforeEach(() => {
        service = new ViewDataTransformer();
        fakeSource = PatientApiServiceStub.makePatientData();
        transformed = service.transformPatient(fakeSource);
      });

      it('should return empty object if source is falsy', () => {
        fakeSource = null;
        transformed = service.transformPatient(fakeSource);
        expect(transformed).toEqual({});
      });

      it('should return transformed patient', () => {
        expect(transformed).not.toBeNull();
      });

      it('should create empty biopsies array if no biopsies exists in the source', () => {
        fakeSource.biopsies = undefined;
        transformed = service.transformPatient(fakeSource);
        expect(transformed.biopsies).toEqual([]);
      });

      it('should create pathology status `Agreement on pathology` when mdAndersonMessages[PATHOLOGY_CONFIRMATION].status is `Y`', () => {
        let biopsy = fakeSource.biopsies[1];
        let message = (biopsy.mdAndersonMessages as any[]).find(x => x.message === 'PATHOLOGY_CONFIRMATION');
        message.status = 'Y';
        transformed = service.transformPatient(fakeSource);
        let transformedBiopsy = transformed.biopsies[0];

        expect(transformedBiopsy.pathologyStatus).toBe('Agreement on pathology');
      });

      // tslint:disable-next-line:max-line-length
      it('should create pathology status `Do not agree on pathology` when mdAndersonMessages[PATHOLOGY_CONFIRMATION].status is `N`', () => {
        let biopsy = fakeSource.biopsies[1];
        let message = (biopsy.mdAndersonMessages as any[]).find(x => x.message === 'PATHOLOGY_CONFIRMATION');
        message.status = 'N';
        transformed = service.transformPatient(fakeSource);
        let transformedBiopsy = transformed.biopsies[0];

        expect(transformedBiopsy.pathologyStatus).toBe('Do not agree on pathology');
      });

      // tslint:disable-next-line:max-line-length
      it('should create pathology status `Pathology status is unknown at this time` when mdAndersonMessages[PATHOLOGY_CONFIRMATION].status is `U`', () => {
        let biopsy = fakeSource.biopsies[1];
        let message = (biopsy.mdAndersonMessages as any[]).find(x => x.message === 'PATHOLOGY_CONFIRMATION');
        message.status = 'U';
        transformed = service.transformPatient(fakeSource);
        let transformedBiopsy = transformed.biopsies[0];

        expect(transformedBiopsy.pathologyStatus).toBe('Pathology status is unknown at this time');
      });

    });

    describe('with showPools', () => {
      beforeEach(() => {
        service = new ViewDataTransformer();
      });

      it('should return `false` if nothing is passed', () => {
        let expected = service.showPools(null);
        expect(expected).toBe(false);
      });

      it('should return `false` if the supplied value is not `5.2`', () => {
        let expected = service.showPools('5.3');
        expect(expected).toBe(false);
      });

      it('should return `true` if the supplied value is not `5.2`', () => {
        let expected = service.showPools('5.2');
        expect(expected).toBe(true);
      });

    });

  });
}
