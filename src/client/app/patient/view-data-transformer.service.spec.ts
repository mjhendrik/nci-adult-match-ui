import { inject, async, TestBed } from '@angular/core/testing';

import { ViewDataTransformer } from './view-data-transformer.service';
import { PatientApiServiceStub } from './testing/patient-api-service-stub';
import { VariantReportComparisonData } from './patient-variant-report-oa/variant-report-comparison-data';

export function main() {
  describe('ViewDataTransformer', () => {
    let service: ViewDataTransformer;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        providers: [ViewDataTransformer]
      });
    }));

    it('should be created in Data Transformer Service', () => {
      expect(service instanceof ViewDataTransformer).toBe(false, 'should not be a static instance');
    });

    it('can instantiate service with "new" in Data Transformer Service', inject([], () => {
      service = new ViewDataTransformer();
      expect(service instanceof ViewDataTransformer).toBe(true, 'new service should be ok');
    }));

    it('can instantiate service when inject service in Data Transformer Service', inject([ViewDataTransformer], (service: ViewDataTransformer) => {
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

      it('should not throw error if no `patientAssignments` is found in the patient data', () => {
        fakeSource.patientAssignments = null;

        expect(() => {
          transformed = service.transformPatient(fakeSource);
        }
        ).not.toThrow();

        expect(transformed.patientAssignments).toBeFalsy();
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


    describe('with transformPatientAssignment', () => {
      let dateAssigned = '1500563371502';

      beforeEach(() => {
        service = new ViewDataTransformer();
      });

      it('should return null if source is falsy', () => {
        let fakeSource = null;
        let transformed = service.transformPatientAssignment(fakeSource, dateAssigned);
        expect(transformed).toBeNull();
      });

      it('should return assignment view data if source is supplied', () => {
        let fakeSource = PatientApiServiceStub.makePatientData();
        let transformed = service.transformPatientAssignment(fakeSource, dateAssigned);
        expect(transformed).not.toBeNull();
        expect(transformed.psn).not.toBeNull();
        expect(transformed.molecularSequenceNumber).not.toBeNull();
        expect(transformed.analysisId).not.toBeNull();
        expect(transformed.assignmentReport).not.toBeNull();
        expect(transformed.dateAssigned).not.toBeNull();
      });

    });

    describe('with transformOutsidePatientReport', () => {
      beforeEach(() => {
        service = new ViewDataTransformer();
      });

      it('should return null if source report is falsy', () => {
        let report: VariantReportComparisonData = null;
        let cnvDataOutside: any = null;
        let ocpDataOutside: any = null;
        let cnvDataMatch: any = null;
        let ocpDataMatch: any = null;
        let isOutsideAssay: boolean;

        let transformed = service.transformOutsidePatientReport(
          report,
          cnvDataOutside,
          ocpDataOutside,
          cnvDataMatch,
          ocpDataMatch,
          isOutsideAssay);

        expect(transformed).toBeNull();
      });

      it('should not throw error if OCP or CNV data is missing', () => {
        let report: VariantReportComparisonData = PatientApiServiceStub.makeOutsideAssayComparisonVariantReportData();
        let cnvDataOutside: any = null;
        let ocpDataOutside: any = null;
        let cnvDataMatch: any = null;
        let ocpDataMatch: any = null;
        let isOutsideAssay: boolean;

        expect(() => {
          service.transformOutsidePatientReport(
            report,
            cnvDataOutside,
            ocpDataOutside,
            cnvDataMatch,
            ocpDataMatch,
            isOutsideAssay);
        }
        ).not.toThrow();
      });

      it('should return view data for comparison report when all parameters are passed', () => {
        let report: VariantReportComparisonData = PatientApiServiceStub.makeOutsideAssayComparisonVariantReportData();
        let cnvDataOutside: any = {};
        let ocpDataOutside: any = {};
        let cnvDataMatch: any = {};
        let ocpDataMatch: any = {};
        let isOutsideAssay: boolean;
        let transformed: VariantReportComparisonData;

        expect(() => {
          transformed = service.transformOutsidePatientReport(
            report,
            cnvDataOutside,
            ocpDataOutside,
            cnvDataMatch,
            ocpDataMatch,
            isOutsideAssay);
        }
        ).not.toThrow();

        expect(transformed.matchData.pool1).not.toBeNull();
        expect(transformed.matchData.pool2).not.toBeNull();
        expect(transformed.matchData.mapd).not.toBeNull();
        expect(transformed.matchData.cellularity).not.toBeNull();
        expect(transformed.matchData.showPools).not.toBeNull();
        expect(transformed.matchData.variantReport).not.toBeNull();
        expect(transformed.matchData.variantReport).not.toBeNull();
        expect(transformed.outsideData.pool1).not.toBeNull();
        expect(transformed.outsideData.pool2).not.toBeNull();
        expect(transformed.outsideData.mapd).not.toBeNull();
        expect(transformed.outsideData.cellularity).not.toBeNull();
        expect(transformed.outsideData.showPools).not.toBeNull();
        expect(transformed.outsideData.variantReport).not.toBeNull();
        expect(transformed.outsideData.variantReport).not.toBeNull();
        expect(transformed.matchData.assignmentReport).not.toBeNull();
        expect(transformed.outsideData.assignmentReport).not.toBeNull();
      });
    });

  });
}
