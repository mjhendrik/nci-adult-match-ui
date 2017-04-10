import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({ selector: '[colorCodeDays]' })
export class ColorCodeDaysDirective implements OnInit {

    @Input() 'colorCodeDays': number;

    constructor(private el: ElementRef) { }

    ngOnInit() {
        if (this.colorCodeDays < 7) {
            this.el.nativeElement.classList.add('text-success-light');
        } else if (this.colorCodeDays < 14) {
            this.el.nativeElement.classList.add('text-warning-light');
        } else {
            this.el.nativeElement.classList.add('text-danger-light');
        }

    }

}
