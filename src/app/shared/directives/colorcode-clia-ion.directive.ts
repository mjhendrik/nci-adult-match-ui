import { Directive, ElementRef, Input } from '@angular/core';

import { ConditionalCssDirective } from './conditional-css.directive';

@Directive({ selector: '[colorCodeCliaIon]' })
export class ColorCodeCliaIonDirective extends ConditionalCssDirective<string> {
    @Input() set colorCodeCliaIon(value: string) {
        this.value = value;
        this.setColor();
    }

    constructor(protected el: ElementRef) {
        super(el,
            [
                {
                    evaluate: (x) => (typeof x !== 'undefined' && x !== null && x.indexOf('Contacted') !== -1),
                    cssClass: 'text-success-light'
                }
            ],
            'text-danger-light');
    }

}
