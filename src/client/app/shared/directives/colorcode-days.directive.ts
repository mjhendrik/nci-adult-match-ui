import { Directive, ElementRef, Input, OnInit } from '@angular/core';
@Directive({ selector: '[colorcodeDays]' })
export class colorCodeDays {

    @Input('colorcodeDays') con: number;

    constructor(private el: ElementRef) {
    }

    ngOnInit() {
        if (this.con < 7) {
            this.el.nativeElement.className = 'text-success-light';
        }
        else if (this.con < 14) {
            this.el.nativeElement.className = 'text-warning-light';
        }
        else {
            this.el.nativeElement.className = 'text-danger-light';
        }
    }

}
