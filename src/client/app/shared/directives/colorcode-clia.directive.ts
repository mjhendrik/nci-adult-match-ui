import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({ selector: '[colorcodeClia]' })
export class ColorCodeCliaDirective {

    @Input() 'colorcodeClia': string;

    constructor(private el: ElementRef) {
    }

    ngOnInit() {
        if (this.colorcodeClia === 'PASSED') {
            this.el.nativeElement.className = 'text-success-light';
        } else if (this.colorcodeClia === 'FAILED') {
            this.el.nativeElement.className = 'text-danger-light';
        } else if (this.colorcodeClia === 'PENDING') {
            this.el.nativeElement.className = 'text-purple-light';
        }

    }

}
