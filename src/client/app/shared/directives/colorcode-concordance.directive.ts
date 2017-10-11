import {
    Directive,
    ElementRef,
    Input
} from '@angular/core';

import { ConditionalCssDirective } from './conditional-css.directive';

@Directive({ selector: '[colorCodeConcordance]' })
export class ColorCodeConcordanceDirective extends ConditionalCssDirective<string> {

    @Input() set colorCodeAssay(value: string) {
        this.value = value;
        this.setColor();
    }

    constructor(protected el: ElementRef) {
        super(el,
            [
                { evaluate: (x) => x === 'Y', cssClass: 'text-success-light' },
                { evaluate: (x) => x === 'N', cssClass: 'text-danger-light' },
                { evaluate: (x) => x === 'U', cssClass: 'text-warning-light' }
            ]);
    }
}
