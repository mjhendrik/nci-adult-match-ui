import { Directive, ElementRef, Input } from '@angular/core';

import { ColorCodeDirective } from './colorcode.directive';

@Directive({ selector: '[colorCodeCliaIon]' })
export class ColorCodeCliaIonDirective extends ColorCodeDirective<string> {
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
