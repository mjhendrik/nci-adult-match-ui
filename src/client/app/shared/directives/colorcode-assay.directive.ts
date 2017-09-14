import {
    Directive,
    ElementRef,
    Input
} from '@angular/core';

import { ConditionalCssDirective } from './conditional-css.directive';

@Directive({ selector: '[colorCodeAssay]' })
export class ColorCodeAssayDirective extends ConditionalCssDirective<string> {

    @Input() set colorCodeAssay(value: string) {
        this.value = value;
        this.setColor();
    }

    constructor(protected el: ElementRef) {
        super(el,
            [
                { evaluate: (x) => x === 'POSITIVE', cssClass: 'text-success-light' },
                { evaluate: (x) => x === 'INDETERMINATE', cssClass: 'text-danger-light' },
                { evaluate: (x) => x === 'NEGATIVE', cssClass: 'text-warning-light' },
                { evaluate: (x) => x === 'UNKNOWN', cssClass: 'text-muted' }
            ]);
    }
}
