import { Directive, ElementRef, Input } from '@angular/core';

import { ConditionalCssDirective } from './conditional-css.directive';

const yesRegEx = /y|yes|true/i;

@Directive({ selector: '[colorCodeYesNo]' })
export class ColorCodeYesNoDirective extends ConditionalCssDirective<string> {

    @Input() set colorCodeYesNo(value: string) {
        this.value = value;
        this.setColor();
    }

    constructor(protected el: ElementRef) {
        super(el,
            [
                { evaluate: (x) => ((typeof x !== 'undefined') && !!x.match(yesRegEx)), cssClass: 'text-success-light' },
                { evaluate: (x) => ((typeof x !== 'undefined') && !x.match(yesRegEx)), cssClass: 'text-danger-light' }
            ]);
    }
}
