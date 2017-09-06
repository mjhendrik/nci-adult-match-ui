import {
    Directive,
    ElementRef,
    Input
} from '@angular/core';

import { ConditionalCssDirective } from './conditional-css.directive';

@Directive({ selector: '[amoi]' })
export class AmoiDirective extends ConditionalCssDirective<string> {

    @Input() set amoi(value: string) {
        this.value = value;
        this.setColor();
    }

    constructor(protected el: ElementRef) {
        super(el,
            [
                { evaluate: (x) => x && (x === 'CURRENT'), cssClass: 'label-success' },
                { evaluate: (x) => x && (x === 'FUTURE'), cssClass: 'label-info' },
                { evaluate: (x) => x && (x === 'PRIOR'), cssClass: 'label-danger' },
                { evaluate: (x) => x && (x === 'PREVIOUS'), cssClass: 'label-grey' }
            ]);
    }
}
