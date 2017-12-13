import {
    Directive,
    ElementRef,
    Input,
    AfterViewInit,
    Renderer2
} from '@angular/core';

import { ConditionalCssDirective } from './conditional-css.directive';

@Directive({ selector: '[amoi]' })
export class AmoiDirective extends ConditionalCssDirective<string> implements AfterViewInit {

    @Input() set amoi(value: string) {
        this.value = value;
        this.setColor();
    }
    @Input() status: string;
    @Input() inclusion: string;

    constructor(protected el: ElementRef, public renderer: Renderer2) { super(el, []); }

    ngAfterViewInit() {
        if (this.status === 'PREVIOUS') this.renderer.addClass(this.el.nativeElement, 'label-grey');
        else if (this.inclusion === 'false') this.renderer.addClass(this.el.nativeElement, 'label-danger');
        else {
            if (this.status === 'CURRENT') this.renderer.addClass(this.el.nativeElement, 'label-success');
            if (this.status === 'FUTURE') this.renderer.addClass(this.el.nativeElement, 'label-info');
            if (this.status === 'PRIOR') this.renderer.addClass(this.el.nativeElement, 'label-danger');
        }
    }

}
