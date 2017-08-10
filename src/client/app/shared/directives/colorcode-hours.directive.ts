import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ColorCodeDirective } from './colorcode.directive';

@Directive({ selector: '[colorCodeHours]' })
export class ColorCodeHoursDirective extends ColorCodeDirective<number> {

    @Input() set colorCodeHours(value: number) {
        this.value = value;
        this.setColor();
    }

    constructor(protected el: ElementRef) {
        super(el,
            [
                { evaluate: (x) => x < 8, cssClass: 'text-success-light' },
                { evaluate: (x) => x < 14, cssClass: 'text-warning-light' },
                { evaluate: (x) => x >= 14, cssClass: 'text-danger-light' }
            ]);
    }
}
