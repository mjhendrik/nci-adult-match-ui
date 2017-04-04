import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({ selector: '[colorcodeHours]' })
export class ColorCodeHoursDirective {

    @Input() 'colorcodeHours': number;

    constructor(private el: ElementRef) {
    }

    ngOnInit() {
        if (this.colorcodeHours < 8) {
            this.el.nativeElement.className = 'text-success-light';
        } else if (this.colorcodeHours < 14) {
            this.el.nativeElement.className = 'text-warning-light';
        } else {
            this.el.nativeElement.className = 'text-danger-light';
        }

    }

}
