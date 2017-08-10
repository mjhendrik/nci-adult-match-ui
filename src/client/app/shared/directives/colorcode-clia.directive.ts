import { Directive, ElementRef, Input } from '@angular/core';
import { ColorCodeDirective } from './colorcode.directive';

@Directive({ selector: '[colorCodeClia]' })
export class ColorCodeCliaDirective extends ColorCodeDirective<string> {
    @Input() set colorCodeClia(value: string) {
        this.value = value;
        this.setColor();
    }
    get colorCodeClia(): string {
        return this.value;
    }

    constructor(protected el: ElementRef) {
        super(el,
            [
                { evaluate: (x) => x === 'PASSED', cssClass: 'text-success-light' },
                { evaluate: (x) => x === 'FAILED', cssClass: 'text-danger-light' },
                { evaluate: (x) => x === 'PENDING', cssClass: 'text-purple-light' },
            ]);
    }

}
