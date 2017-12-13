import { Directive, ElementRef, Input } from '@angular/core';

import { ConditionalCssDirective } from './conditional-css.directive';

@Directive({ selector: '[colorCodeAssignment]' })
export class ColorCodeAssignmentDirective extends ConditionalCssDirective<string> {
    @Input() set colorCodeAssignment(value: string) {
        this.value = value;
        this.setColor();
    }

    constructor(protected el: ElementRef) {
        super(el,
            [
                { evaluate: (x) => x === 'CONFIRMED', cssClass: 'text-success-light' },
                { evaluate: (x) => x === 'PENDING', cssClass: 'text-warning-light' },
                { evaluate: (x) => x === 'PENDING_CONFIRMATION', cssClass: 'text-warning-light' },
                { evaluate: (x) => x === 'REJECTED', cssClass: 'text-danger-light' },
                { evaluate: (x) => x === 'NO_ARM_ASSIGNED', cssClass: 'text-danger-light' },
            ]);
    }

}
