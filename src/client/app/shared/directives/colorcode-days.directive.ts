import { Directive, ElementRef, Input } from '@angular/core';

import { ConditionalCssDirective } from './conditional-css.directive';

@Directive({ selector: '[colorCodeDays]' })
export class ColorCodeDaysDirective extends ConditionalCssDirective<number> {

    @Input() set colorCodeDays(value: number) {
        this.value = value;
        this.setColor();
    }

    constructor(protected el: ElementRef) {
        super(el,
            [
                { evaluate: (x) => x < 7, cssClass: 'text-success-light' },
                { evaluate: (x) => x < 14, cssClass: 'text-warning-light' },
                { evaluate: (x) => x >= 14, cssClass: 'text-danger-light' }
            ]);
    }

}
