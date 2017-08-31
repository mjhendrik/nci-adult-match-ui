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

    describe('when transformPatient', () => {
      let fakeSource: any;
      let transformed: any;

      beforeEach(() => {
        service = new ViewDataTransformer();
        fakeSource = PatientApiServiceStub.makePatientData();
        transformed = service.transformPatient(fakeSource);
      });

      fit('should return something if nothing is passed', () => {
        fakeSource = null;
        transformed = service.transformPatient(fakeSource);
        expect(transformed).not.toBeNull();
      });

      fit('should return something', () => {
        expect(transformed).not.toBeNull();
      });

    });
  });
}
