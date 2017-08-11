import { Directive, ElementRef, Input } from '@angular/core';

import { ConditionalCssDirective } from './conditional-css.directive';

@Directive({ selector: '[faIcon]' })
export class FaIconDirective extends ConditionalCssDirective<string> {

    @Input() set faIcon(value: string) {
        this.value = value;
        this.setColor();
    }

    constructor(protected el: ElementRef) {
        super(el,
            [
                { evaluate: (x) => x && (x === 'bar-chart'), cssClass: 'fa-bar-chart' },
                { evaluate: (x) => x && (x === 'user'), cssClass: 'fa-user' },
                { evaluate: (x) => x && (x === 'medkit'), cssClass: 'fa-medkit' },
            ]);
    }
}
