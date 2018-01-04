import { inject, async, TestBed } from '@angular/core/testing';
import { Injectable } from '@angular/core';

import { CliaDataTransformer } from './clia-data-transformer.service';
import { CliaReportPcData, CliaReportPccData } from './clia-report-data';
import { ApiStatusUpdateSuccess, ApiSuccess } from './sample-control-api.service';

export function main() {
    describe('CliaDataTransformer Service', () => {
        let service: CliaDataTransformer;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
            providers: [CliaDataTransformer]
            });
        }));

        it('should be created in Clia Transformer Service', () => {
            expect(service instanceof CliaDataTransformer).toBe(false, 'should not be a static instance');
        });
    });
}