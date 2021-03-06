import {
    Directive,
    ElementRef,
    Input
} from '@angular/core';

import { ConditionalCssDirective } from './conditional-css.directive';

@Directive({ selector: '[colorCodeConcordance]' })
export class ColorCodeConcordanceDirective extends ConditionalCssDirective<string> {

    @Input() set colorCodeConcordance(value: string) {
        this.value = value;
        this.setColor();
    }

    constructor(protected el: ElementRef) {
        super(el,
            [
                { evaluate: (x) => (x === 'Y' || x === 'YES'), cssClass: 'text-success-light' },
                { evaluate: (x) => (x === 'N' || x === 'NO'), cssClass: 'text-danger-light' },
                { evaluate: (x) => (x === 'U' || x === 'UNKNOWN'), cssClass: 'text-warning-light' }
            ]);
    }
}
