import { Directive, ElementRef, Input } from '@angular/core';

import { ColorCodeDirective } from './colorcode.directive';

@Directive({ selector: '[colorCodeTa]' })
export class ColorCodeTaDirective extends ColorCodeDirective<string> {

    @Input() set colorCodeTa(value: string) {
        this.value = value;
        this.setColor();
    }

    constructor(protected el: ElementRef) {
        super(el,
            [
                { evaluate: (x) => x && (x === 'OPEN' || x === 'REACTIVATED'), cssClass: 'text-success-light' },
                { evaluate: (x) => x && (x === 'SUSPENDED'), cssClass: 'text-warning-light' },
                { evaluate: (x) => x && (x === 'CLOSED' || x === 'AMENDED'), cssClass: 'text-danger-light' },
                { evaluate: (x) => x && (x === 'PENDING' || x === 'READY'), cssClass: 'text-info-light' },
            ]);
    }
}
