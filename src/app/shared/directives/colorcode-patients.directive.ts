import { Directive, ElementRef, Input } from '@angular/core';

import { ConditionalCssDirective } from './conditional-css.directive';

@Directive({ selector: '[colorCodePatients]' })
export class ColorCodePatientsDirective extends ConditionalCssDirective<string> {

    @Input() set colorCodePatients(value: string) {
        this.value = value;
        this.setColor();
    }

    constructor(protected el: ElementRef) {
        super(el,
            [
                { evaluate: (x) => x === 'ON_TREATMENT_ARM', cssClass: 'text-success-light' },
                { evaluate: (x) => x && x.indexOf('REGISTRATION') !== -1, cssClass: 'text-info-light' },
                {
                    evaluate: (x) => x
                        && (x === 'COMPASSIONATE_CARE'
                            || x.indexOf('PENDING_') !== -1
                            || x === 'REJOIN_REQUESTED'
                            || x === 'NOT_ELIGIBLE'
                            || x.indexOf('RB') !== -1),
                    cssClass: 'text-purple-light'
                },
                {
                    evaluate: (x) => x
                        && (x.indexOf('OFF_TRIAL_') !== -1 || x === 'OFF_TRIAL'),
                    cssClass: 'text-danger-light'
                },
                {
                    evaluate: (x) => x
                        && (x.indexOf('FORMERLY') !== -1 || x.indexOf('PROGRESSION') !== -1),
                    cssClass: 'text-warning-light'
                },
                {
                    evaluate: (x) => x
                        && (x === 'TISSUE_SPECIMEN_RECEIVED'
                            || x === 'TISSUE_NUCLEIC_ACID_SHIPPED'
                            || x === 'TISSUE_SLIDE_SPECIMEN_SHIPPED'),
                    cssClass: 'text-info'
                },
                { evaluate: (x) => x === 'ASSAY_RESULTS_RECEIVED', cssClass: 'text-success' },
                { evaluate: (x) => x === 'TISSUE_VARIANT_REPORT_RECEIVED', cssClass: 'text-pink' },
                {
                    evaluate: (x) => x
                        && (x === 'TISSUE_VARIANT_REPORT_REJECTED'
                            || x === 'TISSUE_VARIANT_REPORT_CONFIRMED'
                            || x === 'PENDING_CONFIRMATION'
                            || x === 'PENDING_APPROVAL'
                            || x === 'AWAITING_PATIENT_DATA'
                            || x === 'AWAITING_TREATMENT_ARM_STATUS'),
                    cssClass: 'text-orangeshade-dark'
                },
            ]);
    }
}
