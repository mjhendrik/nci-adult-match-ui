import { Directive, ElementRef, Input } from '@angular/core';
import { ColorCodeDirective } from './colorcode.directive';

@Directive({ selector: '[colorCodeAssignment]' })
export class ColorCodeAssignmentDirective extends ColorCodeDirective<string> {
    @Input() set colorCodeAssignment(value: string) {
        this.value = value;
        this.setColor();
    }
    get colorCodeAssignment(): string {
        return this.value;
    }

    constructor(protected el: ElementRef) {
        super(el,
            [
                { evaluate: (x) => x === 'CONFIRMED', cssClass: 'text-success-light' },
                { evaluate: (x) => x === 'PENDING_CONFIMATION', cssClass: 'text-info-light' },
                { evaluate: (x) => x === 'REJECTED', cssClass: 'text-danger-light' },
                { evaluate: (x) => x === 'NO_ARM_ASSIGNED', cssClass: 'text-danger-light' },
            ]);
    }

}
