import { Directive, ElementRef, Input } from '@angular/core';

import { ColorCodeDirective } from './colorcode.directive';

@Directive({ selector: '[colorCodeVariantReport]' })
export class ColorCodeVariantReportDirective extends ColorCodeDirective<string> {

    @Input() set colorCodeVariantReport(value: string) {
        this.value = value;
        this.setColor();
    }

    constructor(protected el: ElementRef) {
        super(el,
            [
                { evaluate: (x) => x && (x === 'CONFIRMED'), cssClass: 'text-success-light' },
                { evaluate: (x) => x && (x === 'PENDING'), cssClass: 'text-info-light' },
                { evaluate: (x) => x && (x === 'REJECTED'), cssClass: 'text-danger-light' },
            ]);
    }
}
