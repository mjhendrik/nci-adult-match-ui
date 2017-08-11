import { Directive, ElementRef, Input } from '@angular/core';

import { ConditionalCssDirective } from './conditional-css.directive';

@Directive({ selector: '[colorCodeClia]' })
export class ColorCodeCliaDirective extends ConditionalCssDirective<string> {
    @Input() set colorCodeClia(value: string) {
        this.value = value;
        this.setColor();
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
