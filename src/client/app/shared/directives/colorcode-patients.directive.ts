import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ColorCodeDirective } from './colorcode.directive';

@Directive({ selector: '[colorCodePatients]' })
export class ColorCodePatientsDirective extends ColorCodeDirective<string> {

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
                            || x === 'NOT_ELIGIBLE'),
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
            ]);
    }
}
