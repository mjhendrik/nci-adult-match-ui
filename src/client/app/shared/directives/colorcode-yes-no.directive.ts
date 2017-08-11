import { Directive, ElementRef, Input } from '@angular/core';

import { ColorCodeDirective } from './colorcode.directive';

const yesRegEx = /y|yes|true/i;

@Directive({ selector: '[colorCodeYesNo]' })
export class ColorCodeYesNoDirective extends ColorCodeDirective<string> {

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

