import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({ selector: '[colorcodeDays]' })
export class ColorCodeDaysDirective {

    @Input() 'colorcodeDays': number;

    constructor(private el: ElementRef) {
    }

    ngOnInit() {
        if (this.colorcodeDays < 7) {
            this.el.nativeElement.className = 'text-success-light';
        } else if (this.colorcodeDays < 14) {
            this.el.nativeElement.className = 'text-warning-light';
        } else {
            this.el.nativeElement.className = 'text-danger-light';
        }

    }

}
