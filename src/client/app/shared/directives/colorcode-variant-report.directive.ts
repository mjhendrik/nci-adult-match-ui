import { Directive, ElementRef, Input } from '@angular/core';

import { ConditionalCssDirective } from './conditional-css.directive';

@Directive({ selector: '[colorCodeVariantReport]' })
export class ColorCodeVariantReportDirective extends ConditionalCssDirective<string> {

    @Input() set colorCodeVariantReport(value: string) {
        this.value = value;
        this.setColor();
    }

    constructor(protected el: ElementRef) {
        super(el,
            [
                { evaluate: (x) => x && (x === 'CONFIRMED'), cssClass: 'text-success-light' },
                { evaluate: (x) => x && (x === 'PENDING'), cssClass: 'text-warning-light' },
                { evaluate: (x) => x && (x === 'REJECTED'), cssClass: 'text-danger-light' },
            ]);
    }
}
